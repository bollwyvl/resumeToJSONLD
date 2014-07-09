var path = require('path');
var fs = require('fs');

var resumeToJSONLD = require(path.join(__dirname, '..', 'lib', 'converter'));

// Use the default resume from the schema
var input = require('resume-schema').resumeJson;
var output = path.resolve(__dirname, 'resume.jsonld');

resumeToJSONLD(input, function (err, result) {
    fs.writeFile(output, JSON.stringify(result, null, '  '), function(err){
        console.log(err ? 'Error: ' + err : 'Wrote ' + output)
    });
});
