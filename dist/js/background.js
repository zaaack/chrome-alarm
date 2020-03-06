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
/******/ 		"background": 0
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
/******/ 	deferredModules.push(["./src/background/index.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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


var AlarmManager = /** @class */ (function () {
    function AlarmManager() {
        this.alarms = _kv__WEBPACK_IMPORTED_MODULE_1__["alarmKv"].alarms.get([]);
        this.timers = new Map();
        this.updateTimers();
    }
    AlarmManager.prototype.add = function (alarm) {
        this.alarms.push(alarm);
        _kv__WEBPACK_IMPORTED_MODULE_1__["alarmKv"].alarms.set(this.alarms);
        this.updateTimers();
    };
    AlarmManager.prototype.remove = function (alarm) {
        this.alarms = this.alarms.filter(function (a) { return a.id !== alarm.id; });
        _kv__WEBPACK_IMPORTED_MODULE_1__["alarmKv"].alarms.set(this.alarms);
        this.clearTimers(alarm);
    };
    AlarmManager.prototype.update = function (alarm) {
        var idx = this.alarms.findIndex(function (a) { return a.id === alarm.id; });
        this.alarms[idx] = alarm;
        _kv__WEBPACK_IMPORTED_MODULE_1__["alarmKv"].alarms.set(this.alarms);
        this.updateTimers();
    };
    AlarmManager.prototype.notify = function (alarm) {
        new Notification(alarm.title + " | \u6574\u70B9\u62A5\u65F6", {
            body: new Date().toLocaleString(),
            vibrate: 1,
            requireInteraction: true,
        });
        console.log('notify', alarm);
    };
    AlarmManager.prototype.clearTimers = function (alarm) {
        var timer = this.timers.get(alarm.id) || [];
        for (var _i = 0, timer_1 = timer; _i < timer_1.length; _i++) {
            var t = timer_1[_i];
            clearTimeout(t);
            clearInterval(t);
        }
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
                        _this.update(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, alarm), { done: true }));
                    }, alarm.timeout - now);
                    timer.push(t1);
                }
                else if (alarm.type === _kv__WEBPACK_IMPORTED_MODULE_1__["AlarmType"].repeat) {
                    var recTimeout_1 = function () {
                        var t1 = setTimeout(function () {
                            _this.notify(alarm);
                            console.log("repeat " + alarm.title, alarm, new Date().toLocaleString());
                            console.log("next repeat " + alarm.title, alarm, new Date(Date.now() + alarm.duration - Date.now() % alarm.duration).toLocaleString());
                            recTimeout_1();
                        }, alarm.duration - Date.now() % alarm.duration);
                        timer[0] = t1;
                    };
                    recTimeout_1();
                    console.log('repeat', "timeout:" + (alarm.duration - now % alarm.duration), alarm.duration);
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQva3YudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7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RyxJQUFJLEtBQUssQ0FBVSxLQUFJLEVBQUUsUUFBUSxDQUFDOztJQUM3QyxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQ0FGcUIsRUFBRSxHQUV2QjtBQUVNLElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYmFja2dyb3VuZFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2JhY2tncm91bmQvaW5kZXgudHNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IGFsYXJtS3YsIEFsYXJtLCBBbGFybVR5cGUgfSBmcm9tICcuL2t2J1xuXG5leHBvcnQgY2xhc3MgQWxhcm1NYW5hZ2VyIHtcbiAgICBhbGFybXMgPSBhbGFybUt2LmFsYXJtcy5nZXQoW10pXG4gICAgdGltZXJzOiBNYXA8c3RyaW5nLCBhbnlbXT4gPSBuZXcgTWFwKClcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZXJzKClcbiAgICB9XG4gICAgYWRkKGFsYXJtOiBBbGFybSkge1xuICAgICAgdGhpcy5hbGFybXMucHVzaChhbGFybSlcbiAgICAgIGFsYXJtS3YuYWxhcm1zLnNldCh0aGlzLmFsYXJtcylcbiAgICAgIHRoaXMudXBkYXRlVGltZXJzKClcbiAgICB9XG4gICAgcmVtb3ZlKGFsYXJtOiBBbGFybSkge1xuICAgICAgdGhpcy5hbGFybXMgPSB0aGlzLmFsYXJtcy5maWx0ZXIoYSA9PiBhLmlkICE9PSBhbGFybS5pZClcbiAgICAgIGFsYXJtS3YuYWxhcm1zLnNldCh0aGlzLmFsYXJtcylcbiAgICAgIHRoaXMuY2xlYXJUaW1lcnMoYWxhcm0pXG4gICAgfVxuICAgIHVwZGF0ZShhbGFybTogQWxhcm0pIHtcbiAgICAgIGxldCBpZHggPSB0aGlzLmFsYXJtcy5maW5kSW5kZXgoYSA9PiBhLmlkID09PSBhbGFybS5pZClcbiAgICAgIHRoaXMuYWxhcm1zW2lkeF0gPSBhbGFybVxuICAgICAgYWxhcm1Ldi5hbGFybXMuc2V0KHRoaXMuYWxhcm1zKVxuICAgICAgdGhpcy51cGRhdGVUaW1lcnMoKVxuICAgIH1cbiAgICBub3RpZnkoYWxhcm06IEFsYXJtKSB7XG4gICAgICBuZXcgTm90aWZpY2F0aW9uKGAke2FsYXJtLnRpdGxlfSB8IOaVtOeCueaKpeaXtmAsIHtcbiAgICAgICAgYm9keTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxuICAgICAgICB2aWJyYXRlOiAxLFxuICAgICAgICByZXF1aXJlSW50ZXJhY3Rpb246IHRydWUsXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coJ25vdGlmeScsIGFsYXJtKVxuICAgIH1cbiAgICBjbGVhclRpbWVycyhhbGFybTogQWxhcm0pIHtcbiAgICAgIGxldCB0aW1lciA9IHRoaXMudGltZXJzLmdldChhbGFybS5pZCkgfHwgW11cbiAgICAgIGZvciAoY29uc3QgdCBvZiB0aW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQodClcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0KVxuICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVUaW1lcnMoKSB7XG4gICAgICBmb3IgKGNvbnN0IGFsYXJtIG9mIHRoaXMuYWxhcm1zKSB7XG4gICAgICAgIGlmIChhbGFybS5kaXNhYmxlZCB8fCBhbGFybS5kb25lKSB7XG4gICAgICAgICAgdGhpcy5jbGVhclRpbWVycyhhbGFybSlcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIGxldCB0aW1lciA9IHRoaXMudGltZXJzLmdldChhbGFybS5pZClcbiAgICAgICAgaWYgKCF0aW1lcikge1xuICAgICAgICAgIHRpbWVyID0gW11cbiAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlVGltZXJzJywgYWxhcm0pXG4gICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgICAgICAgIGlmIChhbGFybS50eXBlID09PSBBbGFybVR5cGUub25jZSkge1xuICAgICAgICAgICAgbGV0IHQxID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubm90aWZ5KGFsYXJtKVxuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgLi4uYWxhcm0sXG4gICAgICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgYWxhcm0udGltZW91dCAtIG5vdylcbiAgICAgICAgICAgIHRpbWVyLnB1c2godDEpXG4gICAgICAgICAgfSBlbHNlIGlmIChhbGFybS50eXBlID09PSBBbGFybVR5cGUucmVwZWF0KSB7XG4gICAgICAgICAgICBjb25zdCByZWNUaW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgdDEgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeShhbGFybSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVwZWF0ICR7YWxhcm0udGl0bGV9YCwgYWxhcm0sIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbmV4dCByZXBlYXQgJHthbGFybS50aXRsZX1gLCBhbGFybSwgbmV3IERhdGUoRGF0ZS5ub3coKSArIGFsYXJtLmR1cmF0aW9uIC0gRGF0ZS5ub3coKSAlIGFsYXJtLmR1cmF0aW9uKS50b0xvY2FsZVN0cmluZygpKVxuICAgICAgICAgICAgICAgIHJlY1RpbWVvdXQoKVxuICAgICAgICAgICAgICB9LCBhbGFybS5kdXJhdGlvbiAtIERhdGUubm93KCkgJSBhbGFybS5kdXJhdGlvbilcbiAgICAgICAgICAgICAgdGltZXIhWzBdID0gdDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlY1RpbWVvdXQoKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcGVhdCcsIGB0aW1lb3V0OiR7YWxhcm0uZHVyYXRpb24gLSBub3cgJSBhbGFybS5kdXJhdGlvbn1gLCBhbGFybS5kdXJhdGlvbilcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy50aW1lcnMuc2V0KGFsYXJtLmlkLCB0aW1lcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbn1cblxud2luZG93WydhbGFybU1hbmFnZXInXSA9IG5ldyBBbGFybU1hbmFnZXIoKVxuIiwiZXhwb3J0IGNsYXNzIEt2IHtcbiAgZ2V0PFQ+KGs6IHN0cmluZywgZGVmYXVsdHM6IFQpOiBUXG4gIGdldDxUPihrOiBzdHJpbmcpOiBUIHwgbnVsbFxuICBnZXQ8VD4oazogc3RyaW5nLCBkZWZhdWx0cz86IFQpOiBUIHwgbnVsbCB7XG4gICAgbGV0IHYgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrKVxuICAgIGlmICh2KSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2KVxuICAgIH1cbiAgICBpZiAoZGVmYXVsdHMgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRzXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgc2V0PFQ+KGs6IHN0cmluZywgdjogVCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGssIEpTT04uc3RyaW5naWZ5KHYpKVxuICB9XG4gIGRlbGV0ZShrOiBzdHJpbmcpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrKVxuICB9XG59XG5cbmNsYXNzIEZpZWxkPFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfa3Y6IEt2LFxuICAgIHByaXZhdGUgX2tleTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2RlZmF1bHRzPzogVFxuICApIHt9XG4gIGdldChkZWY6IFQpOiBUXG4gIGdldCgpOiB1bmRlZmluZWRcbiAgZ2V0KGRlZiA9IHRoaXMuX2RlZmF1bHRzKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2t2LmdldCh0aGlzLl9rZXksIGRlZilcbiAgfVxuICBzZXQodmFsPzogVCkge1xuICAgIHJldHVybiB0aGlzLl9rdi5zZXQodGhpcy5fa2V5LCB2YWwpXG4gIH1cbiAgZGVsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9rdi5kZWxldGUodGhpcy5fa2V5KVxuICB9XG5cbn1cbmV4cG9ydCBlbnVtIEFsYXJtVHlwZSB7XG4gIG9uY2UgPSAnb25jZScsXG4gIHJlcGVhdCA9ICdyZXBlYXQnLFxufVxuZXhwb3J0IGludGVyZmFjZSBBbGFybSB7XG4gIHR5cGU6IEFsYXJtVHlwZVxuICBkdXJhdGlvbjogbnVtYmVyXG4gIHRpbWVvdXQ6IG51bWJlclxuICB0aXRsZTogc3RyaW5nXG4gIGlkOiBzdHJpbmdcbiAgZG9uZT86IGJvb2xlYW5cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG59XG5leHBvcnQgY29uc3QgRHVyYXRpb24gPSB7XG4gIEgxOiA2MCAqIDYwICogMTAwMCxcbn1cbmV4cG9ydCBuYW1lc3BhY2UgQWxhcm0ge1xuICBleHBvcnQgZnVuY3Rpb24gZW1wdHkoKTogQWxhcm0ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBBbGFybVR5cGUucmVwZWF0LFxuICAgICAgZHVyYXRpb246IER1cmF0aW9uLkgxLFxuICAgICAgdGltZW91dDogRGF0ZS5ub3coKSArIER1cmF0aW9uLkgxLFxuICAgICAgdGl0bGU6ICdOZXcgQWxhcm0nLFxuICAgICAgaWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLFxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBBbGFybUt2IGV4dGVuZHMgS3Yge1xuICBhbGFybXMgPSBuZXcgRmllbGQ8QWxhcm1bXT4odGhpcywgJ2FsYXJtcycpXG59XG5cbmV4cG9ydCBjb25zdCBhbGFybUt2ID0gbmV3IEFsYXJtS3YoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==