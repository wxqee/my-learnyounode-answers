var filterFn = require('./solution_filter'),
    dir = process.argv[2],
    ext = process.argv[3];

filterFn(dir, ext, function(err, list) {
  if (err) { return console.error('There was an error: ', err); }
  list.forEach(function(file){
    console.log(file);
  });
});
