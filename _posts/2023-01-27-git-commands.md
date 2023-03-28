---
layout: post
title: "git 명령어 정리"
date: 2023-01-27  
categories: git
tags: 
    - "git"
use_math: false
use_mermaid: false
---


# git 명령어

![_git 명령어 (1).png](https://blogger.googleusercontent.com/img/a/AVvXsEh-2jYhyu-NZVrlXKTiBTyHXMGaCZlCiJa2u9doe8_uhhqvqgD01doxsWFdFDddMz9qG4YfVglYp91r0CzmSqVeaS1XtYVihiyZRpfPUKNHqH8yGlsZBYRFCtvakXMpdu7FD3rAh6n2JfbpSfJKuVBlOvHkDpfuzFx7c_3c1bkwU9ABO-RMYu5dj5ov5A){: .bigImg}

git은 분산 저장소 방식의 버전 관리 시스템으로 지역저장소와 원격 저장소에 함께 저장해서 관리한다.

원격 저장소는 주로 github. gitlab이라는 서비스도 있다. 

`git init`

하면 폴더에 .git 이라는 hidden folder가 생긴다.

mac에서 hidden folder 보려면 `command` `shift` `.` 누르면 된다.

`git add --all`

staging 영역에 추가

`git commit -m "first commit”`

지역 저장소 저장

`git branch branch1`

branch1 생성

`git checkout branch1`

현재 master brach에서 branch1로 옮김

`git commit -m "commit in new branch”`

이제 커밋하면 두번째 branch에 저장된다.

`git checkout master`

마스터 브랜치로 이동

`git merge branch1`

마스터 브랜치와 병합

`git remote add remote_name https://github.com/gongboo/git_test.git`

깃허브 주소를 원격 저장소로 저장하고 remote_name 이라고 부른다.

`git push remote_name master`

마스터 브랜치의 내용을 원격저장소에 저장

---

좋은 링크

[https://velog.io/@couchcoding/Git-실무에서-사용하는-명령어들을-빠르게-알아보자-1](https://velog.io/@couchcoding/Git-%EC%8B%A4%EB%AC%B4%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%AA%85%EB%A0%B9%EC%96%B4%EB%93%A4%EC%9D%84-%EB%B9%A0%EB%A5%B4%EA%B2%8C-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90-1)