(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("js-download-status", [], factory);
	else if(typeof exports === 'object')
		exports["js-download-status"] = factory();
	else
		root["js-download-status"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/exception.js":
/*!**************************!*\
  !*** ./src/exception.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function downloadException(message) {
  this.message = message;
  this.name = 'downloadException';
}

module.exports.downloadException = downloadException;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var downloadException = __webpack_require__(/*! ./exception */ "./src/exception.js").downloadException;

var defaultParams = {
  timeout: 40000,
  mobileDisabled: true
};

var Downloader =
/*#__PURE__*/
function () {
  /**
   * You need to define a {String} "url" params and optionally others
   * * {String} filename
   * * {Int} timeout in ms
   * * {Boolean} mobileDisabled
   * * {Function} process call on request event
   * @param {Object} customParams
   */
  function Downloader() {
    var customParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Downloader);

    this.params = Object.assign({}, defaultParams, customParams);
    return new Promise(this.initDonwload);
  }

  _createClass(Downloader, [{
    key: "initDonwload",
    value: function initDonwload(resolve, reject) {
      var _this = this;

      var link = this.createLink(); // fallback for old browsers

      if (!('download' in link) || this.isMobile()) {
        link.target = '_blank';
        link.href = this.params.url;
        this.clickLink(link);
        return resolve();
      }

      var request = this.createRequest();

      if (!this.params.url) {
        return reject('Downloader error: url param not defined!');
      }

      request.onload = function () {
        try {
          if (parseInt(request.status, 10) !== 200) {
            throw downloadException("status code [".concat(request.status, "]"));
          }

          _this.startDownload(request, link);

          resolve();
        } catch (error) {
          reject(new Error("Downloader error: ".concat(error)));
        }
      };

      request.ontimeout = function () {
        reject(new Error('Downloader error: request timeout'));
      };

      request.onerror = function (e) {
        reject(e);
      };

      request.send();
      return request;
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  }, {
    key: "createRequest",
    value: function createRequest() {
      var request = new XMLHttpRequest();
      request.open('GET', this.params.url, true);
      request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      request.responseType = 'arraybuffer';

      if (this.params.process && typeof this.params.process === 'function') {
        request.addEventListener('progress', this.params.process);
      }

      request.timeout = this.params.timeout;
      return request;
    }
  }, {
    key: "getFileName",
    value: function getFileName(request) {
      // Forcing file name
      if (typeof this.params.filename === 'string') {
        return this.params.filename;
      } // Trying to get file name from response header


      var content = request.getResponseHeader('Content-Disposition');
      var contentParts = [];

      if (content) {
        contentParts = content.replace(/\s|"|'/g, '').match(/(filename=)([\s\S]+)/);
      }

      return contentParts.length >= 2 ? contentParts[2] : this.params.url.split('/').pop().split('?')[0];
    }
  }, {
    key: "createLink",
    value: function createLink() {
      var link = document.createElement('a');
      link.style.display = 'none';
      return link;
    }
  }, {
    key: "clickLink",
    value: function clickLink(link) {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
    }
  }, {
    key: "getFile",
    value: function getFile(response, fileName) {
      var file = null;
      var options = {
        type: 'application/octet-stream'
      };

      try {
        file = new File([response], fileName, options);
      } catch (e) {
        file = new Blob([response], options);
        file.name = fileName;
        file.lastModifiedDate = new Date();
      }

      return file;
    }
  }, {
    key: "startDownload",
    value: function startDownload(request, link) {
      var fileName = this.getFileName(request);
      var file = this.getFile(request.response, fileName); // native IE

      if ('msSaveOrOpenBlob' in window.navigator) {
        return window.navigator.msSaveOrOpenBlob(file, fileName);
      }

      var objectUrl = window.URL.createObjectURL(file);
      link.href = objectUrl;
      link.download = fileName;
      this.clickLink(link);
      setTimeout(function () {
        (window.URL || window.webkitURL || window).revokeObjectURL(objectUrl);
      }, 1000 * 40);
      return this;
    }
  }]);

  return Downloader;
}();

module.exports = Downloader;

/***/ })

/******/ });
});
//# sourceMappingURL=js-download-status.js.map