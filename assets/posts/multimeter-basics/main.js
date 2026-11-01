const MODES = [
  { id: "off", label: "OFF", kind: "off" },
  { id: "dcv2", label: "V⎓ 2", kind: "dcv", scale: 1, max: 1.999, dec: 3, unit: "V" },
  { id: "dcv20", label: "V⎓ 20", kind: "dcv", scale: 1, max: 19.99, dec: 2, unit: "V" },
  { id: "dcv200", label: "V⎓ 200", kind: "dcv", scale: 1, max: 199.9, dec: 1, unit: "V" },
  { id: "acv750", label: "V~ 750", kind: "acv", scale: 1, max: 750, dec: 0, unit: "V~" },
  { id: "ohm200", label: "Ω 200", kind: "ohm", scale: 1, max: 199.9, dec: 1, unit: "Ω" },
  { id: "ohm2k", label: "Ω 2k", kind: "ohm", scale: 1000, max: 1.999, dec: 3, unit: "kΩ" },
  { id: "ohm20k", label: "Ω 20k", kind: "ohm", scale: 1000, max: 19.99, dec: 2, unit: "kΩ" },
  { id: "cont", label: "·)))", kind: "cont", scale: 1, max: 199.9, dec: 1, unit: "Ω" },
  { id: "diode", label: "▷|", kind: "diode", scale: 1, max: 1.999, dec: 3, unit: "V" },
  { id: "ma200", label: "A⎓ 200m", kind: "amp", jack: "vma", scale: 0.001, max: 199.9, dec: 1, unit: "mA" },
  { id: "a10", label: "A⎓ 10", kind: "amp", jack: "10a", scale: 1, max: 19.99, dec: 2, unit: "A" },
];

const TARGETS = [
  { id: "aa", label: "AA 건전지 1.5V", how: "양 극에 리드를 댐", type: "dc", v: 1.55 },
  { id: "nine", label: "9V 건전지", how: "양 극에 리드를 댐", type: "dc", v: 9.3 },
  { id: "res", label: "220Ω 저항", how: "회로에서 뺀 부품", type: "passive", r: 220 },
  { id: "ledpart", label: "빨간 LED 부품", how: "회로에서 뺀 부품, 빨강을 긴 다리(+)에", type: "diode", vf: 1.85 },
  { id: "wire", label: "멀쩡한 전선", how: "양 끝에 리드를 댐", type: "passive", r: 0.3 },
  { id: "broken", label: "속이 끊어진 전선", how: "양 끝에 리드를 댐", type: "passive", r: Infinity },
  { id: "led", label: "LED 회로(건전지 2개)", how: "선을 하나 끊고 그 사이에 연결", type: "series", v: 3.1, i: 0.0055 },
  { id: "outlet", label: "가정용 콘센트", how: "두 구멍에 리드를 넣음", type: "ac", v: 221 },
];

const state = { mode: "off", target: "aa", jack: "vma", swap: false };

const els = {
  dial: document.getElementById("mm-dial"),
  targets: document.getElementById("mm-targets"),
  value: document.getElementById("mm-value"),
  unit: document.getElementById("mm-unit"),
  beep: document.getElementById("mm-beep"),
  feedback: document.getElementById("mm-feedback"),
  swap: document.getElementById("mm-swap"),
  lcd: document.querySelector(".mm-lcd"),
};

function format(mode, base) {
  const shown = base / mode.scale;
  if (!Number.isFinite(shown) || Math.abs(shown) > mode.max) return { text: "1", over: true };
  const text = shown.toFixed(mode.dec);
  return { text: text === `-${(0).toFixed(mode.dec)}` ? (0).toFixed(mode.dec) : text, over: false };
}

function reading(mode, base, tone, message, extra = {}) {
  const { text, over } = format(mode, base);
  return { text, over, unit: mode.unit, tone, message, ...extra };
}

function zero(mode, tone, message) {
  return reading(mode, 0, tone, message);
}

function evaluate() {
  const mode = MODES.find((m) => m.id === state.mode);
  const target = TARGETS.find((t) => t.id === state.target);
  const sign = state.swap ? -1 : 1;
  const isSource = target.type === "dc" || target.type === "ac";

  if (mode.kind === "off") {
    return { text: "", unit: "", tone: "info", message: "다이얼이 <strong>OFF</strong>." };
  }

  // 10A 단자는 내부에서 COM과 거의 0Ω으로 이어져 있어 다이얼 위치와 상관없이 단락된다.
  if (state.jack === "10a" && isSource) {
    return zero(mode, "danger",
      "<strong>위험: 단락.</strong> 10A 단자는 다이얼 위치와 상관없이 내부에서 COM과 거의 0Ω으로 연결되어 있다. " +
      "빨간 리드를 10A에 꽂은 채 전원 양 끝에 대면 +와 −를 바로 잇는 것과 같다. " +
      "전압은 빨간 리드를 <strong>VΩmA</strong>에 꽂고 잰다.");
  }

  if (mode.kind === "amp") {
    if (state.jack !== mode.jack) {
      const want = mode.jack === "vma" ? "VΩmA" : "10A";
      if (isSource) {
        return zero(mode, "danger",
          "<strong>위험: 퓨즈 단선.</strong> mA 단자도 거의 0Ω이라 전원 양 끝에 대면 단락된다. " +
          "실제로는 내부 퓨즈가 끊어지고, 이후 mA 측정값이 계속 0으로 나온다.");
      }
      return zero(mode, "warn", `다이얼은 <strong>${mode.label}</strong>인데 빨간 리드가 다른 단자에 있어서 전류가 측정 회로를 지나지 않는다. 빨간 리드는 <strong>${want}</strong>.`);
    }
    if (isSource) {
      return zero(mode, "danger",
        "<strong>위험: 단락.</strong> 전류 모드에서 멀티미터 내부는 저항이 거의 0이다. " +
        "전원 양 끝에 대면 큰 전류가 흘러 퓨즈가 끊어지거나 리드가 뜨거워진다. " +
        "전류는 <strong>회로를 끊고 그 사이에</strong> 연결한다.");
    }
    if (target.type === "passive" || target.type === "diode") {
      return zero(mode, "info", "전원이 없는 부품이라 흐르는 전류가 없다. 전류는 전원이 켜진 회로를 끊고 그 사이에 연결해서 잰다.");
    }
    const message = mode.id === "a10"
      ? "측정은 되지만 10A 범위는 0.01A 단위라 5.5mA가 <strong>0.01</strong>로 표시된다. 작은 전류는 VΩmA 단자와 <strong>200m</strong> 범위가 정확하다."
      : "<strong>올바른 측정.</strong> 회로를 끊고 그 사이에 멀티미터를 넣어 LED 전류 약 5.5mA를 잰다. LED도 켜진 상태." +
        (state.swap ? " 앞의 −는 전류가 COM 쪽으로 들어온다는 뜻." : "");
    return reading(mode, sign * target.i, mode.id === "a10" ? "warn" : "ok", message);
  }

  if (state.jack === "10a") {
    return zero(mode, "warn", "빨간 리드가 <strong>10A</strong> 단자에 있어서 전압, 저항을 잴 수 없다. 빨간 리드는 <strong>VΩmA</strong>.");
  }

  if (mode.kind === "dcv") {
    if (target.type === "dc") {
      const result = reading(mode, sign * target.v, "ok", "");
      if (result.over) {
        result.tone = "warn";
        result.message = `화면 왼쪽의 <strong>1</strong>은 범위 초과(제품에 따라 OL). ${target.v}V는 ${mode.label} 범위보다 크므로 한 칸 큰 범위로 올린다.`;
      } else if (state.swap) {
        result.message = "<strong>−</strong>는 리드 방향이 반대라는 뜻이고 값의 크기는 맞다. 빨강을 +극에 대면 −가 사라진다.";
      } else {
        result.message = mode.id === "dcv200"
          ? "측정은 되지만 소수 첫째 자리까지만 표시된다. 값보다 큰 범위 중 가장 작은 범위가 가장 자세하다."
          : "<strong>올바른 측정.</strong> 직류 전압은 두 극에 리드를 나란히 대서 잰다.";
      }
      return result;
    }
    if (target.type === "ac") {
      return zero(mode, "warn", "콘센트는 <strong>교류</strong>라서 직류(V⎓) 모드에서는 0 근처로 나온다. 다이얼은 <strong>V~</strong>.");
    }
    if (target.type === "series") {
      return reading(mode, sign * target.v, "warn",
        "값은 나오지만 LED가 <strong>꺼진다</strong>. 전압 모드의 멀티미터는 내부 저항이 매우 커서(보통 수 MΩ) 회로 사이에 넣으면 전류를 거의 막는다. " +
        "전압은 회로를 끊지 않고 부품 <strong>양 끝에 나란히</strong> 대서 잰다.");
    }
    return zero(mode, "info", "전원이 없는 부품이라 전압이 없다. 이 대상은 <strong>Ω</strong>이나 <strong>·)))</strong>로 잰다.");
  }

  if (mode.kind === "acv") {
    if (target.type === "ac") {
      return reading(mode, target.v, "ok",
        "<strong>올바른 측정.</strong> 한국 가정용 콘센트는 약 220V 교류. 극성이 없어서 리드를 바꿔 대도 값이 같다. " +
        "실제 측정 시 손잡이 보호대 뒤쪽만 잡고, 기기의 CAT 등급을 먼저 확인한다.");
    }
    if (target.type === "dc") {
      return zero(mode, "warn", "건전지는 <strong>직류</strong>라서 교류(V~) 모드에서는 0 근처로 나온다. 다이얼은 <strong>V⎓</strong>.");
    }
    return zero(mode, "info", "교류 전압이 없는 대상.");
  }

  // ohm, cont, diode
  if (isSource || target.type === "series") {
    return { text: "---", unit: mode.unit, tone: target.type === "ac" ? "danger" : "warn",
      message: (target.type === "ac" ? "<strong>위험.</strong> " : "") +
        "저항·통전·다이오드 모드는 멀티미터가 직접 작은 전류를 흘려서 재는 방식이라 <strong>전원이 있는 곳</strong>에서는 엉뚱한 값이 나오고, 전압이 높으면 멀티미터가 고장 날 수 있다. 전원을 끄고 부품을 빼서 잰다." };
  }

  if (target.type === "diode") {
    if (mode.kind !== "diode") {
      return reading(mode, Infinity, "warn",
        "<strong>1</strong>(OL). 저항·통전 모드의 시험 전압은 LED를 켜기에 낮아서 끊어진 것처럼 나온다. 다이오드와 LED는 <strong>▷|</strong> 모드로 잰다.");
    }
    if (state.swap) {
      return reading(mode, Infinity, "ok",
        "<strong>1</strong>(OL). 역방향이라 전류가 흐르지 않는다. 정상. 리드를 바꿔 대서 값이 나오는 쪽이 순방향이고, 그때 빨강이 닿은 쪽이 +다.");
    }
    return reading(mode, target.vf, "ok",
      "<strong>올바른 측정.</strong> 빨간 LED의 순방향 전압 약 1.85V. 실제로는 LED가 희미하게 켜지기도 한다. 리드를 반대로 대면 OL이 나와야 정상.");
  }

  if (mode.kind === "diode") {
    // 다이오드 모드는 약 1mA를 흘리고 걸리는 전압을 보여 준다.
    const result = reading(mode, target.r * 0.001, "info", "");
    result.beep = target.r < 50;
    result.message = target.r === Infinity
      ? "<strong>1</strong>(OL). 연결되어 있지 않다."
      : target.id === "wire"
        ? "0에 가까운 전압. 이어져 있다는 뜻. 제품에 따라 부저도 울린다."
        : "다이오드 모드는 약 1mA를 흘리고 걸리는 전압을 표시한다. 220Ω × 1mA ≈ 0.22V. 저항값은 Ω 모드로 잰다.";
    return result;
  }

  const result = reading(mode, target.r, "ok", "");
  if (mode.kind === "cont") {
    result.beep = target.r < 50;
    result.message = result.beep
      ? "<strong>삑.</strong> 전선이 이어져 있다. 통전 확인은 숫자 대신 소리로 판단한다."
      : target.r === Infinity
        ? "소리 없이 <strong>1</strong>(OL). 전선 내부가 끊어져 있다."
        : "값은 나오지만 부저는 울리지 않는다. 통전 부저는 보통 수십 Ω 이하에서만 울린다. 저항값은 Ω 모드로 잰다.";
    return result;
  }
  if (target.r === Infinity) {
    result.tone = "info";
    result.message = "<strong>1</strong>(OL). 이어져 있지 않아서 어느 범위로도 잴 수 없다. 끊어진 전선.";
  } else if (result.over) {
    result.tone = "warn";
    result.message = `범위 초과. 220Ω은 ${mode.label} 범위의 최댓값보다 크므로 <strong>Ω 2k</strong>로 올린다.`;
  } else if (target.id === "wire") {
    result.message = "0에 가까운 값. 대부분 리드와 접촉부의 저항이고, 전선은 이어져 있다.";
  } else {
    result.message = mode.id === "ohm2k"
      ? "<strong>올바른 측정.</strong> 2k 범위는 kΩ 단위라 0.220kΩ = 220Ω. 저항은 방향이 없어서 리드를 바꿔 대도 같다."
      : "측정은 되지만 자릿수가 줄어든다. 0.22kΩ = 220Ω. <strong>Ω 2k</strong>로 내리면 한 자리 더 보인다.";
  }
  return result;
}

function render() {
  const r = evaluate();
  els.value.textContent = r.text || " ";
  els.unit.textContent = r.unit;
  els.lcd.dataset.over = r.over ? "true" : "false";
  els.lcd.dataset.off = state.mode === "off" ? "true" : "false";
  els.beep.hidden = !r.beep;
  els.feedback.dataset.tone = r.tone;
  els.feedback.innerHTML = `<p>${r.message}</p>`;
}

function radioGroup(container, name, items, current, onChange, describe) {
  items.forEach((item) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = name;
    input.value = item.id;
    input.checked = item.id === current;
    input.addEventListener("change", () => {
      onChange(item.id);
      render();
    });
    const text = document.createElement("span");
    text.textContent = item.label;
    label.append(input, text);
    if (describe) {
      const small = document.createElement("small");
      small.textContent = describe(item);
      text.append(small);
    }
    container.append(label);
  });
}

if (els.dial && els.targets) {
  radioGroup(els.dial, "mm-mode", MODES, state.mode, (id) => { state.mode = id; });
  radioGroup(els.targets, "mm-target", TARGETS, state.target, (id) => { state.target = id; }, (t) => t.how);
  document.querySelectorAll('input[name="mm-jack"]').forEach((input) => {
    input.addEventListener("change", () => {
      state.jack = input.value;
      render();
    });
  });
  els.swap.addEventListener("change", () => {
    state.swap = els.swap.checked;
    render();
  });
  render();
}

const QUIZ = [
  {
    q: "수동 범위 멀티미터로 9V 건전지를 잴 때 가장 알맞은 다이얼 위치는?",
    options: ["V⎓ 2", "V⎓ 20", "V~ 750", "Ω 20k"],
    answer: 1,
    why: "직류이므로 V⎓, 9V보다 큰 범위 중 가장 작은 20. 2에 두면 범위 초과로 1(OL)이 뜬다.",
  },
  {
    q: "회로에 흐르는 전류를 잴 때의 연결 방법은?",
    options: ["재려는 부품 양 끝에 나란히 댄다", "회로를 끊고 그 사이에 멀티미터를 넣는다", "전원을 끄고 부품을 빼서 잰다"],
    answer: 1,
    why: "전류는 멀티미터를 거쳐 지나가도록 직렬로 연결한다. 양 끝에 나란히 대는 것은 전압, 전원을 끄고 재는 것은 저항.",
  },
  {
    q: "저항을 재는데 화면 왼쪽에 1만 뜬다. 가장 먼저 의심할 것은?",
    options: ["멀티미터 고장", "범위를 넘었거나 회로가 끊김", "리드를 반대로 댐"],
    answer: 1,
    why: "1, OL은 범위 초과 표시. 범위를 올려도 같으면 끊어진 것이다. 리드를 반대로 대면 −가 붙을 뿐이다.",
  },
  {
    q: "전류 측정을 마친 직후 꼭 해야 할 일은?",
    options: ["빨간 리드를 VΩmA 단자로 되돌린다", "검은 리드를 10A 단자로 옮긴다", "다이얼을 Ω에 둔다"],
    answer: 0,
    why: "빨간 리드를 전류 단자에 둔 채 다음에 전압을 재면 단락된다. 전류 측정 후 바로 원래 단자로 되돌린다.",
  },
  {
    q: "기판에 납땜된 10kΩ 저항을 그대로 쟀더니 6.8kΩ이 나왔다. 가장 그럴듯한 이유는?",
    options: ["저항이 불량이다", "다른 부품이 병렬로 연결되어 함께 재졌다", "범위를 잘못 골랐다"],
    answer: 1,
    why: "회로에 붙은 채로 재면 다른 경로가 병렬로 더해져 실제보다 작게 나온다. 한쪽 다리를 떼고 다시 잰다.",
  },
  {
    q: "다이오드 모드에서 리드를 한 방향으로 대면 0.62V, 반대로 대면 OL이다. 이 다이오드는?",
    options: ["정상", "단락 고장", "끊어진 고장"],
    answer: 0,
    why: "한 방향만 순방향 전압이 나오고 반대 방향은 OL이면 정상. 양쪽 다 0 근처면 단락, 양쪽 다 OL이면 끊어진 것이다.",
  },
  {
    q: "220Ω 저항 양 끝 전압이 1.1V다. 이 저항에 흐르는 전류는?",
    options: ["약 0.5mA", "약 5mA", "약 242mA"],
    answer: 1,
    why: "I = V ÷ R = 1.1 ÷ 220 = 0.005A = 5mA. 값을 아는 저항의 전압으로 회로를 끊지 않고 전류를 구할 수 있다.",
  },
  {
    q: "아무 데도 연결되지 않은 전선을 V~ 모드로 쟀더니 40V가 나왔다. 이 값은?",
    options: ["위험한 실제 전압", "근처 전선에서 유도된 유령 전압일 수 있다", "멀티미터 고장"],
    answer: 1,
    why: "멀티미터의 입력 저항이 커서 근처 전선의 유도 전압이 보일 수 있다. 실제 전원인지는 부하를 연결하거나 LoZ 모드로 확인한다. 확인 전에는 전압이 있다고 보고 다룬다.",
  },
];

const quizRoot = document.getElementById("mm-quiz");
if (quizRoot) {
  QUIZ.forEach((item, index) => {
    const box = document.createElement("fieldset");
    box.className = "mm-quiz__item";
    const legend = document.createElement("legend");
    legend.textContent = `Q${index + 1}. ${item.q}`;
    const options = document.createElement("div");
    options.className = "mm-quiz__options";
    const explain = document.createElement("p");
    explain.className = "mm-quiz__explain";
    explain.setAttribute("aria-live", "polite");
    item.options.forEach((text, i) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = text;
      button.addEventListener("click", () => {
        options.querySelectorAll("button").forEach((b, j) => {
          b.dataset.state = j === item.answer ? "correct" : j === i ? "wrong" : "";
        });
        explain.textContent = `${i === item.answer ? "정답. " : "오답. "}${item.why}`;
      });
      options.append(button);
    });
    box.append(legend, options, explain);
    quizRoot.append(box);
  });
}
