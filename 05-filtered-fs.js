var fs = require("fs")
var path = require("path")
fs.readdir(process.argv[2], function(err, files) {
  if (err) {
    throw err
  }
  for (var key in files) {
    if (path.extname(files[key]) === '.' + process.argv[3])
    console.log(files[key])
  }
})
