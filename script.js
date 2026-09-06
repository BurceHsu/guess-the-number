// 1. 記住狀態:電腦想的數字、已經猜了幾次、遊戲是否結束
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

// 2. 抓住畫面元素(id 要跟 index.html 裡的一模一樣)
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const messageEl = document.getElementById("message");
const attemptsEl = document.getElementById("attempts");

// 3. 監聽「按鈕被按下」這件事,按下去就執行這段函式
guessButton.addEventListener("click", () => {
  if (gameOver) return; // 已經猜對了,按鈕不再有反應

  const guess = Number(guessInput.value);

  // 檢查輸入是否有效
  if (!guessInput.value || guess < 1 || guess > 100) {
    messageEl.textContent = "請輸入 1 到 100 之間的數字";
    return;
  }

  attempts++;
  attemptsEl.textContent = `已猜次數:${attempts}`;

  if (guess === secretNumber) {
    messageEl.textContent = `恭喜猜對了!答案就是 ${secretNumber}`;
    gameOver = true;
  } else if (guess < secretNumber) {
    messageEl.textContent = "太小了,再猜大一點!";
  } else {
    messageEl.textContent = "太大了,再猜小一點!";
  }
});
