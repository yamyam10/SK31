// タイピングゲームで使用する文章のリスト
const quotes = [
    "git config --global user.name 'user'",
    "git config --global user.email 'email'",
    "git init",
    "git add .",
    "git commit -m 'initial commit'",
    "git remote add origin",
    "git push -u origin master",
    "git clone https://github.com/hog.git",
    "git pull",
    "git fetch",
    "git merge origin/master",
    "git status",
    "git log",
    "git show",
    "git push -u origin",
    "git reset head",
    "git reset --hard head^",
    "git revert",
    "git commit --amend 'new commit msg'",
    "git reset --hard",
    "git push -f",
    "git branch feature/issue_",
    "git checkout feature/issue",
    "git diff",
    "git merge --no-ff",
    "git stash save"
  ];
  
  // ランダムな文章を表示する関数
  function displayRandomQuote() {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[quoteIndex];
  }
  
  // 入力が正しいかチェックする関数
  function checkInput() {
    const inputElement = document.getElementById("input");
    const typedText = inputElement.value;
    const quoteElement = document.getElementById("quote");
    const expectedText = quoteElement.textContent;
  
    if (typedText === expectedText) {
      alert("\u6B63\u89E3\uFF01");
    } else {
      alert("\u9593\u9055\u3044\uFF01");
    }
  
    // 新しい文章を表示する
    displayRandomQuote();
  
    // 入力欄をクリアする
    inputElement.value = "";
  }
  
  // 初回の文章表示とフォーカスの設定
  displayRandomQuote();
  