---
layout: post
title:  "database_system-2"
date:   2020-09-16 13:35:39 -400
categories: database_system
use_math: true
#use_mermaid: true
---

# Chapter2
Relational Database(RDB)의 구조?   


attributes: 속성,columns: $A_1, A_2, ..., A_n$     
- domain: 가능한 값 집합.
- atomic: 나눌 수 없는 특성을 가진다. *7장에서 제 1 정규화라고 자세히 배움*
- null이 값으로 저장될 수 있다   

tuple: row, 한줄한줄. 순서 없음.   
relation schema: $R=(A_1, A_2, ..., A_n)$    
relation instance:r  스키마 R 위에서 정의된 거면 r(R).   
[schema와 instance 차이 여기 설명 잘되어 있다.][schema&instance]   
[relation schema vs database schema][relation database schema]   

database schema: DB의 논리적 구조.
database instance: 특정 순간의 data.   

---

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
필기 필요하겠다


---

relational algebra(관계 대수): 한두개의 관계를 input으로 받아서 다른 관계를 output으로 내는 연산자
- **select**: $\sigma$ : $\sigma_p(r)$: 튜플 중 p 조건을 충족하는 튜플들을 반환
 - $p$는 selection predicate로 조건을 나타냄
 - 조건을 나타낼 때 비교연산자($=,\neq , \leq , \geq , <,>$), 논리연산자($\wedge (and), \vee (or), \neg$(not))를 사용한다.   

- **project**:  $\prod$ :$\prod_{A_1,A_2...A_k}(r)$: 열거되지 않은 attribute를 배제한다. 다시말해 열거된 열만 남긴다. 제거하고 남은 tuple들 중 중복되는 것이 있으면 제거 한다.

- **union**: $\cup$: 합집합. 세로로 결합? 그러므로 조건이 필요하다 1. attribute 갯수 같다. 2. 각 attribute가 호환이 되어야한다.

- **set intersection operation**: $\cap$: 교집합 당연히 합집합 조건과 같은 조건 필요

- **set difference**: $-$: 차집합. 한쪽에만 있는 tuple을 찾아낸다.

- **cartesian product**: $\times$ : table 결합. 가로로 결합?

- **join**: $ \bowtie$ :select + cartesian product라고 보면 된다. table 합치고 비는 부분을 걸러낸다: $\sigma_{A.id=B.id}(A\times B)=A \bowtie_{A.id=B.id}B$

- **division**: [여기서 확인 div부분][ra_div]

- **assignment operation**: $\leftarrow$: 배정하기

- **rename**: $\rho$: $\rho_X(E)$: E를 X로 이름 붙임?   

relational algebra expression(관계 대수식): 관계 대수로 식 씀.   

여러가지 방법으로 같은 의미의 query을 만들 수 있는데 **equivalent** 하다고 한다.   
query가 관계대수식 말하는 건가? 아닌거 같은데? 그냥 골라내는 의미 그 자체를 말하는 거 같은데

[schema&instance]:https://www.geeksforgeeks.org/difference-between-schema-and-instance-in-dbms/
[relation database schema]:https://www.quora.com/Whats-the-difference-between-relation-schema-and-database-schema
[ra_div]:https://magician-of-c.tistory.com/51