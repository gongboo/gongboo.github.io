---
layout: post
title:  "computer_architechure-1"
date:   2020-09-08 08:26:28 -0400
categories: computer-architechure
use_math: true
---


앞부분은 정리가 좀 안됨...

levels of program code   

components of computer   

abstraction and isa   

## performance
Moore's law: 

response time(latency, execution time): 일 하나 하는데 얼마나 걸리나   
throughput: 단위시간 동안 얼마나 일하냐   

reponse time   
$Performance_X = 1/Execution_X$   
X가 Y보다 n배 빠르다: $Performance_X / Performance_Y =Execution_Y/Execution_X$   

execution time은 어떻게 재나   
elapsed time: 모든 response time   
CPU time: CPU가 일한 시간
- user cpu time: 내 프로그램 안에서 실행된 시간
- system cpu time   
real = user+system????


cpu clocking: 시간단위로 디지털 단위로 이루어짐   
- clock frequency(clock rate): 초당 clock 수   
- clock period: 한 clock당 시간   

performance는 execution time으로 정해진다   

**cpu time**= cpu clock cycle $\times$ clock cycle time = ${cpu clock cycle} / {clock rate}$   
average CPI: 한 instruction에 필요한 clock cycle 수: Clock cycle Per Instruction의 평균   
instruction마다 필요한 cycle의 수가 다르다.   

CPU performance는 cpu time의 역   
cpu time= (clock cycles)$\times$(clock cycle time)   
=(instruction count) $\times$ CPI $\times$ (clock cycle time)   
=${(instruction count)\times CPI}/{(clock rate)}$   
**IC, CPI, clock rate**가 다 있어야 performance 구할 수 있다.   



## power
power  1/2 /times capacitive load /times voltage^2 frequency


SPEC(standard performance evaluation corp) Benchmark: performance를 측정하기 위한 프로그램   
Amdahl's law: 컴의 일부를 향상시키고 그만큼 성능향상이 이루어기를 바라는 오류   
$T_improved =T_affected/(improvement factor)+T_unaffected$   
그러므로 최대한 줄이려면 큰 부분에 집중해야겠죠?   

low power at idle