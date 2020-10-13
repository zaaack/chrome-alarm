/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/background/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/background/index.ts":
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
/*! exports provided: AlarmManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmManager", function() { return AlarmManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _kv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kv */ "./src/background/kv.ts");
// import { alarmKv, Alarm, AlarmType, Duration } from './kv'


var AlarmManager = /** @class */ (function () {
    function AlarmManager() {
        this.timers = new Map();
        this.updateTimers();
    }
    Object.defineProperty(AlarmManager.prototype, "alarms", {
        get: function () {
            return _kv__WEBPACK_IMPORTED_MODULE_1__["alarmKv"].getAll();
        },
        enumerable: true,
        configurable: true
    });
    AlarmManager.prototype.save = function (alarm) {
        _kv__WEBPACK_IMPORTED_MODULE_1__["alarmKv"].save(alarm);
        this.updateTimers();
    };
    AlarmManager.prototype.saveAll = function (alarms) {
        _kv__WEBPACK_IMPORTED_MODULE_1__["alarmKv"].saveAll(alarms);
        this.updateTimers();
    };
    AlarmManager.prototype.remove = function (alarm) {
        _kv__WEBPACK_IMPORTED_MODULE_1__["alarmKv"].remove(alarm);
        this.clearTimers(alarm);
    };
    AlarmManager.prototype.notify = function (alarm) {
        var title = alarm.title + " | \u6574\u70B9\u62A5\u65F6";
        if (alarm.notify) {
            new Notification(title, {
                body: new Date().toLocaleString(),
                vibrate: 1,
                requireInteraction: true,
            });
        }
        if (alarm.alert) {
            alert(title);
        }
        console.log('notify', new Date().toLocaleString(), alarm);
        // var audio = new Audio();
        // audio.src= "../sound/WindowsNotifyMessaging.wav"
        // audio.load()
        // audio.play()
    };
    AlarmManager.prototype.clearTimers = function (alarm) {
        var timer = this.timers.get(alarm.id) || [];
        for (var _i = 0, timer_1 = timer; _i < timer_1.length; _i++) {
            var t = timer_1[_i];
            clearTimeout(t);
            clearInterval(t);
        }
        this.timers.delete(alarm.id);
    };
    AlarmManager.prototype.updateTimers = function () {
        var _this = this;
        var _loop_1 = function (alarm) {
            if (alarm.disabled || alarm.done) {
                this_1.clearTimers(alarm);
                return "continue";
            }
            var timer = this_1.timers.get(alarm.id);
            if (!timer) {
                timer = [];
                console.log('updateTimers', alarm);
                var now = Date.now();
                if (alarm.type === _kv__WEBPACK_IMPORTED_MODULE_1__["AlarmType"].once) {
                    var t1 = setTimeout(function () {
                        _this.notify(alarm);
                        _this.save(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, alarm), { done: true }));
                    }, alarm.timeout - (now + alarm.ahead * _kv__WEBPACK_IMPORTED_MODULE_1__["Duration"].M1));
                    timer.push(t1);
                }
                else if (alarm.type === _kv__WEBPACK_IMPORTED_MODULE_1__["AlarmType"].repeat) {
                    var recTimeout_1 = function () {
                        var timeout = alarm.duration - (Date.now() + alarm.ahead * _kv__WEBPACK_IMPORTED_MODULE_1__["Duration"].M1) % alarm.duration;
                        var t1 = setTimeout(function () {
                            _this.notify(alarm);
                            recTimeout_1();
                        }, timeout);
                        timer[0] = t1; // 用数组作为引用
                        console.log("next repeat " + alarm.title, new Date(Date.now() + timeout).toLocaleString(), alarm);
                    };
                    recTimeout_1();
                }
                this_1.timers.set(alarm.id, timer);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.alarms; _i < _a.length; _i++) {
            var alarm = _a[_i];
            _loop_1(alarm);
        }
    };
    return AlarmManager;
}());

window['alarmManager'] = new AlarmManager();
// chrome.alarms.getAll(alarms => {
//   if (alarms.find(a => a.name === 'test')) {
//     //
//   } else {
//     chrome.alarms.create('test', {
//       when: Date.now() + 1000 * 5,
//     })
//   }
// })
// export function createTimer(a: Alarm) {
//   chrome.alarms.clear(a.id)
//   const when = Date.now() + a.duration - (Date.now() + a.ahead * Duration.M1) % a.duration
//   chrome.alarms.create(a.id, {
//     when,
//     periodInMinutes: a.duration
//   })
//   console.log(`init ${a.title}: ${new Date(when).toLocaleString()}`)
// }
// chrome.alarms.onAlarm.addListener(a => {
//   console.log('onAlarm', a)
//   let alarm = alarmKv.get(a.name)
//   if (!alarm) {
//     console.error('没找到alarm', a)
//     new Notification(`没找到 alarm:${a.name}`, {
//       body: new Date().toLocaleString(),
//       vibrate: 1,
//       requireInteraction: true,
//     })
//     chrome.alarms.clear(a.name)
//     return
//   } else {
//     new Notification(`${alarm.title} | ${a.name} | 整点报时`, {
//       body: new Date().toLocaleString(),
//       vibrate: 1,
//       requireInteraction: true,
//     })
//   }
// })
// alarmKv.getAll().forEach(a => {
//   createTimer(a)
// })


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
        chrome.storage.sync.get(function (items) {
            for (var key in items) {
                localStorage.setItem(key, JSON.stringify(items[key]));
            }
        });
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
        var _a;
        localStorage.setItem(k, JSON.stringify(v));
        chrome.storage.sync.set((_a = {}, _a[k] = v, _a));
    };
    Kv.prototype.delete = function (k) {
        localStorage.removeItem(k);
        chrome.storage.sync.remove(k);
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
            notify: true,
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
    AlarmKv.prototype.saveAll = function (as) {
        this.alarms.set(as);
    };
    AlarmKv.prototype.remove = function (a) {
        var alarms = this.getAll().filter(function (_) { return _.id !== a.id; });
        this.saveAll(alarms);
    };
    AlarmKv.prototype.save = function (a) {
        var alarms = this.getAll();
        var idx = alarms.findIndex(function (_) { return _.id === a.id; });
        if (idx < 0) {
            idx = alarms.length;
        }
        alarms[idx] = a;
        this.saveAll(alarms);
    };
    return AlarmKv;
}());
var alarmKv = new AlarmKv();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9rdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVB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QVU7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUUsUUFBQyxDQUFDLEVBQUUsS0FBRyxFQUFFLEVBQVQsQ0FBUyxDQUFDO0lBQ3pDLENBQUM7SUFDRCx5QkFBTyxHQUFQLFVBQVEsRUFBVztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELHdCQUFNLEdBQU4sVUFBTyxDQUFRO1FBQ2IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFiLENBQWEsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ0Qsc0JBQUksR0FBSixVQUFLLENBQVE7UUFDWCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQzFCLElBQUksR0FBRyxHQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBYixDQUFhLENBQUM7UUFDN0MsSUFBSSxHQUFHLEdBQUMsQ0FBQyxFQUFFO1lBQ1QsR0FBRyxHQUFDLE1BQU0sQ0FBQyxNQUFNO1NBQ2xCO1FBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUM7QUFFTSxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYmFja2dyb3VuZC9pbmRleC50c1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsIi8vIGltcG9ydCB7IGFsYXJtS3YsIEFsYXJtLCBBbGFybVR5cGUsIER1cmF0aW9uIH0gZnJvbSAnLi9rdidcblxuaW1wb3J0IHsgQWxhcm0sIER1cmF0aW9uLCBhbGFybUt2LCBBbGFybVR5cGUgfSBmcm9tIFwiLi9rdlwiXG5cbmV4cG9ydCBjbGFzcyBBbGFybU1hbmFnZXIge1xuICAgIGdldCBhbGFybXMoKSB7XG4gICAgICByZXR1cm4gYWxhcm1Ldi5nZXRBbGwoKVxuICAgIH1cbiAgICB0aW1lcnM6IE1hcDxzdHJpbmcsIGFueVtdPiA9IG5ldyBNYXAoKVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy51cGRhdGVUaW1lcnMoKVxuICAgIH1cbiAgICBzYXZlKGFsYXJtOiBBbGFybSkge1xuICAgICAgYWxhcm1Ldi5zYXZlKGFsYXJtKVxuICAgICAgdGhpcy51cGRhdGVUaW1lcnMoKVxuICAgIH1cbiAgICBzYXZlQWxsKGFsYXJtczogQWxhcm1bXSkge1xuICAgICAgYWxhcm1Ldi5zYXZlQWxsKGFsYXJtcylcbiAgICAgIHRoaXMudXBkYXRlVGltZXJzKClcbiAgICB9XG4gICAgcmVtb3ZlKGFsYXJtOiBBbGFybSkge1xuICAgICAgYWxhcm1Ldi5yZW1vdmUoYWxhcm0pXG4gICAgICB0aGlzLmNsZWFyVGltZXJzKGFsYXJtKVxuICAgIH1cbiAgICBub3RpZnkoYWxhcm06IEFsYXJtKSB7XG4gICAgICBjb25zdCB0aXRsZSA9IGAke2FsYXJtLnRpdGxlfSB8IOaVtOeCueaKpeaXtmBcbiAgICAgIGlmIChhbGFybS5ub3RpZnkpIHtcbiAgICAgICAgbmV3IE5vdGlmaWNhdGlvbih0aXRsZSwge1xuICAgICAgICAgIGJvZHk6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgICAgICB2aWJyYXRlOiAxLFxuICAgICAgICAgIHJlcXVpcmVJbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmIChhbGFybS5hbGVydCkge1xuICAgICAgICBhbGVydCh0aXRsZSlcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdub3RpZnknLCBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksIGFsYXJtKVxuICAgICAgLy8gdmFyIGF1ZGlvID0gbmV3IEF1ZGlvKCk7XG4gICAgICAvLyBhdWRpby5zcmM9IFwiLi4vc291bmQvV2luZG93c05vdGlmeU1lc3NhZ2luZy53YXZcIlxuICAgICAgLy8gYXVkaW8ubG9hZCgpXG4gICAgICAvLyBhdWRpby5wbGF5KClcbiAgICB9XG4gICAgY2xlYXJUaW1lcnMoYWxhcm06IEFsYXJtKSB7XG4gICAgICBsZXQgdGltZXIgPSB0aGlzLnRpbWVycy5nZXQoYWxhcm0uaWQpIHx8IFtdXG4gICAgICBmb3IgKGNvbnN0IHQgb2YgdGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHQpXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodClcbiAgICAgIH1cbiAgICAgIHRoaXMudGltZXJzLmRlbGV0ZShhbGFybS5pZClcbiAgICB9XG4gICAgdXBkYXRlVGltZXJzKCkge1xuICAgICAgZm9yIChjb25zdCBhbGFybSBvZiB0aGlzLmFsYXJtcykge1xuICAgICAgICBpZiAoYWxhcm0uZGlzYWJsZWQgfHwgYWxhcm0uZG9uZSkge1xuICAgICAgICAgIHRoaXMuY2xlYXJUaW1lcnMoYWxhcm0pXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGltZXIgPSB0aGlzLnRpbWVycy5nZXQoYWxhcm0uaWQpXG4gICAgICAgIGlmICghdGltZXIpIHtcbiAgICAgICAgICB0aW1lciA9IFtdXG4gICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZVRpbWVycycsIGFsYXJtKVxuICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAgICAgICBpZiAoYWxhcm0udHlwZSA9PT0gQWxhcm1UeXBlLm9uY2UpIHtcbiAgICAgICAgICAgIGxldCB0MSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm5vdGlmeShhbGFybSlcbiAgICAgICAgICAgICAgdGhpcy5zYXZlKHtcbiAgICAgICAgICAgICAgICAuLi5hbGFybSxcbiAgICAgICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBhbGFybS50aW1lb3V0IC0gKG5vdyArIGFsYXJtLmFoZWFkICogRHVyYXRpb24uTTEpKVxuICAgICAgICAgICAgdGltZXIucHVzaCh0MSlcbiAgICAgICAgICB9IGVsc2UgaWYgKGFsYXJtLnR5cGUgPT09IEFsYXJtVHlwZS5yZXBlYXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY1RpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSBhbGFybS5kdXJhdGlvbiAtIChEYXRlLm5vdygpICsgYWxhcm0uYWhlYWQgKiBEdXJhdGlvbi5NMSkgJSBhbGFybS5kdXJhdGlvblxuICAgICAgICAgICAgICBsZXQgdDEgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeShhbGFybSlcbiAgICAgICAgICAgICAgICByZWNUaW1lb3V0KClcbiAgICAgICAgICAgICAgfSwgdGltZW91dClcbiAgICAgICAgICAgICAgdGltZXIhWzBdID0gdDEgLy8g55So5pWw57uE5L2c5Li65byV55SoXG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYG5leHQgcmVwZWF0ICR7YWxhcm0udGl0bGV9YCwgbmV3IERhdGUoRGF0ZS5ub3coKSArIHRpbWVvdXQpLnRvTG9jYWxlU3RyaW5nKCksIGFsYXJtKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVjVGltZW91dCgpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudGltZXJzLnNldChhbGFybS5pZCwgdGltZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG59XG5cbndpbmRvd1snYWxhcm1NYW5hZ2VyJ10gPSBuZXcgQWxhcm1NYW5hZ2VyKClcblxuXG4vLyBjaHJvbWUuYWxhcm1zLmdldEFsbChhbGFybXMgPT4ge1xuLy8gICBpZiAoYWxhcm1zLmZpbmQoYSA9PiBhLm5hbWUgPT09ICd0ZXN0JykpIHtcbi8vICAgICAvL1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIGNocm9tZS5hbGFybXMuY3JlYXRlKCd0ZXN0Jywge1xuLy8gICAgICAgd2hlbjogRGF0ZS5ub3coKSArIDEwMDAgKiA1LFxuLy8gICAgIH0pXG4vLyAgIH1cbi8vIH0pXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRpbWVyKGE6IEFsYXJtKSB7XG4vLyAgIGNocm9tZS5hbGFybXMuY2xlYXIoYS5pZClcbi8vICAgY29uc3Qgd2hlbiA9IERhdGUubm93KCkgKyBhLmR1cmF0aW9uIC0gKERhdGUubm93KCkgKyBhLmFoZWFkICogRHVyYXRpb24uTTEpICUgYS5kdXJhdGlvblxuLy8gICBjaHJvbWUuYWxhcm1zLmNyZWF0ZShhLmlkLCB7XG4vLyAgICAgd2hlbixcbi8vICAgICBwZXJpb2RJbk1pbnV0ZXM6IGEuZHVyYXRpb25cbi8vICAgfSlcbi8vICAgY29uc29sZS5sb2coYGluaXQgJHthLnRpdGxlfTogJHtuZXcgRGF0ZSh3aGVuKS50b0xvY2FsZVN0cmluZygpfWApXG4vLyB9XG5cbi8vIGNocm9tZS5hbGFybXMub25BbGFybS5hZGRMaXN0ZW5lcihhID0+IHtcbi8vICAgY29uc29sZS5sb2coJ29uQWxhcm0nLCBhKVxuLy8gICBsZXQgYWxhcm0gPSBhbGFybUt2LmdldChhLm5hbWUpXG4vLyAgIGlmICghYWxhcm0pIHtcbi8vICAgICBjb25zb2xlLmVycm9yKCfmsqHmib7liLBhbGFybScsIGEpXG4vLyAgICAgbmV3IE5vdGlmaWNhdGlvbihg5rKh5om+5YiwIGFsYXJtOiR7YS5uYW1lfWAsIHtcbi8vICAgICAgIGJvZHk6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSxcbi8vICAgICAgIHZpYnJhdGU6IDEsXG4vLyAgICAgICByZXF1aXJlSW50ZXJhY3Rpb246IHRydWUsXG4vLyAgICAgfSlcbi8vICAgICBjaHJvbWUuYWxhcm1zLmNsZWFyKGEubmFtZSlcbi8vICAgICByZXR1cm5cbi8vICAgfSBlbHNlIHtcbi8vICAgICBuZXcgTm90aWZpY2F0aW9uKGAke2FsYXJtLnRpdGxlfSB8ICR7YS5uYW1lfSB8IOaVtOeCueaKpeaXtmAsIHtcbi8vICAgICAgIGJvZHk6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSxcbi8vICAgICAgIHZpYnJhdGU6IDEsXG4vLyAgICAgICByZXF1aXJlSW50ZXJhY3Rpb246IHRydWUsXG4vLyAgICAgfSlcbi8vICAgfVxuLy8gfSlcblxuLy8gYWxhcm1Ldi5nZXRBbGwoKS5mb3JFYWNoKGEgPT4ge1xuLy8gICBjcmVhdGVUaW1lcihhKVxuLy8gfSlcbiIsImV4cG9ydCBjbGFzcyBLdiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KChpdGVtcykgPT4ge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gaXRlbXMpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShpdGVtc1trZXldKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGdldDxUPihrOiBzdHJpbmcsIGRlZmF1bHRzOiBUKTogVFxuICBnZXQ8VD4oazogc3RyaW5nKTogVCB8IG51bGxcbiAgZ2V0PFQ+KGs6IHN0cmluZywgZGVmYXVsdHM/OiBUKTogVCB8IG51bGwge1xuICAgIGxldCB2ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaylcbiAgICBpZiAodikge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodilcbiAgICB9XG4gICAgaWYgKGRlZmF1bHRzICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0c1xuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHNldDxUPihrOiBzdHJpbmcsIHY6IFQpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrLCBKU09OLnN0cmluZ2lmeSh2KSlcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7W2tdOiB2fSlcbiAgfVxuICBkZWxldGUoazogc3RyaW5nKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaylcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnJlbW92ZShrKVxuICB9XG59XG5cbmNsYXNzIEZpZWxkPFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfa3Y6IEt2LFxuICAgIHByaXZhdGUgX2tleTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2RlZmF1bHRzPzogVFxuICApIHt9XG4gIGdldChkZWY6IFQpOiBUXG4gIGdldCgpOiB1bmRlZmluZWRcbiAgZ2V0KGRlZiA9IHRoaXMuX2RlZmF1bHRzKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2t2LmdldCh0aGlzLl9rZXksIGRlZilcbiAgfVxuICBzZXQodmFsPzogVCkge1xuICAgIHJldHVybiB0aGlzLl9rdi5zZXQodGhpcy5fa2V5LCB2YWwpXG4gIH1cbiAgZGVsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9rdi5kZWxldGUodGhpcy5fa2V5KVxuICB9XG5cbn1cbmV4cG9ydCBlbnVtIEFsYXJtVHlwZSB7XG4gIG9uY2UgPSAnb25jZScsXG4gIHJlcGVhdCA9ICdyZXBlYXQnLFxufVxuZXhwb3J0IGludGVyZmFjZSBBbGFybSB7XG4gIHR5cGU6IEFsYXJtVHlwZVxuICBhaGVhZDogbnVtYmVyXG4gIG5vdGlmeT86IGJvb2xlYW5cbiAgYWxlcnQ/OiBib29sZWFuXG4gIGR1cmF0aW9uOiBudW1iZXJcbiAgdGltZW91dDogbnVtYmVyXG4gIHRpdGxlOiBzdHJpbmdcbiAgaWQ6IHN0cmluZ1xuICBkb25lPzogYm9vbGVhblxuICBkaXNhYmxlZD86IGJvb2xlYW5cbn1cbmV4cG9ydCBjb25zdCBEdXJhdGlvbiA9IHtcbiAgTTE6IDYwICogMTAwMCxcbiAgSDE6IDYwICogNjAgKiAxMDAwLFxufVxuZXhwb3J0IG5hbWVzcGFjZSBBbGFybSB7XG4gIGV4cG9ydCBmdW5jdGlvbiBlbXB0eSgpOiBBbGFybSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFoZWFkOiAwLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgdHlwZTogQWxhcm1UeXBlLnJlcGVhdCxcbiAgICAgIGR1cmF0aW9uOiBEdXJhdGlvbi5IMSxcbiAgICAgIHRpbWVvdXQ6IERhdGUubm93KCkgKyBEdXJhdGlvbi5IMSxcbiAgICAgIHRpdGxlOiAnTmV3IEFsYXJtJyxcbiAgICAgIGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSxcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgQWxhcm1LdiB7XG4gIHByaXZhdGUgX2t2ID0gbmV3IEt2KClcbiAgcHJpdmF0ZSBhbGFybXMgPSBuZXcgRmllbGQ8QWxhcm1bXT4odGhpcy5fa3YsICdhbGFybXMnKVxuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxhcm1zLmdldChbXSlcbiAgfVxuICBnZXQoaWQ6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKCdpZCcsIGlkLCB0aGlzLmdldEFsbCgpKVxuICAgIHJldHVybiB0aGlzLmdldEFsbCgpLmZpbmQoXz0+Xy5pZD09PWlkKVxuICB9XG4gIHNhdmVBbGwoYXM6IEFsYXJtW10pIHtcbiAgICB0aGlzLmFsYXJtcy5zZXQoYXMpXG4gIH1cbiAgcmVtb3ZlKGE6IEFsYXJtKSB7XG4gICAgbGV0IGFsYXJtcyA9IHRoaXMuZ2V0QWxsKCkuZmlsdGVyKF8gPT4gXy5pZCAhPT0gYS5pZClcbiAgICB0aGlzLnNhdmVBbGwoYWxhcm1zKVxuICB9XG4gIHNhdmUoYTogQWxhcm0pIHtcbiAgICBsZXQgYWxhcm1zID0gdGhpcy5nZXRBbGwoKVxuICAgIGxldCBpZHg9IGFsYXJtcy5maW5kSW5kZXgoXyA9PiBfLmlkID09PSBhLmlkKVxuICAgIGlmIChpZHg8MCkge1xuICAgICAgaWR4PWFsYXJtcy5sZW5ndGhcbiAgICB9XG4gICAgYWxhcm1zW2lkeF0gPSBhXG4gICAgdGhpcy5zYXZlQWxsKGFsYXJtcylcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYWxhcm1LdiA9IG5ldyBBbGFybUt2KClcbiJdLCJzb3VyY2VSb290IjoiIn0=