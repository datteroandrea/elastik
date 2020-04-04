const fs = require('fs');
const process = require('child_process');
const { commit } = require('../repository');

module.exports = {
    service: function(args){
        switch(args[3]){
            case 'new':
                fs.mkdirSync('./services/'+args[4]);
                fs.writeFileSync('./services/'+args[4]+'/'+args[4]+'.service.js','');
                commit('added new '+ args[4] +' Service Component');
                break;
            case 'remove':
                fs.rmdirSync('./services/'+args[4],{ recursive: true });
                commit('removed new '+ args[4] +' Service Component');
                break;
            default:
                console.log("new\t initializes the new Service Component of this project\n"+
                "remove\t removes an Service Component of this project");
                break;
        }
    }
}