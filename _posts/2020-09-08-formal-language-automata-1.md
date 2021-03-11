---
layout: post
title:  "formal_language_automata-1"
date:   2020-09-08 
categories: formal_language&automata
use_math: true
---

# 형식언어와 오토마타

## Language 언어

set(집합), function(함수), relation(관계), graphs(그래프) 개념 알아두기   

language: set of strings   
string: sequence of letters(alphabet, symbol)   
alphabet: 형식언어를 정의할 때 가장 먼저 정의   
- $\sum ={a, b}$ 이런 식으로 정의     

- 보통 앞의 알파벳 a b c를 알파벳을 뜻하게 쓴다   
- 뒤 알파벳 w, v는 string을 뜻하게 쓴다   

string w와 v에 대한 연산   
concatation(연결): wv: 그대로 잇는다   
reverse(역): $w^R$: string 거꾸로 뒤집는다   
lenth(길이): $|w|$: 알파벳 개수   

$|uv|=|u|+|v|$   
empty string(공스트링): $\lambda$   
substring(부분스트링): 연속한 일부   
prefix: 맨앞 알파벳을 포함한 substring   
suffix: 맨뒤 알파벳 포함한 substring   
$w^n$: n번 반복해서 연결해 붙임   
$\sum^*$: $\sum$의 알파벳으로 만들 수 있는 모든 string의 집합   
- $\sum ={a, b}$   
- 멱집합이랑 비슷한 느낌인데 조금 다름
$\sum^{+}$: $\sum^*$에서 $\lambda$ 없는 집합   


language를 다시 정의 하자면: $\sum^*$의 부분집합: 즉 알파벳의 모든 가능한 나열에서 몇 개를 뽑은 것   

language 연산은    
**합집합, 교집합, 차집합,**   
**complement**(여집합: upper bar로 표시),    
**reverse**(역: $L^R$: 모든 원소를 뒤집는다), 
**concatation**(연결: $L_1L_2$: 모든 원소를 한번씩 연결),    
**n승**하기(자기 원소로 연결 연산)가 가능하다   
$L^* = L^0 \bigcup L^1 \bigcup L^2$: 모든 연결 연산의 집합
$L^{+}$: $L^*$에서 ${\lambda}$ 없는 집합  


## Grammer 문법   

$\to \Rightarrow $


dfa

nfa