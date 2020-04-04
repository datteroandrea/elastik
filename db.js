const fs = require('fs');
const { install } = require('./dependenices');

function initdb(db, dbname, user, address){
    var config = JSON.parse(fs.readFileSync('config.json'));
    config.database.db =  db;
    config.databse.dbname = dbname;
    config.database.user = user;
    config.database.address = address;
    fs.writeFileSync('config.json',JSON.stringify(config));
}

function address(address){
    var config = JSON.parse(fs.readFileSync('config.json'));
    config.database.address = address;
    fs.writeFileSync('config.json',JSON.stringify(config));
}

function user(user){
    var config = JSON.parse(fs.readFileSync('config.json'));
    config.database.user = user;
    fs.writeFileSync('config.json',JSON.stringify(config));
}

function dbname(dbname){
    var config = JSON.parse(fs.readFileSync('config.json'));
    config.database.dbname = dbname;
    fs.writeFileSync('config.json',JSON.stringify(config));
}

function db(db){
    var config = JSON.parse(fs.readFileSync('config.json'));
    config.database.db = db;
    fs.writeFileSync('config.json',JSON.stringify(config));
}

module.exports = {
    dbconfig: function(args){
        switch(args[3]){
            case 'init':
                initdb(args[4], args[5], { username: args[6], password: args[7] }, { name: args[8], port: args[9]});
                //install(args[4]); // TODO: if mysql is args[4] installs mysql2 if mongodb is args[4] installs mongoose
                break;
            case 'address':
                address({ name: args[4], port: args[5] });
                break;
            case 'user':
                user({ username: args[4], password: args[5] });
                break;
            case 'dbname':
                dbname(args[4]);
                break;
            case 'db':
                db(args[4]);
                break;
            default:
                console.log("init <db> <dbname> <username> <userpass> <address> <port>\t initializes the database of this project\n"+
                "address <address> <port>\t\t\t\t\t configures the address of the database\n"+
                "user <username> <password>\t\t\t\t\t configures the user of the database\n"+
                "dbname <dbname>\t\t\t\t\t configures the dbname of the database\n"+
                "db <db>\t\t\t\t\t configures the db type (i.e mysql, mongodb, postgres, etc.)\n");
                break;
        }
    }
}