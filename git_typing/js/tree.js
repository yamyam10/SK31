var gitgraph = new GitGraph({
    template: "metro",
    orientation: "vertical",
    mode: "compact",
    // mode: "extended",
    elementId: "gitGraph"
});

//masterブランチを作成
var master = gitgraph.branch("master"); 

//masterブランチにinitial commit
master.commit({ message: "initial commit"})

// masterからdevelopをブランチ作成
var develop = master.branch("develop");

//developにいくつかcommit追加
develop.commit().commit().commit();

// developの変更をmasterにマージ
develop.merge(master);