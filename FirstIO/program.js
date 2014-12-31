var fs = require('fs'),
    contents = fs.readFileSync(process.argv[2]),
    lines = contents.toString().split('\n').length - 1;
console.log(lines);


