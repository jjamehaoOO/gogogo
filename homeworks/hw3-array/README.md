# HW3-Array

禁止使用 array 的內建函式，本作業的目的是了解並實作這些函式。

- forEach
- map
- filter
- slice

### forEach

請設計一個 function `forEach`
- 接受 2 個參數，一個陣列與一個 function
- 不會回傳新的陣列
- 輸入陣列的的長度為 n, 輸入 function 就會執行 n 次
- 答案寫在 for-each.js

範例：

```javascript=
function forEach(array, callback){
    // ...
}

const array = [1, 2, 3, 4, 5];
const cb = (num) => {
    console.log(num);
}

const result = forEach(array, cb);
// 1
// 2
// 3
// 4
// 5
```

### map

請設計一個 function `map`
- 接受 2 個參數，一個陣列與一個 function
- 回傳一個**新的陣列**
- 回傳陣列的每個元素皆為 callback **輸出**的結果
- 答案寫在 map.js

範例：

```javascript=
function map(array, callback){
    // ...
}

const array = [1, 2, 3, 4, 5];
const cb = (num) => {
    return num + 1;
}

const result = map(array, cb);
console.log(result); // [2, 3, 4, 5, 6]
console.log(array); // [1, 2, 3, 4, 5], 原有 array 的不會被改變
```

### filter

請設計一個 function `filter`
- 接受 2 個參數，一個陣列與一個
- 回傳一個**新的陣列**
- callback 回傳 boolean 值
- 若 callback 回傳 true, 則陣列元素會被挑出來放入新的陣列，反之則否
- 答案寫在 filter.js

範例：

```javascript=
function filter(array, callback){
    // ...
}

const array = [1, 2, 3, 4, 5];
const cb = (num) => {
    return num > 3; // boolean
}

const result = filter(array, cb);
console.log(result); // [4, 5]
console.log(array); // [1, 2, 3, 4, 5]
```

### slice

請設計一個 function `slice`
- 接受 3 個參數，一個陣列，起始 index `start` 與 結束 index `end`
- 回傳一個新的陣列
- 回傳陣列的元素為輸入陣列 index `start` 到 `end - 1` 的範圍
- 答案寫在 slice.js

範例：

```javascript=
function slice(array, callback){
    // ...
}

const array = [1, 2, 3, 4, 5];
const start = 1;
const end   = 4;

const result = slice(array, start, end);
console.log(result); // [2, 3, 4]
console.log(array); // [1, 2, 3, 4, 5]
```
