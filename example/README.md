# HTML 게시글 예시

이 폴더는 참고용 소스입니다. `_config.yml`에서 제외되어 홈 목록, 검색 및
GitHub Pages에 게시되지 않습니다.

```text
example/
  html-post/post.html       # 표·카드·접기 영역
  vector-3d/post.html       # Three.js 상호작용
  vector-3d/style.css
  vector-3d/scene.js
```

새 글을 만들 때 `post.html`을 `_posts/` 아래로 복사하고 파일명을
`YYYY-MM-DD-slug.html`로 바꿉니다. 앞부분 설정의 `title`, `date`,
`categories`, `tags`와 본문을 새 글에 맞게 수정합니다.

3D 예시를 실제 게시글로 사용한다면 `style.css`와 `scene.js`도
`assets/posts/vector-3d/`로 복사해야 합니다. 다른 폴더 이름을 쓸 경우
게시글의 `post_styles`, `post_scripts` 경로도 함께 바꿉니다.

공통 레이아웃은 `_layouts/html-post.html`, 공통 스타일은
`assets/css/html-post.css`에 있습니다. 자세한 작성 규칙은
`_docs/html-posts.md`를 참고하세요.
