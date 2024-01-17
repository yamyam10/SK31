// 問題リスト
const questions = [
    "git␣init",// 新しいリポジトリの初期セットアップ時に使用するワンタイム コマンド
    // "git␣checkout␣-b␣master",
    "git␣commit␣-m␣'initial␣commit'",
    "git␣checkout␣-b␣develop",
    "git␣add␣.",
    "git␣commit␣-m␣'Add␣feature␣A'",
    "git␣add␣.",
    "git␣commit␣-m␣'Add␣feature␣B'",
    "git␣add␣.",
    "git␣commit␣-m␣'Add␣feature␣C'",
    "git␣checkout␣master",
    "git␣merge␣develop",
    "",
]
// const questions = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
// ]

// 現在の問題のインデックス
let currentQuestionIndex = -1;

// 現在の問題の進捗を示す変数
let currentCharIndex = 0;

// ゲーム要素の取得
const startElement = document.getElementById("start");

// ゲームが終了したかどうかを示すフラグ
let gameEnded = false;

// ゲーム開始時の初期設定
function startGame() {
    currentQuestionIndex = -1;
    // 最初の問題を表示
    nextQuestion();
    startButton.style.display = "none";
    retryButton.style.display = "none";
    gameEnded = false; // ゲームが再スタートされたのでフラグをリセット
}

// キーボード入力時のイベントハンドラ
function handleKeyDown(event) {
    if (gameEnded) return; // ゲームが終了した場合、入力を受け付けない

    const keyPressed = event.key;
    const currentQuestion = questions[currentQuestionIndex];

    // スペースキーが押された場合、または &blank; 文字が含まれる場合
    if (keyPressed === " " || currentQuestion.charAt(currentCharIndex) === "&") {
        if (currentCharIndex < currentQuestion.length - 1) {
            currentCharIndex++;
        }
    }
    // 通常のキーが押された場合
    else if (currentQuestion.charAt(currentCharIndex) === keyPressed) {
        currentCharIndex++;

        // 問題が全て正解した場合
        if (currentCharIndex === currentQuestion.length) {
            if (currentQuestionIndex === questions.length - 1) {
                // 最後の問題をクリアした場合、ゲーム終了
                add_d_Merge();
                gameEnded = true;
                retryButton.style.display = "block";
                startElement.textContent = "ゲーム終了！\n再プレイするにはスタートボタンをクリックしてください";
            } else {
                nextQuestion();
            }
        }
    }

    // 正解文字を色分けして表示
    displayCurrentQuestion();
}


// キーボード入力時のイベントリスナーを追加
window.addEventListener("keydown", handleKeyDown);

// 次の問題を表示
function nextQuestion() {
    currentQuestionIndex++;
    currentCharIndex = 0;
    displayCurrentQuestion();

    // 各問題ごとに関数を呼び出す
    switch (currentQuestionIndex) {
        case 1:
            createMasterBranch();
            break;
        case 2:
            MasterCommit();
            break;
        case 3:
            add_d_Branch();
            break;
        case 5:
            add_d_Commit_a();
            break;
        case 7:
            add_d_Commit_b();
            break;
        case 9:
            add_d_Commit_c();
            break;
        case 10:
            checkout();
            break;
        case 11:
            add_d_Merge();
            break;
        // 必要に応じて他の問題についても同様に処理を追加してください
        default:
            break;
    }
        // 最後の問題をクリアした場合の処理
        if (currentQuestionIndex === questions.length - 1) {
            // ゲーム終了時の処理
            retryButton.style.display = "block";
        }
}

let allowCreateTree = false; // createTree() を許可するかどうかのフラグ

// 現在の問題を表示
function displayCurrentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // 正解文字と非正解文字を色分けして表示
    let questionHTML = "";
    for (let i = 0; i < currentQuestion.length; i++) {
        if (i < currentCharIndex) {
            questionHTML += `<span class="correct-char">${currentQuestion.charAt(i)}</span>`;
        } else {
            questionHTML += currentQuestion.charAt(i);
        }
    }
    startElement.innerHTML = questionHTML;

    if (currentQuestionIndex === questions.length - 1 && allowCreateTree) {
        // 最後の問題をクリアし、かつフラグが許可されている場合のみ createTree() を呼ぶ
        createTree();
        allowCreateTree = false; // フラグをリセット
    }
}

// スタートボタン要素の取得
const startButton = document.getElementById("startButton");
window.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        createTree();
        startGame();
    }
});

// リトライボタン要素の取得
const retryButton = document.getElementById("retryButton");
retryButton.style.display = "none";
retryButton.addEventListener("click", function() {
    createTree();
});

// ゲーム開始ボタンクリック時のイベントリスナーを追加
startButton.addEventListener("click", startGame);
