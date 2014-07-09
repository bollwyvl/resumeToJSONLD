var _ = require('lodash');
var jsonld = require('jsonld');

var resumeContext = require('resume-schema').context;

/**
 * Turn a résumé into linked data with JSON-LD Compaction.
 * @param {object} resumeObject - An object representing a résumé
 * @param {object} [options={}] - Options passed to jsonld.compact
 * @param {function} callback - Node-style callback: function(err, res)
 */
function resumeToJSONLD(resumeObject, options, callback) {
    if(arguments.length === 2){
      callback = options;
      options = {};
    }
    jsonld.compact(
        resumeObject,
        resumeContext,
        _.extend({expandContext: resumeContext}, options),
        callback
    );
}

module.exports = resumeToJSONLD;
