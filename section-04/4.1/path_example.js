
// path_examples.js
//
// Packt Publishing - Build a Network Application with Node
// Path manipulation examples

var path = require("path");

var foldersInPath = process.cwd().split(path.sep).slice(1);
// returns ["Users","stanco","dev","node_course","4","4.1"]

var normalizedPath = path.normalize("/opt/www/demo//section1/examples/..");
// returns /opt/www/demo/section1

var joinedPath = path.join(process.cwd(), "../..", "3/3.1", "..");
// returns /Users/stanco/dev/node_course/3

var resolvedPath = path.resolve("logs/error", "/opt/www/demo/", "../sandbox/test1", "..", "../demo/section1/../section2");
// returns /opt/www/demo/section2

var dirName = path.dirname("/opt/www/section2/examples/example1/index.html");
// returns /opt/www/section2/examples/example1

var examplePath = "/opt/www/section2/examples/example1/index.html";

var fullBaseFile = path.basename(examplePath); // returns index.html

var fileExtension = path.extname(examplePath); // returns .html

var baseFile = path.basename(examplePath, fileExtension); // returns index

console.log("path = "+path);
console.log("\nfoldersInPath = " + JSON.stringify(foldersInPath) + "\n");
console.log("normalizedPath = "+normalizedPath + "\n");
console.log("joinedPath = "+joinedPath + "\n");
console.log("resolvedPath = "+resolvedPath + "\n");
console.log("dirName = "+dirName + "\n");
console.log("fullBaseFile = "+fullBaseFile + "\n");
console.log("fileExtension = "+fileExtension + "\n");
console.log("baseFile = "+baseFile + "\n");
