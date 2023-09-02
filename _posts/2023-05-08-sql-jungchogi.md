---
layout: post-index
title: "SQL 기본 개념"
date: 2023-05-07
categories: "sql"
tags:
  - "sql"
  - "정보처리기사"
use_math: false
use_mermaid: false
---

# 정처기 SQL

# SQL

정처기 공부할 때 정리했던 sql

### DDL(data define language) 데이터 정의어

DB 구축, 수정

`CREATE` `ALTER` `DROP`

```sql
CREATE SCHEMA 스키마명 AUTHORIZATION 사용자_id

CREATE DOMAIN 도메인명 [AS] 데이터타입
	[DEFAULT 기본값]
	[CONSTRAINT 제약조건명 CHECK (범위값)];

# CONSTRAINT COLOR CHECK (VALUE IN ('red','blue'))

CREATE TABLE 테이블명
	(속성명 데이터타입 [DEFAULT 기본값][NOT NULL]
	[, PRIMARY KEY(기본키_속성명)]
	[, UNIQUE(대체키_속성명,...)]
	[, FOREIGN KEY(외래키_속성명,...)]
			[REFERENCES 참조테이블(기본키_속성명,...)]
			[ON DELETE 옵션]
			[ON UPDATE 옵션]
	[, CONSTRAINT 제약조건명][CHECK (조건식)]

CREATE VIEW 뷰명[속성명[,속성명,...])]
AS SELECT ~FROM ~WHERE

CREATE [UNIQUE] INDEX 인덱스명 # 인덱스는 검색시간을 단축시키기 위한 보조용 데이터 구조
ON 테이블명(속성명[ASC|DESC][,속성명[ASC|DESC]]
[CLUSTER];

ALTER TABLE 테이블명 ADD 속성명 데이터타입 [DEFAULT '기본값'];
ALTER TABLE 테이블명 ALTER 속성명 [SET DEFAULT '기본값'];
ALTER TABLE 테이블명 DROP COULMN 속성명 [CASCADE];

DROP (SCHEMA 스키마명| DOMAIN 도메인명|TABLE 테이블명|VIEW 뷰명|INDEX 인덱스명)[CASCADE|RESTRICT];
DROP CONSTRAINT 제약조건명;
```

### DCL(data control language) 데이터 제어어

보안, 무결성, 회복, 병행제어

`COMMIT` : 트랜잭션 수행한거 반영

`ROLLBACK` :commit 안한 내용 취소

`GRANT` :권한 부여

`REVOKE` : 권한 취소

`SAVEPOINT` :트랜잭션 내에 rollback 해야할 위치 저장점 지정

```sql
GRANT [RESOURCE|DBA|CONNECT] TO 사용자;
GRANT [ALL|SELECT|INSERT|DELETE|UPDATE|ALTER] ON 개체 TO 사용자 [WITH GRANT OPTION]; //with grant option은 남한테 권한 부여 권한
REVOKE [GRANT OPTION FOR] 권한_리스트 ON 개체 FROM 사용자 [CASCADE];

DELETE FROM 학생 WHERE 나이=10;
COMMIT;

DELETE FROM 학생 WHERE 나이=9;
SAVEPOINT s1;
DELETE FROM 학생 WHERE 나이=98;
ROLLBACK TO s1;

ROLLBACK; //그냥 롤백하면 commit 이후부터
```

### DML(data manipulation language) 데이터 조작어

`SELECT` 검색

`INSERT` 삽입

`DELETE` 삭제

`UPDATE` 갱신

```sql
INSERT INTO 학생(이름, 나이) VALUES(J, 11);

DELETE
FROM 학생
WHERE 나이=11;

UPDATE 학생
SET 나이=10000
WHERE 나이=11;

SELECT 이름, 나이
FROM 학생
WHERE 이름="김%" #%은 모든 문자. _은 문자하나 #는 숫자하나
```

`GROUP BY` 특정 속성을 그룹화하여 검색할 때(COUNT(속성명), SUM(속성명), AVG(속성명), MAX(속성명), MIN(속성명), STDDEV(속성명), VARIANCE(속성명), ROLLUP(속성명, 속성명…), CUBE(속성명, 속성명…))

`HAVING` group by랑 함께 사용하며 그룹에 대한 조건을 지정

```sql
SELECT 반, AVG(점수) as 반평균
FROM 학생
WHERE
GROUP BY 반
HAVING AVG(점수)>=50;
```

### window 함수

ROW_NUMBER()

RANK()

DENSE_RANK()

### 행 세로로 합치기

튜플들 집합을 합친다고 생각하면된다

UNION(합집합 중복 제거) UNION ALL(합집합 중복 있음) INTERSECT(교집합) EXCEPT(차집합 앞에거에서 뒤에거 뺌)

### 행 가로로 합치기

JOIN

INNER JOIN

EQUI JOIN

NON EQUI JOIN

OUTER JOIN

### 제어문

IF 조건

then

ELSE

END IF

LOOP

END LOOP

### 식별자 vs 기본키

식별자: 테이블에서 레코드를 고유하게 식별하는 데 사용되는 어떤 속성이나 조합  
기본키: 테이블에서 레코드를 고유하게 식별하는 데 사용되는 특별한 식별자

[https://dkkim2318.tistory.com/43](https://dkkim2318.tistory.com/43)
