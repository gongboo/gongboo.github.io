---
layout: post
title: "python 문법 정리"
date: 2023-04-10
categories: python
tags:
  - "python"
  - "language"
  - "grammer"
use_math: false
use_mermaid: false
---

# python

파이썬 문법 까먹을 때 메모한거 모은 것 입니다. 틈 날때마다 계속 추가 수정 중..

문법이 간단한 객체지향 스크립트 언어.

## 입출력

출력

```python
print("Hello")
print("Hello World")
print("'Hello'")    # 'Hello'
print("""\"!@#$%^&*()\'""")   # "!@#$%^&*()'
print("Hello", "World",sep=",") # 쉼표로 구분해서 출력
```

입력

```python
a=input() #입력
a=int(input()) # 입력을 int로 변환
a=float(input()) # 입력을 float로 변환
a, b = input().split() # 한번에 쪼개서 입력
a,b= map(int, input().split())
```

## string

파이썬은 스트링 처리 하기가 편하다

[https://wikidocs.net/13#1find](https://wikidocs.net/13#1find)

```python
a="good happy"
a.replace("good","great") #굿을 그레이트로 바꿔줌
len(a) #문자열 길이
```

산술 연산자 :a + b, a - b, a \* b, a \*\* b(거듭제곱 a의 b승), a / b, a // b(나눗셈의 몫), a % b(나눗셈의 나머지)

## 자료형

```python
#리스트 list
list_name=[1,2,3,4]

min(list_name) #리스트에서 쓸 수도 있다
list_name.append(11)
list_name.remove(11)

list_name[2]# 3
list_name[:-2] # 1, 2 (3은 아님에 유의) 최종 위치는 :뒤 숫자 하나 전!
list_name[::2] # 맨 뒷자리는 증가값. 2씩 증가한 요소 반환
list_name[0:2]# 0,1번째 원소 리스트

#set
set_name={1,2,3,4} #이렇게 하거나
set_name=set() #이렇게 하거나
set_name={'a','b','c'} #순서 없고 중복요소는 저장 안함
set_name.update({'d','e'})
set_name.remove('c')
set_name.add('f')
#set은 순서가 없으니 인덱싱 불가능 list(set_name)이렇게 변환하면 가능

#tuple
tuple_name=(1,2,3,4)
tuple_name[1]

#dict
dict_name={"key":"value"}
{"a" : 1, "b":2}
dict_name["key"]
```

dictionary

키로는 immutable(int tuple float bool)한 값은 사용할 수 있지만, mutable(set list dict)한 객체는 사용할 수 없다.

배열 인덱싱 그림 뒤에서 부터 시작할 때는 -1부터 시작함에 유의

![Frame 5.png](https://blogger.googleusercontent.com/img/a/AVvXsEiONORxtZVgEyqZ628qWo8eyyM1BGsyY1S_-IH89NloDNwaW05V6dN-4jdUTQEEsRyKBFJDYSw8rwNr1QCDVyYjWm9V0cn1vuCau1B_Xee_fSPdAwVycgz9b_KU03405Tn5K4vRjsBV6kegKDOVWFsStNE3BJEK2XRxlugm7_04D8rCAQft5V9-sLV9dA)

리스트 관련 메소드

pop(위치) : 위치의 요소를 출력 후 삭제. 인수 없으면 그냥 맨뒤에서 출력 후 삭제

index(값) : 값이 저장된 위치를 반환

count(값): 갯수 세서 반환

extend(리스트):뒤에 추가해서 확장

reverse(): 순서 뒤집음

sort(): 오름차순으로 정렬.12345 reverse=True를 인자로 넣으면 내림차순

copy(): 리스트 복사

set 관련 메소드

pop : 인수 못넣고 무조건 맨뒤에거 출력후 삭제

add(값) : 값을 추가

update(세트): 뒤에 추가해서 확장. 리스트에서 extend랑 같은듯

remove(값): 값을 찾아서 삭제

제어문

```python
# for 문
for i in range (5):
	print(i)

# 두개도 가능
for i, letter in enumerate(['A', 'B', 'C']):
	print(i, letter)

# 0 A
# 1 B
# 2 C
```

range 보다 enumerate 쓰는걸 파이써닉 하다고 보는듯.

[https://www.daleseo.com/python-enumerate/](https://www.daleseo.com/python-enumerate/)

## 기타 함수들

min() max() 최대 최소 찾기

```python
min(5,7) #5 작은 수
max(5,7) #7 큰 수

min(list_name) #리스트에서도 쓸 수도 있다
```

split(): 문자열을 배열로 나눠줌

```python
text = 'Hello world, python'
strings = text.split()
print(strings)
#['Hello', 'world,', 'python']
text = 'Hello world, python'
strings = text.split(',')
print(strings)
```

join(): 리스트를 문자열로

```python
a = ['a', 'b', 'c', 'd', '1', '2', '3']
print(a)
print()

# 리스트를 문자열로 : join 이용
result1 = "".join(a)
a = ['BlockDMask', 'python', 'join', 'example']

 
# 리스트를 구분자와 함께 문자열로 합치기
result1 = "_".join(a)

result2 = ".".join(a)
```

abs(): 절대값

내장함수라 import 안해도 됨

숏코딩 팁

[https://computer-choco.tistory.com/397](https://computer-choco.tistory.com/397)

pythonic 파이써닉

파이썬 언어의 철학 중 하나로, 파이썬에서 가독성과 코드의 간결함을 중요시하는 프로그래밍 스타일

앞으로 더 쓸만한 거

- [ ] 함수와 모듈
- [ ] 객체지향 프로그래밍의 개념과 클래스, 상속
- [ ] 예외처리의 개념, try-except
- [ ] 파일 입출력
- [ ] 정규표현식
- [ ] 람다 함수의 개념과 사용법
