---
layout: post
title: "node js, npm 설치"
date: 2023-05-07
categories: "nodejs"
tags:
  - "nodejs"
  - "npm"
  - "javascript"
  - "electron"
  - "vue"
use_math: false
use_mermaid: false
---

# node js, npm 설치 실행

node js는 브라우저 외에서도 javascript를 사용할 수 있게 해주는 건데

서버를 만드는데 많이 사용하는 듯 하다 (ex. express)

이 글 참고함

[https://hanamon.kr/nodejs-개념-이해하기/](https://hanamon.kr/nodejs-%EA%B0%9C%EB%85%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0/)

나는 vue랑 electron 사용해보려고 깔았다

node를 깔면 npm을 쓸 수가 있다(자동으로 같이 설치됨)

프로젝트 할 디렉토리로 이동해서 `npm init` 하면 관련해서 정보를 입력하게 뜬다

> Press ^C at any time to quit.  
> package name: (node_test_timer)  
> version: (1.0.0)  
> description:  
> entry point: (index.js)  
> test command:  
> git repository:  
> keywords:  
> author:  
> license: (ISC)

그럼 이런식으로 package.json이 생긴다.

```python
{
"name": "node_test_timer",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "",
"license": "ISC"
}
```

npm 명령어

[https://hellominchan.tistory.com/10](https://hellominchan.tistory.com/10)

<details>
  <summary>후기</summary>
  <p>아직 조금 밖에 안써봤지만 react에서 flutter로 넘어온 사람이 react 패키지 쓰는거 좀 짜증난다고 했던걸 본 기억이 있는데 그게 자꾸 생각난다. 패키지 종류 엄청 많은데 뭘 써야할지 모르겠다. 영어가 아닌 독일어 러시아어 중국어로만 설명되어 있는 패키지도 좀 있음</p>
</details>

<details>
  <summary>lowdb 써보려고 했는데 뭔가 잘 안되서 미룸</summary>
  <p>lowdb 써보려고 했는데 뭔가 잘 안되서 미룸
  lowdb를 써보기로 한다
  json을 이용한 로컬 db
  electron에서도 사용 가능하다.
  3.0.0 버전으로 업그레이드 되면서 설정이 바뀌어서 다른 블로그에 있는 설명이랑 공식 문서랑 설명이 달라서 헷갈렸는데 pure esm으로 바뀌어서 그런거라 한다
  설명은 여기
  [https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
</p>
</details>

---

# electron vue 연결해서 사용해보기

vue로 만든 마음에 드는 뽀모도로 발견

[https://github.com/WitchElaina/Pomodoro-Timer](https://github.com/WitchElaina/Pomodoro-Timer)

이걸 electron 으로 감싸서 앱으로 쓰고 싶다.

이거랑 이거보고

[https://www.youtube.com/watch?v=S4ZOYrTkRtw](https://www.youtube.com/watch?v=S4ZOYrTkRtw)

[https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/](https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/)

열심히 따라했건만 여기서 막혔는데

`npm run electron:serve` 했을 때

> pomodoro@0. 0. 0 electron: serve  
> vue-cli-service electron: serve  
> sh: vue-cli-service: command not found

npm install @vue/cli-service를 다시 깔아줬더니 해결.

vue/cli 자체는 글로벌로 설치 되어 있는데 왜 그런건지 모르겠음. 나중에 알아봐야지

왠지 모르게 `npm run electron:serve` 이거는 실행이 안되고

`npm run electron:build` 이걸로는 성공

결과  
이런 식으로 나온다  
![pomodoro_electron.png](https://blogger.googleusercontent.com/img/a/AVvXsEgFBBc47LzpEAFao-fddJ-0xIyZrnJ_SnJjCgVtEGsduSRu1q5p5Hau_ykRQU0tkGC7lQRrQxqHtNJtkQLhS64KPWmwZG1HUt_0DKfKsCU3z_wjVeNzbiA9c81gvqh5foMO9UujKU-7g-Vrp_8hDqIR-HFWe_J37s7U2Ht2vq3xhbVsg-CwELM66ihAVA){: .smallImg}

electron 뭔가 재밌는데 종종 쓰고 싶다
