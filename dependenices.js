const fs = require('fs');
const process = require('child_process'); // use to autoinstall project dependencies

function initdependencies(){
    process.spawnSync('npm',['install', '--save', 'express'], { cwd: './' });
    process.spawnSync('npm',['install', '--save', 'helmet'], { cwd: './' });
}

function install(package){
    process.spawnSync('npm',['install', '--save', package], { cwd: './' });
}

module.exports = {
    dependenciesconfig: function(args){
        switch(args[3]){
            case 'init':
                initdependencies();
                break;
            case 'install':
                install(args[4]);
                break;
            default:
                console.log("init\t\t\t initializes the dependencies of this project\n"+
                "install <dependency>\t installs the dependency for this project");
                break;
        }
    },
    initdependencies: initdependencies,
    install: install
}