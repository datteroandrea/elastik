const fs = require('fs');
const process = require('child_process');
const { commit } = require('../repository');

module.exports = {
    model: function(args){
        switch(args[3]){
            case 'new':
                fs.mkdirSync('./db/'+args[4]);
                fs.writeFileSync('./db/'+args[4]+'/'+args[4]+'.model.js','');
                commit('added new '+ args[4] +' Model Component');
                break;
            case 'remove':
                fs.rmdirSync('./db/'+args[4],{ recursive: true });
                commit('removed new '+ args[4] +' Model Component');
                break;
            default:
                console.log("new\t initializes the new Model Component of this project\n"+
                "remove\t removes an Model Component of this project");
                break;
        }
    }
}