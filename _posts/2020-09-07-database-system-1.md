---
layout: post
title:  "database_system-1"
date:   2020-09-07 13:35:39 -400
categories: database_system
use_mermaid: true
---
# Chapter1: intro

data base management system(DBMS): 연관된 데이터의 모임과 그것을 효과적으로 다루기 위한 도구. 효율적이고 편리하게 값지고 크고 동시다발적으로 여러 사람들한테 접근 가능한 데이터베이스를 다루기 위함.   
Data Base: 연관을 가진 정보들의 모임   
abstraction(추상화): 데이터 베이스가 너무 복잡하기 때문에 사용한다. 데이터 베이스가 어떻게 설계된 것인지 자세한 사항을 모르고도 조작할 수 있도록 해준다.   

**database system의 목적**   
다음을 해결한다
- 데이터 중복, 불충분
- 데이터 접근에 불편성
- data isolation: 찢어진 파일들이 다른 형식으로 있음
- integrity problem: 새로 데이터 추가하는데 형식이 달라져서 생기는 문제
- atomicity problem: 업데이트 실패로 불안정한 데이터가 될 수 있음
- 여러 사람의 동시 접속: 오류날 수 있음
- 보안 문제


data model(데이터 모델): 데이터 베이스 표현 방식   
- relational model: 표를 사용해서 표현
여러가지 많다~~~~~필기 나중에   

**data abstraction**   
<div class="mermaid">
    graph TD
        A[view level: 용도에 맞게 부분만 보여준다] --- B[logical level: 표로 나타낸 형태]
        B --- C[physical level: 실제로 저장된 형태. 파일 그자체]
</div>

instance: 특정 시간에 있는 데이터들(시간마다 데이터 바뀌니까): 표 데이터 한줄 한줄
schemas: 표 위에 항목이름...이라 보면 됨. 관점 차이로 나뉜다
- logical schema: 
- physical schema: 실제 구조

**physical data independence**: physical schema를 바꿔도 logical schema에 변동없음   

**data definition language(DDL)**: 
**data manipulation language(DML)**: