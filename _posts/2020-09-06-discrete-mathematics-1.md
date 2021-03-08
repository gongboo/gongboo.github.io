---
layout: post
title:  "discrete_mathematics-1"
date:   2020-09-06 13:35:39
categories: discrete_mathematics
tags: discrete_mathematics set
use_math: true
---
# chapter1: set and logic

## set(집합)
객체의 모임   
**$Z$**: 정수(integer) 집합   
**$Z^-$**:음의 정수  $Z^{nonneg}$:음수 아닌 정수   
**$Q$**: 유리수(rational number) 집합   
**$R$**: 실수(real number)집합   

**$|X|$**:cardinality of X(집합의 크기)(집합의 원소의 개수)   
그리고 집합 포함관계는 알아서 보기: =, 부분집합(subset), 진부분집합(proper subset: 부분집합인데 같지는 않음)   
**$P(x)$**: powerset of x: 모든 subset의 집합: 멱집합   

교집합(intersection), 합집합(union), 차집합(difference)   
pairwise disjoint: 서로소: disjoint 하다: 공통부분이 없다   
$U$:universal set   
$\overline{X}$: complement of X(여집합)   
*왜 교재가 $X^c$라고 안하지?*

집합 관련 규칙들    
*너무 많아서 ppt8쪽 참고하기*
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
- 순서가 있다   
- $X \times Y$는 모든 $(x,y)$ 순서쌍 집합   


## logic(논리)   
correct reasoning   
**proposition(명제)**: 참이나 거짓으로 판명할 수 있는 문장   
compound proposition(복합 명제): connectives(연결사)로 연결된 명제   
*표 ppt13,14참고*   
truth table(진위표)로 표로 나타낸다   
conditional proposition(조건명제): if p then q: $p \to q $    
p는 hypthesis(가설) q는 conclusion(결론)
$F \to T$이면 vacuously true(가설이 이미 틀리므로)   
문장으로 구분하는거
if p then q = p only if q = when p q

necessary condition(필요 조건): 조건 충족하면 결론 충족. 조건 충족 못하면 결론 충족 못함 잠깐만 아직 이해 못함   
sufficient condition(충분 조건): 조건 충족하면 결론 보장. 조건 충족 못하면 
biconditional proposition(필요 충분)

tautology: 모든 경우가 TRUE   
contradiction(모순): 모든 경우가 FALSE   
logically equivalent: 진위표가 같음   
converse: 역    
contrapositive: 대우. 진위표가 완전히 같아서 증명할 때 사용한다.   

**deductive reasoning(연역법)**: 대전제에서 결론을 얻음. top-down logic. 새로운 지식을 만들지 않음.    
**inductive reasoning(귀납법)**: 일반화로 결론을 얻음   
argument(추론?): hypothesis로 conclusion을 구하는 것   
valid argument는 hypothesis가 true고 conclusion도 true   

hypothetical syllogism rule of inference(삼단논법): $p \to q, q \to r$ 이면 $p \to r$

truth table(진위표) 종합정리
\bigwedge: conjunction: AND
\bigvee: disjunction: OR
\bigotimes: XOR: exclusive disjunction: 배타적 OR
\neg: negation
\to: implication
\leftrightarrow: double implication

| p | q | $p \bigwedge q$ | $p \bigvee q$ | $p \bigotimes q$ | $\neg p$ | $p \to q$ |
|---|---|-----------------|---------------|------------------|----------|-----------|
| T | T | T               | T             | F                | F        | T         |
| T | F | F               | T             | T                |          | F         |
| F | T | F               | T             | T                | T        | T         |
| F | F | F               | F             | F                |          | T         |

*추론 관련은 ppt25 참고하기*


quantifiers(수량사): 
- **universial quantifiers**:$\forall x$: for every x: 모든 값이 그렇다   
- **existential quantifier**: $\exists$: there exist x: 적어도 하나 있다
de morgan's law를 적용가능하다. 기호바뀌고 조건에 아니다가 붙는다. ppt33,34참고   

**nested quantifier**: quantifier 중복해서 쓸수 있다. 순서에 따라 의미가 바뀌므로 주의.   
ppt38,39 참고



chapter1 끝