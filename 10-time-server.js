var net = require('net')
var server = net.createServer(function (socket) {
  var date = new Date()
  socket.end(date.getFullYear()
            + '-'
            + zeroFill(date.getMonth() + 1)
            + '-'
            + zeroFill(date.getDate())
            + ' '
            + zeroFill(date.getHours())
            + ':'
            + zeroFill(date.getMinutes())
            + '\n')
})
server.listen(process.argv[2])

function zeroFill(value) {
  if (value < 10) {
    return '0' + value
  } else {
    return value
  }
}
