/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"popup": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/popup/index.tsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/popup/List/index.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/popup/List/index.scss ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".panel {\n  min-height: 300px;\n  max-height: 500px;\n  overflow: auto; }\n\n.panel-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.panel-block {\n  align-items: baseline; }\n  .panel-block .ca-title {\n    flex: 1; }\n    .panel-block .ca-title .ca-subtitle {\n      font-size: 13px;\n      color: #aaa; }\n  .panel-block .remove-btn {\n    display: none; }\n  .panel-block:hover .remove-btn {\n    display: block;\n    cursor: pointer;\n    margin: 0 10px 0 5px;\n    color: #f14668; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/popup/index.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/popup/index.scss ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form {\n  padding: 15px; }\n\na.panel-block:hover, label.panel-block:hover {\n  background: unset; }\n\na.panel-block, label.panel-block {\n  cursor: default; }\n\n.fade-enter {\n  transform: translateX(100%); }\n\n.fade-enter.fade-enter-active {\n  transform: translateX(0);\n  transition: transform 300ms ease-in; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/background/kv.ts":
/*!******************************!*\
  !*** ./src/background/kv.ts ***!
  \******************************/
/*! exports provided: Kv, AlarmType, Duration, Alarm, alarmKv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kv", function() { return Kv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmType", function() { return AlarmType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Duration", function() { return Duration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alarm", function() { return Alarm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alarmKv", function() { return alarmKv; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Kv = /** @class */ (function () {
    function Kv() {
    }
    Kv.prototype.get = function (k, defaults) {
        var v = localStorage.getItem(k);
        if (v) {
            return JSON.parse(v);
        }
        if (defaults != null) {
            return defaults;
        }
        return null;
    };
    Kv.prototype.set = function (k, v) {
        localStorage.setItem(k, JSON.stringify(v));
    };
    Kv.prototype.delete = function (k) {
        localStorage.removeItem(k);
    };
    return Kv;
}());

var Field = /** @class */ (function () {
    function Field(_kv, _key, _defaults) {
        this._kv = _kv;
        this._key = _key;
        this._defaults = _defaults;
    }
    Field.prototype.get = function (def) {
        if (def === void 0) { def = this._defaults; }
        return this._kv.get(this._key, def);
    };
    Field.prototype.set = function (val) {
        return this._kv.set(this._key, val);
    };
    Field.prototype.delete = function () {
        return this._kv.delete(this._key);
    };
    return Field;
}());
var AlarmType;
(function (AlarmType) {
    AlarmType["once"] = "once";
    AlarmType["repeat"] = "repeat";
})(AlarmType || (AlarmType = {}));
var Duration = {
    H1: 60 * 60 * 1000,
};
var Alarm;
(function (Alarm) {
    function empty() {
        return {
            type: AlarmType.repeat,
            duration: Duration.H1,
            timeout: Date.now() + Duration.H1,
            title: 'New Alarm',
            id: Math.random().toString(36).slice(2),
        };
    }
    Alarm.empty = empty;
})(Alarm || (Alarm = {}));
var AlarmKv = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AlarmKv, _super);
    function AlarmKv() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.alarms = new Field(_this, 'alarms');
        return _this;
    }
    return AlarmKv;
}(Kv));
var alarmKv = new AlarmKv();


/***/ }),

/***/ "./src/popup/Form/Calendar.tsx":
/*!*************************************!*\
  !*** ./src/popup/Form/Calendar.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var bulma_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bulma-calendar */ "./node_modules/bulma-calendar/dist/js/bulma-calendar.js");
/* harmony import */ var bulma_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bulma_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bulma_calendar_dist_css_bulma_calendar_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bulma-calendar/dist/css/bulma-calendar.min.css */ "./node_modules/bulma-calendar/dist/css/bulma-calendar.min.css");
/* harmony import */ var bulma_calendar_dist_css_bulma_calendar_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bulma_calendar_dist_css_bulma_calendar_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




/**
 * A Bulma styled form input element.
 */
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function (_a, ref) {
    var control = _a.control, displayMode = _a.displayMode, error = _a.error, help = _a.help, maxLength = _a.maxLength, name = _a.name, onChange = _a.onChange, required = _a.required, _b = _a.showHeader, showHeader = _b === void 0 ? false : _b, _c = _a.type, type = _c === void 0 ? 'datetime' : _c, value = _a.value, _d = _a.id, id = _d === void 0 ? name : _d, bulmaCalendarOptions = _a.bulmaCalendarOptions, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["control", "displayMode", "error", "help", "maxLength", "name", "onChange", "required", "showHeader", "type", "value", "id", "bulmaCalendarOptions"]);
    var inputRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
    var calendarRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
    react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"](ref, function () { return inputRef.current; });
    react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
        calendarRef.current = new bulma_calendar__WEBPACK_IMPORTED_MODULE_1___default.a(inputRef.current, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ showHeader: showHeader,
            type: type,
            displayMode: displayMode, validateLabel: '确定', cancelLabel: '取消', clearLabel: '清除', todayLabel: '今天', nowLabel: '现在', minuteSteps: 1 }, bulmaCalendarOptions));
    }, [displayMode, showHeader, type]);
    react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
        calendarRef.current.on('select', function () {
            onChange({ target: inputRef.current }, type === 'time' ? calendarRef.current.time.start : calendarRef.current.date.start);
            window['c_' + type] = calendarRef.current;
        });
        return function () {
            calendarRef.current.removeListeners('select');
        };
    }, [onChange]);
    return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { ref: inputRef, defaultValue: value, id: id, maxLength: maxLength, name: name, required: required })));
}));


/***/ }),

/***/ "./src/popup/Form/index.tsx":
/*!**********************************!*\
  !*** ./src/popup/Form/index.tsx ***!
  \**********************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var background_kv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! background/kv */ "./src/background/kv.ts");
/* harmony import */ var popup_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popup/utils */ "./src/popup/utils/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Calendar */ "./src/popup/Form/Calendar.tsx");






function Form() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(background_kv__WEBPACK_IMPORTED_MODULE_2__["Alarm"].empty()), alarm = _a[0], setAlarm = _a[1];
    var _b = Object(popup_utils__WEBPACK_IMPORTED_MODULE_3__["useAlarmContext"])(), _ = _b.alarms, fetchAlarms = _b.fetchAlarms;
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
    function setField(key, value) {
        var _a;
        setAlarm(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, alarm), (_a = {}, _a[key] = value, _a)));
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "form" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "label" }, "\u6807\u9898:"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { className: "input", type: "text", placeholder: alarm.title, onChange: function (e) { return setField('title', e.target.value); } }))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "label" }, "\u7C7B\u578B:"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "select" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", { defaultValue: alarm.type, onChange: function (e) {
                            setField('type', e.target.value);
                        } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { value: background_kv__WEBPACK_IMPORTED_MODULE_2__["AlarmType"].repeat }, "\u5FAA\u73AF"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { value: background_kv__WEBPACK_IMPORTED_MODULE_2__["AlarmType"].once }, "\u4EC5\u4E00\u6B21"))))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field", hidden: alarm.type !== background_kv__WEBPACK_IMPORTED_MODULE_2__["AlarmType"].once },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "label" }, "\u5230\u671F:"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Calendar__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "input", type: "datetime", value: new Date(alarm.timeout), bulmaCalendarOptions: {
                        minDate: new Date(),
                        closeOnOverlayClick: true,
                    }, onChange: function (e, d) {
                        setField('timeout', d.getTime());
                    } }))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field", hidden: alarm.type !== background_kv__WEBPACK_IMPORTED_MODULE_2__["AlarmType"].repeat },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "label" }, "\u5FAA\u73AF:"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Calendar__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "input", type: "time", value: new Date(alarm.duration + 16 * background_kv__WEBPACK_IMPORTED_MODULE_2__["Duration"].H1), onChange: function (e, d) {
                        var duration = new Date(0);
                        duration.setHours(d.getHours() + duration.getHours());
                        duration.setMinutes(d.getMinutes() + duration.getMinutes());
                        setField('duration', duration.getTime());
                    } }))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field is-grouped" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { onClick: function (e) {
                        Object(popup_utils__WEBPACK_IMPORTED_MODULE_3__["getAlarmManager"])().add(alarm);
                        fetchAlarms();
                        history.push('/');
                    }, className: "button is-primary is-link" }, "\u4FDD\u5B58")),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { onClick: function (e) {
                        history.push('/');
                    }, className: "button is-link is-light" }, "\u53D6\u6D88")))));
}


/***/ }),

/***/ "./src/popup/List/index.scss":
/*!***********************************!*\
  !*** ./src/popup/List/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/popup/List/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/popup/List/index.tsx":
/*!**********************************!*\
  !*** ./src/popup/List/index.tsx ***!
  \**********************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var popup_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popup/utils */ "./src/popup/utils/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/popup/List/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);






function List() {
    var _a = Object(popup_utils__WEBPACK_IMPORTED_MODULE_2__["useAlarmContext"])(), alarms = _a.alarms, fetchAlarms = _a.fetchAlarms;
    var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"])();
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        fetchAlarms();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", { className: "panel" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "panel-heading" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u6574\u70B9\u62A5\u65F6"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "button is-primary is-small", onClick: function (e) {
                    history.push("/form");
                } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-plus", "aria-hidden": "true" }))),
        alarms.map(function (a) {
            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { key: a.id, className: "panel-block" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "panel-icon" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-" + (a.type === 'once' ? 'hourglass-half' : 'sync'), "aria-hidden": "true" })),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "ca-title" },
                    a.title,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "ca-subtitle" }, a.type === 'once'
                        ? dayjs__WEBPACK_IMPORTED_MODULE_4___default()(a.timeout).format('YYYY/MM/DD HH:mm')
                        : dayjs__WEBPACK_IMPORTED_MODULE_4___default()(a.duration).add(-8, 'h').format('HH:mm'))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-times remove-btn", "aria-hidden": "true", onClick: function (e) {
                        var b = confirm("\u786E\u5B9A\u8981\u5220\u9664\u300C" + a.title + "\u300D\u5417?");
                        if (b) {
                            Object(popup_utils__WEBPACK_IMPORTED_MODULE_2__["getAlarmManager"])().remove(a);
                            fetchAlarms();
                        }
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { id: a.id, type: "checkbox", className: "switch", defaultChecked: !a.disabled, onChange: function (e) {
                            Object(popup_utils__WEBPACK_IMPORTED_MODULE_2__["getAlarmManager"])().update(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, a), { disabled: !e.target.checked }));
                            fetchAlarms();
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { htmlFor: a.id }))));
        })));
}


/***/ }),

/***/ "./src/popup/index.scss":
/*!******************************!*\
  !*** ./src/popup/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/popup/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/popup/index.tsx":
/*!*****************************!*\
  !*** ./src/popup/index.tsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "./node_modules/bulma/css/bulma.min.css");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bulma_switch_dist_css_bulma_switch_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bulma-switch/dist/css/bulma-switch.min.css */ "./node_modules/bulma-switch/dist/css/bulma-switch.min.css");
/* harmony import */ var bulma_switch_dist_css_bulma_switch_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bulma_switch_dist_css_bulma_switch_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/popup/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Form */ "./src/popup/Form/index.tsx");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./List */ "./src/popup/List/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/popup/utils/index.ts");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");











function App() {
    var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useLocation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_10__["TransitionGroup"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_10__["CSSTransition"], { key: location.key, classNames: "fade", timeout: 300 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], { path: "/form" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_7__["Form"], null)),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], { path: "/" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_8__["List"], null))))));
}
function Root() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils__WEBPACK_IMPORTED_MODULE_9__["AlarmProvider"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root, 'container') },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Router"], { history: _utils__WEBPACK_IMPORTED_MODULE_9__["history"] },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null)))));
}
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Root, null), document.querySelector('#app'));


/***/ }),

/***/ "./src/popup/utils/index.ts":
/*!**********************************!*\
  !*** ./src/popup/utils/index.ts ***!
  \**********************************/
/*! exports provided: history, getAlarmManager, AlarmProvider, useAlarmContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlarmManager", function() { return getAlarmManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmProvider", function() { return AlarmProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAlarmContext", function() { return useAlarmContext; });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var constate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constate */ "./node_modules/constate/dist/constate.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _a;



var history = Object(history__WEBPACK_IMPORTED_MODULE_0__["createHashHistory"])();
function getAlarmManager() {
    var bg = chrome.extension.getBackgroundPage();
    return bg['alarmManager'];
}
function useAlarm() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]), alarms = _a[0], setAlarms = _a[1];
    return { alarms: alarms, fetchAlarms: function () {
            setAlarms(getAlarmManager().alarms);
        } };
}
var AlarmProvider = (_a = Object(constate__WEBPACK_IMPORTED_MODULE_1__["default"])(useAlarm), _a[0]), useAlarmContext = _a[1];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwL0xpc3QvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9rdi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAvRm9ybS9DYWxlbmRhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwL0Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wb3B1cC9MaXN0L2luZGV4LnNjc3M/ZmE3NSIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAvTGlzdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwL2luZGV4LnNjc3M/ZmNiNSIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wb3B1cC91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsV0FBVyxzQkFBc0Isc0JBQXNCLG1CQUFtQixFQUFFLG9CQUFvQixrQkFBa0IsbUNBQW1DLHdCQUF3QixFQUFFLGtCQUFrQiwwQkFBMEIsRUFBRSw0QkFBNEIsY0FBYyxFQUFFLDJDQUEyQyx3QkFBd0Isb0JBQW9CLEVBQUUsOEJBQThCLG9CQUFvQixFQUFFLG9DQUFvQyxxQkFBcUIsc0JBQXNCLDJCQUEyQixxQkFBcUIsRUFBRTtBQUM5aUI7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxVQUFVLGtCQUFrQixFQUFFLGtEQUFrRCxzQkFBc0IsRUFBRSxzQ0FBc0Msb0JBQW9CLEVBQUUsaUJBQWlCLGdDQUFnQyxFQUFFLG1DQUFtQyw2QkFBNkIsd0NBQXdDLEVBQUU7QUFDeFY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7SUFBQTtJQW1CQSxDQUFDO0lBaEJDLGdCQUFHLEdBQUgsVUFBTyxDQUFTLEVBQUUsUUFBWTtRQUM1QixJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsRUFBRTtZQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDckI7UUFDRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDcEIsT0FBTyxRQUFRO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNELGdCQUFHLEdBQUgsVUFBTyxDQUFTLEVBQUUsQ0FBSTtRQUNwQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxtQkFBTSxHQUFOLFVBQU8sQ0FBUztRQUNkLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCxTQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUNFLGVBQ1UsR0FBTyxFQUNQLElBQVksRUFDWixTQUFhO1FBRmIsUUFBRyxHQUFILEdBQUcsQ0FBSTtRQUNQLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixjQUFTLEdBQVQsU0FBUyxDQUFJO0lBQ3BCLENBQUM7SUFHSixtQkFBRyxHQUFILFVBQUksR0FBb0I7UUFBcEIsNEJBQU0sSUFBSSxDQUFDLFNBQVM7UUFDdEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsbUJBQUcsR0FBSCxVQUFJLEdBQU87UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxzQkFBTSxHQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFSCxZQUFDO0FBQUQsQ0FBQztBQUNELElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQiwwQkFBYTtJQUNiLDhCQUFpQjtBQUNuQixDQUFDLEVBSFcsU0FBUyxLQUFULFNBQVMsUUFHcEI7QUFVTSxJQUFNLFFBQVEsR0FBRztJQUN0QixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO0NBQ25CO0FBQ00sSUFBVSxLQUFLLENBVXJCO0FBVkQsV0FBaUIsS0FBSztJQUNwQixTQUFnQixLQUFLO1FBQ25CLE9BQU87WUFDTCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUU7WUFDakMsS0FBSyxFQUFFLFdBQVc7WUFDbEIsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFSZSxXQUFLLFFBUXBCO0FBQ0gsQ0FBQyxFQVZnQixLQUFLLEtBQUwsS0FBSyxRQVVyQjtBQUVEO0lBQXNCLHlFQUFFO0lBQXhCO1FBQUEscUVBRUM7UUFEQyxZQUFNLEdBQUcsSUFBSSxLQUFLLENBQVUsS0FBSSxFQUFFLFFBQVEsQ0FBQzs7SUFDN0MsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLENBRnFCLEVBQUUsR0FFdkI7QUFFTSxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFaUM7QUFDZDtBQUN4QjtBQXlDL0I7O0dBRUc7QUFDWSwrR0FBZ0IsQ0FDN0IsVUFDRSxFQWVDLEVBQ0QsR0FBRztJQWZELHdCQUFPLEVBQ1AsNEJBQVcsRUFDWCxnQkFBSyxFQUNMLGNBQUksRUFDSix3QkFBUyxFQUNULGNBQUksRUFDSixzQkFBUSxFQUNSLHNCQUFRLEVBQ1Isa0JBQWtCLEVBQWxCLHVDQUFrQixFQUNsQixZQUFpQixFQUFqQixzQ0FBaUIsRUFDakIsZ0JBQUssRUFDTCxVQUFTLEVBQVQsOEJBQVMsRUFDVCw4Q0FBb0IsRUFDcEIsdU5BQVE7SUFJVixJQUFNLFFBQVEsR0FBRyw0Q0FBWSxFQUFvQixDQUFDO0lBQ2xELElBQU0sV0FBVyxHQUFHLDRDQUFZLEVBQWlCLENBQUM7SUFFbEQseURBQXlCLENBQUMsR0FBRyxFQUFFLGNBQU0sZUFBUSxDQUFDLE9BQVEsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ3hELCtDQUFlLENBQUM7UUFDZCxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUkscURBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLHlEQUN4RCxVQUFVO1lBQ1YsSUFBSTtZQUNKLFdBQVcsZUFDWCxhQUFhLEVBQUUsSUFBSSxFQUNuQixXQUFXLEVBQUUsSUFBSSxFQUNqQixVQUFVLEVBQUUsSUFBSSxFQUNoQixVQUFVLEVBQUUsSUFBSSxFQUNoQixRQUFRLEVBQUUsSUFBSSxFQUNkLFdBQVcsRUFBRSxDQUFDLElBQ1gsb0JBQW9CLEVBQ3ZCLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFcEMsK0NBQWUsQ0FBQztRQUNkLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUMvQixRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLE9BQVEsRUFBRSxFQUFFLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0gsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsT0FBTztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU87WUFDTCxXQUFXLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWYsT0FBTyxDQUNILHdIQUNNLEtBQUssSUFDVCxHQUFHLEVBQUUsUUFBZSxFQUNwQixZQUFZLEVBQUUsS0FBSyxFQUNuQixFQUFFLEVBQUUsRUFBRSxFQUNOLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLElBQUksRUFBRSxJQUFJLEVBQ1YsUUFBUSxFQUFFLFFBQVEsSUFDbEIsQ0FDTDtBQUNILENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR21DO0FBQ21CO0FBQ0k7QUFDakI7QUFFWjtBQUUxQixTQUFTLElBQUk7SUFDZCw0SEFBa0QsRUFBakQsYUFBSyxFQUFFLGdCQUEwQztJQUNsRCw4RUFBOEMsRUFBNUMsYUFBUyxFQUFFLDRCQUFpQztJQUNsRCxJQUFJLE9BQU8sR0FBRyxtRUFBVSxFQUFFO0lBQzFCLFNBQVMsUUFBUSxDQUFDLEdBQWdCLEVBQUUsS0FBeUI7O1FBQzNELFFBQVEsQ0FBQyxrSEFDSixLQUFLLGdCQUNQLEdBQUcsSUFBRyxLQUFLLE9BQ1o7SUFDSixDQUFDO0lBQ0QsT0FBTyxDQUNMLG9FQUFLLFNBQVMsRUFBQyxNQUFNO1FBQ25CLG9FQUFLLFNBQVMsRUFBQyxPQUFPO1lBQ3BCLHNFQUFPLFNBQVMsRUFBQyxPQUFPLG9CQUFZO1lBQ3BDLG9FQUFLLFNBQVMsRUFBQyxTQUFTO2dCQUN0QixzRUFDRSxTQUFTLEVBQUMsT0FBTyxFQUNqQixJQUFJLEVBQUMsTUFBTSxFQUNYLFdBQVcsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUN4QixRQUFRLEVBQUUsV0FBQyxJQUFJLGVBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBakMsQ0FBaUMsR0FDaEQsQ0FDRSxDQUNGO1FBQ04sb0VBQUssU0FBUyxFQUFDLE9BQU87WUFDcEIsc0VBQU8sU0FBUyxFQUFDLE9BQU8sb0JBQVk7WUFDcEMsb0VBQUssU0FBUyxFQUFDLFNBQVM7Z0JBQ3RCLG9FQUFLLFNBQVMsRUFBQyxRQUFRO29CQUNyQix1RUFDRSxZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksRUFDeEIsUUFBUSxFQUFFLFdBQUM7NEJBQ1QsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzt3QkFDbEMsQ0FBQzt3QkFFRCx1RUFBUSxLQUFLLEVBQUUsdURBQVMsQ0FBQyxNQUFNLG1CQUFhO3dCQUM1Qyx1RUFBUSxLQUFLLEVBQUUsdURBQVMsQ0FBQyxJQUFJLHlCQUFjLENBQ3BDLENBQ0wsQ0FDRixDQUNGO1FBQ04sb0VBQUssU0FBUyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksS0FBSyx1REFBUyxDQUFDLElBQUk7WUFDMUQsc0VBQU8sU0FBUyxFQUFDLE9BQU8sb0JBQVk7WUFDcEMsb0VBQUssU0FBUyxFQUFDLFNBQVM7Z0JBQ3RCLDJEQUFDLGlEQUFRLElBQ1AsU0FBUyxFQUFDLE9BQU8sRUFDakIsSUFBSSxFQUFDLFVBQVUsRUFDZixLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBUSxFQUNyQyxvQkFBb0IsRUFBRTt3QkFDcEIsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFO3dCQUNuQixtQkFBbUIsRUFBRSxJQUFJO3FCQUMxQixFQUNELFFBQVEsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDO3dCQUNiLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNsQyxDQUFDLEdBQ0QsQ0FDRSxDQUNGO1FBRU4sb0VBQUssU0FBUyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksS0FBSyx1REFBUyxDQUFDLE1BQU07WUFDNUQsc0VBQU8sU0FBUyxFQUFDLE9BQU8sb0JBQVk7WUFDcEMsb0VBQUssU0FBUyxFQUFDLFNBQVM7Z0JBQ3RCLDJEQUFDLGlEQUFRLElBQ1AsU0FBUyxFQUFDLE9BQU8sRUFDakIsSUFBSSxFQUFDLE1BQU0sRUFDWCxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsc0RBQVEsQ0FBQyxFQUFFLENBQVEsRUFDekQsUUFBUSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQ2IsSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3JELFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxHQUFHLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDM0QsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzFDLENBQUMsR0FDRCxDQUNFLENBQ0Y7UUFFTixvRUFBSyxTQUFTLEVBQUMsa0JBQWtCO1lBQy9CLG9FQUFLLFNBQVMsRUFBQyxTQUFTO2dCQUN0Qix1RUFDRSxPQUFPLEVBQUUsV0FBQzt3QkFDUixtRUFBZSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzt3QkFDNUIsV0FBVyxFQUFFO3dCQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUNuQixDQUFDLEVBQ0QsU0FBUyxFQUFDLDJCQUEyQixtQkFHOUIsQ0FDTDtZQUNOLG9FQUFLLFNBQVMsRUFBQyxTQUFTO2dCQUN0Qix1RUFDRSxPQUFPLEVBQUUsV0FBQzt3QkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDbkIsQ0FBQyxFQUNELFNBQVMsRUFBQyx5QkFBeUIsbUJBRzVCLENBQ0wsQ0FDRixDQUNGLENBQ1A7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7QUMzR0QsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQywrVUFBMkw7O0FBRTdOOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQndDO0FBQ3NCO0FBQ0o7QUFDakM7QUFDSjtBQUVkLFNBQVMsSUFBSTtJQUNkLDhFQUEyQyxFQUF6QyxrQkFBTSxFQUFFLDRCQUFpQztJQUMvQyxJQUFJLFFBQVEsR0FBRyxvRUFBVyxFQUFFO0lBQzVCLElBQUksT0FBTyxHQUFHLG1FQUFVLEVBQUU7SUFFMUIsdURBQVMsQ0FBQztRQUNSLFdBQVcsRUFBRTtJQUNmLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDTixPQUFPLENBQ0wsb0VBQUssU0FBUyxFQUFDLE9BQU87UUFDcEIsa0VBQUcsU0FBUyxFQUFDLGVBQWU7WUFDMUIsb0dBQWlCO1lBQ2pCLHVFQUNFLFNBQVMsRUFBQyw0QkFBNEIsRUFDdEMsT0FBTyxFQUFFLFdBQUM7b0JBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBRUQsa0VBQUcsU0FBUyxFQUFDLGFBQWEsaUJBQWEsTUFBTSxHQUFLLENBQzNDLENBQ1A7UUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQUM7WUFDWCxPQUFPLENBQ0wsa0VBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFDLGFBQWE7Z0JBQ25DLHFFQUFNLFNBQVMsRUFBQyxZQUFZO29CQUMxQixrRUFDRSxTQUFTLEVBQUUsYUFBVSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxpQkFDeEQsTUFBTSxHQUNmLENBQ0E7Z0JBQ1AscUVBQU0sU0FBUyxFQUFDLFVBQVU7b0JBQ3ZCLENBQUMsQ0FBQyxLQUFLO29CQUNSLG9FQUFLLFNBQVMsRUFBQyxhQUFhLElBQ3pCLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTTt3QkFDaEIsQ0FBQyxDQUFDLDRDQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDN0MsQ0FBQyxDQUFDLDRDQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQzlDLENBQ0Q7Z0JBQ1Asa0VBQ0UsU0FBUyxFQUFFLHlCQUF5QixpQkFDeEIsTUFBTSxFQUNsQixPQUFPLEVBQUUsV0FBQzt3QkFDUixJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMseUNBQVMsQ0FBQyxDQUFDLEtBQUssa0JBQUssQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLEVBQUU7NEJBQ0wsbUVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQzNCLFdBQVcsRUFBRTt5QkFDZDtvQkFDSCxDQUFDLEdBQ0U7Z0JBQ0wsb0VBQUssU0FBUyxFQUFDLE9BQU87b0JBQ3BCLHNFQUNFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUNSLElBQUksRUFBQyxVQUFVLEVBQ2YsU0FBUyxFQUFDLFFBQVEsRUFDbEIsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFDM0IsUUFBUSxFQUFFLFdBQUM7NEJBQ1QsbUVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxrSEFBSyxDQUFDLEtBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUc7NEJBQy9ELFdBQVcsRUFBRTt3QkFDZixDQUFDLEdBQ0Q7b0JBQ0Ysc0VBQU8sT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQVUsQ0FDMUIsQ0FDSixDQUNMO1FBQ0gsQ0FBQyxDQUFDLENBQ0UsQ0FDUDtBQUNILENBQUM7Ozs7Ozs7Ozs7OztBQ3pFRCxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLGlVQUFrTDs7QUFFcE47O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUI7QUFDUztBQUNGO0FBQ21CO0FBQ3JCO0FBQ0g7QUFDMEM7QUFDeEM7QUFDQTtBQUNvQztBQUNNO0FBRXZFLFNBQVMsR0FBRztJQUNWLElBQUksUUFBUSxHQUFHLG9FQUFXLEVBQUU7SUFDNUIsT0FBTyxDQUNMLDJEQUFDLHVFQUFlO1FBQ2QsMkRBQUMscUVBQWEsSUFBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBRSxHQUFHO1lBQzlELDJEQUFDLHVEQUFNO2dCQUNMLDJEQUFDLHNEQUFLLElBQUMsSUFBSSxFQUFDLE9BQU87b0JBQ2pCLDJEQUFDLDBDQUFJLE9BQUcsQ0FDRjtnQkFDUiwyREFBQyxzREFBSyxJQUFDLElBQUksRUFBQyxHQUFHO29CQUNiLDJEQUFDLDBDQUFJLE9BQUcsQ0FDRixDQUNELENBQ0ssQ0FDQSxDQUNuQjtBQUNILENBQUM7QUFFRCxTQUFTLElBQUk7SUFDWCxPQUFPLENBQ0wsMkRBQUMsb0RBQWE7UUFDWixvRUFBSyxTQUFTLEVBQUUsaURBQUUsQ0FBQyxrREFBRyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUM7WUFDdkMsMkRBQUMsdURBQU0sSUFBQyxPQUFPLEVBQUUsOENBQU87Z0JBQ3RCLDJEQUFDLEdBQUcsT0FBRyxDQUNBLENBQ0wsQ0FDUSxDQUNqQjtBQUNILENBQUM7QUFFRCx3REFBTSxDQUFDLDJEQUFDLElBQUksT0FBRyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNMO0FBQ1g7QUFDQztBQUcxQixJQUFNLE9BQU8sR0FBRyxpRUFBaUIsRUFBRTtBQUVuQyxTQUFTLGVBQWU7SUFDN0IsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBUztJQUNwRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7QUFDM0IsQ0FBQztBQU9ELFNBQVMsUUFBUTtJQUNYLG1FQUF5QyxFQUF4QyxjQUFNLEVBQUUsaUJBQWdDO0lBQzdDLE9BQU8sRUFBRSxNQUFNLFVBQUUsV0FBVztZQUMxQixTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ3JDLENBQUMsRUFBQztBQUNKLENBQUM7QUFFYSxvR0FBYSxFQUFFLHVCQUFlLENBQXNCIiwiZmlsZSI6InBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBvcHVwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvcG9wdXAvaW5kZXgudHN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhbmVsIHtcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi5wYW5lbC1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLnBhbmVsLWJsb2NrIHtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTsgfVxcbiAgLnBhbmVsLWJsb2NrIC5jYS10aXRsZSB7XFxuICAgIGZsZXg6IDE7IH1cXG4gICAgLnBhbmVsLWJsb2NrIC5jYS10aXRsZSAuY2Etc3VidGl0bGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICBjb2xvcjogI2FhYTsgfVxcbiAgLnBhbmVsLWJsb2NrIC5yZW1vdmUtYnRuIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLnBhbmVsLWJsb2NrOmhvdmVyIC5yZW1vdmUtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwIDEwcHggMCA1cHg7XFxuICAgIGNvbG9yOiAjZjE0NjY4OyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybSB7XFxuICBwYWRkaW5nOiAxNXB4OyB9XFxuXFxuYS5wYW5lbC1ibG9jazpob3ZlciwgbGFiZWwucGFuZWwtYmxvY2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7IH1cXG5cXG5hLnBhbmVsLWJsb2NrLCBsYWJlbC5wYW5lbC1ibG9jayB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4uZmFkZS1lbnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cXG5cXG4uZmFkZS1lbnRlci5mYWRlLWVudGVyLWFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbjsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJleHBvcnQgY2xhc3MgS3Yge1xuICBnZXQ8VD4oazogc3RyaW5nLCBkZWZhdWx0czogVCk6IFRcbiAgZ2V0PFQ+KGs6IHN0cmluZyk6IFQgfCBudWxsXG4gIGdldDxUPihrOiBzdHJpbmcsIGRlZmF1bHRzPzogVCk6IFQgfCBudWxsIHtcbiAgICBsZXQgdiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGspXG4gICAgaWYgKHYpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHYpXG4gICAgfVxuICAgIGlmIChkZWZhdWx0cyAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdHNcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBzZXQ8VD4oazogc3RyaW5nLCB2OiBUKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaywgSlNPTi5zdHJpbmdpZnkodikpXG4gIH1cbiAgZGVsZXRlKGs6IHN0cmluZykge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGspXG4gIH1cbn1cblxuY2xhc3MgRmllbGQ8VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9rdjogS3YsXG4gICAgcHJpdmF0ZSBfa2V5OiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfZGVmYXVsdHM/OiBUXG4gICkge31cbiAgZ2V0KGRlZjogVCk6IFRcbiAgZ2V0KCk6IHVuZGVmaW5lZFxuICBnZXQoZGVmID0gdGhpcy5fZGVmYXVsdHMpOiBUIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fa3YuZ2V0KHRoaXMuX2tleSwgZGVmKVxuICB9XG4gIHNldCh2YWw/OiBUKSB7XG4gICAgcmV0dXJuIHRoaXMuX2t2LnNldCh0aGlzLl9rZXksIHZhbClcbiAgfVxuICBkZWxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2t2LmRlbGV0ZSh0aGlzLl9rZXkpXG4gIH1cblxufVxuZXhwb3J0IGVudW0gQWxhcm1UeXBlIHtcbiAgb25jZSA9ICdvbmNlJyxcbiAgcmVwZWF0ID0gJ3JlcGVhdCcsXG59XG5leHBvcnQgaW50ZXJmYWNlIEFsYXJtIHtcbiAgdHlwZTogQWxhcm1UeXBlXG4gIGR1cmF0aW9uOiBudW1iZXJcbiAgdGltZW91dDogbnVtYmVyXG4gIHRpdGxlOiBzdHJpbmdcbiAgaWQ6IHN0cmluZ1xuICBkb25lPzogYm9vbGVhblxuICBkaXNhYmxlZD86IGJvb2xlYW5cbn1cbmV4cG9ydCBjb25zdCBEdXJhdGlvbiA9IHtcbiAgSDE6IDYwICogNjAgKiAxMDAwLFxufVxuZXhwb3J0IG5hbWVzcGFjZSBBbGFybSB7XG4gIGV4cG9ydCBmdW5jdGlvbiBlbXB0eSgpOiBBbGFybSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEFsYXJtVHlwZS5yZXBlYXQsXG4gICAgICBkdXJhdGlvbjogRHVyYXRpb24uSDEsXG4gICAgICB0aW1lb3V0OiBEYXRlLm5vdygpICsgRHVyYXRpb24uSDEsXG4gICAgICB0aXRsZTogJ05ldyBBbGFybScsXG4gICAgICBpZDogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiksXG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEFsYXJtS3YgZXh0ZW5kcyBLdiB7XG4gIGFsYXJtcyA9IG5ldyBGaWVsZDxBbGFybVtdPih0aGlzLCAnYWxhcm1zJylcbn1cblxuZXhwb3J0IGNvbnN0IGFsYXJtS3YgPSBuZXcgQWxhcm1LdigpXG4iLCJpbXBvcnQgQnVsbWFDYWxlbmRhciwgeyBCdWxtYUNhbGVuZGFyT3B0aW9ucyB9IGZyb20gJ2J1bG1hLWNhbGVuZGFyJztcbmltcG9ydCAnYnVsbWEtY2FsZW5kYXIvZGlzdC9jc3MvYnVsbWEtY2FsZW5kYXIubWluLmNzcydcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBDYWxlbmRhclByb3BzID0gT21pdDxSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8J2lucHV0Jz4sICdsYWJlbCcgfCAnb25DaGFuZ2UnPiAmIHtcbiAgICBjb250cm9sPzogUmVhY3QuUmVhY3RFbGVtZW50O1xuXG4gICAgZGlzcGxheU1vZGU/OiBCdWxtYUNhbGVuZGFyT3B0aW9uc1snZGlzcGxheU1vZGUnXTtcblxuICAgIC8qKlxuICAgICAqIEFuIGVycm9yIG1lc3NhZ2UgdG8gcmVuZGVyLlxuICAgICAqL1xuICAgIGVycm9yPzogUmVhY3QuUmVhY3ROb2RlO1xuXG4gICAgLyoqXG4gICAgICogQSBoZWxwIG1lc3NhZ2UgdG8gcmVuZGVyLlxuICAgICAqL1xuICAgIGhlbHA/OiBSZWFjdC5SZWFjdE5vZGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgSFRNTCBlbGVtZW50LlxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIGZpcmVkIHdoZW4gdGhlIGlucHV0IHZhbHVlIGhhcyBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogSWYgdGhlIGlucHV0IHR5cGUgaXMgYGNoZWNrYm94YCwgdGhlIHZhbHVlIGlzIGEgYm9vbGVhbi4gSWYgdGhlIGlucHV0IHR5cGUgaXMgYG51bWJlcmAsIHRoZVxuICAgICAqIHZhbHVlIGlzIGEgbnVtYmVyLCBvdGhlcndpc2UgaXQgaXMgYSBzdHJpbmcuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IChldmVudDogeyB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQgfSwgdmFsdWU6IERhdGUpID0+IHZvaWQ7XG5cbiAgICBzaG93SGVhZGVyPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBIVE1MIGlucHV0IHR5cGUuXG4gICAgICpcbiAgICAgKiBUaGlzIG1heSBiZSBleHRlbmRlZCBpZiBuZWNlc3NhcnkuXG4gICAgICovXG4gICAgdHlwZT86ICdkYXRlJyB8ICd0aW1lJyB8ICdkYXRldGltZSdcbiAgICBidWxtYUNhbGVuZGFyT3B0aW9ucz86IEJ1bG1hQ2FsZW5kYXJPcHRpb25zXG4gIH07XG5cbi8qKlxuICogQSBCdWxtYSBzdHlsZWQgZm9ybSBpbnB1dCBlbGVtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5mb3J3YXJkUmVmPEhUTUxJbnB1dEVsZW1lbnQsIENhbGVuZGFyUHJvcHM+KFxuICAoXG4gICAge1xuICAgICAgY29udHJvbCxcbiAgICAgIGRpc3BsYXlNb2RlLFxuICAgICAgZXJyb3IsXG4gICAgICBoZWxwLFxuICAgICAgbWF4TGVuZ3RoLFxuICAgICAgbmFtZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBzaG93SGVhZGVyID0gZmFsc2UsXG4gICAgICB0eXBlID0gJ2RhdGV0aW1lJyxcbiAgICAgIHZhbHVlLFxuICAgICAgaWQgPSBuYW1lLFxuICAgICAgYnVsbWFDYWxlbmRhck9wdGlvbnMsXG4gICAgICAuLi5wcm9wc1xuICAgIH0sXG4gICAgcmVmLFxuICApID0+IHtcbiAgICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xuICAgIGNvbnN0IGNhbGVuZGFyUmVmID0gUmVhY3QudXNlUmVmPEJ1bG1hQ2FsZW5kYXI+KCk7XG5cbiAgICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gaW5wdXRSZWYuY3VycmVudCEpO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjYWxlbmRhclJlZi5jdXJyZW50ID0gbmV3IEJ1bG1hQ2FsZW5kYXIoaW5wdXRSZWYuY3VycmVudCwge1xuICAgICAgICBzaG93SGVhZGVyLFxuICAgICAgICB0eXBlLFxuICAgICAgICBkaXNwbGF5TW9kZSxcbiAgICAgICAgdmFsaWRhdGVMYWJlbDogJ+ehruWumicsXG4gICAgICAgIGNhbmNlbExhYmVsOiAn5Y+W5raIJyxcbiAgICAgICAgY2xlYXJMYWJlbDogJ+a4hemZpCcsXG4gICAgICAgIHRvZGF5TGFiZWw6ICfku4rlpKknLFxuICAgICAgICBub3dMYWJlbDogJ+eOsOWcqCcsXG4gICAgICAgIG1pbnV0ZVN0ZXBzOiAxLFxuICAgICAgICAuLi5idWxtYUNhbGVuZGFyT3B0aW9ucyxcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwbGF5TW9kZSwgc2hvd0hlYWRlciwgdHlwZV0pO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNhbGVuZGFyUmVmLmN1cnJlbnQub24oJ3NlbGVjdCcsICgpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoeyB0YXJnZXQ6IGlucHV0UmVmLmN1cnJlbnQhIH0sIHR5cGUgPT09ICd0aW1lJyA/IGNhbGVuZGFyUmVmLmN1cnJlbnQudGltZS5zdGFydCA6IGNhbGVuZGFyUmVmLmN1cnJlbnQuZGF0ZS5zdGFydCk7XG4gICAgICAgIHdpbmRvd1snY18nICsgdHlwZV0gPSBjYWxlbmRhclJlZi5jdXJyZW50XG4gICAgICB9KTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNhbGVuZGFyUmVmLmN1cnJlbnQucmVtb3ZlTGlzdGVuZXJzKCdzZWxlY3QnKTtcbiAgICAgIH07XG4gICAgfSwgW29uQ2hhbmdlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZiBhcyBhbnl9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgIC8+XG4gICAgKVxuICB9KVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBbGFybSwgQWxhcm1UeXBlLCBEdXJhdGlvbiB9IGZyb20gJ2JhY2tncm91bmQva3YnXG5pbXBvcnQgeyBnZXRBbGFybU1hbmFnZXIsIHVzZUFsYXJtQ29udGV4dCB9IGZyb20gJ3BvcHVwL3V0aWxzJ1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9DYWxlbmRhcidcblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm0oKSB7XG4gIGxldCBbYWxhcm0sIHNldEFsYXJtXSA9IHVzZVN0YXRlPEFsYXJtPihBbGFybS5lbXB0eSgpKVxuICBsZXQgeyBhbGFybXM6IF8sIGZldGNoQWxhcm1zIH0gPSB1c2VBbGFybUNvbnRleHQoKVxuICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBmdW5jdGlvbiBzZXRGaWVsZChrZXk6IGtleW9mIEFsYXJtLCB2YWx1ZTogQWxhcm1ba2V5b2YgQWxhcm1dKSB7XG4gICAgc2V0QWxhcm0oe1xuICAgICAgLi4uYWxhcm0sXG4gICAgICBba2V5XTogdmFsdWUsXG4gICAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj7moIfpopg6PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17YWxhcm0udGl0bGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGaWVsZCgndGl0bGUnLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+57G75Z6LOjwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0XCI+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWxhcm0udHlwZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgIHNldEZpZWxkKCd0eXBlJywgZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0FsYXJtVHlwZS5yZXBlYXR9PuW+queOrzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtBbGFybVR5cGUub25jZX0+5LuF5LiA5qyhPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIiBoaWRkZW49e2FsYXJtLnR5cGUgIT09IEFsYXJtVHlwZS5vbmNlfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+5Yiw5pyfOjwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgIDxDYWxlbmRhclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtuZXcgRGF0ZShhbGFybS50aW1lb3V0KSBhcyBhbnl9XG4gICAgICAgICAgICBidWxtYUNhbGVuZGFyT3B0aW9ucz17e1xuICAgICAgICAgICAgICBtaW5EYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICBjbG9zZU9uT3ZlcmxheUNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgZCkgPT4ge1xuICAgICAgICAgICAgICBzZXRGaWVsZCgndGltZW91dCcsIGQuZ2V0VGltZSgpKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCIgaGlkZGVuPXthbGFybS50eXBlICE9PSBBbGFybVR5cGUucmVwZWF0fT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+5b6q546vOjwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgIDxDYWxlbmRhclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRpbWVcIlxuICAgICAgICAgICAgdmFsdWU9e25ldyBEYXRlKGFsYXJtLmR1cmF0aW9uICsgMTYgKiBEdXJhdGlvbi5IMSkgYXMgYW55fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IG5ldyBEYXRlKDApXG4gICAgICAgICAgICAgIGR1cmF0aW9uLnNldEhvdXJzKGQuZ2V0SG91cnMoKSArIGR1cmF0aW9uLmdldEhvdXJzKCkpXG4gICAgICAgICAgICAgIGR1cmF0aW9uLnNldE1pbnV0ZXMoZC5nZXRNaW51dGVzKCkgKyBkdXJhdGlvbi5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAgIHNldEZpZWxkKCdkdXJhdGlvbicsIGR1cmF0aW9uLmdldFRpbWUoKSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICBnZXRBbGFybU1hbmFnZXIoKS5hZGQoYWxhcm0pXG4gICAgICAgICAgICAgIGZldGNoQWxhcm1zKClcbiAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeSBpcy1saW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goJy8nKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saW5rIGlzLWxpZ2h0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDlj5bmtohcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQWxhcm1Db250ZXh0LCBnZXRBbGFybU1hbmFnZXIgfSBmcm9tICdwb3B1cC91dGlscydcbmltcG9ydCB7IHVzZUxvY2F0aW9uLCB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5leHBvcnQgZnVuY3Rpb24gTGlzdCgpIHtcbiAgbGV0IHsgYWxhcm1zLCBmZXRjaEFsYXJtcyB9ID0gdXNlQWxhcm1Db250ZXh0KClcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hBbGFybXMoKVxuICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cInBhbmVsXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgIDxzcGFuPuaVtOeCueaKpeaXtjwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLXNtYWxsXCJcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChgL2Zvcm1gKVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3A+XG4gICAgICB7YWxhcm1zLm1hcChhID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8YSBrZXk9e2EuaWR9IGNsYXNzTmFtZT1cInBhbmVsLWJsb2NrXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYW5lbC1pY29uXCI+XG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmFzIGZhLSR7YS50eXBlID09PSAnb25jZScgPyAnaG91cmdsYXNzLWhhbGYnIDogJ3N5bmMnfWB9XG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhLXRpdGxlXCI+XG4gICAgICAgICAgICAgIHthLnRpdGxlfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAge2EudHlwZSA9PT0gJ29uY2UnXG4gICAgICAgICAgICAgICAgICA/IGRheWpzKGEudGltZW91dCkuZm9ybWF0KCdZWVlZL01NL0REIEhIOm1tJylcbiAgICAgICAgICAgICAgICAgIDogZGF5anMoYS5kdXJhdGlvbikuYWRkKC04LCAnaCcpLmZvcm1hdCgnSEg6bW0nKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8aVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmYXMgZmEtdGltZXMgcmVtb3ZlLWJ0bmB9XG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBiID0gY29uZmlybShg56Gu5a6a6KaB5Yig6Zmk44CMJHthLnRpdGxlfeOAjeWQlz9gKVxuICAgICAgICAgICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICAgICAgICBnZXRBbGFybU1hbmFnZXIoKS5yZW1vdmUoYSlcbiAgICAgICAgICAgICAgICAgIGZldGNoQWxhcm1zKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD17YS5pZH1cbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXRjaFwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9eyFhLmRpc2FibGVkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIGdldEFsYXJtTWFuYWdlcigpLnVwZGF0ZSh7IC4uLmEsIGRpc2FibGVkOiAhZS50YXJnZXQuY2hlY2tlZCB9KVxuICAgICAgICAgICAgICAgICAgZmV0Y2hBbGFybXMoKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXthLmlkfT48L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L25hdj5cbiAgKVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0ICdidWxtYS9jc3MvYnVsbWEubWluLmNzcydcbmltcG9ydCAnYnVsbWEtc3dpdGNoL2Rpc3QvY3NzL2J1bG1hLXN3aXRjaC5taW4uY3NzJ1xuaW1wb3J0IGNzcyBmcm9tICcuL2luZGV4LnNjc3MnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIFJvdXRlciwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4vRm9ybSdcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuL0xpc3QnXG5pbXBvcnQgeyBoaXN0b3J5LCBBbGFybVByb3ZpZGVyLCB1c2VBbGFybUNvbnRleHQgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHsgVHJhbnNpdGlvbkdyb3VwLCBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcblxuZnVuY3Rpb24gQXBwKCkge1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIHJldHVybiAoXG4gICAgPFRyYW5zaXRpb25Hcm91cD5cbiAgICAgIDxDU1NUcmFuc2l0aW9uIGtleT17bG9jYXRpb24ua2V5fSBjbGFzc05hbWVzPVwiZmFkZVwiIHRpbWVvdXQ9ezMwMH0+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZm9ybVwiPlxuICAgICAgICAgICAgPEZvcm0gLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICAgICAgICAgICAgPExpc3QgLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgKVxufVxuXG5mdW5jdGlvbiBSb290KCkge1xuICByZXR1cm4gKFxuICAgIDxBbGFybVByb3ZpZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KGNzcy5yb290LCAnY29udGFpbmVyJyl9PlxuICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgICAgIDxBcHAgLz5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L0FsYXJtUHJvdmlkZXI+XG4gIClcbn1cblxucmVuZGVyKDxSb290IC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykpXG4iLCJpbXBvcnQgeyBjcmVhdGVIYXNoSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknXG5pbXBvcnQgY29uc3RhdGUgZnJvbSBcImNvbnN0YXRlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBBbGFybU1hbmFnZXIgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL2luZGV4J1xuaW1wb3J0IHR5cGUgeyBBbGFybSB9IGZyb20gJ2JhY2tncm91bmQva3YnO1xuZXhwb3J0IGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVIYXNoSGlzdG9yeSgpXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGFybU1hbmFnZXIoKTogQWxhcm1NYW5hZ2VyIHtcbiAgbGV0IGJnID0gY2hyb21lLmV4dGVuc2lvbi5nZXRCYWNrZ3JvdW5kUGFnZSgpIGFzIGFueVxuICByZXR1cm4gYmdbJ2FsYXJtTWFuYWdlciddXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9ucyB7XG4gIGFsYXJtczogQWxhcm1bXVxuICBmZXRjaEFsYXJtczogKCkgPT4gdm9pZFxufVxuXG5mdW5jdGlvbiB1c2VBbGFybSgpIHtcbiAgbGV0IFthbGFybXMsIHNldEFsYXJtc109dXNlU3RhdGU8QWxhcm1bXT4oW10pXG4gIHJldHVybiB7IGFsYXJtcywgZmV0Y2hBbGFybXMoKSB7XG4gICAgc2V0QWxhcm1zKGdldEFsYXJtTWFuYWdlcigpLmFsYXJtcylcbiAgfX1cbn1cblxuZXhwb3J0IGNvbnN0IFtBbGFybVByb3ZpZGVyLCB1c2VBbGFybUNvbnRleHRdID0gY29uc3RhdGUodXNlQWxhcm0pXG4iXSwic291cmNlUm9vdCI6IiJ9