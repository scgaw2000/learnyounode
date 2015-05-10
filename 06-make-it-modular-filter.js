var fs = require("fs")
var path = require("path")

module.exports = function(dir, extname, callback) {
  fs.readdir(dir, function(err, files){
    if (err) {
      return callback(err)
    }
    var result = []
    for (var key in files) {
      if (path.extname(files[key]) === '.' + extname) {
        result.push(files[key])
      }
    }
    return callback(null, result)
  })
}
