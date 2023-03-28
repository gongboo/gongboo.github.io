---
layout: post
title: "c++ gui 사용해보려고 여러 모듈 정리해본 글"
date: 2023-01-27  
categories: c++
tags: 
    - "c++"
    - "modules"
use_math: false
use_mermaid: false
---

# c++ gui 사용해보려고 여러 모듈 정리해본 글

c++ 수업 시간에 gui 모듈 써보고 싶어서 찾아본 내용. 종류 너무 많아서 여러 개 찾아봤는데 결국 안 썼다.

후보는 qt wxWidgets 였는데 차이점은 이정도 였고

둘다 크로스 플랫폼, 외부 종속성 필요

|  | QT | wxWidgets |
|--|----|-----------|
| 라이선스 | 학생용은 무료인데 상업적 배포시 문제 있고 전부 무료가 아님. 점점 유료화 되어가서 불만 있는 사람들이 생기는 듯 | 무료 |
| 디자인 | 예쁘게 만들 수 있음 | 옛날거 같음 |
| 편의성 | 여러 도구(디자인 등등) 많고 사용하기 편하다고 한다. | 옛날 모듈이라 크게 지원하는 도구가 많지는 않은듯 |
| 특이사항 | 큐트라고 읽음(이거 개발자가 그렇게 읽음). QML이라고 프론트엔드 언어를 지원. 너무 풍부해서 오히려 부담스럽고 가볍게 쓰기 어려워보임. | 잘 안쓴다고 한다 |

다른 후보는 

win32 : 이건 우리 조원이 맥을 써서 패스

dear imGui : 경량형 외부 종속성 X.  크로스플랫폼. 

[dear imgui 관련 블로그 글 링크](https://blog.naver.com/PostView.nhn?blogId=sweetsmell9&logNo=221618574623&parentCategoryNo=&categoryNo=16&viewDate=&isShowPopularPosts=false&from=postView)
