---
layout: post
title: "블로그 댓글 utterances로 수정했다."
categories: journal
tags:
  - "journal"
  - "blog"
use_math: false
use_mermaid: false
---

# 구글 블로그 blogger(blogspot)에 마크다운 적용하기

서브 블로그로 blogspot을 쓰고 있는데 요즘에는 챗 지피티에서 생성한 글도 백업용으로 거기에 올리고 있다. 챗 지피티는 마크다운 형식으로 답변해줘서 깔끔하게 보기 좋은데 블로그스팟이 마크다운을 지원 안하는 것이었다. 그래서 템플릿을 수정해줘서 적용시켰다.

이거보고 따라했는데

[https://github.com/cs905s/md-in-blogger](https://github.com/cs905s/md-in-blogger)

내용을 요약하자면..

1. **</head> 앞에 이거 추가**

<link rel="stylesheet" href="[//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/default.min.css](notion://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/default.min.css)"/>

1. **</html> 앞에 이거 추가**

<script src='[//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js](notion://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js)' type='text/javascript'></script>
<script src='[//cdnjs.cloudflare.com/ajax/libs/showdown/1.6.2/showdown.min.js](notion://cdnjs.cloudflare.com/ajax/libs/showdown/1.6.2/showdown.min.js)' type='text/javascript'></script>
<script src='[//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js](notion://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js)' type='text/javascript'></script>
<script src='[//mxp22.surge.sh/markdown-highlight-in-blogger.js](notion://mxp22.surge.sh/markdown-highlight-in-blogger.js)' type='text/javascript'></script>

### 이제 pre로 감싸진 부분에 마크다운이 적용된다.

마크다운 부분을

`<pre class="markdown">` `</pre>` 로 감싸면 된다.

글에다가 직접 적용할거라면 html 모드(html 보기)로 바꿔서 적용해야 한다. 근데 이러니까 html 코드가 잘 안보이는 문제가 있었다.

html 코드는 태그 때문에 html 모드에서 쓰면 글에서 안보이게 차단되니 그부분만 일반 글쓰기 모드로 바꿔서 작성해줘야한다. 아니면 태그를 모두 &lt; &gt;로 바꿔준다

![1](https://blogger.googleusercontent.com/img/a/AVvXsEi0qRtTAnmbNlnUHucaAxYtGAibtBxfwdoOtRBtNZFXyxlbn3rpLVGKteorSh4CrKDiUwfIR3VoveX_bGaau-CvP1RRRQYPaJcsTMV8o6_CITrAiFDH-pnzivE5_IGPBFcjWEnnvF2co0BV8MbqYE6RM3NxvQ19YrSw7jCGKzeVA-GNRdXPqtjdggaTPORi){: .smallImg}

이게 이렇게 나오는데

![2](https://blogger.googleusercontent.com/img/a/AVvXsEgd53JbpfWIkz-psVizNmKkxSLKnTFOJF4dGdnx77kXyZE9_ceSojFImgHa4QZr09JKbBRejXR9jsM4F6a3054hkxGKLhIb8cMXSEopyC_qXmTr6OJ-dhed-XjC-rWe3msPvSt6cAKM1ISCASufwAcDloZ8jETGEnpUYiXXFUAOGZOY3FI3IZKXr_huv4K2){: .smallImg}

html 요소를 직접 만드는 거를 악용될 수 있으니 특정 html 태그가 인식되면 blogspot에서 아예 안보이게 해놓은거 같다

모드를 바꿔서 일반 글쓰기로 전환하면 이렇게 보이는데

![3](https://blogger.googleusercontent.com/img/a/AVvXsEj_DyNpfyyoGi4AEzdRKtqG_yST7_AtCC1zHD-duE4Bk3k-rahtsI2Bt-9zWT4syJmml5dvQUMueGnEqpnB6MBK64WxlyZwYA7wbEAMiSr3I9tN_jcUTgC_R8SKueXD8ashkgGd-1hLZ7GvsP1i6uiLWKpsqg6u-LZc7aea7elxSwkIHmuHKIhymBbrsvUM){: .smallImg}

여기에서 Html 코드를 붙여넣어주면

![4](https://blogger.googleusercontent.com/img/a/AVvXsEgY-IEb2dNsckTdW6AuhgBRXdA09VLiJc4FVZrG8YSoXfY9LbDTH02p9wNQPx6dLRJdJYhlzvo0mwb7789B8Uib18JXb40-V76t9k1Op2MJXkvK_QBy05GjyODxfl5MLZoj8IuRlx1SqR8F3ODbQB36Kbdfyb5LLHWwPiUCTVC7hLSJ_mIaeeDIu83QFL5Y)

블로그 스팟이 알아서 태그 부분을 &lt gt로 변환해서 태그로 작동 못하게 해준다.

![5](https://blogger.googleusercontent.com/img/a/AVvXsEjyFm3qTqMNOmfnB-iGUFF4tTZBgFDSHG5cIjBcC0dssNa38m7kIk2rvNo6NfzL6yGOcINSFEI-dy0CR-L0GPWtj6EqLr91Twk0Czp9SKzgoA4s_jiY32mgoJw6qXIwPkCPgCsgVoR6fspbslvJE2d_xmH9RtI0A-d8S0MLavH4otPrmJJUIslR1RcaLQ_F){: .smallImg}

최종 해결 결과

![6](https://blogger.googleusercontent.com/img/a/AVvXsEg7rPq2zEuRAYSlCFIaQ14vHjAUueKHWy0quBF7Mci_jGU7u4F89JQW1fQhUmVCW6FUiF7FdAhy04qhIHTAqlwW-ddTG6Y8WJvMu6OWf-SJYW9CtHB_CXTEcOEwZaBixeQLmdm7i0YyT_UN3nHQzW7ttsmuAHKzOVes16dp9QN1zkxizWOsvaS6jWmeRCcr){: .smallImg}

### 그냥 템플릿 자체에 넣었다.

마크다운 안쓰는 경우를 생각해서 템플릿에는 안넣고 직접 pre 태그를 넣으려고 했는데 글 몇개 쓰다가 불편하고 귀찮아서 템플릿 자체에 넣었다.

![7](https://blogger.googleusercontent.com/img/a/AVvXsEgJMXkdyfEfIqSOPxrt3WrATfRf5o-Y1zHif_vuLnsIfBxXVbc2pl5QGS02nQWLZa6hglX5J7R1jZheG5CpR818jnphxivHwHShMkNNjP3WTtrRknmvKnrS5eZmKy1hJlwT4Z1NmbN4zhjU8JHOaxboW78vF01v_asNpOr43kjrj4RH6INj5BW7UonbAxJn){: .smallImg}

이 부분에 추가했다.

이제 그냥 글쓰기 모드에 쓰면 된다.

html도 그냥 작성해도 된다.

### **아쉬운 점**

마크다운 기본이라 하이라이트가 안된다. 하려면 `<span style="background-color: #fcff01;"></span>`을 쓰면 되는데 딱히 좋아보이지는 않는다

이거 블로거에 적용하는 부분 코드를 살펴봤는데 길지 않아서 커스텀 하려면 할 수 있을 것 같은데 나중으로 미뤄둔다.
