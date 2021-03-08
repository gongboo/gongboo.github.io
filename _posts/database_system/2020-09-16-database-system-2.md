---
# layout: post
title:  "database_system-2"
date:   2020-09-16 13:35:39 -400
# categories: database_system
#use_mermaid: true
---

# Chapter2
Relational Database(RDB)의 구조?   
attributes:    
relation schema:    



key: 테이블에서 column이라 보면 됨   
- **composite key(합성키)**: n개의 column이 key를 이룬다
- **superkey**: 고유 식별성을 가진다
- **candidate key(후보키)**: superkey가 고유 식별성을 가질 수 있는 최소 column만 있을 때   

- **primary key(기본키)**: 후보키들 중에서 하나 정함
- **foreign key(외래키)**: 여러 테이블들의 참조 관계를 나타냄. 두 테이블 간에 겹치는 거. 
참조하는 쪽에서는 외래키이고 참조 당하는 쪽에서는 기본키다.   
    - referencing relation: 참조하는 테이블
    - referenced relation: 참조되는 테이블. 참조하는 테이블에서의 외래키가 여기선 primary key다. 참조하는 테이블에서 외래키로 있는 요소들이 다 여기에 기본키로 포함되어야 한다.    

외래키와 참조(받는)키의 column 명은 달라도 된다. 이해를 돕기 위해 이름을 달리 두기도 한다.      
같은 테이블끼리도 참조 할 수 있다.   
예시는 2장-1 ppt8,10 참고   

relation의 수학적 정의   
cartesian product(곱집합): 순서가 있는 요소 모임   
relation은 각각의 항목의 cartesial product로 표현된다   

foreign key constraint(외래키 제약)   
referential integrity constraint(참조 무결성 제약)  알아두라는데?   

relational algebra(관계 대수): 한두개의 관계를 input으로 받아서 다른 관계를 output으로 내는 연산자
- select
- project


- join: cartesian 곱 해서 필요없는 거 거름

relational algebra expression(관계 대수식): 관계 대수로 식 씀.   
