---
layout: post
title:  "concept_of_PL-1"
date:   2020-09-16 13:35:39 -400
categories: concept_of_PL
use_mermaid: true
---
# chapter1: preliminaries
Reasons for Studying Concepts of Programming Languages   
뭐 배우는 이유가 있겠죠?...   

Programming Domains   
분야별로 다른 게 있겠죠? 아무튼 그렇다   

Language Evaluation Criteria(언어의 성능 기준)    
- **readability**: 잘 읽히고 이해되나. 유지보수를 하는데에 편리   
 - simplicity(단순성)
 - orthogonality(상호독립적,직교성): 기본 구조에 맞춰서 여러가지로 조합해도 작동한다. 예외가 적어지고 규칙적이어서 이해가 쉬움   
 - 여러가지 data type 정의가 있으면 이해가 쉬움
 - syntax design(문법 디자인)이 읽기 쉬워야   

- **writability**: 프로그램 만들기 쉽나 
 - simplicity, orthogonality
 - expressibility(표현력)   

- **reliability**: 얼마나 신뢰성 있나. 항상 조건에 맞춰서 동작   
 - type checking: 컴파일시 타입이 맞는지 확인
 - exception handling: 런타임 에러를 잡음, 예외처리 
 - aliasing: 동일한 메모리 지역을 다른 이름으로 부름.(신호가 겹침...?)   
 - readability, writability: 읽고 쓰기 쉬우면 맞을 가능성이 더 높음   

- **cost**: 프로그래머 생성, 프로그램 작성 컴파일 실행에 쓰이는 모든 비용   
- 그 외에: portability(이식성. 표준화 되어 있을수록), generality(범용성, 다양한 분야 적용), well-definedness(잘 정의됨)   

언어 디자인에 큰 영향을 끼친 것   
- 컴퓨터 구조: 현재는 폰노이만 구조고 여기에 발전된 언어가 imperative(명령형) 언어    
 - von neumann bottleneck: 메모리와 프로세서 사이의 속도 저하로 컴퓨터의 속도가 느려진다.   
 - 폰 노이만 구조에는 fetch-execute cycle이 있다
 - imperative 언어: 변수가 메모리 셀을 정함???, 메모리에서 cpu 사이를 이동???, 반복이 효율적이어서 재귀는 비효율적
- 프로그램 설계 방법론: 시대 따라서 바뀐다

프로그래밍 디자인의 역사~~~역사 별로 달라 졌다   

Programming Language Categories   
- imperative languages(명령형 언어): 명시적인 실행 순서 필요
- functional languages(함수형 언어): 함수형, 실행순서 필요 없음
- logic programming languages: 순서 필요 없음, 순서 시스템이 정함
- markup/programming hybrid languages: 마크업은 프로그래밍 언어 아닌데 여기서 프로그래밍 하려고 확장으로 만들어진 언어가 있음   

Language Design 갈등   
- reliability <-> cost of execution   
- readability <-> writability   
- writability <-> reliability   

Implementation Methods(설계 방법)   
- **compliation(타겟 언어로 번역)**: hll을 machine code로 번역해서 실행한다. 번역 느리고 실행 빠름.    
아래처럼 복잡한 단계를 거친다   
<div class="mermaid">
    graph TD
    A(source program)
    A-->B[lexical analyzer:어휘 토큰으로 나눔]	
    B-->C[syntax analyzer: parse tree로 나눔]	
    C-->D[inter mediate code generater: inter mediate code 만듬, semantic error check]	
    D-->E[code generater: machine code 만듬]	
    E-->F[computer]
</div>
symbol table: 각 단계별로 기호의 정보를 저장하고 교환한다 lexical,syntax analyzer로 저장하고 semantic analyzer, code generater에서 사용   
optimization(최적화) 과정을 거치기도   
linking   
load module   

- **pure interpretation(바로 실행)**: 인터프리터로 한줄씩 바로 실행, 변환을 하지 않음. 쓰기 쉽고 에러가 몇번째 줄인지 알기 쉽고 유연함. 하지만 느리고 실행되는 도중에도 symbol table이 계속 필요하고 소스 프로그램도 계속 유지하므로 공간 차지    
- **hybrid implementation(위 두개 사이의 타협 버전)**: 인터프리트어로 실행하기 좋은 중간단계 언어로 한번 번역. pure보다는 빠르고 컴파일레이션보다는 느림. 플랫폼 독립적이고 다른 기계에 적용하기 쉬움.   
- just in time implementation system(JIT)????   
- preprocessor(사전처리): 컴파일 하기 전에 매크로 처리 *C언어에서 봤다* 