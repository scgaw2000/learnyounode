var mymodule = require('./06-make-it-modular-filter.js')

mymodule(process.argv[2], process.argv[3], function(err, arr){
  if (err) {
    throw err
  }
  for (var key in arr) {
    console.log(arr[key])
  }
})
