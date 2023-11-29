var gitgraph = new GitGraph({
    template: "metro",
    orientation: "vertical",
    mode: "compact",
    // mode: "extended",
    elementId: "gitGraph"
});

// masterブランチを作成
function createMasterBranch() {
    master = gitgraph.branch("master");
}

// masterブランチにinitial commit
function MasterCommit() {
    master.commit({ message: "initial commit" });
}

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

// developにいくつかcommit追加
function add_d_Commit() {
    develop.commit();
}

// developの変更をmasterにマージ
function add_d_Merge() {
    develop.merge(master);
}
// //masterブランチを作成
// var master = gitgraph.branch("master"); 

// //masterブランチにinitial commit
// master.commit({ message: "initial commit"})

// // masterからdevelopをブランチ作成
// var develop = master.branch("develop");

// //developにいくつかcommit追加
// develop.commit().commit().commit();

// // developの変更をmasterにマージ
// develop.merge(master);