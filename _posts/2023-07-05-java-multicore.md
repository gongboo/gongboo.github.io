---
layout: post
title: "java multicore"
date: 2023-07-05
categories: "multicore"
tags:
  - "java"
  - "multicore"
use_math: false
use_mermaid: false
---

# java multicore

## Thread와 Runnable

Java에서 쓰레드를 만드는 방법은 두 가지

- Thread 클래스를 직접 상속받아 쓰레드를 만드는 방법: 쓰레드 클래스 자체가 쓰레드가 되므로, 다른 클래스를 상속받을 수 없음. 코드가 간결해짐.
- Runnable 인터페이스를 구현: 다른 클래스를 상속 가능 다중 상속도 가능. 유연한 코드작성 가능. 좀더 객체지향적이고 재사용성 높음.

Thread 클래스를 직접 상속받아 쓰레드를 만드는 예시

```java
public class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}
```

Runnable 인터페이스를 구현 예시

```java
public class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable running");
    }
}

public class Main {
    public static void main(String[] args) {
        MyRunnable runnable = new MyRunnable();
        Thread thread = new Thread(runnable);
        thread.start();
    }
}
```

# java synchronization methods

Java에서 멀티 스레드 프로그래밍에서 동기화를 구현하는 다양한 방법에 대한 설명

## Synchronized 키워드 사용하기

### Synchronized Methods

메서드 전체에 사용할 수도 있고

```java
public synchronized void synchronizedMethod(){
    //...
}
```

### Synchronized Blocks

코드 블록에 사용할 수도 있다.

```java
Object lock = new Object();
synchronized(lock){
    //...
}
```

## Reentrant Locks

Reentrant lock은 조금더 세분화된 lock과 unlock 제공

```java
ReentrantLock lock = new ReentrantLock();
lock.lock();
try{
    //code to be executed in a synchronized manner
}finally{
    lock.unlock();
}

```

## ReadWrite Locks

ReadWrite locks 은 다중 스레드가 read 할 수 있지만 하나의 스레드만 write 할 수 있다.

```java
ReadWriteLock lock = new ReentrantReadWriteLock();
lock.readLock().lock();
try{
    //code to be executed in a synchronized manner
}finally{
    lock.readLock().unlock();
}

```

## Atomic Variables

아토믹 변수와 메서드로 관리할 수 있다

```java
AtomicInteger atomicInteger = new AtomicInteger();
atomicInteger.getAndIncrement();
```
