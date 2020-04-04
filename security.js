const fs = require('fs');

function scan(){
    // scans the packages
    // checks the package version
    // generates a scan-(date).vuln
}

function fix(){
    // reads the scan-(date).vuln
    // fixes the vulnerabilities
}

module.exports = {
    securityconfig: function(args){
        switch(args[3]){
            case 'scan':
                scan();
                break;
            case 'fix':

        }
    }
}