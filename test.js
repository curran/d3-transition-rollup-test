var makeSelection = require("./index-build");
var jsdom = require("jsdom");

var domElement = jsdom.jsdom().body;
var mySelection = makeSelection(domElement);

console.log(mySelection.transition);
