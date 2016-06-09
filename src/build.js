(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Test = require('./test.class');
console.log('asd');
var test = new Test();

test.log('Test1');
test.log('is');
test.log('successful');

},{"./test.class":2}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = function () {
	function Test() {
		_classCallCheck(this, Test);
	}

	_createClass(Test, [{
		key: "log",
		value: function log(testParam) {
			console.log(testParam);
		}
	}]);

	return Test;
}();

module.exports = Test;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiLCJzcmMvc2NyaXB0cy90ZXN0LmNsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLE9BQU8sUUFBUSxjQUFSLENBQVg7QUFDQSxRQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsSUFBSSxPQUFPLElBQUksSUFBSixFQUFYOztBQUVBLEtBQUssR0FBTCxDQUFTLE9BQVQ7QUFDQSxLQUFLLEdBQUwsQ0FBUyxJQUFUO0FBQ0EsS0FBSyxHQUFMLENBQVMsWUFBVDs7Ozs7Ozs7O0lDTk0sSTtBQUNMLGlCQUFjO0FBQUE7QUFFYjs7OztzQkFFRyxTLEVBQVc7QUFDUixXQUFRLEdBQVIsQ0FBWSxTQUFaO0FBQ047Ozs7OztBQUdGLE9BQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgVGVzdCA9IHJlcXVpcmUoJy4vdGVzdC5jbGFzcycpO1xuY29uc29sZS5sb2coJ2FzZCcpXG52YXIgdGVzdCA9IG5ldyBUZXN0KCk7XG5cbnRlc3QubG9nKCdUZXN0MScpO1xudGVzdC5sb2coJ2lzJyk7XG50ZXN0LmxvZygnc3VjY2Vzc2Z1bCcpO1xuIiwiY2xhc3MgVGVzdCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdH1cblxuXHRsb2codGVzdFBhcmFtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRlc3RQYXJhbSk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXN0OyJdfQ==
