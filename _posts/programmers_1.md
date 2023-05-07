---
layout: post
title:  "programmers algorithm level1"
#date:   2022-05-28 
categories: "coding_test"
tags: "algorithm","coding_test"
use_math: false
use_mermaid: false
---

# programmers level1 문제 푼거 정리

### 숫자 문자열과 영단어

```python
def solution(s):
    s = s.replace("zero", "0")
    s = s.replace("one", "1")
    s = s.replace("two", "2")
    s = s.replace("three", "3")
    s = s.replace("four", "4")
    s = s.replace("five", "5")
    s = s.replace("six", "6")
    s = s.replace("seven", "7")
    s = s.replace("eight", "8")
    s = s.replace("nine", "9")

    answer = int(s)
    return answer
```

다른 사람 답
딕셔너리로 더 가독성 좋고 짧게 처리함.

### 키패드 누르기

내답 python

```python
number_coord = {1: [0, 0], 2: [1, 0], 3: [2, 0], 4: [0, 1], 5: [1, 1], 6: [2, 1], 7: [0, 2], 8: [1, 2], 9: [2, 2], 0: [1, 3]}

def solution(numbers, hand):
    right_hand_coord = [2, 3]
    left_hand_coord = [0, 3]
    answer = ''
    for i in range(len(numbers)):
        if numbers[i] == 1 or numbers[i] == 4 or numbers[i] == 7:
            answer += "L"
            left_hand_coord = number_coord[numbers[i]]
        elif numbers[i] == 3 or numbers[i] == 6 or numbers[i] == 9:
            answer += "R"
            right_hand_coord = number_coord[numbers[i]]
        elif numbers[i] == 2 or numbers[i] == 5 or numbers[i] == 8 or numbers[i] == 0:
            right_distance = abs(right_hand_coord[0]-number_coord[numbers[i]][0])+abs(
                right_hand_coord[1]-number_coord[numbers[i]][1])
            left_distance = abs(left_hand_coord[0]-number_coord[numbers[i]][0])+abs(
                left_hand_coord[1]-number_coord[numbers[i]][1])
            if right_distance < left_distance:
                answer += "R"
                right_hand_coord = number_coord[numbers[i]]
            elif right_distance > left_distance:
                answer += "L"
                left_hand_coord = number_coord[numbers[i]]
            elif right_distance == left_distance:
                if hand == "right":
                    answer += "R"
                    right_hand_coord = number_coord[numbers[i]]
                elif hand == "left":
                    answer += "L"
                    left_hand_coord = number_coord[numbers[i]]
    return answer
```

다른 사람 답
비슷한데 for i in numbers랑 변수 명이 훨 깔끔

### 크레인 인형 뽑기

```python
def solution(board, moves):
answer = 0
stack = []

for i in moves:
    move = i-1
    for row in range(len(board)):

        if board[row][move] != 0:
            stack.append(board[row][move])
            board[row][move] = 0
            if len(stack) >= 2:
                if stack[-1] == stack[-2]:
                    stack.pop()
                    stack.pop()
                    answer += 2
            break
return answer

```

다른 사람꺼 봤는데 나랑 비슷함

### 음양더하기

```python
def solution(absolutes, signs):
    answer = 0
    for i in range(len(absolutes)):
        if signs[i]:
            answer += absolutes[i]
        else:
            answer -= absolutes[i]
    return answer
```

??? 쉬웠음 근데 다른 사람 푼거보고 충격

```python
def solution(absolutes, signs):
    return sum(absolutes if sign else -absolutes for absolutes, sign in zip(absolutes, signs))
```

### 없는 숫자 더하기

내답

```python
def solution(numbers):
    answer = 0
    for i in range(10):
        if i not in numbers:
            answer += i
    return answer
```

```python
def solution(numbers):
    return 45 - sum(numbers)
```

오 아이디어

### 약수의 갯수와 덧셈

내답

```python
sqrt_num_list = []
for i in range(1, 100):
    sqrt_num_list.append(i**2)

def solution(left, right):
    answer = 0
    for num in range(left, right+1):
        if num in sqrt_num_list:
            answer -= num
        else:
            answer += num

    return answer
```

남의답 제곱수를 구하는데 나는 리스트를 만들었고 이 답은 \*\*0.5를 했다는 것이 인상적 그부분만 빼면 똑같은

js 도 math가 있구나 나중에 함다시 봐야지

### 신규 아이디 추천

내 풀이

조건 좀 많긴한데 엄청 쉬운거 같아서 대충 짰다가 조건마다 조금씩 빠트리거나 실수한 부분때문에 오래 걸렸다

```python
alphabet = "abcdefghijklmnopqrstuvwxyz"
number = "1234567890"

def solution(new_id):
    answer = new_id
    answer = answer.lower()  # 1
    print("1--"+answer)
    current_pointer = 0  # 2
    while current_pointer != len(answer):
        if answer[current_pointer] not in alphabet+number+"-" + "_" + ".":
            answer = answer[:current_pointer]+answer[current_pointer+1:]
            current_pointer -= 1
        current_pointer += 1
    print("2--"+answer)
    while ".." in answer:
        answer = answer.replace("..", ".")  # 3
    print("3--"+answer)
    if len(answer) != 0:
        if answer[0] == ".":  # 4
            answer = answer[1:]
    if len(answer) != 0:
        if answer[-1] == ".":
            answer = answer[:-1]
    print("4--"+answer)
    if len(answer) == 0:  # 5
        answer = "a"
    print("5--"+answer)
    if len(answer) >= 16:  # 6
        answer = answer[:15]
        while answer[-1] == ".":
            if len(answer) <= 1:
                answer = ""
                break
            answer = answer[:-1]
    print("6--"+answer)
    if len(answer) <= 2:  # 7
        while len(answer) < 3:
            answer += answer[-1]
    print("7--"+answer)
    return answer
```

다른 사람 풀이: 정규식 나도 정규식 익혀야겠다
패키지 re를 사용

js 다른사람 여기도 정규식
replace 사용

### 내적

엄청 쉬웠음 근데 보자마자 다른사람들이 괴물같이 풀어놨을걸 직감해서 고민 좀 해보다가 그냥 길게 풀음

```python
def solution(a, b):
    answer = 0
    for i in range(len(a)):
        answer += a[i]*b[i]
    return answer
```

다른 사람 답 zip 람다 사용

### 완주하지 못한 선수

쉬운데? 하면서 풀었지만 효율성 검사에서 걸림

```python
def solution(participant, completion):
    for complete_name in completion:
        participant.remove(complete_name)

    answer = participant[0]
    return answer
```

remove 같은게 o(n)이라 많이 걸리나봄 그래서 일단 sort를 해봤는데 실패

```python
def solution(participant, completion):
    participant.sort()
    completion.sort()
    for complete_name in completion:
        participant.remove(complete_name)

    answer = participant[0]
    return answer
```

누가 해쉬테이블을 만들라는 힌트를 써놔서 그대로 했더니 해결

```python
def solution(participant, completion):
    participant_dict = {}
    for i in range(len(participant)):
        if participant[i] in participant_dict:
            participant_dict[participant[i]] += 1
        else:
            participant_dict[participant[i]] = 1
    for complete_name in completion:
        participant_dict[complete_name] -= 1
    for i in participant:
        if participant_dict[i] != 0:
            answer = i
    return answer
```

다른 사람 답 collection 모듈 해쉬로 사용

또 다른 사람 답 우와 이건 해시 함수 사용. 해시라는 내장 함수가 있나?

js 숏코딩 이건 너무하네 underscore 라이브러리라고 한다
`var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))`

### 신고 결과 받기

문제를 꼼꼼히 읽자 문제를 잘못읽어서 여러번 다시 읽고 고침
신고를 하는 사람 신고를 받는사람 이런 경우에 변수명을 뭐라 해야 할지가 고민 reporter reported 이런식으로 했는데 구분이 잘 안간다.

```python
def solution(id_list, report, k):
    reporter_dict = {}
    reported_dict = {}
    answer = []
    stop_id = set()

    for i in id_list:
        reported_dict[i] = set()
        reporter_dict[i] = set()

    for i in report:
        reporter_id, reported_id = i.split(" ")
        reported_dict[reported_id].add(reporter_id)
        reporter_dict[reporter_id].add(reported_id)

    for i in id_list:
        if len(reported_dict[i]) >= k:
            stop_id.add(i)

    for i in id_list:
        answer.append(len(reporter_dict[i] & stop_id))

    return answer
```

### 직사각형 별찍기

```python
a, b = map(int, input().strip().split(' '))

for i in range(b):
    print("*" * a)
```

헐 나랑 같은데 \_를 i 대신 쓰네 i를 내부에서 다시 안 쓴다는 뜻인가? 좋은거같다 좀더 찾아보고 나도 써야지

### 행렬의 덧셈

쉬움 그렇지만 조금 버벅댐

내코드

```python
def solution(arr1, arr2):
    answer = []
    for i in range(len(arr1)):
        answer.append([])
        for j in range(len(arr1[0])):
            answer[i].append(arr1[i][j]+arr2[i][j])

    return answer
```

아 넘파이 쓰기도 써도 되나
나도 이거 아는데 좀 까먹음 다시 정리하면 좋을지도 라고 생각했지만 넘파이는 쓰면 안된다고 한다

### x만큼 간격이 있는 n개의 숫자

```python
def solution(x, n):
    answer = []
    temp = x
    while n != 0:
        answer.append(temp)
        temp += x
        n -= 1
    return answer
```

다른 사람 답

[i * x + x for i in range(n)]
요런 구문도 있네

### k번째수

내답 쉬운편. 원래 입력값은 가급적이면 변하지 않게 하는 것이 좋겠다. 나중에 착각할라

```python
def solution(array, commands):
    answer = []
    for command in commands:
        temp = array[command[0]-1:command[1]]
        temp.sort()
        answer.append(temp[command[2]-1])
    return answer
```

다른 사람의 답 역시나 람다로 숏코딩

다른 사람 js map이랑 필터 사용

### 하샤드 수

쉬움 근데 파이썬에서 string이 str로 나타낸다는 것을 깨달음. 그리고 str도 이터러블 하다는 것을 알았다. 그냥 해봤는데 되더라

```python
def solution(x):
    answer = False
    str_x = str(x)
    div_num = 0
    for i in str_x:
        div_num += int(i)
    if x % div_num == 0:
        answer = True

    return answer
```

다른 사람 코드 아 sum으로 리스트 요소를 더할 수 있구나

### 3진법 뒤집기

진법 계산하는 법이 기억이 잘 안나서 더듬더듬함. 이런거 나오면 연필로 풀어보고 하는 것이 좋을 것 같다.

내 코드

```python
def solution(n):
    temp = n
    three = []
    answer = 0

    while temp != 0:
        three.append(temp % 3)
        temp = int(temp/3)
    three.reverse()
    for i in range(len(three)):
        answer += 3**i*three[i]

    return answer
```

다른 사람 답

헐 int에 이런게 있었구나

int(tmp, 3) 로 tmp 스트링을 삼진법으로 읽어서 자연수로 만들어준다

js에도 이 기능이 있네 tostring(3) 이렇게 쓴다

### 모의고사

와 이렇게 길게 짜도 괜찮나 싶었지만 뭔가 딱히 다른 생각이 안났다.

```python
first_supo = [1, 2, 3, 4, 5]
second_supo = [2, 1, 2, 3, 2, 4, 2, 5]
third_supo = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

def solution(answers):
    first_supo_answer = first_supo * \
        int(len(answers)/5)+first_supo[:int(len(answers) % 5)]
    second_supo_answer = second_supo * \
        int(len(answers)/8)+second_supo[:int(len(answers) % 8)]
    third_supo_answer = third_supo * \
        int(len(answers)/10)+third_supo[:int(len(answers) % 10)]
    points = [0, 0, 0]
    answer = []
    for i in range(len(answers)):
        if first_supo_answer[i] == answers[i]:
            points[0] += 1
        if second_supo_answer[i] == answers[i]:
            points[1] += 1
        if third_supo_answer[i] == answers[i]:
            points[2] += 1
    for i in range(len(points)):
        if max(points) == points[i]:
            answer.append(i+1)

    return answer
```

다른사람 답 아근데 비슷한데 나머지로 바로 구할 수 있었구나

js 다른사람 방식은 비슷하네 filter랑 math랑 max 사용

### 짝수와 홀수

너무 쉬워서 할말 없음

```python
def solution(num):
    if num%2==1:
        answer="Odd"
    else:
        answer="Even"
    return answer
```

남의코드 : 그렇지만 다른사람들은 더짧게 풀음

이해가 안되서 일단 남겨둠

```
def evenOrOdd(num):
    return ["Even", "Odd"][num & 1]
```

### 체육복

deep copy와 shallow copy의 차이점을 잘 알아 두어야겠다

원래 이런식으로 했었는데

```python
lost_temp = lost
reserve_temp = reserve

print("lost", lost) #둘이 같은거 나옴
print("lost_temp", lost_temp)
```

복사본을 remove를 하면 원본도 훼손됨을 확인
내 답. 많이 헤멨다. deep shallow copy 알고 있었는데 기억이 잘 안났음.. 영 모르겠으면 그냥 질문 게시판을 보자
그리고 sort는 따로 정렬이 안되어있을 수 있다는 소리가 없었는데 해야했다. 당연히 정렬되어있다는 언급 없으면 정렬이 안되어 있을 수도 있는 것이다.

```python
def solution(n, lost, reserve):
    lost.sort()
    reserve.sort()
    lost_temp = []
    reserve_temp = []

    for i in range(len(lost)):
        lost_temp.append(lost[i])
    for i in range(len(reserve)):
        reserve_temp.append(reserve[i])
    answer = n

    for i in lost:
        if i in reserve_temp:
            reserve_temp.remove(i)
            lost_temp.remove(i)

    for i in lost_temp:
        if i-1 in reserve_temp:
            reserve_temp.remove(i-1)
        elif i+1 in reserve_temp:
            reserve_temp.remove(i+1)
        else:
            answer -= 1

    return answer
```

남의 코드 발상이나 흐름은 비슷하지만 훨씬 정리되고 깔끔하다
근데 옛날코드라 안 정렬을 안함

### 핸드폰 번호 가리기

엄청 쉬움 난이도 편차가 왜이렇게 있는 편이지

```python
def solution(phone_number):

    answer="*"*len(phone_number[:-4])+phone_number[-4:]
    return answer
```

오 남의것도 내꺼랑 비슷함
js 구경 정규식은 외계어 같네

```
// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));
```

js repeat나 slice 나 다 모르는 함수다… 여기는 len 이 아니라 length구나 이것도 상기시켜 준다.

js 와이건 외계어 같다

`const solution = n => [...n].fill("*",0,n.length-4).join("")`

### 평균 구하기

쉬워서 할말 없음

```python
def solution(arr):
    answer = sum(arr)/len(arr)
    return answer
```

### 콜라츠 추측

쉬움. 근데 제발 문제 좀 끝까지 읽어…

```python
def solution(num):
    answer = 0
    while num!=1:
        if answer>500:
            answer=-1
            break
        if num%2==0:
            num=num/2
            answer+=1
        else:
            num=num*3+1
            answer+=1

    return answer
```

---

좀 적응 한거 같아서 레벨 2도 풀어보기로 했다.

근데 난이도가 상당히 다르게 느껴진다. 문제가 이해부터 좀 복잡… 국어시험인가

### 문자열 압축

문제말이 길고 헷갈렸다. 풀었을 때 테스트 케이스 다섯개 정도만 오류남

하나는 실행 시간 엄청 짧길래 아 1이구나 해서 고쳤고

다른거는 다른사람들 질문 보면서 10넘어가면 문자열이 두자리수가 된다는 것을 까먹은 것과 카운트를 0부터 시작해서 하나 부족해지는 문제를 고쳤다

참 하나는 런타임 에러도 나서 리스트를 하나 뺐다. 리스트가 속도를 느리게 하나?

```python
def solution(s):
    answer = len(s)

    for i in range(1, int(len(s)/2)+1):
        count = 1
        str_length = len(s)
        current_slice = s[0:i]
        for j in range(1, int(len(s)/i)+1):
            next_slice = s[i*(j):i*(j+1)]
            if current_slice == next_slice:
                count += 1
            else:
                if count > 1:
                    str_length = str_length-(i*(count-1)) + len(str(count))
                count = 1
            current_slice = next_slice
        if str_length < answer:
            answer = str_length
    return answer
```

코드가 길어져서 다른사람의 답을 읽는데 시간도 오래걸리는데다가 감흥이 없어서 후기 안씀

쉬운거 풀음

### 최대 공약수와 최소 공배수

설마 약수를 구해서 최소 공배수를 구하나 하고 고민하다가 그냥 다 계산하기로 했다

내풀이 확실히 레벌 2보다 쉬움

```python
def solution(n, m):
    answer = [0, 1000001]
    n_set = set()
    m_set = set()
    for i in range(1, min(n, m)+1):
        if n % i == 0 and m % i == 0:
            answer[0] = i
    for i in range(1, m+1):
        n_set.add(i*n)
    for i in range(1, n+1):
        m_set.add(i*m)
    answer[1] = min(n_set.intersection(m_set))

    return answer
```

다른 사람 답. 와 나 수학 공부 다시해야 하는 거 아냐 이거를 기억 못했다

다들 유클리드 호제법으로 풀었다… 좀 창피하군..

지금도 잘 기억안나지만 스킵 나중에 한번 다시 찾아봐야지

```
# 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
# 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
def gcdlcm(a, b):
    c, d = max(a, b), min(a, b)
    t = 1
    while t > 0:
        t = c % d
        c, d = d, t
    answer = [c, int(a*b/c)]

    return answer

# 아래는 테스트로 출력해 보기 위한 코드입니다.
print(gcdlcm(3,12))
```

다른사람답. 와 이거도 되는거야? 그냥 math 모듈로 했잖아
math.gcd(n,m)

### 행렬의 곱셈

옛날에 numpy 썼던 기억을 되살려서 해봤다

간단하게 했는데 코딩 실력이 안늘은거 같다

numpy는 파이썬에서 제공하는 모듈이 아니라 코테에선 사용불가능할 수도 있다고 댓글에서 그러네 그럼 안써야겠다.

```python
import numpy as np

def solution(arr1, arr2):
    answer = [[]]
    arr1 = np.array(arr1)
    arr2 = np.array(arr2)
    answer = np.dot(arr1, arr2)

    return answer
```

역시 모듈 없이 했네

### 기능 개발

짜기는 빨리 짰는데 생각이 자꾸 꼬여서 자괴감 들었다.

그냥 직진하지 말고 신호등이 파란불이 되면 무조건 건너는게 아니라 차가 오는지 확인하는 것처럼 어떤 조건일 때 문제가 생길 지 생각을해야한다.

리스트가 넘어가버리는 조건을 자꾸 생각 안하고 뒤늦게 생각하니 생각이 꼬여서 누더기 처럼 고치다가 한번 싹 지웠다.

```python
def solution(progresses, speeds):
    answer = []
    left_list = []

    for i in range(len(speeds)):
        temp = int((100-progresses[i])/speeds[i])
        if (100-progresses[i]) % speeds[i] > 0:
            temp += 1
        left_list.append(temp)

    cursor = 1
    current = 0
    while len(left_list) >= current+1:
        while current+cursor+1 <= len(left_list):
            if left_list[current+cursor] <= left_list[current]:
                cursor += 1
                print("current", current, "cursor", cursor, left_list)
            else:
                break
        current += cursor
        answer.append(cursor)
        print("current", current, "cursor", cursor, left_list)

        cursor = 1
    return answer
```

다른 사람 코드 아 zip 사용

### 😭조이스틱

아직 해결 못함.. 알것 같은데 뒤집은 리스트 붙여서 가장 큰 0묶음 구해서 그거 피하는 방향으로 하면 될것 같은데

### 실패율

레벨1인데 런타임 에러가 30%나서 끙끙 앓았는데

나는 런타임 에러가 시간 초과란 뜻인줄 알고 코드 최적화만 하고 있었는데
RecursionError(재귀 함수의 연산이 너무 깊어졌을때 스택 초과), ZeroDivision(0으로 나눔),ValueError(값이 없는데 뭔가 하려할 때) 등등의 경우도 있다는 것을 깨달음.

테스트 값을 0으로 넣어보니 답이 바로 나오더라…

쓸데없이 정말 시간을 많이 썼어..

```python
def solution(N, stages):
    answer = []
    percent_list = []  # 0 for _ in range(N)
    cur_total = len(stages)

    for i in range(1, N+1):
        if stages.count(i) == 0:
            percent_list.append(0)
        else:
            percent_list.append(stages.count(i)/cur_total)
        cur_total -= stages.count(i)

    for i in range(N):
        temp = percent_list.index(max(percent_list))
        print(percent_list)
        answer.append(temp+1)
        percent_list[temp] = -1

    return answer
```

시간복잡도는 o(n^2)이다… 시간 꽤 걸린다.

매번 count 하지 않고 초반에 사전으로 미리 각 스테이지별 인원을 집계해두면 정렬을 제외 했을 때 O(n)의 시간복잡도로 풀 수 있습니다.라고 한다…

다른사람 답 람다를 써서 구함.

### 제일 작은 수 제거하기

레벨2 잠깐 맛보다가 멘탈에 충격받아서

다시 레벨1좀 풀기로함

내 풀이 아주 쉬웠음

```python
def solution(arr):
    answer = []
    min_num=min(arr)
    for i in arr:
        if i!=min_num:
            answer.append(i)
    if len(answer)==0:
        answer=[-1]
    return answer
```

댓글에서 본 팁: min 을 하면 최소값을 찾기 위해, 자체적으로 for 문을 돌아서, 시간 복잡도 n은 추가 됩니다

### 정수 제곱근 판별

엄청 쉬웠음 설명 없음

```python
def solution(n):
    answer = 0

    if int(n**(0.5)) == n**(0.5):
        answer = (n**(0.5)+1)**2
    else:
        answer=-1
    return answer
```

다른 코드

```
# 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
# 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
def nextSqure(n):
    return n == int(n**.5)**2 and int(n**.5+1)**2 or 'no'
```

엥 이게 뭐야? return 에 and랑 or?????

n == int(n**.5)**2 and int(n**.5+1)**2 or 'no'

and는 false 나오면 그 뒤로는 안봄

`A and B`

A가 참이라면 연산의 결과는 뒤에 B에 달려있으므로 그냥 B의 결과 리턴.

B가 참이라면 `A and B`연산의 결과는 참인거고, B가 거짓이라면 `A and B`연산의 결과는 거짓. 심지어 B가 문자여도 문자가 결과

or는 true 나오면 그뒤로는 안봄

그걸 이용해서

n == int(n**.5)\*\*2가 참이면 int(n\*\*.5+1)**2 를 결과로 반환 거짓이면 바로 no로 가네

(n == int(n**.5)\*\*2) ? (int(n\*\*.5+1)**2) : ('no') 이거랑 같은 거 같은데

파이썬은 다른 언어에서 볼 수 있는 ?: 문법 없다 대신 if else 를 쓴다.

요런 답도 있다.제곱수가 있는지 1로 나눈 나머지가 있는지 봐서 답 판별

```
def nextSqure(n):
    from math import sqrt
    return "no" if sqrt(n) % 1 else (sqrt(n)+1)**2
```

### 자연수 뒤집어 배열로 만들기

내코드 뭔가 기묘하게 풀었다.

```python
def solution(n):
    answer = []
    num_to_str = str(n)
    for i in range(len(num_to_str)-1, -1, -1):
        answer.append(int(num_to_str[i]))

    return answer
```

다른사람 reversed 사용

또 다른 사람 reversed 대신[::-1]를 쓴다네 신기하네 그럼 전체 거꾸로 도나..?

### 정수 내림차순으로 배치하기

비효율적이고 이상하게 풀었는데 피곤해서 그냥 제출

```python
def solution(n):
    temp_list = []
    for i in range(len(str(n))):
        temp_list.append(str(n)[i])
    temp_list.sort(reverse=True)

    answer = "0"
    for i in temp_list:
        answer += str(i)
    answer = int(answer)
    return answer
```

남의 답

```
def solution(n):
    ls = list(str(n))
    ls.sort(reverse = True)
    return int("".join(ls))
```

ls = list(str(n)) 헐 스트링을 한글자씩 바로 리스트로 만들어주나보네 그거 몰라서 좀 돌아갔다

join 도 모른다.

```
def solution(n):
    return int("".join(sorted(list(str(n)), reverse=True)));
```

sorted하면 리스트로 반환해서 나와서 리스트로 안감싸도 된다고 한다

### 프린터

레벨 2인데 비교적 쉬웠다.

조건 갈리는 경우 좀 잘 생각하자 대충 휙 하고 대충 휙 틀려서 수정하고

```python
def solution(priorities, location):
    answer = 0
    cur_location = location

    while True:
        print(priorities, cur_location)
        if max(priorities) > priorities[0] and cur_location == 0:
            priorities.append(priorities[0])
            priorities.pop(0)
            cur_location = len(priorities)-1
        elif max(priorities) > priorities[0] and cur_location != 0:
            priorities.append(priorities[0])
            priorities.pop(0)
            cur_location -= 1
        else:
            priorities.pop(0)
            cur_location -= 1
            answer += 1
        if cur_location == -1:
            break

    return answer
```

다른 사람 답

any를 썼다.

```
def solution(priorities, location):
    queue =  [(i,p) for i,p in enumerate(priorities)]
    answer = 0
    while True:
        cur = queue.pop(0)
        if any(cur[1] < q[1] for q in queue):
            queue.append(cur)
        else:
            answer += 1
            if cur[0] == location:
                return answer
```

댓글에서 본 팁 while True문은 피하려는 편이라고 한다 최대한 조건을 거는 형태로 작업한다고 한다. 실무에서는 데드락이나 무한루프에 빠져버리는 경우가 생길 수 있으니까요. break을 걸어준 조건문이 한번이라도 빗나가면 큰일이 벌어지기 때문에 위험하다고 생각합니다

다른사람 코드 for else를 활용

### 카펫

쉬웠다 야호

내코드

```python
def countBoarder(row, col):
    return 2*(row+col)+4

def solution(brown, yellow):
    for i in range(1, yellow+1):
        if yellow % i == 0:
            if countBoarder(i, yellow/i) == brown:
                break

    answer = [yellow/i+2, i+2]
    return answer
```

반복문 저만큼 다 안돌아도 되는건데 그냥 상관 없어서 돌려서 좀 마음에 걸렸다

어차피 중간에 멈출건데 상관 있나?

다른사람 코드

```
def solution(brown, red):
    for i in range(1, int(red**(1/2))+1):
        if red % i == 0:
            if 2*(i + red//i) == brown-4:
                return [red//i+2, i+2]
```

반복 부분은 딱 제곱수만큼까지만 구하고 거희 비슷하긴한데..

2\*(i + red//i) == brown-4: 이 부분뭐지

헐 // 연산자(Floor Division)이라고 나누고 소수점있으면 가우스 적용하는 연산자가 있네 처음 알았다

결국 그럼 생각자체는 나랑 비슷하긴 하다..

```
import math
def solution(brown, yellow):
    w = ((brown+4)/2 + math.sqrt(((brown+4)/2)**2-4*(brown+yellow)))/2
    h = ((brown+4)/2 - math.sqrt(((brown+4)/2)**2-4*(brown+yellow)))/2
    return [w,h]
```

근의 공식으로 푼 사람도 있다.

The inverse of the split method is **join**

split의 반대가 join 이었다.

[https://blockdmask.tistory.com/468](https://blockdmask.tistory.com/468)

파이썬 deep copy

[https://wikidocs.net/16038](https://wikidocs.net/16038)

파이썬은 [condition] ? [true_value] : [false_value] 이런 형태의 삼항연산자가 없다

[true_value] if [condition] else [false_value] // 파이썬 지원

### 😭큰수 만들기

아직 못풀었다

테스트 케이스 10번만 시간초과

아예 코드를 최대 찾는 식으로 해야할 듯

### 이상한 문자 만들기

멘탈 회복을 위해 푼 쉬운 문제

근데 한방에 안풀려서 멘탈이 또 위험

이런건 한방에 좀 풀어라

```python
def solution(s):
    answer = ''
    temp_list = s.split(" ")
    for i in range(len(temp_list)):
        temp_word = ""
        for j in range(len(temp_list[i])):
            if j % 2 == 0:
                temp_word += temp_list[i][j].upper()
            else:
                temp_word += temp_list[i][j].lower()
        temp_list[i] = temp_word
    answer = " ".join(temp_list)
    return answer
```

다른사람 답

enumerate를 알아야겠다.

```
def toWeirdCase(s):
    return " ".join(map(lambda x: "".join([a.lower() if i % 2 else a.upper() for i, a in enumerate(x)]), s.split(" ")))
```

### 가운데글자 가져오기

쉬움 한방

```python
def solution(s):
    if len(s) % 2 == 0:
        return s[int(len(s)/2)-1]+s[int(len(s)/2)]
    else:
        return s[int(len(s)/2)]
```

다른사람 답 본받자

```
def string_middle(str):
    # 함수를 완성하세요

    return str[(len(str)-1)//2:len(str)//2+1]

# 아래는 테스트로 출력해 보기 위한 코드입니다.
print(string_middle("power"))
```

### 시저 암호

```python
alphabet = "abcdefghijklmnopqrstuvwxyz"

def solution(s, n):
    answer = ''
    for i in range(len(s)):
        if s[i].lower() in alphabet and s[i].lower() == s[i]:
            answer += alphabet[(alphabet.index(s[i].lower())+n) %
                               len(alphabet)]
        elif s[i].lower() in alphabet and s[i].upper() == s[i]:
            answer += alphabet[(alphabet.index(s[i].lower())+n) %
                               len(alphabet)].upper()
        else:
            answer += s[i]
    return answer
```

남의 답

```
# 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
# 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
def caesar(s, n):
    s = list(s)
    for i in range(len(s)):
        if s[i].isupper():
            s[i]=chr((ord(s[i])-ord('A')+ n)%26+ord('A'))
        elif s[i].islower():
            s[i]=chr((ord(s[i])-ord('a')+ n)%26+ord('a'))

    return "".join(s)
    # 주어진 문장을 암호화하여 반환하세요.

# 실행을 위한 테스트코드입니다.
print('s는 "a B z", n은 4인 경우: ' + caesar("a B z", 4))
```

isupper islower chr ord 다 모름

### 성격유형 검사지

엄청 쉬운데 지문이 길고 내용이 많았다

```python
def solution(survey, choices):
    choices_dict = {"R": 0, "T": 0, "C": 0,
                    "F": 0, "J": 0, "M": 0, "A": 0, "N": 0}
    answer = ''
    for i in range(len(survey)):
        if choices[i] <= 3:
            choices_dict[survey[i][0]] += 4-choices[i]
        elif choices[i] >= 4:
            choices_dict[survey[i][1]] += choices[i]-4

    if choices_dict["R"] >= choices_dict["T"]:
        answer += "R"
    else:
        answer += "T"
    if choices_dict["C"] >= choices_dict["F"]:
        answer += "C"
    else:
        answer += "F"
    if choices_dict["J"] >= choices_dict["M"]:
        answer += "J"
    else:
        answer += "M"
    if choices_dict["A"] >= choices_dict["N"]:
        answer += "A"
    else:
        answer += "N"
    return answer
```

와 나랑 진짜 거의 똑같은 풀이 봤다

아 이풀이가 좀더 좋은듯

```
def solution(survey, choices):

    my_dict = {"RT":0,"CF":0,"JM":0,"AN":0}
    for A,B in zip(survey,choices):
        if A not in my_dict.keys():
            A = A[::-1]
            my_dict[A] -= B-4
        else:
            my_dict[A] += B-4

    result = ""
    for name in my_dict.keys():
        if my_dict[name] > 0:
            result += name[1]
        elif my_dict[name] < 0:
            result += name[0]
        else:
            result += sorted(name)[0]

    return result
```

### 오픈채팅

레벨2인데 쉬웠다

```python
def solution(record):
    messages_stack = []
    ids = {}

    answer = []
    for i in range(len(record)):
        words = record[i].split(" ")

        if words[0] == "Enter" or words[0] == "Leave":
            messages_stack.append([words[0], words[1]])

        if words[1] not in ids.keys() or (words[0] == "Enter" and ids[words[1]] != words[2]) or words[0] == "Change":
            ids[words[1]] = words[2]

    for i in range(len(messages_stack)):
        if messages_stack[i][0] == "Enter":
            answer.append(ids[messages_stack[i][1]]+"님이 들어왔습니다.")
        if messages_stack[i][0] == "Leave":
            answer.append(ids[messages_stack[i][1]]+"님이 나갔습니다.")
    return answer
```

근데 다른사람 답을 보니 내꺼 엄청 복잡..

다른사람 답

나는 레코드 훑으면서 메세지를 따로 저장하는 스택으로 만들면서 이름딕셔너리도 만들고 이후에 답변 리스트 따로 만들었는데

여기는 이름딕셔너리만 만들고 답변 리스트를 바로 만들었네

```
def solution(record):
    answer = []
    namespace = {}
    printer = {'Enter':'님이 들어왔습니다.', 'Leave':'님이 나갔습니다.'}
    for r in record:
        rr = r.split(' ')
        if rr[0] in ['Enter', 'Change']:
            namespace[rr[1]] = rr[2]

    for r in record:
        if r.split(' ')[0] != 'Change':
            answer.append(namespace[r.split(' ')[1]] + printer[r.split(' ')[0]])

    return answer
```

다른사람 답 와 이건 정말 신기하네

```
def solution(record):
    user_id = {EC.split()[1]:EC.split()[-1] for EC in record if EC.startswith('Enter') or EC.startswith('Change')}
    return [f'{user_id[E_L.split()[1]]}님이 들어왔습니다.' if E_L.startswith('Enter') else f'{user_id[E_L.split()[1]]}님이 나갔습니다.' for E_L in record if not E_L.startswith('Change')]

```

### 괄호변환

재귀함수여서 좀 쫄았다. 근데 문제 더듬더듬읽고 그대로 풀었더니 풀렸다.

뭔가 마음이 명료하지 않은게

```python
def solution(p):

    answer = ''
    u = ""
    v = ""
    stack = []
    if len(p) == 0:
        return ""
    for i in range(len(p)):

        if p[:i+1].count("(") == p[:i+1].count(")"):
            u = p[:i+1]
            v = p[i+1:] if len(p) >= i+1 else ""
            break

    for i in range(len(u)):
        if u[i] == "(":
            stack.append(u[i])
        elif (u[i] == ")" and len(stack) > 0 and stack[-1] == "("):
            stack.pop()
        else:
            temp = ""
            for i in range(1, len(u)-1):
                temp += ")" if u[i] == "(" else "("

            return "("+solution(v)+")"+temp

    return u+solution(v)
```

다른사람답

```
def solution(p):
    if p=='': return p
    r=True; c=0
    for i in range(len(p)):
        if p[i]=='(': c-=1
        else: c+=1
        if c>0: r=False
        if c==0:
            if r:
                return p[:i+1]+solution(p[i+1:])
            else:
                return '('+solution(p[i+1:])+')'+''.join(list(map(lambda x:'(' if x==')' else ')',p[1:i]) ))
```

이해가 안되네… 람다 나도 해야하나

### 멀리 뛰기

문제 보자마자 조합으로 풀었는데 테스트 케이스가 런타임 에러나는 것이었다….

보니까 재귀로는 스택 초과 되어서 코테에서는 재귀로 문제를 잘 안푼다고 한다.

그래서 약분 한걸로 다시했는데 여전히 에러…

하…그래서 여기다가 DP도 섞어서도 해봄..

그래서 질문글들 쭉 봤는데 접근방식부터 틀린 것이었다.

근데도 안되는 것이었다.

피보나치 수열로 점화식으로 풀었단다..

누가 올려준 코드를 언어만 바꿔서 해봤는데 바로 풀림….

근데 점수가 쭉 올라가길래 죄책감이 들었다.

### 문자열을 정수형으로 바꾸기

?? 파이썬으로 너무 쉬운거 아닌가?

```python
def solution(s):
    answer = int(s)
    return answer
```

### 두 정수 사이의 합

```python
def solution(a, b):
    answer = 0
    if a < b:
        small = a
        big = b
    else:
        small = b
        big = a
    for i in range(small, big+1):
        answer += i
    return answer
```

### 문자열 내림차순으로 배치하기

흠… 내답

```python
def solution(s):
    temp = list(s)
    for i in range(len(temp)):
        temp[i] = ord(temp[i])
    temp.sort()
    for i in range(len(temp)):
        temp[i] = chr(temp[i])
    temp.reverse()
    answer = "".join(temp)
    return answer
```

남의 답

```
def solution(s):
    return ''.join(sorted(s, reverse=True))
```

sorted는 조건도 줄수있고 문자열에도 작동한다

```
def solution(s):
    s = list(s)
    s.sort(reverse = True)
    answer = ""
    for i in s:
        answer = answer + i
    return answer
```

아니네 바로 sort되는 구나 내가 뭘 착각했지 리버스도 쏘트 할때 되나보다

### 수박수박수

아주 쉬웠지만 내답 나름 짧다! 뿌듯

```python
def solution(n):
    answer = "수박"*(n//2)+"수"*(n % 2)
    return answer
```

다른 사람답 우와

```
def water_melon(n):
    s = "수박" * n
    return s[:n]

# 실행을 위한 테스트코드입니다.
print("n이 3인 경우: " + water_melon(3));
print("n이 4인 경우: " + water_melon(4));

```

### 문자열 다루기 기본

문제를 끝까지 안읽어서 문제 생김

```python
def solution(s):
    answer = False
    if len(s) == 6 or len(s) == 4:
        answer = True

    for i in range(len(s)):
        if s[i] not in "1234567890":
            answer = False
            break
    return answer
```

다른 답

```
def alpha_string46(s):
    return s.isdigit() and len(s) in (4, 6)

# 아래는 테스트로 출력해 보기 위한 코드입니다.
print( alpha_string46("a234") )
print( alpha_string46("1234") )

```

isdigit 으로 숫자인지 아닌지 알 수 있는걸 첨알음

### 김서방 찾기

내답

```python
def solution(seoul):
    answer = ''
    for i in range(len(seoul)):
        if seoul[i] == "Kim":
            answer = "김서방은 "+str(i)+"에 있다"
            break
    return answer
```

남의 답 {} format이 인상적

```
def findKim(seoul):
    return "김서방은 {}에 있다".format(seoul.index('Kim'))
```

엥 이거 왜 이런거지 sort 바로하면 왜 결과가 다르지

> print(["z","d"].sort())
> None
> k=["z","d"]
> k
> ['z', 'd']
> k.sort()
> k
> ['d', 'z']

와 sort 이런거도 되네 abs 조건으로 절대값 정렬

[https://stackoverflow.com/questions/19199984/sort-a-list-in-python](https://stackoverflow.com/questions/19199984/sort-a-list-in-python)

아 뭔가 깨달았다

a.sort()는 sort된 a를 바로 리턴해주는 것이 아니구나

> a.sort
> <built-in method sort of list object at 0x7fbce00fd680>
> a.sort()
> a
> ['bed', 'car', 'sun']

### 문자열 내맘대로 정렬

dict 사용법을 정확하게 잘 몰라서 좀 오래걸렸다

```python
def solution(strings, n):
    hash_dict = {}
    answer = []
    for i in range(len(strings)):
        if strings[i][n] in hash_dict.keys():
            hash_dict[strings[i][n]] = hash_dict.get(
                strings[i][n])+[strings[i]]
        else:
            hash_dict[strings[i][n]] = [strings[i]]

    temp = list(hash_dict.keys())
    temp.sort()
    for i in temp:
        temp_list = hash_dict.get(i)
        temp_list.sort()
        answer += temp_list

    return answer
```

우와 남의답

아 근데 현재는 같은 글자에 여러개 있을때 사전순이 안된다고 한다

```
def strange_sort(strings, n):
    '''strings의 문자열들을 n번째 글자를 기준으로 정렬해서 return하세요'''
    return sorted(strings, key=lambda x: x[n])

```

와 이건 뭐지

```
def strange_sort(strings, n):
    def sortkey(x):
        return x[n]
    strings.sort(key=sortkey)
    return strings

```

와 다다르네

```
from operator import itemgetter, attrgetter, methodcaller

def solution(strings, n):
    return sorted(sorted(strings), key=itemgetter(n))

```

list 보다 set이 빠르다

[https://checkwhoiam.tistory.com/87](https://checkwhoiam.tistory.com/87)

### 소수 찾기

내코드 다른사람들 다짧게 풀어서 놀랐다.

음 뒷자리가 1 3 5 7 9 로 시작해서 bfs로 이어붙이고 이걸 소수인지 아닌지 판별했다.

근데 2도 소수라는 것을 까먹었다던가

길이가 짧다던가

```python
def isPrime(n):
    count = 0
    if n == 1 or n == 0:
        return False
    if n == 2:
        return True
    for i in range(2, int(n**(0.5))+1):
        if n % i == 0:
            count += 1
    return False if count > 0 else True

def solution(numbers):
    answer = 0
    numbers = list(numbers)
    visited = []
    not_visited = []
    start_point = 0
    end_point = 0
    depth = 0
    for i in ["1", "3", "5", "7", "9"]:
        if i in numbers:
            visited.append([i])
            not_visited.append(
                numbers[:numbers.index(i)]+numbers[numbers.index(i)+1:])
            end_point += 1
    if "2" in numbers:
        answer += 1
    if len(visited) == 0:
        return answer

    while depth <= len(numbers):
        depth += 1
        for i in range(start_point, end_point):
            for j in range(len(not_visited[i])):
                visited.append(visited[i]+[not_visited[i][j]]
                               if len(not_visited[i]) > 0 else [])
                not_visited.append(not_visited[i][:j]+not_visited[i][j+1:])
        start_point = end_point
        end_point = len(visited)

    number_set = set()
    for i in range(len(visited)):
        visited[i].reverse()
        current_number = int("".join(visited[i]))
        if current_number not in number_set and isPrime(current_number):
            answer += 1
        number_set.add(current_number)
    return answer
```

다른사람 코드 잘 이해는 안되는데 라이브러리 쓴게 많다

```
from itertools import permutations
from collections import defaultdict
```

```
from itertools import permutations
def solution(n):
    a = set()
    for i in range(len(n)):
        a |= set(map(int, map("".join, permutations(list(n), i + 1))))
    a -= set(range(0, 2))
    for i in range(2, int(max(a) ** 0.5) + 1):
        a -= set(range(i * 2, max(a) + 1, i))
    return len(a)
```

|=은 |의 결과를 update한다는 뜻 아 그니까 결과에 or한거를 다시 결과에 넣어준다

a=a|b

a|=b인거구나

[https://velog.io/@nayoon-kim/파이썬-연산자](https://velog.io/@nayoon-kim/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%97%B0%EC%82%B0%EC%9E%90)

근데 거의다들 모든 조합 다 만들어서 소수 찾는걸로 푼거 같잖아

### 피보나치 수

재귀 함수 썼더니 런타임 에러 스택오버플로우 나서 dp로 싹 고쳤다.

재귀 함수는 그냥 쓰면 안되는 것인가

```python
dp = {0: 0, 1: 1}

def fib(n):
    for i in range(2, n+1):
        dp[i] = dp[i-1]+dp[i-2]

    return dp[n]

def solution(n):
    return fib(n) % 1234567
```

재귀 함수를 쓰거나 그럴때 테스트 케이스에다가 최대 조건 값을 한번 넣어 보는 것도 좋을 것 같다는 생각을 했다

남의 답

```
def fibonacci(num):
    a,b = 0,1
    for i in range(num):
        a,b = b,a+b
    return a

# 아래는 테스트로 출력해 보기 위한 코드입니다.
print(fibonacci(3))
```

for 문 속에 a,b=b,a+b를 a=b b=a+b라고 분래해 쓰면 다른 결과가 나오네요? 두 표달식은 다른 의미를 갖는건가요? 그냥 똑같은 걸 다르게 쓰는게 아닌가요? ― Quan 님에 질문에 대한 답변을 드리자면.. a=b b=a+b 라고 쓰면 순서가 정해 지기 때문에 먼저 계산한 결과 값을 가지고 다음 계산식을 계산하는 것이고 a, b = b, a+b 라고 쓰면 동시에 작업이 이루어 지기 때문에 결과값이 다릅니다^^

그렇다고 한다

### jadencase 문자열 만들기

레벨2인데 쉬웠다. 이상하네

```python
def solution(s):
    answer = ''

    for i in range(len(s)):
        if s[i] in "1234567890 ":
            answer += s[i]
        elif i == 0 or (i-1 > 0 and s[i-1] == " "):
            answer += s[i].upper()
        else:
            answer += s[i].lower()
    return answer
```

다른 사람 답 title()함수를 사용하면 단어를 자동으로 대문자를 만들어주나보네 근데 문제 개편되어서 공백두개나 공백으로 시작하면 작동 안한다고 한다.

### 폰켓몬

```python
hash = {}

def solution(nums):
    answer = 0
    for i in nums:
        if i in hash.keys():
            hash[i] = hash[i]+1
        else:
            hash[i] = 1
    if len(nums)/2 > len(hash.keys()):
        answer = len(hash.keys())
    else:
        answer = len(nums)/2
    return answer
```

남의 답 헐 대박

```
def solution(ls):
    return min(len(ls)/2, len(set(ls)))

```

있는지 없는지 확인만하면되니까

그냥 set만 쓴 사람도 있네

```
def solution(nums):
    answer = 0
    myList = set(nums)
    if len(nums)/2 > len(myList):
        answer = len(myList)
    else:
        answer = len(nums)/2
    return answer
```

### 더 맵게

heap 유형의 문제라고 써있는데 무시하고 그냥 리스트 썼더니 효율성 검사에서 시간 초과남

그래서 heap을 구현해야하나 하고 찾아봤는데 라이브러리 있길래 그냥 썼더니 통과 되네

```python
from heapq import heappush, heappop

# def solution(scoville, K): 시간초과
#     answer = 0
#     scoville.sort()
#     while scoville[0]<K:
#         if len(scoville)<=1:
#             answer=-1
#             break
#         temp1=scoville.pop(0)
#         temp2=scoville.pop(0)
#         scoville.append(temp1+2*temp2)
#         scoville.sort()
#         answer+=1

#     return answer

def solution(scoville, K):
    answer = 0
    heap = []
    for i in scoville:
        heappush(heap, i)
    while heap[0] < K:
        if len(heap) <= 1:
            answer = -1
            break
        temp1 = heappop(heap)
        temp2 = heappop(heap)
        heappush(heap, temp1+2*temp2)
        answer += 1

    return answer
```

다른 사람도 이거 썼네 heap을 구현하지 않아도 되는 건가

```
import heapq as hq

def solution(scoville, K):

    hq.heapify(scoville)
    answer = 0
    while True:
        first = hq.heappop(scoville)
        if first >= K:
            break
        if len(scoville) == 0:
            return -1
        second = hq.heappop(scoville)
        hq.heappush(scoville, first + second*2)
        answer += 1

    return answer

```

코드들을 보니 다들 import heapq를 하셨는데 저는 heap을 몰라서..ㅎㅎ queue만 써서 풀었는데도 시간이 heap을 쓴 풀이의 절반 정도 걸리네요. 저는 섞어서 나온 새로운 값, mix들을 별도의 queue에 넣었는데 이게 가장 큰 요인같네요. 나중에 나온 mix값이 먼저 나온 것보다 클 수밖에 없어서 섞는 순서대로 queue에 넣어주면 크기 순서를 신경 쓸 필요가 없어요. 그냥 popleft로 꺼내면 무조건 mix값의 최소입니다ㅎ

준혁님 댓글보고 참고해서 문제풀이해봤는데요 scoville과 mix 두가지 자료를 모두 이용하려면 고려해야하는 경우가 상당히 많아지기 때문에 if문이 너무 많아집니다. 그런데 deque의 popleft하나만으로 연산이 확줄어서 효율성테스트에서 런타임이 절반 가까이 줄어드네요!!

라는 댓글이 있었는데 흥미

다른 남의 답 축약해서 쓴거랑 트라이 익셉트가 인상적

```
from heapq import heapify, heappush, heappop
def solution(scoville, K):
    heapify(scoville)
    for i in range(1000000):
        try:
            heappush(scoville, heappop(scoville)+(heappop(scoville)*2))
            if scoville[0] >= K: return i+1
        except:
            return -1
```

Try excepy 활용

알고리즘 라이브러리

[https://velog.io/@gndan4/알고리즘-관련-파이썬-주요-라이브러리](https://velog.io/@gndan4/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B4%80%EB%A0%A8-%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%A3%BC%EC%9A%94-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC)

파이썬 큐

[https://www.daleseo.com/python-queue/](https://www.daleseo.com/python-queue/)

파이썬 힙

[https://www.daleseo.com/python-heapq/](https://www.daleseo.com/python-heapq/)

Python의 itertools를 이용하면 순열과 조합을 for문 없이 구현할 수 있다.

[https://velog.io/@dramatic/Python-permutation-combination-순열과-조합](https://velog.io/@dramatic/Python-permutation-combination-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9)

### 소수 만들기

```python
from itertools import combinations

def isPrime(n):
    count = 0
    for i in range(2, int(n**(0.5))+1):
        if n % i == 0:
            count += 1
    return False if count > 0 else True

def solution(nums):
    answer = 0
    permute = list(combinations(nums, 3))
    for i in range(len(permute)):
        if isPrime(sum(permute[i])):
            answer += 1
    return answer
```

이거 채점 치팅인데

메소드 오버로딩?을 해서 하는 거라는데

임의로 만든 Class를 리턴하고 채점방식이 if 리턴값==정답값 을 통해 이루어지는것을 이용하여 **eq**메소드를 재정의하여 어떤값과 비교해도 true가 나오도록 한 편법입니다.

```
class ALWAYS_CORRECT(object):
    def __eq__(self,other):
        return True

def solution(a):
    answer = ALWAYS_CORRECT()
    return answer;

```

### 타겟넘버

bfs 문제 어쩐지 쉽다고 했더니 1점밖에 안주더라

```python
def solution(numbers, target):
    answer = 0
    bfs_list = [numbers[0], -numbers[0]]
    start_point = 0
    end_point = 1
    for i in range(1, len(numbers)):
        temp = 0
        for j in range(start_point, end_point+1):
            bfs_list.append(bfs_list[j]+numbers[i])
            bfs_list.append(bfs_list[j]-numbers[i])
            temp += 2
        start_point = end_point+1
        end_point += temp

    count_target = 0
    for i in range(start_point, end_point+1):

        if bfs_list[i] == target:
            count_target += 1

    return count_target
```

다른 사람 답 재귀 알고리즘…

```
def solution(numbers, target):
    if not numbers and target == 0 :
        return 1
    elif not numbers:
        return 0
    else:
        return solution(numbers[1:], target-numbers[0]) + solution(numbers[1:], target+numbers[0])
```

이터툴 이건 뭐지

```
from itertools import product
def solution(numbers, target):
    l = [(x, -x) for x in numbers]
    s = list(map(sum, product(*l)))
    return s.count(target)
```

dfs로 풀었잖아? 나중에 다시 봐야겠다

```
answer = 0
def DFS(idx, numbers, target, value):
    global answer
    N = len(numbers)
    if(idx== N and target == value):
        answer += 1
        return
    if(idx == N):
        return

    DFS(idx+1,numbers,target,value+numbers[idx])
    DFS(idx+1,numbers,target,value-numbers[idx])
def solution(numbers, target):
    global answer
    DFS(0,numbers,target,0)
    return answer

```

mutable이랑 넘파이 astype 무슨뜻이지

lazy evaluation

map

filter

실행 할때 작동함 미리 해놓는게 아니라

큰 리스트에 담기에는 메모리가 걱정될 때 사용

```jsx
try:

except Exception as e
```

except에다가 이걸 넣으면 코드에 실행해 볼 수 있어서 무슨 에러 났는지 보임

import pdb

pdb.set_trace()
