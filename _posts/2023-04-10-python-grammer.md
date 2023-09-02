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

## 산술 연산자

a + b, a - b, a \* b, a \*\* b(거듭제곱 a의 b승), a / b, a // b(나눗셈의 몫), a % b(나눗셈의 나머지)

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

**리스트 관련 메소드**

pop(위치) : 위치의 요소를 출력 후 삭제. 인수 없으면 그냥 맨뒤에서 출력 후 삭제

index(값) : 값이 저장된 위치를 반환

count(값): 갯수 세서 반환

extend(리스트):뒤에 추가해서 확장

reverse(): 순서 뒤집음

sort(): 오름차순으로 정렬.12345 reverse=True를 인자로 넣으면 내림차순

copy(): 리스트 복사

**set 관련 메소드**

pop : 인수 못넣고 무조건 맨뒤에거 출력후 삭제

add(값) : 값을 추가

update(세트): 뒤에 추가해서 확장. 리스트에서 extend랑 같은듯

remove(값): 값을 찾아서 삭제

제어문

```python
# for 문
for i in range (5):
	print(i)

# iterable을 enumerate해서 인덱스와 내용을 가져올 수 있다
for i, letter in enumerate(['A', 'B', 'C']):
	print(i, letter)

# 0 A
# 1 B
# 2 C
```

range 보다 enumerate 쓰는걸 파이써닉 하다고 보는듯.

[https://www.daleseo.com/python-enumerate/](https://www.daleseo.com/python-enumerate/)

## 함수

```python
def returnText(a):
    text = a+" is the text"
    return text
```

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

### 파일 읽기 쓰기

```python
#원래는 열고 읽고 닫고 하지만
file = open('파일경로/파일이름', 'r')
content = file.read()
print(content)
file.close()

#with를 쓰면 자동으로 닫아줌
with open('파일경로/파일이름', 'r') as file:
    content = file.read()
    print(content)


#쓰는 것도 마찬가지
file = open('파일경로/파일이름.txt', 'w')
file.write('파일에 저장할 내용')
file.close()

with open('파일경로/파일이름', 'w') as file:
    file.write('내용')
```

### 클래스

```python
class MyClass:
    def __init__(self, arg1, arg2):
        self.arg1 = arg1
        self.arg2 = arg2

    def method1(self):
        # 메소드 동작 구현
        pass

    def method2(self, parameter):
        # 메소드 동작 구현
        pass


# 이렇게 인스턴스 생성
obj = MyClass(arg1_value, arg2_value)
```

init은 인스턴스 초기화

self는 인스턴스 자체이고 모든 메소드에서는 첫번째 인자로 self를 불러야함. 그래야 인스턴스 내부 변수에 접근

### 클래스 상속

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print("The animal speaks")

class Dog(Animal):
    def __init__(self, name):
        super().__init__(name)

    def speak(self):
        print("Woof!")

class Cat(Animal):
    def __init__(self, name):
        super().__init__(name)

    def speak(self):
        print("Meow!")

# Animal 클래스의 인스턴스 생성
animal = Animal("Animal")
animal.speak()  # 출력: The animal speaks

# Dog 클래스의 인스턴스 생성
dog = Dog("Dog")
dog.speak()  # 출력: Woof!

# Cat 클래스의 인스턴스 생성
cat = Cat("Cat")
cat.speak()  # 출력: Meow!
```

앞으로 더 쓸만한 거

- [ ] 예외처리의 개념, try-except
- [ ] 정규표현식
- [ ] 람다 함수의 개념과 사용법
