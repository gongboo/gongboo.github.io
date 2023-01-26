---
layout: post
title: "html cheat sheet"
date: 2022-05-28
categories: sample
tags: "html"
use_math: false
use_mermaid: false
---

# html cheat sheet

### 기본구조

VS code에서 ! 쳐서 자동 완성 하면 아래 같이 나온다

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

### 헤드라인 태그

```html
<h1>h1 태그입니다</h1>
<h2>h2 태그입니다</h2>
<h3>h3 태그입니다</h3>
<h4>h4 태그입니다</h4>
<h5>h5 태그입니다</h5>
<h6>h6 태그입니다</h6>
```

<h1>h1 태그입니다</h1>
<h2>h2 태그입니다</h2>
<h3>h3 태그입니다</h3>
<h4>h4 태그입니다</h4>
<h5>h5 태그입니다</h5>
<h6>h6 태그입니다</h6>

### 버튼 태그

```html
<button>버튼 입니다.</button>
```

<button>버튼 입니다.</button>

### paragraph 태그

```html
<p>Lorem ipsum dolor sit .....</p>
```

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit lectus, lobortis ac libero sed, auctor facilisis lorem. Suspendisse potenti. Praesent nec feugiat libero. Nulla dapibus dui eget massa ornare vestibulum. Maecenas diam augue, consectetur nec mauris sit amet, pharetra molestie lacus. Aliquam vehicula, massa vel vulputate pharetra, sapien elit vulputate lacus, et feugiat sapien quam sit amet libero. Curabitur fermentum turpis a ligula feugiat, quis pretium mi venenatis. Maecenas vitae rutrum diam. Suspendisse lectus velit, iaculis sed auctor eget, auctor in enim. </p>

### a 태그

```html
<a href="#">anchor 입니다</a>
```

<a href="#">anchor 입니다.</a>

### 목록 태그 ul ol li

```html
<ul>
  <li>ul(unordered list)은 순서가 없는 목록</li>
  <li>li(list item)으로 ul 이나 ol 안에</li>
  <li>들어간다</li>
</ul>
<ol type="a">
  ol(ordered list) 순서가 있는 목록
  <li>type으로 아이템 앞에 오는</li>
  <li>숫자나 문자를 정할 수 있다</li>
  <li>1 a A i I 를 속성으로 쓸 수 있다</li>
</ol>
```

<ul>
    <li>ul(unordered list)은 순서가 없는 목록</li>
    <li>li(list item)으로 ul 이나 ol 안에</li>
    <li>들어간다</li>
</ul>
<ol type="a"> ol(ordered list) 순서가 있는 목록
    <li>type으로 아이템 앞에 오는</li>
    <li> 숫자나 문자를 정할 수 있다</li>
    <li>1 a A i I 를 속성으로 쓸 수 있다</li> 
</ol>

### dl dt dd

### table 태그: table th tr td

```html
<table>
  <tr>
    <th>table 태그에 대해 알아보자</th>
  </tr>
  <tr>
    <th>table</th>
    <td>th</td>
    <td>tr</td>
    <td>td</td>
  </tr>
  <tr>
    <th>table 태그란</th>
    <td>th 태그는 table head로 표의 제목</td>
    <td>tr 태그는 table row로 표의 가로줄</td>
    <td>td는 table data로 각각의 셀</td>
  </tr>
</table>
```

<table>
    <tr>
        <th>table 태그에 대해 알아보자</th>
    </tr>
    <tr>
        <th>table</th>
        <td>th</td>
        <td>tr</td>
        <td>td</td>
    </tr>
    <tr>
        <th>table 태그란</th>
        <td>th 태그는 table head로 표의 제목</td>
        <td>tr 태그는 table row로 표의 가로줄</td>
        <td>td는 table data로 각각의 셀</td>
    </tr>
</table>

### span 태그

```html
<span>안에 있는 객체 크기만큼 공간을 할당해 줍니다.</span>
```

<span>안에 있는 객체 크기만큼 공간을 할당해 줍니다.</span>

### input 태그

```html
<input type="button" />
<input type="checkbox" />
<input type="color" />
<input type="date" />
<input type="datetime-local" />
<input type="email" />
<input type="file" />
<input type="hidden" />
<input type="image" />
<input type="month" />
<input type="number" />
<input type="password" />
<input type="radio" />
<input type="range" />
<input type="reset" />
<input type="search" />
<input type="submit" />
<input type="tel" />
<input type="text" /> (default value)
<input type="time" />
<input type="url" />
<input type="week" />
```

<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text"> (default value)
<input type="time">
<input type="url">
<input type="week">

### label 태그

###img

```html
<img src="image.jpg" alt="대체 텍스트 입니다." />
```

<img src="image.jpg" alt="대체 텍스트 입니다.">

### 그 외...

글자를 키워주는 big 태그는 html5에서는 적용안됨
