---
layout: post-index
title: "재밌는 이야기 : PDF를 추출해서 학습 자료를 만들기"
date: 2024-11-04
categories: journal
tags:
  - python
  - data
  - chatgpt
  - pdf-extraction
  - automation
  - PyMuPDF
  - tutorial
use_math: false
use_mermaid: false
---

대학생 동생의 시험기간이었다. 동생이 공부하는 한 과목의 자료가 PDF로 400페이지 정도 됐는데 굵은 글자로 표시된 개념 용어 위주로 공부를 해야 했다. 페이지가 많다보니 하나하나 넘기면서 굵은 단어를 찾아서 보는 것도 일이었다.  
이야기를 들어보니

> 어 생각해보니 파일이라면 추출을 할 수 있을 거 같은데??

싶어서 pdf에서 굵은 글자 파일 추출을 시도했다

# pdf 파일에서 굵은 글자 추출하기

PDF는 바이너리 파일로 되어 있다. 구조는 헤더, 바디, 크로스 레퍼런스 테이블, 트레일러로 되어 있고 객체(택스트, 폰트, 이미지, 링크) 등등으로 구성.  
PDF 구조에 대해 자세히 알 필요는 없지만 대략적인 형태는 이렇다.

```
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj

...
```

python의 `PyMuPDF` 모듈을 사용했다. 이 모듈을 사용하면 pdf를 읽어서 속성들을 딕셔너리로 변환해준다.

```python
import fitz  # PyMuPDF

def extract_bold_text(pdf_path):
    doc = fitz.open(pdf_path)
    bold_italic_text = []

    #pdf 페이지 순회.
    for page_num in range(doc.page_count):
        page = doc.load_page(page_num)
        blocks = page.get_text("dict")["blocks"]

        # 블록별로 텍스트 탐색
        for block in blocks:
            if "lines" in block:
                for line in block["lines"]:
                    for span in line["spans"]:
                        # 글꼴 정보를 바탕으로 굵은 글씨 또는 이탤릭 글씨 탐지
                        font_flags = span['flags']
                        is_bold = font_flags & 2  # 굵은 글씨

                        # 굵은 글씨만 포함
                        if is_bold:
#                             print(font_flags)
                            bold_italic_text.append(f"page:{page_num+1} {span['text']}")


    return bold_italic_text

# PDF 파일 경로
pdf_path = 'pdf_name.pdf'

# 추출된 텍스트 출력
extracted_text = extract_bold_text(pdf_path)
for text in extracted_text:
    print(text)
```

뭔가 잘 추출 안되면 이렇게도 해보기.

```py
                        # 글꼴 정보를 바탕으로 굵은 글씨 또는 이탤릭 글씨 탐지
                        font_flags = span['flags']
                        is_bold = font_flags & 2  # 굵은 글씨

                        # 굵은 글씨, 이탤릭 굵은 글씨 추출
                        if is_bold and font_flags != 6:
#                             print(font_flags)
                            bold_italic_text.append(f"page:{page_num+1} {span['text']}")


    return bold_italic_text
```

## `font_flags` 로 폰트 속성 파악

`font_flags`는 이진수 비트플래그로 되어 있고 첫번째 비트는 이탤릭 두번째 비트는 볼드를 나타낸다.

- 첫 번째 비트 (0b0001 = 1): 이탤릭(Italic) 스타일  
  `is_italic = font_flags & 1`
- 두 번째 비트 (0b0010 = 2): 굵은 글씨(Bold) 스타일
- 세 번째 비트 (0b0100 = 4): 비례 글꼴 여부(Serif)
- 네 번째 비트 (0b1000 = 8): 모노스페이스 글꼴 여부(Monospace)

`font_flags != 6` 이런식으로 하면 0b0011 이니까 굵고 이탤릭인 글씨를 뜻한다.

> `fontname = span['font']` 을 사용하면 구체적인 폰트 이름에 접근할 수도 있다.

결과적으로 이런 형식으로 굵은 글자들을 페이지 별로 쭉 뽑았다

```
page:1 presynaptic neuron
page:1 postsynaptic neuron
```

# chatgpt로 부가적인 학습자료 만들기

추출 결과가 상당히 만족스럽고 작업물에 애정을 느껴서 조금 더 작업해보기로 했다. 영어 단어들이 너무 어려워서 뜻이 붙어 있으면 좋을 것 같다고 생각했다.
뜻을 붙이는 작업을 chatgpt로 진행했다.  
원래는 chatgpt api를 사용하려고 했다. 4o를 쓰면 생각보다 많이 안나오는데에다가 영어단어 일수록 저렴하기 때문이다. chatgpt api를 좀 사용해 본 나의 감(...)으로는 약 7000원에서 10000원 사이로 들 것 같은 생각이 들었다. 계산해 본거 아니고 그냥 감이다.  
근데 막상 하려고 하니 갑자기 API 사용 비용을 아끼고 싶어져서 돈을 아끼는 방향으로 바꿔 진행하게 되었다. 그냥 chatgpt에 단어를 붙여넣고 옮기는 식으로 했다. chatgpt plus를 사용하고 있어서 뽕좀 뽑아야 하기도 하고 단어 목록으로 여러단어 한번에 붙여넣고 옮기는 식이라서 별로 안걸렸다. 집중해야하는 작업이 아니고 그냥 노가다 였기 때문에 그냥 유튜브 같은거 볼때 같이 충분히 병행 할 수 있는 작업이라서 다른거 하면서 틈틈히 진행했다.  
↑ 자꾸 변명을 하게되는 이유는 개발자로써 스마트 하지 않은 방식으로 했다는게 좀 마음에 걸려서 그렇게 되었다. 그냥 노가다 해야할거 같을때는 머리 싸매면서 고민하는 것보다 빠르게 노가다로 진행하는 것도 나쁘지 않다고 경험적으로 느꼈기 때문이다.

사용한 프롬프트는 다음과 같다.

> 00학문에 대해서 영어 용어들을 공부를 하고 있어. 내가 주는 단어 목록을 보고 각 단어에 해당하는 한글 뜻과 영어 의미를 정리해줘. 예시는 다음과 같아  
> page:1 Presynaptic neuron - 시냅스 전 뉴런 - The neuron that sends a signal across the synapse.  
> page:1 Postsynaptic neuron - 시냅스 후 뉴런 - The neuron that receives a signal across the synapse.

단어 30개에서 40개 정도는 한번에 거뜬히 뽑아낼 수 있었다

## chatgpt 쓰면서 놀란 점

놀란 점은 내가 준 단어를 있는 그대로 명령에만 따르지 않고 잘못 추출된 단어나 여러 단어의 모음인 단어들이 있는데 잘못 나뉘어 있는 것들을 알아서 처리 해줬다는 것이다. 정말..'알아서 잘 딱 깔끔하고 센스있게'가 따로 없다. 내가 관련 전공이 아니라서 이렇게 잘못 추출된 부분을 인지 하지 못해서 처음에 나뉜 단어 묶어서 처리 해줬을 때는 오류인줄 알았다.  
챗 지피티 오류인줄 알고 여러번 다시 프롬프트 작성해서 말해봤지만 잘못 추출된 부분은 계속해서 맞게 고쳐서 처리해줬다.  
나중에야 책 확인해보고 단어 확인해 보면서 알게 되어서 gpt가 한 수 위군 하고 느꼈다.

# 마무리

결과적으로 이런 형태로 단어집을 만들어 내었다.

```
page:1 Myelitis - 척수염 - Inflammation of the spinal cord.
page:1 Neuritis - 신경염 - Inflammation of a nerve or nerves.
page:1 Hyperesthetic - 과민성의 - Increased sensitivity to sensory stimuli, often seen in rabies infections.
page:1 Spinal cord - 척수 - The part of the central nervous system that transmits signals between the brain and the rest of the body.
...
```

동생이 확인해 본 결과 꽤 쓸만하다고 느꼈다고 한다. 타 전공의 자료도 만들 수 있게 되었고, 인공지능 덕분에 개인의 작업 범위가 넓어지고 있다는 생각에 흥미롭기도 하고 약간 무섭기도 했다.
