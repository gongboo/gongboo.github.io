---
layout: post
title: "side project: 영한 사전 제작기"
date: 2023-01-26
categories: "project"
tags:
  - "project"
  - "side-project"

use_math: false
use_mermaid: false
---

## 여기 접속해서 사용 가능

[영한 사전 웹페이지 링크](https://dictionary-interface-react.pages.dev/)

# 기획

당연한 진리처럼 생각했던 사전도 누군가가 만든 것이고 제작자의 의도와 중요하게 생각하는 부분이 반영되기 마련이라는 생각이들었다.  
사전을 만드는 것도 사용자의 범위, 세세함의 정도, 구성 등등을 고민해야 했다.  
나는 범용적인 사용자를 대상으로, 간결한 설명(너무 세세하면 비용이 많이 들기 때문에..), 꼭 필요한 구성만을 포함한 사전을 제작하고자 했다.

# 데이터 수집

영어 단어 데이터 셋을 구하는데 고생 좀 했다.

단어 세트는 이렇게 찾아보았다.

1. https://github.com/dwyl/english-words?tab=readme-ov-file

466000 이상의 단어 텍스트 파일 제공.
단어가 너무 많고 상당량이 쓰이지 않는 단어이거나 단어라고 하기 애매했다
너무 방대한 데이터였다.

2. PyEnchant라는 모듈에서 사용하는 단어 데이터셋은 GNU 아스펠, Hunspell이라고 한다.
   GNU 아스펠
   http://aspell.net/

Hunspell
https://github.com/hunspell/hunspell

3. 다른 단어 리스트 조사
   WordNet: 프린스턴 대학교에서 개발한 대형 사전 및 시소러스로, 영어 단어와 그 의미, 관련된 동의어, 반의어 등을 포함.

GitHub Repository: Princeton WordNet
OpenThesaurus: 독일어를 주로 다루지만 영어 데이터도 포함하는 시소러스 프로젝트

4. 웹사이트: OpenThesaurus
   Moby Thesaurus II: 매우 방대한 영어 시소러스 데이터베이스입니다.

5. NLTK (Natural Language Toolkit): 파이썬으로 자연어 처리를 할 때 유용한 라이브러리로, WordNet을 비롯한 다양한 코퍼스 및 도구를 제공합니다.

6. ConceptNet: 일반 상식을 기반으로 한 시소러스와 지식 그래프를 제공하는 프로젝트입니다.

7. Oxford Dictionaries API 인데, 1000건까지 무료
   https://developer.oxforddictionaries.com

8. 상업 게임에 들어가기 위한 단어 리스트
   https://gamedev.stackexchange.com/questions/28045/word-list-for-use-in-commercial-game

여기서 나온 리스트
https://diginoodles.com/projects/eowl

9. https://stackoverflow.com/questions/772922/free-word-list-for-use-programmatically

10. https://www.eapfoundation.com/vocab/academic/nawl/

11. http://wordlist.aspell.net/

12. https://www.quinapalus.com/dicts.html
    딕셔너리 설명

13. 옥스퍼드 cefr
    https://www.oxfordlearnersdictionaries.com/about/wordlists/oxford3000-5000

그 중에서 이런 조건으로 고르게 되었다.

- 갯수가 너무 많거니 적지 않을 것
  많은거는 비용 때문에 피했고 적은 것은 범용성이 부족할까봐 피했다.

- 단어 위주로 포함.
  언어 코퍼스 이런 데이터 셋은 철자가 틀린 단어들을 포함하거나 단어가 아닌 것들을 포함하기도 함.

고민하다가 nltk로 데이터셋을 사용하기로 결정.

# 제작

## chatgpt를 사용하는데 시간문제

챗 지피티를 하나씩 처리하는 거는 오래 걸린다.

그래서 multi threading이나 비동기 프로그램밍을 고려했는데
결론적으로 둘다 시간이 개선이 되고 속도는 비슷함.

### python global interpreter lock

cpu 바운드 작업할 때 파이썬은 하나의 스레드만 사용하도록 lock 한다고 한다.
이거 때문에 파이썬은 완전한 멀티스레딩이 안된다고 하는데 그래도 비동기랑 비슷하게 속도 개선은 되길래 의아했는데
멀티스레딩이 비동기처럼 작동해서 그런거 같음.

## 1. 뜻 생성

## 2. 예제 생성
