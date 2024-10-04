---
layout: post
title: "블로그 목차 만들기"
categories: journal
tags:
  - "journal"
  - "blog"
use_math: false
use_mermaid: false
---

블로그 목차가 필요해서 h1 h2 h3를 목차로 상단에 표시해주도록 했다

```html
<div style="color: rgb(82, 82, 82);" id="index">index</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    var titles = document.querySelectorAll("h1,h2,h3");
    var index = document.getElementById("index");

    for (var i = 0; i < titles.length; i++) {
      if (
        !titles[i].classList.contains("archive__item-title") &&
        !titles[i].classList.contains("author__name") &&
        !titles[i].classList.contains("screen-reader-text")
      ) {
        var tagName = titles[i].tagName;
        titles[i].id = i + "-title";

        if (tagName === "H1") {
          index.innerHTML +=
            "<br> &emsp; -" +
            '<a href="#' +
            i +
            '-title">' +
            titles[i].textContent +
            "</a>";
        } else if (tagName === "H2") {
          index.innerHTML +=
            "<br> &emsp;&emsp; -" +
            '<a href="#' +
            i +
            '-title">' +
            titles[i].textContent +
            "</a>";
        } else if (tagName === "H3") {
          index.innerHTML +=
            "<br> &emsp;&emsp;&emsp; -" +
            '<a href="#' +
            i +
            '-title">' +
            titles[i].textContent +
            "</a>";
        }
      }
    }
  });
</script>
```

모든 페이지가 로드될 때까지 기다리고

h1 h2 h3 골라서 목차에 넣어줌

h1 h2 h3 마다 들여쓰기(`&emsp;`)를 다르게 함.

tagName은 html에서 대문자로 반환함을 주의하기

미래의 나에게 : 이거 코드는 post-index.html 쪽에 들어가 있음.
