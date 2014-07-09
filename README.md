# resumeToJSONLD

[![Build Status](https://api.travis-ci.org/jsonresume/resumeToJSONLD.svg)](http://travis-ci.org/jsonresume/resumeToJSONLD)

Returns the linked data of a resume, assumed valid by [resume-schema][]'s 
schema, in terms of [schema.org][] as a [JSON-LD][] document with embedded 
`@context`.

## Getting Started
```shell
npm install resumeToJSONLD
```

## Usage
```javascript
var resumeToJSONLD = require('resumeToJSONLD');

var resumeObject = {
  bio: {
    lastName: "Mud"
  }
};

resumeToJSONLD(resumeObject, function(err, resumeLD){
  console.log(resumeLD['@context']);
});
```

[resume-schema]: http://github.com/jsonresume/resume-schema
[schema.org]: http://schema.org
[JSON-LD]: http://json-ld.org
