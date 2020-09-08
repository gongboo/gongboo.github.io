---
layout: post
title:  "logic_circuits-1"
date:   2020-09-07 13:35:39
categories: logic_circuits
use_math: true
---

# 디지털과 아날로그
아날로그: 연속적인 값을 가진다   

디지털: 이산적인 값을 가진다   
    디지털 시스템의 종류   
        no state present   
            combinational logic system

        state present   
            synchronous sequential system: state가 이산적으로 업데이트   

            asynchronous sequential system: state가 시간 상관 없이 업데이트   


signal: 보통 두개의 값이나 범위로 추상적으로 01로 나타냄   


decimal(십진수) system   
binary(이진수) system   
변환하는 법을 알아두기   
most significant digit(MSD): 최대 자리수   
least significant digit(LSD): 최소 자리수   

$2^{10}$은 Kilo "K"   
그 뒤로 MGTPEZY...   

이진수 십진수 변환하는 방법을 알아두기   
0~15까지 2 8 10 16 진수들은 빨리 변환하게 외워두는 것도 좋다 ppt32쪽   

십진수 이진수로 변환하려면 소수점 앞의 수는 2로 계속 나누고 나오는 나머지를 거꾸로 나열   
소수점 뒤의 수는 2를 계속 곱해서 나오는 소수점 앞의 수를 순서대로 나열   
이렇게 하는 이유는 ppt38쪽 확인
