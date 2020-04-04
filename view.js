const fs = require('fs');

// init the views if the views.enable is true
function initviews (){
    var config = JSON.parse(fs.readFileSync('config.json'));
    if(config.app.views.enable){
        fs.mkdirSync('views');
        var viewengine = config.app.views.engine;
        fs.writeFileSync('views/index.'+viewengine,'<html></html>');
    } else {
        console.error('Please first use: agile views enable.')
    }
}

// creates a views with the given name if the views.enable is true
function createview(viewname){
    var config = JSON.parse(fs.readFileSync('config.json'));
    if(config.app.views.enable){
        var viewengine = config.app.views.engine;
        fs.writeFileSync('views/'+viewname+'.'+viewengine,'<html></html>');
    } else {
        console.error('Please first use: agile views enable.')
    }
}

// enables the views
function enableviews(){
    const config = JSON.parse(fs.readFileSync('config.json'));
    config.app.views.enable = true;
    fs.writeFileSync('config.json', JSON.stringify(config));
}

// deletes the view with the given name
function removeview(viewname){
    const config = JSON.parse(fs.readFileSync('config.json'));
    fs.unlinkSync('views/'+viewname+'.'+config.app.views.engine);
}

// destroys the views and sets enable back to false
function destroyviews(){
    const config = JSON.parse(fs.readFileSync('config.json'));
    config.app.views.enable = false;
    fs.writeFileSync('config.json', JSON.stringify(config));
    fs.rmdirSync('views',{ recursive: true });
}

module.exports = {
    viewconfig: function(args){
        switch(args[3]){
            case 'init':
                initviews();
                break;
            case 'new':
                createview(args[4]);
                break;
            case 'enable':
                enableviews();
                break;
            case 'remove':
                removeview(args[4]);
                break;
            case 'destroy':
                destroyviews(args[4]);
                break;
            default:
                console.log("enable <bool>\t used to be able of creating views\n"+
                "init\t\t initializes the views of this project\n"+
                "new <view>\t creates view for this project\n"+
                "remove <view>\t removes view\n"+
                "destroy\t\t removes all the views and sets enable to false"
                );
                break;
        }
    }
}