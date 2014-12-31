var http = require('http'),
    EventEmitter = require('events').EventEmitter,
    urls = [];

for (var i = 2; i < process.argv.length; i++) {
  urls[urls.length] = process.argv[i];
}

function Outputs() {
  this._urls = []
  this._outputs = [];
  EventEmitter.call(this);
  this.addUrl = function (url, content) {
    this._urls[this._urls.length] = url;
    this._outputs[this._outputs.length] = content;
    this.emit('changed');
  };
  this.getContent = function(url) {
    var index = this._urls.indexOf(url);
    return this._outputs[index];
  };
}
Outputs.prototype.__proto__ = EventEmitter.prototype;

var outputs = new Outputs();
outputs.on('changed', function() {
  if (this._outputs.length === 3) {
    for (var urlIndex in urls) {
      console.log(this.getContent(urls[urlIndex]));
    }
  }
});

urls.forEach(function(url) {
  http.get(url, function(response) {
    var buffers = [];
    response.on('data', function(chunk) {
      buffers[buffers.length] = chunk;
    });
    response.on('end', function() {
      outputs.addUrl(url, buffers.join('').toString());
    });
    response.on('error', console.error);
  });
});

