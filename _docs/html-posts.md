# HTML 게시글 작성 방법

HTML 게시글도 기존 Markdown 글과 같은 `_posts/`에 저장합니다. 파일 이름은
`YYYY-MM-DD-slug.html` 형식으로 만듭니다. 홈, 카테고리, 태그, 검색은 기존
게시글 경로를 그대로 사용합니다. 참고용 예시는 `example/`에 따로 있으며
블로그에는 게시되지 않습니다. 실제 글로 사용할 때는 `example/README.md`의
복사 절차를 따릅니다.

```html
---
layout: html-post
title: "글 제목"
date: 2026-10-05
categories: [information]
tags: [example]
excerpt: "목록에 표시할 짧은 설명"
post_styles:
  - /assets/posts/my-post/style.css
post_scripts:
  - /assets/posts/my-post/main.js
---

<section aria-labelledby="my-heading">
  <h2 id="my-heading">본문 제목</h2>
  <p>HTML 본문을 자유롭게 작성합니다.</p>
</section>
```

- `post_styles`와 `post_scripts`는 선택 사항입니다. 경로는 사이트 루트 기준으로
  작성합니다. 스크립트는 ES 모듈로 불러옵니다.
- 공통 카드, 그리드, 접기 영역 스타일은 `assets/css/html-post.css`에 있습니다.
  글 전용 스타일은 `assets/posts/<slug>/`에 두고 `.html-post` 아래로 범위를
  한정하면 기존 블로그 스타일과 충돌하기 어렵습니다.
- `html-post` 레이아웃은 기존 `single` 레이아웃을 사용하므로 제목, 카테고리,
  태그 및 블로그 메뉴가 유지됩니다. 본문은 `<section>` 같은 HTML 조각으로
  작성하고 `<html>`·`<body>` 태그를 다시 넣지 않습니다.
- Jekyll은 게시글 안의 Liquid 문법(`{{ ... }}`, `{% ... %}`)도 처리합니다.
  JavaScript 템플릿 문자열 등에서 이 문법을 문자 그대로 써야 할 때는
  `{% raw %}`와 `{% endraw %}`로 감쌉니다.
- Three.js처럼 외부 라이브러리를 사용하는 게시글은 해당 글의 스크립트에서만
  불러옵니다. 외부 CDN이 끊기면 장면이 로드되지 않으므로 중요한 자산은
  나중에 로컬 파일로 옮길 수 있습니다.
