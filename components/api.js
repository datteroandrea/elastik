const fs = require('fs');
const process = require('child_process');
const { commit } = require('../repository');

module.exports = {
    api: function(args){
        switch(args[3]){
            case 'new':
                fs.mkdirSync('./api/'+args[4]);
                fs.writeFileSync('./api/'+args[4]+'/'+args[4]+'.js','');
                commit('added new '+ args[4] +' API Component');
                break;
            case 'remove':
                fs.rmdirSync('./api/'+args[4],{ recursive: true });
                commit('removed new '+ args[4] +' API Component');
                break;
            default:
                console.log("new\t initializes the new API Component of this project\n"+
                "remove\t removes an API Component of this project");
                break;
        }
    }
}