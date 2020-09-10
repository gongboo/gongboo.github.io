---
layout: post
title:  "discrete_mathematics-1"
date:   2020-09-06 13:35:39
categories: discrete_mathematics
use_math: true
---
# set and logic

## set(집합)
객체의 모임
$Z$: 정수(integer) 집합   
$Z^-$:음의 정수  $Z^{nonneg}$:음수 아닌 정수   
$Q$: 유리수(rational number) 집합   
$R$: 실수(real number)집합   

$|X|$:cardinality of X(집합의 크기)(집합의 원소의 개수)   
그리고 집합 포함관계는 알아서 보기: =, 부분집합(subset), 진부분집합(proper subset: 부분집합인데 같지는 않음)   
$P(x)$: powerset of x: 모든 subset의 집합: 멱집합   

교집합(intersection), 합집합(union), 차집합(difference)   
pairwise disjoint: 서로소: disjoint 하다: 공통부분이 없다   
$U$:universal set   
$\overline{X}$   

집합 관련 규칙들
associative law: 결합 법칙   
commuative law: 교환 법칙   
distributive law: 분배 법칙   
identity law : 결과 동일한 경우   
complement law:    
idempotent law: 멱등성: 아무리 계산해도 같음:   
bound law, absorption law, involution law, 0/1 law,    
de morgan's law: 드 모르간 법칙: $\overline{(A \bigcup B)} = \overline{A} \bigcap \overline{B}$   

partition: 분할    
cartesian product: 곱집합
    순서가 있다
    $X \times Y$는 모든 $(x,y)$ 순서쌍 집합   


## logic(논리)   
correct reasoning   
proposition(명제): 참이나 거짓으로 판명할 수 있는 문장   
compound proposition(복합 명제): connectives(연결사)로 연결된 명제   
표 ppt13,14참고   
truth table(진위표)로 표로 나타낸다   
conditional proposition(조건명제): if p then q: $p \to q $    
p는 hypthesis(가설) q는 conclusion(결론)
$F \to T$이면 vacuously true(가설이 이미 틀리므로)   
문장으로 구분하는거
if p then q = p only if q = when p q

necessary condition(필요조건): 조건 충족하면 결론 충족. 조건 충족 못하면 결론 충족 못함   
sufficient condition(충분조건): 조건 충족하면 