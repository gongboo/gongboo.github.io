---
layout: post
title:  "database_system-mySQL"
date:   2020-09-16 13:35:39 -400
categories: database_system
#use_mermaid: true
---

# SQL 문법과 코드   
SQL(Structured Query Language): 데이터 베이스를 접근, 조작한다.   
[SQL문법은 여기서 볼 수 있습니다.][SQL_site]

```SQL
create table classroom(     --classroom 테이블을 생성한다
    building    varchar(15),
    room_number varchar(7),
    capacity    numeric(4,0),
    primary key (building, room_number)
);
```
data type은 [여기][SQL_datatype] 참고   

```SQL
insert into classroom value ('Watson','100',50); --행 삽입 
select * from classroom; --모든 데이터가 선택되며 선택된 데이터 출력. * 값에는 항목이 들어올 수 있다
select * from classroom where capacity<100; --조건부 데이터 선택
```

일단 배운데까지 완료

[SQL_site]:     https://www.w3schools.com/sql/default.asp
[SQL_datatype]: https://www.w3schools.com/sql/sql_datatypes.asp