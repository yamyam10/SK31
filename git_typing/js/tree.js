var gitgraph = new GitGraph({
    template: "metro",
    orientation: "vertical",
    mode: "compact",
    // mode: "extended",
    elementId: "gitGraph"
});

function createTree() {
    // 新しいGitGraphのインスタンスを作成する
    gitgraph = new GitGraph({
        template: "metro",
        orientation: "vertical",
        mode: "compact",
        elementId: "gitGraph"
    });
    // ツリーを作成した後、描画を更新する
    gitgraph.render();
}

// masterブランチを作成
function createMasterBranch() {
    master = gitgraph.branch("master");
}

// masterブランチにinitial commit
function MasterCommit() {
    master.commit({ message: "initial commit" });
}

// masterブランチに移動
function checkout() {
    master.checkout();
}

// masterからtestをブランチ作成
function add_t_Branch() {
    test = master.branch("test");
}

// testにいくつかcommit追加
function add_t_Commit() {
    test.commit();
}

// testの変更をmasterにマージ
function add_t_Merge() {
    test.merge(master);
}

// masterからdevelopをブランチ作成
function add_d_Branch() {
    develop = master.branch("develop");
}

// developにcommit追加
function add_d_Commit() {
    develop.commit();
}

function add_d_Commit_a() {
    develop.commit({ message: "Add feature A" });
}
function add_d_Commit_b() {
    develop.commit({ message: "Add feature B" });
}
function add_d_Commit_c() {
    develop.commit({ message: "Add feature C" });
}

// developの変更をmasterにマージ
function add_d_Merge() {
    develop.merge(master);
}