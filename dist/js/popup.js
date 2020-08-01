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
exports.push([module.i, ".panel {\n  min-height: 300px;\n  max-height: 500px;\n  overflow: auto; }\n\n.panel-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.panel-block {\n  align-items: baseline; }\n  .panel-block .ca-title {\n    flex: 1; }\n    .panel-block .ca-title .ca-subtitle {\n      font-size: 13px;\n      color: #aaa; }\n  .panel-block .remove-btn, .panel-block .config-btn {\n    display: none;\n    cursor: pointer;\n    margin: 0 5px; }\n  .panel-block:hover .config-btn, .panel-block:hover .remove-btn {\n    display: block; }\n  .panel-block:hover .remove-btn {\n    color: #f14668; }\n", ""]);
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

/***/ "./src/background/index.ts":
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
/*! exports provided: createTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTimer", function() { return createTimer; });
/* harmony import */ var _kv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kv */ "./src/background/kv.ts");
// import { alarmKv, Alarm, AlarmType, Duration } from './kv'

// export class AlarmManager {
//     alarms = alarmKv.getAll()
//     timers: Map<string, any[]> = new Map()
//     constructor() {
//       this.updateTimers()
//     }
//     save(alarm: Alarm) {
//       alarmKv.save(alarm)
//       this.updateTimers()
//     }
//     remove(alarm: Alarm) {
//       alarmKv.remove(alarm)
//       this.clearTimers(alarm)
//     }
//     notify(alarm: Alarm) {
//       new Notification(`${alarm.title} | 整点报时`, {
//         body: new Date().toLocaleString(),
//         vibrate: 1,
//         requireInteraction: true,
//       })
//       console.log('notify', alarm)
//       // var audio = new Audio();
//       // audio.src= "../sound/WindowsNotifyMessaging.wav"
//       // audio.load()
//       // audio.play()
//     }
//     clearTimers(alarm: Alarm) {
//       let timer = this.timers.get(alarm.id) || []
//       for (const t of timer) {
//         clearTimeout(t)
//         clearInterval(t)
//       }
//     }
//     updateTimers() {
//       for (const alarm of this.alarms) {
//         if (alarm.disabled || alarm.done) {
//           this.clearTimers(alarm)
//           continue
//         }
//         let timer = this.timers.get(alarm.id)
//         if (!timer) {
//           timer = []
//           console.log('updateTimers', alarm)
//           const now = Date.now()
//           if (alarm.type === AlarmType.once) {
//             let t1 = setTimeout(() => {
//               this.notify(alarm)
//               this.save({
//                 ...alarm,
//                 done: true
//               })
//             }, alarm.timeout - (now + alarm.ahead * Duration.M1))
//             timer.push(t1)
//           } else if (alarm.type === AlarmType.repeat) {
//             const recTimeout = () => {
//               let t1 = setTimeout(() => {
//                 this.notify(alarm)
//                 recTimeout()
//               }, alarm.duration - (Date.now() + alarm.ahead * Duration.M1) % alarm.duration)
//               timer![0] = t1
//               console.log(`repeat ${alarm.title}`, alarm, new Date().toLocaleString())
//               console.log(`next repeat ${alarm.title}`, alarm, new Date(Date.now() + alarm.duration - (Date.now() + alarm.ahead * Duration.M1) % alarm.duration).toLocaleString())
//             }
//             recTimeout()
//             console.log('repeat', `timeout:${alarm.duration - (now + alarm.ahead * Duration.M1) % alarm.duration}`, alarm.duration)
//           }
//           this.timers.set(alarm.id, timer)
//         }
//       }
//     }
// }
// window['alarmManager'] = new AlarmManager()
// // chrome.alarms.getAll(alarms => {
// //   if (alarms.find(a => a.name === 'test')) {
// //     //
// //   } else {
// //     chrome.alarms.create('test', {
// //       when: Date.now() + 1000 * 5,
// //     })
// //   }
// // })
function createTimer(a) {
    chrome.alarms.clear(a.id);
    var when = Date.now() + a.duration - (Date.now() + a.ahead * _kv__WEBPACK_IMPORTED_MODULE_0__["Duration"].M1) % a.duration;
    chrome.alarms.create(a.id, {
        when: when,
        periodInMinutes: a.duration
    });
    console.log("init " + a.title + ": " + new Date(when).toLocaleString());
}
chrome.alarms.onAlarm.addListener(function (a) {
    console.log('onAlarm', a);
    var alarm = _kv__WEBPACK_IMPORTED_MODULE_0__["alarmKv"].get(a.name);
    if (!alarm) {
        console.error('没找到alarm', a);
        new Notification("\u6CA1\u627E\u5230 alarm:" + a.name, {
            body: new Date().toLocaleString(),
            vibrate: 1,
            requireInteraction: true,
        });
        chrome.alarms.clear(a.name);
        return;
    }
    else {
        new Notification(alarm.title + " | " + a.name + " | \u6574\u70B9\u62A5\u65F6", {
            body: new Date().toLocaleString(),
            vibrate: 1,
            requireInteraction: true,
        });
    }
});
_kv__WEBPACK_IMPORTED_MODULE_0__["alarmKv"].getAll().forEach(function (a) {
    createTimer(a);
});


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
    M1: 60 * 1000,
    H1: 60 * 60 * 1000,
};
var Alarm;
(function (Alarm) {
    function empty() {
        return {
            ahead: 0,
            type: AlarmType.repeat,
            duration: Duration.H1,
            timeout: Date.now() + Duration.H1,
            title: 'New Alarm',
            id: Math.random().toString(36).slice(2),
        };
    }
    Alarm.empty = empty;
})(Alarm || (Alarm = {}));
var AlarmKv = /** @class */ (function () {
    function AlarmKv() {
        this._kv = new Kv();
        this.alarms = new Field(this._kv, 'alarms');
    }
    AlarmKv.prototype.getAll = function () {
        return this.alarms.get([]);
    };
    AlarmKv.prototype.get = function (id) {
        console.log('id', id, this.getAll());
        return this.getAll().find(function (_) { return _.id === id; });
    };
    AlarmKv.prototype.setAll = function (as) {
        this.alarms.set(as);
    };
    AlarmKv.prototype.remove = function (a) {
        var alarms = this.getAll().filter(function (_) { return _.id !== a.id; });
        this.setAll(alarms);
    };
    AlarmKv.prototype.save = function (a) {
        var alarms = this.getAll();
        var idx = alarms.findIndex(function (_) { return _.id === a.id; });
        if (idx < 0) {
            idx = alarms.length;
        }
        alarms[idx] == a;
        this.setAll(alarms);
    };
    return AlarmKv;
}());
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
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
    var _a = Object(popup_utils__WEBPACK_IMPORTED_MODULE_3__["useAlarmContext"])(), alarms = _a.alarms, fetchAlarms = _a.fetch, save = _a.save, remove = _a.remove;
    var locSearch = new URLSearchParams(history.location.search.slice(1));
    var locId = locSearch.get('id');
    console.log('locId', locId, history.location.search);
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(locId && alarms.find(function (a) { return a.id === locId; }) || background_kv__WEBPACK_IMPORTED_MODULE_2__["Alarm"].empty()), alarm = _b[0], setAlarm = _b[1];
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
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { value: background_kv__WEBPACK_IMPORTED_MODULE_2__["AlarmType"].repeat }, "\u5FAA\u73AF"))))),
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
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "label" }, "\u63D0\u524D:"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: "number", min: 0, max: 60 * 24, defaultValue: alarm.ahead, onChange: function (e) {
                        setField('ahead', Number(e.target.value) || 0);
                    } }))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field is-grouped" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "control" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { onClick: function (e) {
                        save(alarm);
                        fetchAlarms();
                        history.goBack();
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
    var _a = Object(popup_utils__WEBPACK_IMPORTED_MODULE_2__["useAlarmContext"])(), alarms = _a.alarms, fetch = _a.fetch, remove = _a.remove, save = _a.save;
    var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"])();
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        fetch();
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
                            remove(a);
                        }
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-cog config-btn", "aria-hidden": "true", onClick: function (e) {
                        history.push("/form?id=" + a.id);
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { id: a.id, type: "checkbox", className: "switch", defaultChecked: !a.disabled, onChange: function (e) {
                            save(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, a), { disabled: !e.target.checked }));
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
/*! exports provided: history, AlarmProvider, useAlarmContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmProvider", function() { return AlarmProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAlarmContext", function() { return useAlarmContext; });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var constate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constate */ "./node_modules/constate/dist/constate.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var background_kv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! background/kv */ "./src/background/kv.ts");
/* harmony import */ var background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! background */ "./src/background/index.ts");
var _a;



// import type { AlarmManager } from '../../background/index'


var history = Object(history__WEBPACK_IMPORTED_MODULE_0__["createHashHistory"])();
// function useAlarm() {
//   let [alarms, setAlarms] = useState<Alarm[]>(getAlarmManager().alarms)
//   function fetch() {
//     setAlarms(getAlarmManager().alarms)
//   }
//   return {
//     alarms,
//     fetch,
//     remove(a: Alarm) {
//       getAlarmManager().remove(a)
//       fetch()
//     },
//     save(a: Alarm) {
//       getAlarmManager().save(a)
//       fetch()
//     },
//   }
// }
function useAlarm() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(background_kv__WEBPACK_IMPORTED_MODULE_3__["alarmKv"].getAll()), alarms = _a[0], setAlarms = _a[1];
    function fetch() {
        setAlarms(background_kv__WEBPACK_IMPORTED_MODULE_3__["alarmKv"].getAll());
    }
    return {
        alarms: alarms,
        fetch: fetch,
        remove: function (a) {
            background_kv__WEBPACK_IMPORTED_MODULE_3__["alarmKv"].remove(a);
            chrome.alarms.clear(a.id);
            fetch();
        },
        save: function (a) {
            background_kv__WEBPACK_IMPORTED_MODULE_3__["alarmKv"].save(a);
            Object(background__WEBPACK_IMPORTED_MODULE_4__["createTimer"])(a);
            fetch();
        },
    };
}
var AlarmProvider = (_a = Object(constate__WEBPACK_IMPORTED_MODULE_1__["default"])(useAlarm), _a[0]), useAlarmContext = _a[1];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwL0xpc3QvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9rdi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAvRm9ybS9DYWxlbmRhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwL0Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wb3B1cC9MaXN0L2luZGV4LnNjc3M/ZmE3NSIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAvTGlzdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwL2luZGV4LnNjc3M/ZmNiNSIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wb3B1cC91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsV0FBVyxzQkFBc0Isc0JBQXNCLG1CQUFtQixFQUFFLG9CQUFvQixrQkFBa0IsbUNBQW1DLHdCQUF3QixFQUFFLGtCQUFrQiwwQkFBMEIsRUFBRSw0QkFBNEIsY0FBYyxFQUFFLDJDQUEyQyx3QkFBd0Isb0JBQW9CLEVBQUUsd0RBQXdELG9CQUFvQixzQkFBc0Isb0JBQW9CLEVBQUUsb0VBQW9FLHFCQUFxQixFQUFFLG9DQUFvQyxxQkFBcUIsRUFBRTtBQUN2b0I7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxVQUFVLGtCQUFrQixFQUFFLGtEQUFrRCxzQkFBc0IsRUFBRSxzQ0FBc0Msb0JBQW9CLEVBQUUsaUJBQWlCLGdDQUFnQyxFQUFFLG1DQUFtQyw2QkFBNkIsd0NBQXdDLEVBQUU7QUFDeFY7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBLDZEQUE2RDtBQUVkO0FBRS9DLDhCQUE4QjtBQUM5QixnQ0FBZ0M7QUFDaEMsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0Qiw0QkFBNEI7QUFDNUIsUUFBUTtBQUNSLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLFFBQVE7QUFDUiw2QkFBNkI7QUFDN0IsOEJBQThCO0FBQzlCLGdDQUFnQztBQUNoQyxRQUFRO0FBQ1IsNkJBQTZCO0FBQzdCLG9EQUFvRDtBQUNwRCw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLG9DQUFvQztBQUNwQyxXQUFXO0FBQ1gscUNBQXFDO0FBQ3JDLG9DQUFvQztBQUNwQyw0REFBNEQ7QUFDNUQsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixRQUFRO0FBQ1Isa0NBQWtDO0FBQ2xDLG9EQUFvRDtBQUNwRCxpQ0FBaUM7QUFDakMsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQixVQUFVO0FBQ1YsUUFBUTtBQUNSLHVCQUF1QjtBQUN2QiwyQ0FBMkM7QUFDM0MsOENBQThDO0FBQzlDLG9DQUFvQztBQUNwQyxxQkFBcUI7QUFDckIsWUFBWTtBQUNaLGdEQUFnRDtBQUNoRCx3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCLCtDQUErQztBQUMvQyxtQ0FBbUM7QUFDbkMsaURBQWlEO0FBQ2pELDBDQUEwQztBQUMxQyxtQ0FBbUM7QUFDbkMsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1Qiw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLG9FQUFvRTtBQUNwRSw2QkFBNkI7QUFDN0IsMERBQTBEO0FBQzFELHlDQUF5QztBQUN6Qyw0Q0FBNEM7QUFDNUMscUNBQXFDO0FBQ3JDLCtCQUErQjtBQUMvQiwrRkFBK0Y7QUFDL0YsK0JBQStCO0FBRy9CLHlGQUF5RjtBQUN6RixxTEFBcUw7QUFDckwsZ0JBQWdCO0FBQ2hCLDJCQUEyQjtBQUMzQixzSUFBc0k7QUFDdEksY0FBYztBQUNkLDZDQUE2QztBQUM3QyxZQUFZO0FBQ1osVUFBVTtBQUNWLFFBQVE7QUFDUixJQUFJO0FBRUosOENBQThDO0FBRzlDLHNDQUFzQztBQUN0QyxrREFBa0Q7QUFDbEQsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQix3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLFlBQVk7QUFDWixTQUFTO0FBQ1QsUUFBUTtBQUdELFNBQVMsV0FBVyxDQUFDLENBQVE7SUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLDRDQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVE7SUFDeEYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUN6QixJQUFJO1FBQ0osZUFBZSxFQUFFLENBQUMsQ0FBQyxRQUFRO0tBQzVCLENBQUM7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVEsQ0FBQyxDQUFDLEtBQUssVUFBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUksQ0FBQztBQUNwRSxDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQUM7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLElBQUksS0FBSyxHQUFHLDJDQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUM1QixJQUFJLFlBQVksQ0FBQyw4QkFBYSxDQUFDLENBQUMsSUFBTSxFQUFFO1lBQ3RDLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRTtZQUNqQyxPQUFPLEVBQUUsQ0FBQztZQUNWLGtCQUFrQixFQUFFLElBQUk7U0FDekIsQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTTtLQUNQO1NBQU07UUFDTCxJQUFJLFlBQVksQ0FBSSxLQUFLLENBQUMsS0FBSyxXQUFNLENBQUMsQ0FBQyxJQUFJLGdDQUFTLEVBQUU7WUFDcEQsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFO1lBQ2pDLE9BQU8sRUFBRSxDQUFDO1lBQ1Ysa0JBQWtCLEVBQUUsSUFBSTtTQUN6QixDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUM7QUFFRiwyQ0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFDO0lBQ3hCLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDN0hGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0lBQUE7SUFtQkEsQ0FBQztJQWhCQyxnQkFBRyxHQUFILFVBQU8sQ0FBUyxFQUFFLFFBQVk7UUFDNUIsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEVBQUU7WUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3BCLE9BQU8sUUFBUTtTQUNoQjtRQUNELE9BQU8sSUFBSTtJQUNiLENBQUM7SUFDRCxnQkFBRyxHQUFILFVBQU8sQ0FBUyxFQUFFLENBQUk7UUFDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsbUJBQU0sR0FBTixVQUFPLENBQVM7UUFDZCxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsU0FBQztBQUFELENBQUM7O0FBRUQ7SUFDRSxlQUNVLEdBQU8sRUFDUCxJQUFZLEVBQ1osU0FBYTtRQUZiLFFBQUcsR0FBSCxHQUFHLENBQUk7UUFDUCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osY0FBUyxHQUFULFNBQVMsQ0FBSTtJQUNwQixDQUFDO0lBR0osbUJBQUcsR0FBSCxVQUFJLEdBQW9CO1FBQXBCLDRCQUFNLElBQUksQ0FBQyxTQUFTO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7SUFDckMsQ0FBQztJQUNELG1CQUFHLEdBQUgsVUFBSSxHQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsc0JBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUgsWUFBQztBQUFELENBQUM7QUFDRCxJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDbkIsMEJBQWE7SUFDYiw4QkFBaUI7QUFDbkIsQ0FBQyxFQUhXLFNBQVMsS0FBVCxTQUFTLFFBR3BCO0FBV00sSUFBTSxRQUFRLEdBQUc7SUFDdEIsRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJO0lBQ2IsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTtDQUNuQjtBQUNNLElBQVUsS0FBSyxDQVdyQjtBQVhELFdBQWlCLEtBQUs7SUFDcEIsU0FBZ0IsS0FBSztRQUNuQixPQUFPO1lBQ0wsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUU7WUFDakMsS0FBSyxFQUFFLFdBQVc7WUFDbEIsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFUZSxXQUFLLFFBU3BCO0FBQ0gsQ0FBQyxFQVhnQixLQUFLLEtBQUwsS0FBSyxRQVdyQjtBQUVEO0lBQUE7UUFDVSxRQUFHLEdBQUcsSUFBSSxFQUFFLEVBQUU7UUFDZCxXQUFNLEdBQUcsSUFBSSxLQUFLLENBQVUsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7SUF3QnpELENBQUM7SUF2QkMsd0JBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxxQkFBRyxHQUFILFVBQUksRUFBVTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBRSxRQUFDLENBQUMsRUFBRSxLQUFHLEVBQUUsRUFBVCxDQUFTLENBQUM7SUFDekMsQ0FBQztJQUNELHdCQUFNLEdBQU4sVUFBTyxFQUFXO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0Qsd0JBQU0sR0FBTixVQUFPLENBQVE7UUFDYixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQWIsQ0FBYSxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxzQkFBSSxHQUFKLFVBQUssQ0FBUTtRQUNYLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDMUIsSUFBSSxHQUFHLEdBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFiLENBQWEsQ0FBQztRQUM3QyxJQUFJLEdBQUcsR0FBQyxDQUFDLEVBQUU7WUFDVCxHQUFHLEdBQUMsTUFBTSxDQUFDLE1BQU07U0FDbEI7UUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUM7QUFFTSxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HaUM7QUFDZDtBQUN4QjtBQXlDL0I7O0dBRUc7QUFDWSwrR0FBZ0IsQ0FDN0IsVUFDRSxFQWVDLEVBQ0QsR0FBRztJQWZELHdCQUFPLEVBQ1AsNEJBQVcsRUFDWCxnQkFBSyxFQUNMLGNBQUksRUFDSix3QkFBUyxFQUNULGNBQUksRUFDSixzQkFBUSxFQUNSLHNCQUFRLEVBQ1Isa0JBQWtCLEVBQWxCLHVDQUFrQixFQUNsQixZQUFpQixFQUFqQixzQ0FBaUIsRUFDakIsZ0JBQUssRUFDTCxVQUFTLEVBQVQsOEJBQVMsRUFDVCw4Q0FBb0IsRUFDcEIsdU5BQVE7SUFJVixJQUFNLFFBQVEsR0FBRyw0Q0FBWSxFQUFvQixDQUFDO0lBQ2xELElBQU0sV0FBVyxHQUFHLDRDQUFZLEVBQWlCLENBQUM7SUFFbEQseURBQXlCLENBQUMsR0FBRyxFQUFFLGNBQU0sZUFBUSxDQUFDLE9BQVEsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ3hELCtDQUFlLENBQUM7UUFDZCxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUkscURBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLHlEQUN4RCxVQUFVO1lBQ1YsSUFBSTtZQUNKLFdBQVcsZUFDWCxhQUFhLEVBQUUsSUFBSSxFQUNuQixXQUFXLEVBQUUsSUFBSSxFQUNqQixVQUFVLEVBQUUsSUFBSSxFQUNoQixVQUFVLEVBQUUsSUFBSSxFQUNoQixRQUFRLEVBQUUsSUFBSSxFQUNkLFdBQVcsRUFBRSxDQUFDLElBQ1gsb0JBQW9CLEVBQ3ZCLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFcEMsK0NBQWUsQ0FBQztRQUNkLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUMvQixRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLE9BQVEsRUFBRSxFQUFFLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0gsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsT0FBTztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU87WUFDTCxXQUFXLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWYsT0FBTyxDQUNILHdIQUNNLEtBQUssSUFDVCxHQUFHLEVBQUUsUUFBZSxFQUNwQixZQUFZLEVBQUUsS0FBSyxFQUNuQixFQUFFLEVBQUUsRUFBRSxFQUNOLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLElBQUksRUFBRSxJQUFJLEVBQ1YsUUFBUSxFQUFFLFFBQVEsSUFDbEIsQ0FDTDtBQUNILENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR21DO0FBQ21CO0FBQ2I7QUFDQTtBQUVaO0FBRTFCLFNBQVMsSUFBSTtJQUNsQixJQUFNLE9BQU8sR0FBRyxtRUFBVSxFQUFpQjtJQUNyQyw4RUFBZ0UsRUFBOUQsa0JBQU0sRUFBRSxzQkFBa0IsRUFBRSxjQUFJLEVBQUUsa0JBQTRCO0lBQ3RFLElBQU0sU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztJQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDOUMsNkxBRUwsRUFGTSxhQUFLLEVBQUUsZ0JBRWI7SUFDRCxTQUFTLFFBQVEsQ0FBQyxHQUFnQixFQUFFLEtBQXlCOztRQUMzRCxRQUFRLENBQUMsa0hBQ0osS0FBSyxnQkFDUCxHQUFHLElBQUcsS0FBSyxPQUNaO0lBQ0osQ0FBQztJQUNELE9BQU8sQ0FDTCxvRUFBSyxTQUFTLEVBQUMsTUFBTTtRQUNuQixvRUFBSyxTQUFTLEVBQUMsT0FBTztZQUNwQixzRUFBTyxTQUFTLEVBQUMsT0FBTyxvQkFBWTtZQUNwQyxvRUFBSyxTQUFTLEVBQUMsU0FBUztnQkFDdEIsc0VBQ0UsU0FBUyxFQUFDLE9BQU8sRUFDakIsSUFBSSxFQUFDLE1BQU0sRUFDWCxXQUFXLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFDeEIsUUFBUSxFQUFFLFdBQUMsSUFBSSxlQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQWpDLENBQWlDLEdBQ2hELENBQ0UsQ0FDRjtRQUNOLG9FQUFLLFNBQVMsRUFBQyxPQUFPO1lBQ3BCLHNFQUFPLFNBQVMsRUFBQyxPQUFPLG9CQUFZO1lBQ3BDLG9FQUFLLFNBQVMsRUFBQyxTQUFTO2dCQUN0QixvRUFBSyxTQUFTLEVBQUMsUUFBUTtvQkFDckIsdUVBQ0UsWUFBWSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQ3hCLFFBQVEsRUFBRSxXQUFDOzRCQUNULFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7d0JBQ2xDLENBQUM7d0JBRUQsdUVBQVEsS0FBSyxFQUFFLHVEQUFTLENBQUMsTUFBTSxtQkFBYSxDQUVyQyxDQUNMLENBQ0YsQ0FDRjtRQUNOLG9FQUFLLFNBQVMsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssdURBQVMsQ0FBQyxJQUFJO1lBQzFELHNFQUFPLFNBQVMsRUFBQyxPQUFPLG9CQUFZO1lBQ3BDLG9FQUFLLFNBQVMsRUFBQyxTQUFTO2dCQUN0QiwyREFBQyxpREFBUSxJQUNQLFNBQVMsRUFBQyxPQUFPLEVBQ2pCLElBQUksRUFBQyxVQUFVLEVBQ2YsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQVEsRUFDckMsb0JBQW9CLEVBQUU7d0JBQ3BCLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRTt3QkFDbkIsbUJBQW1CLEVBQUUsSUFBSTtxQkFDMUIsRUFDRCxRQUFRLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDYixRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbEMsQ0FBQyxHQUNELENBQ0UsQ0FDRjtRQUVOLG9FQUFLLFNBQVMsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssdURBQVMsQ0FBQyxNQUFNO1lBQzVELHNFQUFPLFNBQVMsRUFBQyxPQUFPLG9CQUFZO1lBQ3BDLG9FQUFLLFNBQVMsRUFBQyxTQUFTO2dCQUN0QiwyREFBQyxpREFBUSxJQUNQLFNBQVMsRUFBQyxPQUFPLEVBQ2pCLElBQUksRUFBQyxNQUFNLEVBQ1gsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLHNEQUFRLENBQUMsRUFBRSxDQUFRLEVBQ3pELFFBQVEsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDO3dCQUNiLElBQUksUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDMUIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUNyRCxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQzNELFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUMxQyxDQUFDLEdBQ0QsQ0FDRSxDQUNGO1FBQ04sb0VBQUssU0FBUyxFQUFDLE9BQU87WUFDcEIsc0VBQU8sU0FBUyxFQUFDLE9BQU8sb0JBQVk7WUFDcEMsb0VBQUssU0FBUyxFQUFDLFNBQVM7Z0JBQ3RCLHNFQUFPLElBQUksRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBQzt3QkFDL0UsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hELENBQUMsR0FBSSxDQUNELENBQ0Y7UUFFTixvRUFBSyxTQUFTLEVBQUMsa0JBQWtCO1lBQy9CLG9FQUFLLFNBQVMsRUFBQyxTQUFTO2dCQUN0Qix1RUFDRSxPQUFPLEVBQUUsV0FBQzt3QkFDUixJQUFJLENBQUMsS0FBSyxDQUFDO3dCQUNYLFdBQVcsRUFBRTt3QkFDYixPQUFPLENBQUMsTUFBTSxFQUFFO29CQUNsQixDQUFDLEVBQ0QsU0FBUyxFQUFDLDJCQUEyQixtQkFHOUIsQ0FDTDtZQUNOLG9FQUFLLFNBQVMsRUFBQyxTQUFTO2dCQUN0Qix1RUFDRSxPQUFPLEVBQUUsV0FBQzt3QkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDbkIsQ0FBQyxFQUNELFNBQVMsRUFBQyx5QkFBeUIsbUJBRzVCLENBQ0wsQ0FDRixDQUNGLENBQ1A7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7QUN4SEQsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQywrVUFBMkw7O0FBRTdOOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQndDO0FBQ0s7QUFDYTtBQUNqQztBQUNKO0FBRWQsU0FBUyxJQUFJO0lBQ2QsOEVBQWtELEVBQWhELGtCQUFNLEVBQUMsZ0JBQUssRUFBRSxrQkFBTSxFQUFFLGNBQTBCO0lBQ3RELElBQUksUUFBUSxHQUFHLG9FQUFXLEVBQUU7SUFDNUIsSUFBSSxPQUFPLEdBQUcsbUVBQVUsRUFBRTtJQUUxQix1REFBUyxDQUFDO1FBQ1IsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNOLE9BQU8sQ0FDTCxvRUFBSyxTQUFTLEVBQUMsT0FBTztRQUNwQixrRUFBRyxTQUFTLEVBQUMsZUFBZTtZQUMxQixvR0FBaUI7WUFDakIsdUVBQ0UsU0FBUyxFQUFDLDRCQUE0QixFQUN0QyxPQUFPLEVBQUUsV0FBQztvQkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCxrRUFBRyxTQUFTLEVBQUMsYUFBYSxpQkFBYSxNQUFNLEdBQUssQ0FDM0MsQ0FDUDtRQUNILE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBQztZQUNYLE9BQU8sQ0FDTCxrRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUMsYUFBYTtnQkFDbkMscUVBQU0sU0FBUyxFQUFDLFlBQVk7b0JBQzFCLGtFQUNFLFNBQVMsRUFBRSxhQUFVLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFFLGlCQUN4RCxNQUFNLEdBQ2YsQ0FDQTtnQkFDUCxxRUFBTSxTQUFTLEVBQUMsVUFBVTtvQkFDdkIsQ0FBQyxDQUFDLEtBQUs7b0JBQ1Isb0VBQUssU0FBUyxFQUFDLGFBQWEsSUFDekIsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNO3dCQUNoQixDQUFDLENBQUMsNENBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO3dCQUM3QyxDQUFDLENBQUMsNENBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDOUMsQ0FDRDtnQkFDUCxrRUFDRSxTQUFTLEVBQUUseUJBQXlCLGlCQUN4QixNQUFNLEVBQ2xCLE9BQU8sRUFBRSxXQUFDO3dCQUNSLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyx5Q0FBUyxDQUFDLENBQUMsS0FBSyxrQkFBSyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsRUFBRTs0QkFDTCxNQUFNLENBQUMsQ0FBQyxDQUFDO3lCQUNWO29CQUNILENBQUMsR0FDRTtnQkFDTCxrRUFDRSxTQUFTLEVBQUUsdUJBQXVCLGlCQUN0QixNQUFNLEVBQ2xCLE9BQU8sRUFBRSxXQUFDO3dCQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBWSxDQUFDLENBQUMsRUFBSSxDQUFDO29CQUU5QixDQUFDLEdBQ0U7Z0JBQ0wsb0VBQUssU0FBUyxFQUFDLE9BQU87b0JBQ3BCLHNFQUNFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUNSLElBQUksRUFBQyxVQUFVLEVBQ2YsU0FBUyxFQUFDLFFBQVEsRUFDbEIsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFDM0IsUUFBUSxFQUFFLFdBQUM7NEJBQ1QsSUFBSSxDQUFDLGtIQUFLLENBQUMsS0FBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBRzt3QkFDN0MsQ0FBQyxHQUNEO29CQUNGLHNFQUFPLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFVLENBQzFCLENBQ0osQ0FDTDtRQUNILENBQUMsQ0FBQyxDQUNFLENBQ1A7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7QUMvRUQsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyxpVUFBa0w7O0FBRXBOOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ1M7QUFDRjtBQUNtQjtBQUNyQjtBQUNIO0FBQzBDO0FBQ3hDO0FBQ0E7QUFDb0M7QUFDTTtBQUV2RSxTQUFTLEdBQUc7SUFDVixJQUFJLFFBQVEsR0FBRyxvRUFBVyxFQUFFO0lBQzVCLE9BQU8sQ0FDTCwyREFBQyx1RUFBZTtRQUNkLDJEQUFDLHFFQUFhLElBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUUsR0FBRztZQUM5RCwyREFBQyx1REFBTTtnQkFDTCwyREFBQyxzREFBSyxJQUFDLElBQUksRUFBQyxPQUFPO29CQUNqQiwyREFBQywwQ0FBSSxPQUFHLENBQ0Y7Z0JBQ1IsMkRBQUMsc0RBQUssSUFBQyxJQUFJLEVBQUMsR0FBRztvQkFDYiwyREFBQywwQ0FBSSxPQUFHLENBQ0YsQ0FDRCxDQUNLLENBQ0EsQ0FDbkI7QUFDSCxDQUFDO0FBRUQsU0FBUyxJQUFJO0lBQ1gsT0FBTyxDQUNMLDJEQUFDLG9EQUFhO1FBQ1osb0VBQUssU0FBUyxFQUFFLGlEQUFFLENBQUMsa0RBQUcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDO1lBQ3ZDLDJEQUFDLHVEQUFNLElBQUMsT0FBTyxFQUFFLDhDQUFPO2dCQUN0QiwyREFBQyxHQUFHLE9BQUcsQ0FDQSxDQUNMLENBQ1EsQ0FDakI7QUFDSCxDQUFDO0FBRUQsd0RBQU0sQ0FBQywyREFBQyxJQUFJLE9BQUcsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0w7QUFDWjtBQUNDO0FBQ2hDLDZEQUE2RDtBQUNMO0FBQ2hCO0FBQ2pDLElBQU0sT0FBTyxHQUFHLGlFQUFpQixFQUFFO0FBWTFDLHdCQUF3QjtBQUN4QiwwRUFBMEU7QUFDMUUsdUJBQXVCO0FBQ3ZCLDBDQUEwQztBQUMxQyxNQUFNO0FBQ04sYUFBYTtBQUNiLGNBQWM7QUFDZCxhQUFhO0FBQ2IseUJBQXlCO0FBQ3pCLG9DQUFvQztBQUNwQyxnQkFBZ0I7QUFDaEIsU0FBUztBQUNULHVCQUF1QjtBQUN2QixrQ0FBa0M7QUFDbEMsZ0JBQWdCO0FBQ2hCLFNBQVM7QUFDVCxNQUFNO0FBQ04sSUFBSTtBQUVKLFNBQVMsUUFBUTtJQUNYLCtIQUF5RCxFQUF4RCxjQUFNLEVBQUUsaUJBQWdEO0lBQzdELFNBQVMsS0FBSztRQUNaLFNBQVMsQ0FBQyxxREFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDRCxPQUFPO1FBQ0wsTUFBTTtRQUNOLEtBQUs7UUFDTCxNQUFNLEVBQU4sVUFBTyxDQUFRO1lBQ2IscURBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDekIsS0FBSyxFQUFFO1FBQ1QsQ0FBQztRQUNELElBQUksRUFBSixVQUFLLENBQVE7WUFDWCxxREFBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZiw4REFBVyxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssRUFBRTtRQUNULENBQUM7S0FDRjtBQUNILENBQUM7QUFFYSxvR0FBYSxFQUFFLHVCQUFlLENBQXNCIiwiZmlsZSI6InBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBvcHVwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvcG9wdXAvaW5kZXgudHN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhbmVsIHtcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi5wYW5lbC1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLnBhbmVsLWJsb2NrIHtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTsgfVxcbiAgLnBhbmVsLWJsb2NrIC5jYS10aXRsZSB7XFxuICAgIGZsZXg6IDE7IH1cXG4gICAgLnBhbmVsLWJsb2NrIC5jYS10aXRsZSAuY2Etc3VidGl0bGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICBjb2xvcjogI2FhYTsgfVxcbiAgLnBhbmVsLWJsb2NrIC5yZW1vdmUtYnRuLCAucGFuZWwtYmxvY2sgLmNvbmZpZy1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMCA1cHg7IH1cXG4gIC5wYW5lbC1ibG9jazpob3ZlciAuY29uZmlnLWJ0biwgLnBhbmVsLWJsb2NrOmhvdmVyIC5yZW1vdmUtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5wYW5lbC1ibG9jazpob3ZlciAucmVtb3ZlLWJ0biB7XFxuICAgIGNvbG9yOiAjZjE0NjY4OyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybSB7XFxuICBwYWRkaW5nOiAxNXB4OyB9XFxuXFxuYS5wYW5lbC1ibG9jazpob3ZlciwgbGFiZWwucGFuZWwtYmxvY2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7IH1cXG5cXG5hLnBhbmVsLWJsb2NrLCBsYWJlbC5wYW5lbC1ibG9jayB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4uZmFkZS1lbnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cXG5cXG4uZmFkZS1lbnRlci5mYWRlLWVudGVyLWFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbjsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBpbXBvcnQgeyBhbGFybUt2LCBBbGFybSwgQWxhcm1UeXBlLCBEdXJhdGlvbiB9IGZyb20gJy4va3YnXG5cbmltcG9ydCB7IEFsYXJtLCBEdXJhdGlvbiwgYWxhcm1LdiB9IGZyb20gXCIuL2t2XCJcblxuLy8gZXhwb3J0IGNsYXNzIEFsYXJtTWFuYWdlciB7XG4vLyAgICAgYWxhcm1zID0gYWxhcm1Ldi5nZXRBbGwoKVxuLy8gICAgIHRpbWVyczogTWFwPHN0cmluZywgYW55W10+ID0gbmV3IE1hcCgpXG4vLyAgICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgICB0aGlzLnVwZGF0ZVRpbWVycygpXG4vLyAgICAgfVxuLy8gICAgIHNhdmUoYWxhcm06IEFsYXJtKSB7XG4vLyAgICAgICBhbGFybUt2LnNhdmUoYWxhcm0pXG4vLyAgICAgICB0aGlzLnVwZGF0ZVRpbWVycygpXG4vLyAgICAgfVxuLy8gICAgIHJlbW92ZShhbGFybTogQWxhcm0pIHtcbi8vICAgICAgIGFsYXJtS3YucmVtb3ZlKGFsYXJtKVxuLy8gICAgICAgdGhpcy5jbGVhclRpbWVycyhhbGFybSlcbi8vICAgICB9XG4vLyAgICAgbm90aWZ5KGFsYXJtOiBBbGFybSkge1xuLy8gICAgICAgbmV3IE5vdGlmaWNhdGlvbihgJHthbGFybS50aXRsZX0gfCDmlbTngrnmiqXml7ZgLCB7XG4vLyAgICAgICAgIGJvZHk6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSxcbi8vICAgICAgICAgdmlicmF0ZTogMSxcbi8vICAgICAgICAgcmVxdWlyZUludGVyYWN0aW9uOiB0cnVlLFxuLy8gICAgICAgfSlcbi8vICAgICAgIGNvbnNvbGUubG9nKCdub3RpZnknLCBhbGFybSlcbi8vICAgICAgIC8vIHZhciBhdWRpbyA9IG5ldyBBdWRpbygpO1xuLy8gICAgICAgLy8gYXVkaW8uc3JjPSBcIi4uL3NvdW5kL1dpbmRvd3NOb3RpZnlNZXNzYWdpbmcud2F2XCJcbi8vICAgICAgIC8vIGF1ZGlvLmxvYWQoKVxuLy8gICAgICAgLy8gYXVkaW8ucGxheSgpXG4vLyAgICAgfVxuLy8gICAgIGNsZWFyVGltZXJzKGFsYXJtOiBBbGFybSkge1xuLy8gICAgICAgbGV0IHRpbWVyID0gdGhpcy50aW1lcnMuZ2V0KGFsYXJtLmlkKSB8fCBbXVxuLy8gICAgICAgZm9yIChjb25zdCB0IG9mIHRpbWVyKSB7XG4vLyAgICAgICAgIGNsZWFyVGltZW91dCh0KVxuLy8gICAgICAgICBjbGVhckludGVydmFsKHQpXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHVwZGF0ZVRpbWVycygpIHtcbi8vICAgICAgIGZvciAoY29uc3QgYWxhcm0gb2YgdGhpcy5hbGFybXMpIHtcbi8vICAgICAgICAgaWYgKGFsYXJtLmRpc2FibGVkIHx8IGFsYXJtLmRvbmUpIHtcbi8vICAgICAgICAgICB0aGlzLmNsZWFyVGltZXJzKGFsYXJtKVxuLy8gICAgICAgICAgIGNvbnRpbnVlXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgbGV0IHRpbWVyID0gdGhpcy50aW1lcnMuZ2V0KGFsYXJtLmlkKVxuLy8gICAgICAgICBpZiAoIXRpbWVyKSB7XG4vLyAgICAgICAgICAgdGltZXIgPSBbXVxuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGVUaW1lcnMnLCBhbGFybSlcbi8vICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4vLyAgICAgICAgICAgaWYgKGFsYXJtLnR5cGUgPT09IEFsYXJtVHlwZS5vbmNlKSB7XG4vLyAgICAgICAgICAgICBsZXQgdDEgPSBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkoYWxhcm0pXG4vLyAgICAgICAgICAgICAgIHRoaXMuc2F2ZSh7XG4vLyAgICAgICAgICAgICAgICAgLi4uYWxhcm0sXG4vLyAgICAgICAgICAgICAgICAgZG9uZTogdHJ1ZVxuLy8gICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgfSwgYWxhcm0udGltZW91dCAtIChub3cgKyBhbGFybS5haGVhZCAqIER1cmF0aW9uLk0xKSlcbi8vICAgICAgICAgICAgIHRpbWVyLnB1c2godDEpXG4vLyAgICAgICAgICAgfSBlbHNlIGlmIChhbGFybS50eXBlID09PSBBbGFybVR5cGUucmVwZWF0KSB7XG4vLyAgICAgICAgICAgICBjb25zdCByZWNUaW1lb3V0ID0gKCkgPT4ge1xuLy8gICAgICAgICAgICAgICBsZXQgdDEgPSBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeShhbGFybSlcbi8vICAgICAgICAgICAgICAgICByZWNUaW1lb3V0KClcbi8vICAgICAgICAgICAgICAgfSwgYWxhcm0uZHVyYXRpb24gLSAoRGF0ZS5ub3coKSArIGFsYXJtLmFoZWFkICogRHVyYXRpb24uTTEpICUgYWxhcm0uZHVyYXRpb24pXG4vLyAgICAgICAgICAgICAgIHRpbWVyIVswXSA9IHQxXG5cblxuLy8gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVwZWF0ICR7YWxhcm0udGl0bGV9YCwgYWxhcm0sIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSlcbi8vICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG5leHQgcmVwZWF0ICR7YWxhcm0udGl0bGV9YCwgYWxhcm0sIG5ldyBEYXRlKERhdGUubm93KCkgKyBhbGFybS5kdXJhdGlvbiAtIChEYXRlLm5vdygpICsgYWxhcm0uYWhlYWQgKiBEdXJhdGlvbi5NMSkgJSBhbGFybS5kdXJhdGlvbikudG9Mb2NhbGVTdHJpbmcoKSlcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIHJlY1RpbWVvdXQoKVxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcGVhdCcsIGB0aW1lb3V0OiR7YWxhcm0uZHVyYXRpb24gLSAobm93ICsgYWxhcm0uYWhlYWQgKiBEdXJhdGlvbi5NMSkgJSBhbGFybS5kdXJhdGlvbn1gLCBhbGFybS5kdXJhdGlvbilcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgdGhpcy50aW1lcnMuc2V0KGFsYXJtLmlkLCB0aW1lcilcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLy8gd2luZG93WydhbGFybU1hbmFnZXInXSA9IG5ldyBBbGFybU1hbmFnZXIoKVxuXG5cbi8vIC8vIGNocm9tZS5hbGFybXMuZ2V0QWxsKGFsYXJtcyA9PiB7XG4vLyAvLyAgIGlmIChhbGFybXMuZmluZChhID0+IGEubmFtZSA9PT0gJ3Rlc3QnKSkge1xuLy8gLy8gICAgIC8vXG4vLyAvLyAgIH0gZWxzZSB7XG4vLyAvLyAgICAgY2hyb21lLmFsYXJtcy5jcmVhdGUoJ3Rlc3QnLCB7XG4vLyAvLyAgICAgICB3aGVuOiBEYXRlLm5vdygpICsgMTAwMCAqIDUsXG4vLyAvLyAgICAgfSlcbi8vIC8vICAgfVxuLy8gLy8gfSlcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGltZXIoYTogQWxhcm0pIHtcbiAgY2hyb21lLmFsYXJtcy5jbGVhcihhLmlkKVxuICBjb25zdCB3aGVuID0gRGF0ZS5ub3coKSArIGEuZHVyYXRpb24gLSAoRGF0ZS5ub3coKSArIGEuYWhlYWQgKiBEdXJhdGlvbi5NMSkgJSBhLmR1cmF0aW9uXG4gIGNocm9tZS5hbGFybXMuY3JlYXRlKGEuaWQsIHtcbiAgICB3aGVuLFxuICAgIHBlcmlvZEluTWludXRlczogYS5kdXJhdGlvblxuICB9KVxuICBjb25zb2xlLmxvZyhgaW5pdCAke2EudGl0bGV9OiAke25ldyBEYXRlKHdoZW4pLnRvTG9jYWxlU3RyaW5nKCl9YClcbn1cblxuY2hyb21lLmFsYXJtcy5vbkFsYXJtLmFkZExpc3RlbmVyKGEgPT4ge1xuICBjb25zb2xlLmxvZygnb25BbGFybScsIGEpXG4gIGxldCBhbGFybSA9IGFsYXJtS3YuZ2V0KGEubmFtZSlcbiAgaWYgKCFhbGFybSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+ayoeaJvuWIsGFsYXJtJywgYSlcbiAgICBuZXcgTm90aWZpY2F0aW9uKGDmsqHmib7liLAgYWxhcm06JHthLm5hbWV9YCwge1xuICAgICAgYm9keTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxuICAgICAgdmlicmF0ZTogMSxcbiAgICAgIHJlcXVpcmVJbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICB9KVxuICAgIGNocm9tZS5hbGFybXMuY2xlYXIoYS5uYW1lKVxuICAgIHJldHVyblxuICB9IGVsc2Uge1xuICAgIG5ldyBOb3RpZmljYXRpb24oYCR7YWxhcm0udGl0bGV9IHwgJHthLm5hbWV9IHwg5pW054K55oql5pe2YCwge1xuICAgICAgYm9keTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxuICAgICAgdmlicmF0ZTogMSxcbiAgICAgIHJlcXVpcmVJbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICB9KVxuICB9XG59KVxuXG5hbGFybUt2LmdldEFsbCgpLmZvckVhY2goYSA9PiB7XG4gIGNyZWF0ZVRpbWVyKGEpXG59KVxuIiwiZXhwb3J0IGNsYXNzIEt2IHtcbiAgZ2V0PFQ+KGs6IHN0cmluZywgZGVmYXVsdHM6IFQpOiBUXG4gIGdldDxUPihrOiBzdHJpbmcpOiBUIHwgbnVsbFxuICBnZXQ8VD4oazogc3RyaW5nLCBkZWZhdWx0cz86IFQpOiBUIHwgbnVsbCB7XG4gICAgbGV0IHYgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrKVxuICAgIGlmICh2KSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2KVxuICAgIH1cbiAgICBpZiAoZGVmYXVsdHMgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRzXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgc2V0PFQ+KGs6IHN0cmluZywgdjogVCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGssIEpTT04uc3RyaW5naWZ5KHYpKVxuICB9XG4gIGRlbGV0ZShrOiBzdHJpbmcpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrKVxuICB9XG59XG5cbmNsYXNzIEZpZWxkPFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfa3Y6IEt2LFxuICAgIHByaXZhdGUgX2tleTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2RlZmF1bHRzPzogVFxuICApIHt9XG4gIGdldChkZWY6IFQpOiBUXG4gIGdldCgpOiB1bmRlZmluZWRcbiAgZ2V0KGRlZiA9IHRoaXMuX2RlZmF1bHRzKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2t2LmdldCh0aGlzLl9rZXksIGRlZilcbiAgfVxuICBzZXQodmFsPzogVCkge1xuICAgIHJldHVybiB0aGlzLl9rdi5zZXQodGhpcy5fa2V5LCB2YWwpXG4gIH1cbiAgZGVsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9rdi5kZWxldGUodGhpcy5fa2V5KVxuICB9XG5cbn1cbmV4cG9ydCBlbnVtIEFsYXJtVHlwZSB7XG4gIG9uY2UgPSAnb25jZScsXG4gIHJlcGVhdCA9ICdyZXBlYXQnLFxufVxuZXhwb3J0IGludGVyZmFjZSBBbGFybSB7XG4gIHR5cGU6IEFsYXJtVHlwZVxuICBhaGVhZDogbnVtYmVyXG4gIGR1cmF0aW9uOiBudW1iZXJcbiAgdGltZW91dDogbnVtYmVyXG4gIHRpdGxlOiBzdHJpbmdcbiAgaWQ6IHN0cmluZ1xuICBkb25lPzogYm9vbGVhblxuICBkaXNhYmxlZD86IGJvb2xlYW5cbn1cbmV4cG9ydCBjb25zdCBEdXJhdGlvbiA9IHtcbiAgTTE6IDYwICogMTAwMCxcbiAgSDE6IDYwICogNjAgKiAxMDAwLFxufVxuZXhwb3J0IG5hbWVzcGFjZSBBbGFybSB7XG4gIGV4cG9ydCBmdW5jdGlvbiBlbXB0eSgpOiBBbGFybSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFoZWFkOiAwLFxuICAgICAgdHlwZTogQWxhcm1UeXBlLnJlcGVhdCxcbiAgICAgIGR1cmF0aW9uOiBEdXJhdGlvbi5IMSxcbiAgICAgIHRpbWVvdXQ6IERhdGUubm93KCkgKyBEdXJhdGlvbi5IMSxcbiAgICAgIHRpdGxlOiAnTmV3IEFsYXJtJyxcbiAgICAgIGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSxcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgQWxhcm1LdiB7XG4gIHByaXZhdGUgX2t2ID0gbmV3IEt2KClcbiAgcHJpdmF0ZSBhbGFybXMgPSBuZXcgRmllbGQ8QWxhcm1bXT4odGhpcy5fa3YsICdhbGFybXMnKVxuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxhcm1zLmdldChbXSlcbiAgfVxuICBnZXQoaWQ6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKCdpZCcsIGlkLCB0aGlzLmdldEFsbCgpKVxuICAgIHJldHVybiB0aGlzLmdldEFsbCgpLmZpbmQoXz0+Xy5pZD09PWlkKVxuICB9XG4gIHNldEFsbChhczogQWxhcm1bXSkge1xuICAgIHRoaXMuYWxhcm1zLnNldChhcylcbiAgfVxuICByZW1vdmUoYTogQWxhcm0pIHtcbiAgICBsZXQgYWxhcm1zID0gdGhpcy5nZXRBbGwoKS5maWx0ZXIoXyA9PiBfLmlkICE9PSBhLmlkKVxuICAgIHRoaXMuc2V0QWxsKGFsYXJtcylcbiAgfVxuICBzYXZlKGE6IEFsYXJtKSB7XG4gICAgbGV0IGFsYXJtcyA9IHRoaXMuZ2V0QWxsKClcbiAgICBsZXQgaWR4PSBhbGFybXMuZmluZEluZGV4KF8gPT4gXy5pZCA9PT0gYS5pZClcbiAgICBpZiAoaWR4PDApIHtcbiAgICAgIGlkeD1hbGFybXMubGVuZ3RoXG4gICAgfVxuICAgIGFsYXJtc1tpZHhdID09IGFcbiAgICB0aGlzLnNldEFsbChhbGFybXMpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFsYXJtS3YgPSBuZXcgQWxhcm1LdigpXG4iLCJpbXBvcnQgQnVsbWFDYWxlbmRhciwgeyBCdWxtYUNhbGVuZGFyT3B0aW9ucyB9IGZyb20gJ2J1bG1hLWNhbGVuZGFyJztcbmltcG9ydCAnYnVsbWEtY2FsZW5kYXIvZGlzdC9jc3MvYnVsbWEtY2FsZW5kYXIubWluLmNzcydcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBDYWxlbmRhclByb3BzID0gT21pdDxSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8J2lucHV0Jz4sICdsYWJlbCcgfCAnb25DaGFuZ2UnPiAmIHtcbiAgICBjb250cm9sPzogUmVhY3QuUmVhY3RFbGVtZW50O1xuXG4gICAgZGlzcGxheU1vZGU/OiBCdWxtYUNhbGVuZGFyT3B0aW9uc1snZGlzcGxheU1vZGUnXTtcblxuICAgIC8qKlxuICAgICAqIEFuIGVycm9yIG1lc3NhZ2UgdG8gcmVuZGVyLlxuICAgICAqL1xuICAgIGVycm9yPzogUmVhY3QuUmVhY3ROb2RlO1xuXG4gICAgLyoqXG4gICAgICogQSBoZWxwIG1lc3NhZ2UgdG8gcmVuZGVyLlxuICAgICAqL1xuICAgIGhlbHA/OiBSZWFjdC5SZWFjdE5vZGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgSFRNTCBlbGVtZW50LlxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIGZpcmVkIHdoZW4gdGhlIGlucHV0IHZhbHVlIGhhcyBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogSWYgdGhlIGlucHV0IHR5cGUgaXMgYGNoZWNrYm94YCwgdGhlIHZhbHVlIGlzIGEgYm9vbGVhbi4gSWYgdGhlIGlucHV0IHR5cGUgaXMgYG51bWJlcmAsIHRoZVxuICAgICAqIHZhbHVlIGlzIGEgbnVtYmVyLCBvdGhlcndpc2UgaXQgaXMgYSBzdHJpbmcuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IChldmVudDogeyB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQgfSwgdmFsdWU6IERhdGUpID0+IHZvaWQ7XG5cbiAgICBzaG93SGVhZGVyPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBIVE1MIGlucHV0IHR5cGUuXG4gICAgICpcbiAgICAgKiBUaGlzIG1heSBiZSBleHRlbmRlZCBpZiBuZWNlc3NhcnkuXG4gICAgICovXG4gICAgdHlwZT86ICdkYXRlJyB8ICd0aW1lJyB8ICdkYXRldGltZSdcbiAgICBidWxtYUNhbGVuZGFyT3B0aW9ucz86IEJ1bG1hQ2FsZW5kYXJPcHRpb25zXG4gIH07XG5cbi8qKlxuICogQSBCdWxtYSBzdHlsZWQgZm9ybSBpbnB1dCBlbGVtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5mb3J3YXJkUmVmPEhUTUxJbnB1dEVsZW1lbnQsIENhbGVuZGFyUHJvcHM+KFxuICAoXG4gICAge1xuICAgICAgY29udHJvbCxcbiAgICAgIGRpc3BsYXlNb2RlLFxuICAgICAgZXJyb3IsXG4gICAgICBoZWxwLFxuICAgICAgbWF4TGVuZ3RoLFxuICAgICAgbmFtZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBzaG93SGVhZGVyID0gZmFsc2UsXG4gICAgICB0eXBlID0gJ2RhdGV0aW1lJyxcbiAgICAgIHZhbHVlLFxuICAgICAgaWQgPSBuYW1lLFxuICAgICAgYnVsbWFDYWxlbmRhck9wdGlvbnMsXG4gICAgICAuLi5wcm9wc1xuICAgIH0sXG4gICAgcmVmLFxuICApID0+IHtcbiAgICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xuICAgIGNvbnN0IGNhbGVuZGFyUmVmID0gUmVhY3QudXNlUmVmPEJ1bG1hQ2FsZW5kYXI+KCk7XG5cbiAgICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gaW5wdXRSZWYuY3VycmVudCEpO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjYWxlbmRhclJlZi5jdXJyZW50ID0gbmV3IEJ1bG1hQ2FsZW5kYXIoaW5wdXRSZWYuY3VycmVudCwge1xuICAgICAgICBzaG93SGVhZGVyLFxuICAgICAgICB0eXBlLFxuICAgICAgICBkaXNwbGF5TW9kZSxcbiAgICAgICAgdmFsaWRhdGVMYWJlbDogJ+ehruWumicsXG4gICAgICAgIGNhbmNlbExhYmVsOiAn5Y+W5raIJyxcbiAgICAgICAgY2xlYXJMYWJlbDogJ+a4hemZpCcsXG4gICAgICAgIHRvZGF5TGFiZWw6ICfku4rlpKknLFxuICAgICAgICBub3dMYWJlbDogJ+eOsOWcqCcsXG4gICAgICAgIG1pbnV0ZVN0ZXBzOiAxLFxuICAgICAgICAuLi5idWxtYUNhbGVuZGFyT3B0aW9ucyxcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwbGF5TW9kZSwgc2hvd0hlYWRlciwgdHlwZV0pO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNhbGVuZGFyUmVmLmN1cnJlbnQub24oJ3NlbGVjdCcsICgpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoeyB0YXJnZXQ6IGlucHV0UmVmLmN1cnJlbnQhIH0sIHR5cGUgPT09ICd0aW1lJyA/IGNhbGVuZGFyUmVmLmN1cnJlbnQudGltZS5zdGFydCA6IGNhbGVuZGFyUmVmLmN1cnJlbnQuZGF0ZS5zdGFydCk7XG4gICAgICAgIHdpbmRvd1snY18nICsgdHlwZV0gPSBjYWxlbmRhclJlZi5jdXJyZW50XG4gICAgICB9KTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNhbGVuZGFyUmVmLmN1cnJlbnQucmVtb3ZlTGlzdGVuZXJzKCdzZWxlY3QnKTtcbiAgICAgIH07XG4gICAgfSwgW29uQ2hhbmdlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZiBhcyBhbnl9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgIC8+XG4gICAgKVxuICB9KVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBbGFybSwgQWxhcm1UeXBlLCBEdXJhdGlvbiB9IGZyb20gJ2JhY2tncm91bmQva3YnXG5pbXBvcnQgeyB1c2VBbGFybUNvbnRleHQgfSBmcm9tICdwb3B1cC91dGlscydcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vQ2FsZW5kYXInXG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtKCkge1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeTx7aWQ/OiBzdHJpbmd9PigpXG4gIGNvbnN0IHsgYWxhcm1zLCBmZXRjaDogZmV0Y2hBbGFybXMsIHNhdmUsIHJlbW92ZSB9ID0gdXNlQWxhcm1Db250ZXh0KClcbiAgY29uc3QgbG9jU2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhoaXN0b3J5LmxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKSlcbiAgY29uc3QgbG9jSWQgPSBsb2NTZWFyY2guZ2V0KCdpZCcpXG4gIGNvbnNvbGUubG9nKCdsb2NJZCcsIGxvY0lkLCBoaXN0b3J5LmxvY2F0aW9uLnNlYXJjaClcbiAgY29uc3QgW2FsYXJtLCBzZXRBbGFybV0gPSB1c2VTdGF0ZTxBbGFybT4oXG4gICAgbG9jSWQgJiYgYWxhcm1zLmZpbmQoYSA9PiBhLmlkID09PSBsb2NJZCkgfHwgQWxhcm0uZW1wdHkoKVxuICApXG4gIGZ1bmN0aW9uIHNldEZpZWxkKGtleToga2V5b2YgQWxhcm0sIHZhbHVlOiBBbGFybVtrZXlvZiBBbGFybV0pIHtcbiAgICBzZXRBbGFybSh7XG4gICAgICAuLi5hbGFybSxcbiAgICAgIFtrZXldOiB2YWx1ZSxcbiAgICB9KVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPuagh+mimDo8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXthbGFybS50aXRsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEZpZWxkKCd0aXRsZScsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj7nsbvlnos6PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthbGFybS50eXBlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RmllbGQoJ3R5cGUnLCBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17QWxhcm1UeXBlLnJlcGVhdH0+5b6q546vPC9vcHRpb24+XG4gICAgICAgICAgICAgIHsvKiA8b3B0aW9uIHZhbHVlPXtBbGFybVR5cGUub25jZX0+5LuF5LiA5qyhPC9vcHRpb24+ICovfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCIgaGlkZGVuPXthbGFybS50eXBlICE9PSBBbGFybVR5cGUub25jZX0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPuWIsOacnzo8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZVwiXG4gICAgICAgICAgICB2YWx1ZT17bmV3IERhdGUoYWxhcm0udGltZW91dCkgYXMgYW55fVxuICAgICAgICAgICAgYnVsbWFDYWxlbmRhck9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgbWluRGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgY2xvc2VPbk92ZXJsYXlDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUsIGQpID0+IHtcbiAgICAgICAgICAgICAgc2V0RmllbGQoJ3RpbWVvdXQnLCBkLmdldFRpbWUoKSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiIGhpZGRlbj17YWxhcm0udHlwZSAhPT0gQWxhcm1UeXBlLnJlcGVhdH0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPuW+queOrzo8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0aW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtuZXcgRGF0ZShhbGFybS5kdXJhdGlvbiArIDE2ICogRHVyYXRpb24uSDEpIGFzIGFueX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgZHVyYXRpb24gPSBuZXcgRGF0ZSgwKVxuICAgICAgICAgICAgICBkdXJhdGlvbi5zZXRIb3VycyhkLmdldEhvdXJzKCkgKyBkdXJhdGlvbi5nZXRIb3VycygpKVxuICAgICAgICAgICAgICBkdXJhdGlvbi5zZXRNaW51dGVzKGQuZ2V0TWludXRlcygpICsgZHVyYXRpb24uZ2V0TWludXRlcygpKVxuICAgICAgICAgICAgICBzZXRGaWVsZCgnZHVyYXRpb24nLCBkdXJhdGlvbi5nZXRUaW1lKCkpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPuaPkOWJjTo8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj17MH0gbWF4PXs2MCAqIDI0fSBkZWZhdWx0VmFsdWU9e2FsYXJtLmFoZWFkfSBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICBzZXRGaWVsZCgnYWhlYWQnLCBOdW1iZXIoZS50YXJnZXQudmFsdWUpIHx8IDApXG4gICAgICAgICAgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICBzYXZlKGFsYXJtKVxuICAgICAgICAgICAgICBmZXRjaEFsYXJtcygpXG4gICAgICAgICAgICAgIGhpc3RvcnkuZ29CYWNrKClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeSBpcy1saW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goJy8nKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saW5rIGlzLWxpZ2h0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDlj5bmtohcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQWxhcm1Db250ZXh0IH0gZnJvbSAncG9wdXAvdXRpbHMnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiwgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuZXhwb3J0IGZ1bmN0aW9uIExpc3QoKSB7XG4gIGxldCB7IGFsYXJtcyxmZXRjaCwgcmVtb3ZlLCBzYXZlIH0gPSB1c2VBbGFybUNvbnRleHQoKVxuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgpXG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwicGFuZWxcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgPHNwYW4+5pW054K55oql5pe2PC9zcGFuPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnkgaXMtc21hbGxcIlxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGAvZm9ybWApXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvcD5cbiAgICAgIHthbGFybXMubWFwKGEgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxhIGtleT17YS5pZH0gY2xhc3NOYW1lPVwicGFuZWwtYmxvY2tcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhbmVsLWljb25cIj5cbiAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmYXMgZmEtJHthLnR5cGUgPT09ICdvbmNlJyA/ICdob3VyZ2xhc3MtaGFsZicgOiAnc3luYyd9YH1cbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2EtdGl0bGVcIj5cbiAgICAgICAgICAgICAge2EudGl0bGV9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Etc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7YS50eXBlID09PSAnb25jZSdcbiAgICAgICAgICAgICAgICAgID8gZGF5anMoYS50aW1lb3V0KS5mb3JtYXQoJ1lZWVkvTU0vREQgSEg6bW0nKVxuICAgICAgICAgICAgICAgICAgOiBkYXlqcyhhLmR1cmF0aW9uKS5hZGQoLTgsICdoJykuZm9ybWF0KCdISDptbScpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZhcyBmYS10aW1lcyByZW1vdmUtYnRuYH1cbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGIgPSBjb25maXJtKGDnoa7lrpropoHliKDpmaTjgIwke2EudGl0bGV944CN5ZCXP2ApXG4gICAgICAgICAgICAgICAgaWYgKGIpIHtcbiAgICAgICAgICAgICAgICAgIHJlbW92ZShhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICA8aVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmYXMgZmEtY29nIGNvbmZpZy1idG5gfVxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChgL2Zvcm0/aWQ9JHthLmlkfWApXG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPXthLmlkfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpdGNoXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17IWEuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgc2F2ZSh7IC4uLmEsIGRpc2FibGVkOiAhZS50YXJnZXQuY2hlY2tlZCB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXthLmlkfT48L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L25hdj5cbiAgKVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0ICdidWxtYS9jc3MvYnVsbWEubWluLmNzcydcbmltcG9ydCAnYnVsbWEtc3dpdGNoL2Rpc3QvY3NzL2J1bG1hLXN3aXRjaC5taW4uY3NzJ1xuaW1wb3J0IGNzcyBmcm9tICcuL2luZGV4LnNjc3MnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIFJvdXRlciwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4vRm9ybSdcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuL0xpc3QnXG5pbXBvcnQgeyBoaXN0b3J5LCBBbGFybVByb3ZpZGVyLCB1c2VBbGFybUNvbnRleHQgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHsgVHJhbnNpdGlvbkdyb3VwLCBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcblxuZnVuY3Rpb24gQXBwKCkge1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIHJldHVybiAoXG4gICAgPFRyYW5zaXRpb25Hcm91cD5cbiAgICAgIDxDU1NUcmFuc2l0aW9uIGtleT17bG9jYXRpb24ua2V5fSBjbGFzc05hbWVzPVwiZmFkZVwiIHRpbWVvdXQ9ezMwMH0+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZm9ybVwiPlxuICAgICAgICAgICAgPEZvcm0gLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICAgICAgICAgICAgPExpc3QgLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgKVxufVxuXG5mdW5jdGlvbiBSb290KCkge1xuICByZXR1cm4gKFxuICAgIDxBbGFybVByb3ZpZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KGNzcy5yb290LCAnY29udGFpbmVyJyl9PlxuICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgICAgIDxBcHAgLz5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L0FsYXJtUHJvdmlkZXI+XG4gIClcbn1cblxucmVuZGVyKDxSb290IC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykpXG4iLCJpbXBvcnQgeyBjcmVhdGVIYXNoSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknXG5pbXBvcnQgY29uc3RhdGUgZnJvbSAnY29uc3RhdGUnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHR5cGUgeyBBbGFybU1hbmFnZXIgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL2luZGV4J1xuaW1wb3J0IHsgQWxhcm0sIGFsYXJtS3YsIER1cmF0aW9uIH0gZnJvbSAnYmFja2dyb3VuZC9rdidcbmltcG9ydCB7IGNyZWF0ZVRpbWVyIH0gZnJvbSAnYmFja2dyb3VuZCdcbmV4cG9ydCBjb25zdCBoaXN0b3J5ID0gY3JlYXRlSGFzaEhpc3RvcnkoKVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0QWxhcm1NYW5hZ2VyKCk6IEFsYXJtTWFuYWdlciB7XG4vLyAgIGxldCBiZyA9IGNocm9tZS5leHRlbnNpb24uZ2V0QmFja2dyb3VuZFBhZ2UoKSBhcyBhbnlcbi8vICAgcmV0dXJuIGJnWydhbGFybU1hbmFnZXInXVxuLy8gfVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbnMge1xuICBhbGFybXM6IEFsYXJtW11cbiAgZmV0Y2hBbGFybXM6ICgpID0+IHZvaWRcbn1cblxuLy8gZnVuY3Rpb24gdXNlQWxhcm0oKSB7XG4vLyAgIGxldCBbYWxhcm1zLCBzZXRBbGFybXNdID0gdXNlU3RhdGU8QWxhcm1bXT4oZ2V0QWxhcm1NYW5hZ2VyKCkuYWxhcm1zKVxuLy8gICBmdW5jdGlvbiBmZXRjaCgpIHtcbi8vICAgICBzZXRBbGFybXMoZ2V0QWxhcm1NYW5hZ2VyKCkuYWxhcm1zKVxuLy8gICB9XG4vLyAgIHJldHVybiB7XG4vLyAgICAgYWxhcm1zLFxuLy8gICAgIGZldGNoLFxuLy8gICAgIHJlbW92ZShhOiBBbGFybSkge1xuLy8gICAgICAgZ2V0QWxhcm1NYW5hZ2VyKCkucmVtb3ZlKGEpXG4vLyAgICAgICBmZXRjaCgpXG4vLyAgICAgfSxcbi8vICAgICBzYXZlKGE6IEFsYXJtKSB7XG4vLyAgICAgICBnZXRBbGFybU1hbmFnZXIoKS5zYXZlKGEpXG4vLyAgICAgICBmZXRjaCgpXG4vLyAgICAgfSxcbi8vICAgfVxuLy8gfVxuXG5mdW5jdGlvbiB1c2VBbGFybSgpIHtcbiAgbGV0IFthbGFybXMsIHNldEFsYXJtc10gPSB1c2VTdGF0ZTxBbGFybVtdPihhbGFybUt2LmdldEFsbCgpKVxuICBmdW5jdGlvbiBmZXRjaCgpIHtcbiAgICBzZXRBbGFybXMoYWxhcm1Ldi5nZXRBbGwoKSlcbiAgfVxuICByZXR1cm4ge1xuICAgIGFsYXJtcyxcbiAgICBmZXRjaCxcbiAgICByZW1vdmUoYTogQWxhcm0pIHtcbiAgICAgIGFsYXJtS3YucmVtb3ZlKGEpXG4gICAgICBjaHJvbWUuYWxhcm1zLmNsZWFyKGEuaWQpXG4gICAgICBmZXRjaCgpXG4gICAgfSxcbiAgICBzYXZlKGE6IEFsYXJtKSB7XG4gICAgICBhbGFybUt2LnNhdmUoYSlcbiAgICAgIGNyZWF0ZVRpbWVyKGEpXG4gICAgICBmZXRjaCgpXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgW0FsYXJtUHJvdmlkZXIsIHVzZUFsYXJtQ29udGV4dF0gPSBjb25zdGF0ZSh1c2VBbGFybSlcbiJdLCJzb3VyY2VSb290IjoiIn0=