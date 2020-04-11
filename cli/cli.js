const fs = require('fs');
const { repoconfig, initrepo } = require('../repository');
const { dependenciesconfig, initdependencies } = require('../dependenices');
const { dbconfig } = require('../db');
const { securityconfig } = require('../security');
const { viewconfig } = require('../view');

const { service } = require('../components/service');
const { mod } = require('../components/module');
const { api } = require('../components/api');
const { model } = require('../components/model');


const args = process.argv;
var config = {
    "repository": {
        "url":""
    },
    "database": {
        "db":"mysql",
        "dbname":"test",
        "user": {
            "username":"root",
            "password":"root"
        },
        "address": {
            "name":"localhost",
            "port":3306
        }
    },
    "app": {
        "port": 3001,
        "path":'',
        'views':{
            'enable': false, // this says if you want to deal with the frontend in this project or not (or use other frameworks like Angular)
            'engine':'html',
            'path':'views'
        }
    }
}

switch(args[2]){
    case 'new':
        newapp(args[3]);
        break;
    case 'repo':
        repoconfig(args);
        break;
    case 'dependencies':
        dependenciesconfig(args);
        break;
    case 'db':
        dbconfig(args);
        break;
    case 'security':
        securityconfig(args);
        break;
    case 'views':
        viewconfig(args);
        break;
    case 'remove':
        remove();
        break;
    case 'service':
        service(args);
        break;
    case 'module':
        mod(args);
        break;
    case 'api':
        api(args);
        break;
    case 'model':
        model(args);
        break;
    default:
        console.log("new\t\tto create a new application\n"+
        "repo\t\tto configure the repo of the project\n"+
        "dependencies\tto install and configure dependences for this project\n"+
        "db\t\tto configure the database for this project\n"+
        "security\tto scan and fix vulnerabilities of this project\n"+
        "views\t\tto create the views of this project\n"+
        "remove\t\tto delete this project\n"+
        "service\t\tto create, configure and handle services of this project\n"+
        "module\t\tto create, configure and handle modules of this project\n"+
        "api\t\tto create, configure and hanfle APIs of this project\n"+
        "model\t\tto create, configure and handle models of this project");
        break;
}

function newapp(appname){
    fs.mkdirSync(appname);
    fs.writeFileSync(appname+'/.gitignore',"config.json");
    fs.writeFileSync(appname+'/config.json',JSON.stringify(config));
    fs.writeFileSync(appname+'/app.js','');
    fs.mkdirSync(appname+"/services");
    fs.mkdirSync(appname+"/api");
    fs.mkdirSync(appname+"/modules");
    fs.mkdirSync(appname+"/db");
    fs.writeFileSync(appname+"/README.md","# "+appname +"\n\n## Security\n\nCheckout synk, nsp and retire.js these node modules help you"+
    " protect your application from attackers by profiling and fixing your app vulnerabilities.");
    initrepo(appname);
}

function remove(){
    fs.unlinkSync('./.gitignore');
    fs.unlinkSync('./config.json');
    fs.rmdirSync("services");
    fs.rmdirSync("api");
    fs.rmdirSync("modules");
}