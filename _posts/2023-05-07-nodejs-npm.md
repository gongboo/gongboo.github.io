---
layout: post
title: "sample"
date: 2020-09-12
categories: sample
tags: "blog"
use_math: true
use_mermaid: true
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

- 후기
  아직 조금 밖에 안써봤지만 react에서 flutter로 넘어온 사람이 react 패키지 쓰는거 좀 짜증난다고 했던걸 본 기억이 있는데 그게 자꾸 생각난다. 패키지 종류 엄청 많은데 뭘 써야할지 모르겠다. 영어가 아닌 독일어 러시아어 중국어로만 설명되어 있는 패키지도 좀 있음

- lowdb 써보려고 했는데 뭔가 잘 안되서 미룸
  lowdb를 써보기로 한다
  json을 이용한 로컬 db
  electron에서도 사용 가능하다.
  3.0.0 버전으로 업그레이드 되면서 설정이 바뀌어서 다른 블로그에 있는 설명이랑 공식 문서랑 설명이 달라서 헷갈렸는데 pure esm으로 바뀌어서 그런거라 한다
  설명은 여기
  [https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
