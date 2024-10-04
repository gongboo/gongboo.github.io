---
layout: post-index
title: "간단한 pandas"
date: 2023-05-07
categories: "python"
tags:
  - "python"
  - "pandas"
use_math: false
use_mermaid: false
---

Pandas는 Python에서 데이터 다룰 때 쓰는 라이브러리

slr파서 구현하는데 LR테이블을 엑셀 표보고 하드 코딩하는게 너무 노가다라서 판다스로 하는데 좀 까먹어서 정리함

```python
import pandas as pd
data = pd.read_csv('파일경로/파일이름.csv')
print(data.head())  # 상위 5개의 행 출력
print(data.shape)  # 행과 열의 개수 출력
column = data['열이름'] # 열 선택
row = data.loc[인덱스]  # 인덱스를 사용한 행 선택
data['새로운열이름'] = 값들  # 값들은 리스트, 배열 또는 단일 값일 수 있음
filtered_data = data[data['조건']]  # 조건에 따라 행 필터링
data.to_csv('새로운파일경로/새로운파일이름.csv', index=False)  # 인덱스를 저장하지 않으려면 index=False로 설정
```

```python
np.nan #pandas에서 NAN은 numpy의 nan이다
pd.isna(data["id"][0]) #이걸로
pd.notna() # 반대는 이거
pd.fillna() #
pd.dropna() #
```

pandas로 일일이 입력하던걸 싹 해결!
