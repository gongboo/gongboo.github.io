---
layout: post
title:  "logic_circuits-1"
date:   2020-09-07 13:35:39
categories: logic_circuits

---

# 디지털과 아날로그
**아날로그**: 연속적인 값을 가진다   

**디지털**: 이산적인 값을 가진다   
- 디지털 시스템의 종류   
    - no state present   
        - combinational logic system

    - state present   
        - synchronous sequential system: state가 이산적으로 업데이트   

        - asynchronous sequential system: state가 시간 상관 없이 업데이트   


signal: 보통 두개의 값이나 범위로 추상적으로 01로 나타냄   


 
변환하는 법을 알아두기   
most significant digit(MSD): 최대 자리수   
least significant digit(LSD): 최소 자리수   

$2^{10}$은 Kilo: "K"   
그 뒤로 MGTPEZY...   

# n진수 변환하기
*decimal(십진수) system*   
*binary(이진수) system*   
*0~15까지 2 8 10 16 진수들은 빨리 변환하게 외워두는 것도 좋다 ppt32쪽*   

**십진수 이진수로** 변환하려면 
- **소수점 앞의 수는** 2로 계속 나누고 나오는 나머지를 거꾸로 나열   
- **소수점 뒤의 수**는 2를 계속 곱해서 나오는 소수점 앞의 수를 순서대로 나열   
*이렇게 하는 이유: ppt35,38쪽 확인. 문자식으로 계산 한번 해보면 알 수 있다*   
*이 방법은 다른 변환에도 사용가능하다 근데 느리다*    
*십진수를 이진수로 나눠서 변환하는 것 보다 십진수를 십육진수로 나눠서 변환하는 게 빠르다* 
*검산할 때는 자릿수만큼 n승으로 그냥 계산하기...*  


## 기타 변환법(더 빠르게 변환하기)
**이진수를 팔진수로** 변환하려면 3비트를 묶어서 변환   
**이진수를 십육진수로** 변환하려면 4비트를 묶어서 변환하면 된다!   

둘 다 소수점 아래도 그냥 묶어서 하면 된다 앞에 방법보다 빠르다   
거꾸로도 이진수로 변환한다면 한 비트를 3,4비트로 바꿔 준다고 생각하면 된다.   

**팔진수와 십육진수**끼리 변환할 때는 이진수를 거쳐가면 편하다   


# binary arithmetic(이진 연산)
**carry(올림수)**: 아래나 위로 올림   
*책에서는 아래에서 올라온 carry를 Z로 표시하고 위에 올리는 carry를 C로 표현해 준다*
**borrow(빌림수)**: 빼기 같은거 할 때 위에서 빌려오는 거   
*책에서는 아래에서 내리는 borrow를 Z로 표시하고 위에 내리는 borrow를 B로 표현해 준다*

**음수 표현하기**
- **signed-magnitude**: 첫 비트가 1이면 음수   
음수를 표현할 때는 보통 complement(보수)를 쓴다   
- **diminished radix complement of N**: (r-1)'s complemnt for radix(base) r: (r^n-1)-N   
- **radix complement of N**: r's complemnt for radix(base) r: r^n-N   
복잡해보여도 이진수일 때 편하게 계산할 수 있다   

이진수 1's complement는 모든 수 반전   
이진수 2's complement는 1's complement(모든 수 반전)에 1을 더한 수   
빨리 구하는 팁: 가장 작은 1까지는 남겨놓고 앞에 자리수들만 반전시킨다   
1010101100이면    뒷자리 1까지 남기고 1010101`100`   앞에만 반전 0101010`100`   

뺄셈 계산하기
M-N 대신 M-(2^n-N)을 계산하면   
- M>N이면 M-N이 나오고
- M<=N이면 나온 값의 N의 complement에 - 한 것이 답이다.   
ppt60-61 참고   

