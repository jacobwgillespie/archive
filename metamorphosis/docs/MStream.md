---
id: mstream
title: MStream
---

The `MStream` is the core building block of Metamorphosis.

## Operators

### `.catchWith()`

```typescript
class MStream<T> {
  catchWith(
    handler: (err: any) => AsyncIterable<T> | Promise<AsyncIterable<T>>,
  ): CatchWithMStream<T>
}
```

`catchWith()` catches any errors emitted by the stream, calling the error handler to replace the stream with the returned iterable.

```typescript
const stream = source.catchWith(err => MStream.of(1, 2, 3))

// on error, source will emit 1, 2, 3
```

### `.concat()`

```typescript
class MStream<T> {
  concat(...sources: Array<AsyncIterable<T>>): ConcatMStream<T>
}
```

`concat()` joins the source stream with one or more other streams. It emits all values from the source stream until completion, then emits all values from the next source stream, sequantially:

```text
1-2-3-X----------------  A
--------4-5-6-X--------  B
----------------7-8-9-X  C

1-2-3---4-5-6---7-8-9-X  A.concat(B, C)
```

### `.delay()`

```text
1-2-3-X----------------  A

--1-2-3-X--------------  A.delay(100)
```

### `.delayEach()`

```text
1-2-3-X----------------  A

--1---2---3-X----------  A.delayEach(100)
```

### `.endWith()`

```text
1-2-3-X----------------  A

1-2-3-4-X--------------  A.endWith(4)
```

### `.filter()`

```text
1-2-3-4-5-6-7-8-X------  A

--2---4---6---8-X------  A.filter(item => item % 2 === 0)
```

### `.flatMap()`

```text
1----2-----3-----X-----  A

-1-1---2-2---3-3-X-----  A.flatMap(item => MStream.of(item, item))
```

### `.partition()`

```text
1-2-3-4-5-6-7-8-X------  A

--2---4---6---8-X------  A.partiton(item => item % 2 === 0)
1---3---5---7---X------
```

### `.scan()`

```text
1---2---3---4----X------  A

------3---6---10-X------  A.scan((sum, item) => sum + item)
```
