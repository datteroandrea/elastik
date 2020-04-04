const fs = require('fs');
const process = require('child_process');
var autocommit = true; // used to autocommit

module.exports = {
    repoconfig: function(args){
        switch(args[3]) {
            case 'init':
                this.initrepo(args[4]);
            case 'addorigin':
                config = JSON.parse(fs.readFileSync('./config.json'));
                config.repository.url = args[4];
                process.spawnSync('git',['remote', 'add', 'origin',args[4]]);
                fs.writeFileSync('./config.json',JSON.stringify(config));
                break;
            case 'removeorigin':
                config = JSON.parse(fs.readFileSync('./config.json'));
                config.repository.url = '';
                process.spawnSync('git',['remote', 'rm', args[4]])
                fs.writeFileSync('./config.json',JSON.stringify(config));
                break;
            case 'setautocommit':
                autocommit = args[4];
            default:
                console.log("init\t\t\t initializes the repo of this project\n"+
                "addorigin <origin>\t adds origin for this project\n"+
                "removeorigin <origin>\t removes origin for this project\n"+
                "setautocommit <bool>\t sets if elastik can autocommit");
                break;
        }
    },
    initrepo: function(appname){
        process.spawnSync('git',['init'], { cwd: appname }, () => {});
        process.spawnSync('git',['add','*'], { cwd: appname}, () => {});
        process.spawnSync('git',['commit','-m"Intial commit"'], { cwd: appname}, () => {});
    },
    commit: function(commitmsg){
        if(autocommit){
            process.spawnSync('git',['add','*'], { cwd: './' }, () => {});
            process.spawnSync('git',['commit','-m'+'"'+commitmsg+'"'], { cwd: './' }, () => {});
        }
    }
}