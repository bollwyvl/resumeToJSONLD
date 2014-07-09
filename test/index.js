var test = require('tape');
var resumeToJSONLD = require('../lib/converter');

var resumeJson = {};

test('Test resumeToText on resume.json.', function(t) {
    t.plan(1);
    resumeToJSONLD(resumeJson, {}, function(err, result) {
        t.equal(err, null, 'no errors');
    });
});
