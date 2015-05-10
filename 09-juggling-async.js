var http = require('http')
var bl = require('bl')

var result = [];

for (var i = 2; i < 5; i++) {
  handleUrl(i, process.argv[i])
}

function handleUrl(index, url) {
  http.get(process.argv[index], function(res) {
    res.pipe(bl(function(err, data) {
      printResult(index, data)
    }))
  })
}

function printResult(index, data) {
  result[index] = data

  if (result[2] != null && result[3] != null && result[4] != null) {
    console.log(result[2].toString())
    console.log(result[3].toString())
    console.log(result[4].toString())
  }
}
