// Zach Moore
// 11/01/18
// CIS 131-W01
// Node, NPM, and jSon Practice

// load-json-file and lodash packages used
var _ = require('lodash');
const loadJsonFile = require('load-json-file');
 
loadJsonFile('data.json').then(json => {

    _.forEach(json.items, function(anItem){
        
        console.log();

        _.forEach(anItem, function(prop){
            
            console.log(prop);
        });
    });
});