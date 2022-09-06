# 20220905-20220911 作業

## 課程主題

- 前端基礎 JavaScript

## 指定閱讀

[DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)

## 作業

進階需求有興趣 & 時間再做。

### hw1: FAQ 頁面

請實作一個 FAQ 的 html 頁面，參考圖如下：
![](https://i.imgur.com/KZbaVV0.png)

需求：

- 至少包含 3 個 QA
- 一個 QA 包含標題與內文
- 點擊 QA 標題會收合該 QA
- 一次只有一個 QA 可以被開啟

寫在 hw1.html

### hw2: 表單驗證

請實作表單填寫 + 驗證，參考 [發呆大賽報名表單](https://docs.google.com/forms/d/e/1FAIpQLSfq3UrSH1D6djKMofCv8Y6qAWNW2cT3PCJoeI0CembbfNOM8g/viewform)

需求：

- 請避免 form 用預設的方式送出表單
- 必填的欄位若沒完成，在提交時會顯示錯誤訊息
- 手機與 email 的欄位需驗證格式正確
  - 手機：10 碼數字，"09" 開頭
  - email: 需符合 email 格式
- 提交時跳出確認提交的提示，顯示使用者填的資料

進階需求：

- 寫到一半重新整理可以記錄使用者已經寫的內容

寫在 hw2.html

## 自我檢查

- P1 你知道什麼是 DOM
- P1 你知道如何透過 JavaScript 操作 DOM
- P1 你知道如何幫元素加上 event listener
- P1 你知道什麼是 event
- P1 你知道什麼是捕獲與冒泡
- P1 你知道什麼是事件代理（delegation）並知道如何實作
- P1 你知道在瀏覽器上存資料的幾種方式
- P2 你知道 form 的預設行為與如何阻止預設行為
- P2 你知道 preventDefault 與 stopPropagation 的差異
