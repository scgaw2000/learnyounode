var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
  var input = url.parse(req.url, true)
  var json = null
  var date = new Date(input.query['iso'])
  if (input.pathname == '/api/parsetime') {
    json = JSON.stringify({ hour : date.getHours(), minute: date.getMinutes(), second: date.getSeconds() })
  } else if (input.pathname == '/api/unixtime') {
    json = JSON.stringify({ unixtime : date.getTime() })
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(json)
})
server.listen(process.argv[2])
