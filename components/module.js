const fs = require('fs');
const process = require('child_process');
const { commit } = require('../repository');

module.exports = {
    mod: function(args){
        switch(args[3]){
            case 'new':
                fs.mkdirSync('./modules/'+args[4]);
                fs.writeFileSync('./modules/'+args[4]+'/'+args[4]+'.js','');
                commit('added new '+ args[4] +' Module Component');
                break;
            case 'remove':
                fs.rmdirSync('./modules/'+args[4],{ recursive: true });
                commit('removed new '+ args[4] +' Module Component');
                break;
            default:
                console.log("new\t initializes the new Module Component of this project\n"+
                "remove\t removes an Module Component of this project");
                break;
        }
    }
}