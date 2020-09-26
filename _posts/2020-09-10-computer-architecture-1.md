---
# layout: post
title:  "computer_architechure-1"
date:   2020-09-08 08:26:28 -0400
categories: computer-architechure
use_math: true
use_mermaid: true
---
# Chapter1: computer abstraction and technology   

컴퓨터 종류: 개인 컴퓨터, 서버, 슈퍼컴퓨터, 임베디드 컴퓨터   

| application software: highlevel language로 쓰임 |
|-------------------------------------------------|
| system software: compiler, operating system(OS) |
| hardware: processor, memory, I/O                |

**levels of program code**   
<div class="mermaid">
    graph TD
        A[high level language<br>고급언어: 생산성과 휴대성 강화] -->|compile| B[assembly language<br>instruction을 text로 나타냄]
        B -->|assemble| C[machine language<br>01로 표현된 instruction과 data]
</div>   

components of computer: datapath&control(+cache memory)(processor에 들어있다), memory, input/output(user-interface device, storage device, network adapters)      


**abstraction**(추상화): 복잡한 걸 단순하게 바라보기
**instrucion set architecture**(ISA,명령어 집합): 하드웨어랑 low level software 사이의 interface. abstraction. *프로세서가 실행하는 모든 명령어 즉01011010101 이렇게 정해진 것*   
implementation

## performance
Moore's law: IC capacity가 18-24개월마다 두배로 발전한다.

**response time**(latency, execution time): 일 하나 하는데 얼마나 걸리나   
throughput: 단위시간 동안 일 얼마나 하는가. processor 같은거 더 붙이면 단위시간동안 일을 더 많이 한다.(그렇다고 response time이 줄지는 않음)    


$Performance_X = 1/Execution time_X$   
performance는 실행시간에 반비례한다!    

X가 Y보다 n배 빠르다: $Performance_X / Performance_Y =Execution_Y/Execution_X$   

execution time은 어떻게 잴까요?   
- elapsed time: 모든 response time   
- CPU time: CPU가 일한 시간
 - user cpu time: 내 프로그램 안에서 실행된 시간
 - system cpu time   
real = user+system????

clock: 시간단위로 하드웨어가 제어됨   
- **clock frequency(clock rate)**: 초당 clock 수   
- **clock period**: 한 clock당 시간   

performance는 execution time으로 정해진다.   
instruction마다 필요한 cycle의 수가 다르므로 average CPI 사용.   
**average CPI**: 한 instruction에 필요한 clock cycle 수: Clock cycle Per Instruction의 평균 자세한 설명이 ppt27에!   
**clock cycles**: (instruction count) $\times$ (cycles per instruction)   

> **cpu time**   
= (cpu clock cycles) $\times$ (clock cycle time)  *횟수X시간*    
= $\frac{cpu\ clock\ cycles} {clock\ rate}$   
=(instruction count) $\times$ CPI $\times$ (clock cycle time)   
=$\frac{(instruction\ count)\times CPI}{(clock rate)}$   
=$(\frac {instruction} {program})\times (\frac {clock\ cycles} {instruction})\times (\frac {seconds} {clock\ cycle})$

**IC(instruction count), CPI(cycles per instruction), clock rate**가 다 있어야 performance 구할 수 있다.    
CPU performance는 cpu time의 역   




## power
>power  $\propto \frac1{2} \times capacitive\ load(circuit?) \times voltage^2 \times frequency(clock\ rate)$   

power wall: 어느 이상으로 power 낮추기 쉽지 않음. 그래서 그 이상으로 성능을 높이기 위해 multiprocessor 사용(parallel programming 요구)      
SPEC(standard performance evaluation corp) Benchmark: performance를 측정하기 위한 프로그램   

Amdahl's law: 컴의 일부를 향상시키고 그만큼 성능향상이 이루어기를 바라는 오류를 범할 수 있다   
>$T_{improved} =\frac{T_{affected}}{(improvement factor)} +T_{unaffected}$   

*그러므로 최대한 줄이려면 큰 부분에 집중*   
CPU를 많이 쓴다고 power 많이 쓰는 것에 꼭 비례X

>MIPS(millions of instruction per second)   
=$\frac {(instruction\ count)}{(execution\ time)\times 10^6}$   
=$\frac {(instruction\ count)}{\frac{(instruction\ count)\times CPI}{(clock\ rate)}\times 10^6}$   
=$\frac {(clock\ rate)}{CPI\times 10^6}$

*RISC vs CISC : instruction set이 복잡하고 다양한 것이 꼭 좋은 것은 아니다.*
뒤에 더 별얘기 없는 것 같음   
필기 거의 완료 2번함