module.exports = {
    parseURL : function(someString){
        // check string
        var stringValid = false;

        var http = require('http');
        var url = require('url');
        var path = require("path");
        var validator = require('validator');


        var ourURL = url.parse(someString, true, false);
        console.log(ourURL);
        var fileName = path.basename(ourURL.pathname);
        console.log(fileName);
        var pathName = path.dirname(ourURL.pathname);
        console.log(pathName);

        if (validator.isURL(someString)){
            console.log("Url valid");
            return {
                url_final : ourURL.href ,
                host: ourURL.hostname,
                port: ourURL.port || 80,
                file: fileName,
                path: pathName
            }
        } else {
            // if string not valid return null
            console.log("Url not valid");
            return null
        }



    }

};
