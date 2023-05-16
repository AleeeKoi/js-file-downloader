(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsFileDownloader"] = factory();
	else
		root["jsFileDownloader"] = factory();
})(this, function() {
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
/*! exports provided: DownloadException, downloadException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadException", function() { return DownloadException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadException", function() { return downloadException; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var DownloadException = /*#__PURE__*/function (_Error) {
  _inherits(DownloadException, _Error);
  var _super = _createSuper(DownloadException);
  function DownloadException(message, request) {
    var _this;
    _classCallCheck(this, DownloadException);
    _this = _super.call(this, "Downloader error: ".concat(message));
    _this.request = request;
    _this.name = 'DownloadException';
    return _this;
  }
  return _createClass(DownloadException);
}( /*#__PURE__*/_wrapNativeSuper(Error));
;

/**
 * @deprecated use DownloadException instead, it will be removed in next releases!
 */
var downloadException = DownloadException;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exception */ "./src/exception.js");
/* harmony import */ var _signatures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signatures */ "./src/signatures.js");
/*!
 * JS File Downloader v 1.1.25
 * https://github.com/AleeeKoi/js-file-downloader
 *
 * Copyright Alessandro Pellizzari
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var DEFAULT_PARAMS = {
  timeout: 40000,
  headers: [],
  forceDesktopMode: false,
  autoStart: true,
  withCredentials: false,
  method: 'GET',
  nameCallback: function nameCallback(name) {
    return name;
  },
  contentType: 'application/x-www-form-urlencoded',
  body: null,
  nativeFallbackOnError: false,
  contentTypeDetermination: false
};
var JsFileDownloader = /*#__PURE__*/function () {
  /**
   * Create a new JsFileDownloader instance
   * You need to define a {String} "url" params and other
   * @param {Object} customParams
   */
  function JsFileDownloader() {
    var customParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, JsFileDownloader);
    this.params = Object.assign({}, DEFAULT_PARAMS, customParams);
    this.link = this.createLink();
    this.request = null;
    this.downloadedFile = null;
    this.abortController = undefined;
    if (this.params.autoStart) return this.downloadFile();
    return this;
  }
  _createClass(JsFileDownloader, [{
    key: "start",
    value: function start() {
      return this.downloadFile();
    }
  }, {
    key: "abort",
    value: function abort(reason) {
      if (!this.abortController) {
        return;
      }
      this.abortController.abort(reason || 'Download cancelled');
    }
  }, {
    key: "downloadFile",
    value: function downloadFile() {
      var _this = this;
      return new Promise(function (resolve, reject) {
        _this.initDownload(resolve, reject);
      });
    }
  }, {
    key: "setAbortListner",
    value: function setAbortListner(abortListener) {
      if (!this.abortController) {
        return;
      }
      this.abortController.signal.addEventListener('abort', abortListener);
    }
  }, {
    key: "unsetAbortListner",
    value: function unsetAbortListner(abortListener) {
      if (!this.abortController) {
        return;
      }
      this.abortController.signal.removeEventListener('abort', abortListener);
    }
  }, {
    key: "initDownload",
    value: function initDownload(resolve, reject) {
      var _this2 = this;
      var fallback = function fallback() {
        _this2.link.target = '_blank';
        _this2.link.href = _this2.params.url;
        _this2.clickLink();
      };

      // fallback for old browsers
      if (!('download' in this.link) || this.isMobile()) {
        fallback();
        return resolve();
      }
      this.request = this.createRequest();
      this.abortController = 'AbortController' in window ? new AbortController() : null;
      var abortListener = function abortListener(_ref) {
        var target = _ref.target;
        _this2.unsetAbortListner(abortListener);
        !!_this2.request && _this2.request.abort();
        reject(target.reason);
      };
      this.setAbortListner(abortListener);
      if (!this.params.url) {
        return reject(new _exception__WEBPACK_IMPORTED_MODULE_0__["DownloadException"]('url param not defined!', this.request));
      }
      this.request.onload = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this2.unsetAbortListner(abortListener);
              if (!(parseInt(_this2.request.status, 10) !== 200)) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", reject(new _exception__WEBPACK_IMPORTED_MODULE_0__["DownloadException"]("status code [".concat(_this2.request.status, "]"), _this2.request)));
            case 3:
              _context.next = 5;
              return _this2.startDownload();
            case 5:
              return _context.abrupt("return", resolve(_this2));
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      this.request.ontimeout = function () {
        _this2.unsetAbortListner(abortListener);
        reject(new _exception__WEBPACK_IMPORTED_MODULE_0__["DownloadException"]('request timeout', _this2.request));
      };
      this.request.onerror = function () {
        _this2.unsetAbortListner(abortListener);
        if (_this2.params.nativeFallbackOnError) {
          fallback();
          resolve(_this2);
        } else {
          reject(new _exception__WEBPACK_IMPORTED_MODULE_0__["DownloadException"]('network error', _this2.request));
        }
      };
      this.request.send(this.params.body);
      return this;
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      return !this.params.forceDesktopMode && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  }, {
    key: "createRequest",
    value: function createRequest() {
      var request = new XMLHttpRequest();
      request.open(this.params.method, this.params.url, true);
      if (this.params.contentType !== false) {
        request.setRequestHeader('Content-type', this.params.contentType);
      }
      this.params.headers.forEach(function (header) {
        request.setRequestHeader(header.name, header.value);
      });
      request.responseType = 'arraybuffer';
      if (this.params.process && typeof this.params.process === 'function') {
        request.addEventListener('progress', this.params.process);
      }
      if (this.params.onloadstart && typeof this.params.onloadstart === 'function') {
        request.onloadstart = this.params.onloadstart;
      }
      request.timeout = this.params.timeout;
      request.withCredentials = !!this.params.withCredentials || !!this.params.includeCredentials;
      return request;
    }
  }, {
    key: "getFileName",
    value: function getFileName() {
      // Forcing file name
      if (typeof this.params.filename === 'string') {
        return this.params.filename;
      }
      // Trying to get file name from response header
      var content = this.request.getResponseHeader('Content-Disposition');
      var contentParts = [];
      if (content) {
        contentParts = content.replace(/["']/g, '').match(/filename\*?=([^;]+)/);
      }
      var extractedName = contentParts && contentParts.length >= 1 ? contentParts[1] : this.params.url.split('/').pop().split('?')[0];
      return this.params.nameCallback(extractedName);
    }
  }, {
    key: "getContentTypeFromFileSignature",
    value: function getContentTypeFromFileSignature(file) {
      var signatures = Object.assign({}, _signatures__WEBPACK_IMPORTED_MODULE_1__["fileSignatures"], this.params.customFileSignatures);
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        var first4BytesOfFile = file.slice(0, 4);
        reader.onloadend = function (evt) {
          if (evt.target.readyState !== FileReader.DONE) {
            reject();
            return;
          }
          // Since an array buffer is just a generic way to represent a binary buffer
          // we need to create a TypedArray, in this case an Uint8Array
          var uint = new Uint8Array(evt.target.result);
          var bytes = [];
          uint.forEach(function (byte) {
            // transform every byte to hexadecimal
            bytes.push(byte.toString(16));
          });
          var hex = bytes.join('').toUpperCase();
          resolve(signatures[hex]);
        };
        reader.onerror = reject;

        // read first 4 bytes of sliced file as an array buffer
        reader.readAsArrayBuffer(first4BytesOfFile);
      });
    }
  }, {
    key: "getContentTypeFromResponseHeader",
    value: function getContentTypeFromResponseHeader() {
      return this.request.getResponseHeader('content-type');
    }
  }, {
    key: "getContentType",
    value: function getContentType(response) {
      var _this3 = this;
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
          var contentTypeDetermination, defaultContentType, headerContentType, signatureContentType, _headerContentType, _signatureContentType, _ref4, _signatureContentType2;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                contentTypeDetermination = _this3.params.contentTypeDetermination;
                defaultContentType = 'application/octet-stream';
                if (contentTypeDetermination === 'header' || contentTypeDetermination === 'full') {
                  headerContentType = _this3.getContentTypeFromResponseHeader();
                }
                if (!(contentTypeDetermination === 'signature' || contentTypeDetermination === 'full')) {
                  _context2.next = 7;
                  break;
                }
                _context2.next = 6;
                return _this3.getContentTypeFromFileSignature(new Blob([response]));
              case 6:
                signatureContentType = _context2.sent;
              case 7:
                if (contentTypeDetermination === 'header') {
                  resolve((_headerContentType = headerContentType) !== null && _headerContentType !== void 0 ? _headerContentType : defaultContentType);
                } else if (contentTypeDetermination === 'signature') {
                  resolve((_signatureContentType = signatureContentType) !== null && _signatureContentType !== void 0 ? _signatureContentType : defaultContentType);
                } else if (contentTypeDetermination === 'full') {
                  resolve((_ref4 = (_signatureContentType2 = signatureContentType) !== null && _signatureContentType2 !== void 0 ? _signatureContentType2 : headerContentType) !== null && _ref4 !== void 0 ? _ref4 : defaultContentType);
                } else {
                  resolve(defaultContentType);
                }
              case 8:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }());
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
    value: function clickLink() {
      var event;
      try {
        event = new MouseEvent('click');
      } catch (e) {
        event = document.createEvent('MouseEvent');
        event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      }
      this.link.dispatchEvent(event);
    }
  }, {
    key: "getFile",
    value: function () {
      var _getFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(response, fileName) {
        var type, file, options;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.getContentType(response);
            case 2:
              type = _context3.sent;
              options = {
                type: type
              };
              try {
                file = new File([response], fileName, options);
              } catch (e) {
                file = new Blob([response], options);
                file.name = fileName;
                file.lastModifiedDate = new Date();
              }
              return _context3.abrupt("return", file);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getFile(_x2, _x3) {
        return _getFile.apply(this, arguments);
      }
      return getFile;
    }()
  }, {
    key: "startDownload",
    value: function () {
      var _startDownload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var fileName, objectUrl;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              fileName = this.getFileName();
              _context4.next = 3;
              return this.getFile(this.request.response, fileName);
            case 3:
              this.downloadedFile = _context4.sent;
              if (!('msSaveOrOpenBlob' in window.navigator)) {
                _context4.next = 6;
                break;
              }
              return _context4.abrupt("return", window.navigator.msSaveOrOpenBlob(this.downloadedFile, fileName));
            case 6:
              objectUrl = window.URL.createObjectURL(this.downloadedFile);
              this.link.href = objectUrl;
              this.link.download = fileName;
              this.clickLink();
              setTimeout(function () {
                (window.URL || window.webkitURL || window).revokeObjectURL(objectUrl);
              }, 1000 * 40);
              return _context4.abrupt("return", this.downloadedFile);
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function startDownload() {
        return _startDownload.apply(this, arguments);
      }
      return startDownload;
    }()
  }]);
  return JsFileDownloader;
}();
/* harmony default export */ __webpack_exports__["default"] = (JsFileDownloader);

/***/ }),

/***/ "./src/signatures.js":
/*!***************************!*\
  !*** ./src/signatures.js ***!
  \***************************/
/*! exports provided: fileSignatures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileSignatures", function() { return fileSignatures; });
var fileSignatures = {
  '89504E47': 'image/png',
  '25504446': 'application/pdf'
};

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=js-file-downloader.js.map