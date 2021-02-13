require('../')('./demo/in.wav', {
  buffer: false
}).on('error', function (err) {
  console.error('GOT ERROR', err.message)
}).on('load', function () {
  console.log('GOT LOAD')
})