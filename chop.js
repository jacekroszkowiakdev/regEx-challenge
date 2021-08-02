"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
var chop = function (template, data) {
    // check if parameters are not empty
    if (!template || isEmpty(data)) {
        return "template and dataset are mandatory parameters";
    }
    // check if parameters are of correct type:
    if (typeof template !== "string" ||
        (typeof data !== "object" && typeof data !== null)) {
        return "The input arguments are of wrong type. Arguments can be only of type string and object";
    }
    // parse the template:
    var regEx = /\{{\w+\}}/gi;
    var trimWhiteSpace = /\s\s+/g;
    var dataKeys = Object.keys(data);
    var mapObj = {};
    dataKeys.forEach(function (elem) { return (mapObj["{{" + elem + "}}"] = data[elem]); });
    //chain another regex with white space replacement replace(/\s\s+)/
    var choppedTemplate = template.replace(regEx, function (item) { return mapObj[item]; });
    return choppedTemplate;
};
exports.default = chop;
