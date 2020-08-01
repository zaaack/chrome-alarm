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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQva3YudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQSw2REFBNkQ7QUFFZDtBQUUvQyw4QkFBOEI7QUFDOUIsZ0NBQWdDO0FBQ2hDLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNEJBQTRCO0FBQzVCLFFBQVE7QUFDUiwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1QixRQUFRO0FBQ1IsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5QixnQ0FBZ0M7QUFDaEMsUUFBUTtBQUNSLDZCQUE2QjtBQUM3QixvREFBb0Q7QUFDcEQsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0QixvQ0FBb0M7QUFDcEMsV0FBVztBQUNYLHFDQUFxQztBQUNyQyxvQ0FBb0M7QUFDcEMsNERBQTREO0FBQzVELHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsUUFBUTtBQUNSLGtDQUFrQztBQUNsQyxvREFBb0Q7QUFDcEQsaUNBQWlDO0FBQ2pDLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0IsVUFBVTtBQUNWLFFBQVE7QUFDUix1QkFBdUI7QUFDdkIsMkNBQTJDO0FBQzNDLDhDQUE4QztBQUM5QyxvQ0FBb0M7QUFDcEMscUJBQXFCO0FBQ3JCLFlBQVk7QUFDWixnREFBZ0Q7QUFDaEQsd0JBQXdCO0FBQ3hCLHVCQUF1QjtBQUN2QiwrQ0FBK0M7QUFDL0MsbUNBQW1DO0FBQ25DLGlEQUFpRDtBQUNqRCwwQ0FBMEM7QUFDMUMsbUNBQW1DO0FBQ25DLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixvRUFBb0U7QUFDcEUsNkJBQTZCO0FBQzdCLDBEQUEwRDtBQUMxRCx5Q0FBeUM7QUFDekMsNENBQTRDO0FBQzVDLHFDQUFxQztBQUNyQywrQkFBK0I7QUFDL0IsK0ZBQStGO0FBQy9GLCtCQUErQjtBQUcvQix5RkFBeUY7QUFDekYscUxBQXFMO0FBQ3JMLGdCQUFnQjtBQUNoQiwyQkFBMkI7QUFDM0Isc0lBQXNJO0FBQ3RJLGNBQWM7QUFDZCw2Q0FBNkM7QUFDN0MsWUFBWTtBQUNaLFVBQVU7QUFDVixRQUFRO0FBQ1IsSUFBSTtBQUVKLDhDQUE4QztBQUc5QyxzQ0FBc0M7QUFDdEMsa0RBQWtEO0FBQ2xELFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4QyxZQUFZO0FBQ1osU0FBUztBQUNULFFBQVE7QUFHRCxTQUFTLFdBQVcsQ0FBQyxDQUFRO0lBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyw0Q0FBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRO0lBQ3hGLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDekIsSUFBSTtRQUNKLGVBQWUsRUFBRSxDQUFDLENBQUMsUUFBUTtLQUM1QixDQUFDO0lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFRLENBQUMsQ0FBQyxLQUFLLFVBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFJLENBQUM7QUFDcEUsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFDO0lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN6QixJQUFJLEtBQUssR0FBRywyQ0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQy9CLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDNUIsSUFBSSxZQUFZLENBQUMsOEJBQWEsQ0FBQyxDQUFDLElBQU0sRUFBRTtZQUN0QyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUU7WUFDakMsT0FBTyxFQUFFLENBQUM7WUFDVixrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzNCLE9BQU07S0FDUDtTQUFNO1FBQ0wsSUFBSSxZQUFZLENBQUksS0FBSyxDQUFDLEtBQUssV0FBTSxDQUFDLENBQUMsSUFBSSxnQ0FBUyxFQUFFO1lBQ3BELElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRTtZQUNqQyxPQUFPLEVBQUUsQ0FBQztZQUNWLGtCQUFrQixFQUFFLElBQUk7U0FDekIsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsMkNBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBQztJQUN4QixXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzdIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtJQUFBO0lBbUJBLENBQUM7SUFoQkMsZ0JBQUcsR0FBSCxVQUFPLENBQVMsRUFBRSxRQUFZO1FBQzVCLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxFQUFFO1lBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNyQjtRQUNELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUNwQixPQUFPLFFBQVE7U0FDaEI7UUFDRCxPQUFPLElBQUk7SUFDYixDQUFDO0lBQ0QsZ0JBQUcsR0FBSCxVQUFPLENBQVMsRUFBRSxDQUFJO1FBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELG1CQUFNLEdBQU4sVUFBTyxDQUFTO1FBQ2QsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNILFNBQUM7QUFBRCxDQUFDOztBQUVEO0lBQ0UsZUFDVSxHQUFPLEVBQ1AsSUFBWSxFQUNaLFNBQWE7UUFGYixRQUFHLEdBQUgsR0FBRyxDQUFJO1FBQ1AsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGNBQVMsR0FBVCxTQUFTLENBQUk7SUFDcEIsQ0FBQztJQUdKLG1CQUFHLEdBQUgsVUFBSSxHQUFvQjtRQUFwQiw0QkFBTSxJQUFJLENBQUMsU0FBUztRQUN0QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxtQkFBRyxHQUFILFVBQUksR0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7SUFDckMsQ0FBQztJQUNELHNCQUFNLEdBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVILFlBQUM7QUFBRCxDQUFDO0FBQ0QsSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0lBQ25CLDBCQUFhO0lBQ2IsOEJBQWlCO0FBQ25CLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjtBQVdNLElBQU0sUUFBUSxHQUFHO0lBQ3RCLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSTtJQUNiLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUk7Q0FDbkI7QUFDTSxJQUFVLEtBQUssQ0FXckI7QUFYRCxXQUFpQixLQUFLO0lBQ3BCLFNBQWdCLEtBQUs7UUFDbkIsT0FBTztZQUNMLEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRTtZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFO1lBQ2pDLEtBQUssRUFBRSxXQUFXO1lBQ2xCLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBVGUsV0FBSyxRQVNwQjtBQUNILENBQUMsRUFYZ0IsS0FBSyxLQUFMLEtBQUssUUFXckI7QUFFRDtJQUFBO1FBQ1UsUUFBRyxHQUFHLElBQUksRUFBRSxFQUFFO1FBQ2QsV0FBTSxHQUFHLElBQUksS0FBSyxDQUFVLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO0lBd0J6RCxDQUFDO0lBdkJDLHdCQUFNLEdBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QscUJBQUcsR0FBSCxVQUFJLEVBQVU7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUUsUUFBQyxDQUFDLEVBQUUsS0FBRyxFQUFFLEVBQVQsQ0FBUyxDQUFDO0lBQ3pDLENBQUM7SUFDRCx3QkFBTSxHQUFOLFVBQU8sRUFBVztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELHdCQUFNLEdBQU4sVUFBTyxDQUFRO1FBQ2IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFiLENBQWEsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0Qsc0JBQUksR0FBSixVQUFLLENBQVE7UUFDWCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQzFCLElBQUksR0FBRyxHQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBYixDQUFhLENBQUM7UUFDN0MsSUFBSSxHQUFHLEdBQUMsQ0FBQyxFQUFFO1lBQ1QsR0FBRyxHQUFDLE1BQU0sQ0FBQyxNQUFNO1NBQ2xCO1FBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDO0FBRU0sSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2JhY2tncm91bmQvaW5kZXgudHNcIik7XG4iLCIvLyBpbXBvcnQgeyBhbGFybUt2LCBBbGFybSwgQWxhcm1UeXBlLCBEdXJhdGlvbiB9IGZyb20gJy4va3YnXG5cbmltcG9ydCB7IEFsYXJtLCBEdXJhdGlvbiwgYWxhcm1LdiB9IGZyb20gXCIuL2t2XCJcblxuLy8gZXhwb3J0IGNsYXNzIEFsYXJtTWFuYWdlciB7XG4vLyAgICAgYWxhcm1zID0gYWxhcm1Ldi5nZXRBbGwoKVxuLy8gICAgIHRpbWVyczogTWFwPHN0cmluZywgYW55W10+ID0gbmV3IE1hcCgpXG4vLyAgICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgICB0aGlzLnVwZGF0ZVRpbWVycygpXG4vLyAgICAgfVxuLy8gICAgIHNhdmUoYWxhcm06IEFsYXJtKSB7XG4vLyAgICAgICBhbGFybUt2LnNhdmUoYWxhcm0pXG4vLyAgICAgICB0aGlzLnVwZGF0ZVRpbWVycygpXG4vLyAgICAgfVxuLy8gICAgIHJlbW92ZShhbGFybTogQWxhcm0pIHtcbi8vICAgICAgIGFsYXJtS3YucmVtb3ZlKGFsYXJtKVxuLy8gICAgICAgdGhpcy5jbGVhclRpbWVycyhhbGFybSlcbi8vICAgICB9XG4vLyAgICAgbm90aWZ5KGFsYXJtOiBBbGFybSkge1xuLy8gICAgICAgbmV3IE5vdGlmaWNhdGlvbihgJHthbGFybS50aXRsZX0gfCDmlbTngrnmiqXml7ZgLCB7XG4vLyAgICAgICAgIGJvZHk6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSxcbi8vICAgICAgICAgdmlicmF0ZTogMSxcbi8vICAgICAgICAgcmVxdWlyZUludGVyYWN0aW9uOiB0cnVlLFxuLy8gICAgICAgfSlcbi8vICAgICAgIGNvbnNvbGUubG9nKCdub3RpZnknLCBhbGFybSlcbi8vICAgICAgIC8vIHZhciBhdWRpbyA9IG5ldyBBdWRpbygpO1xuLy8gICAgICAgLy8gYXVkaW8uc3JjPSBcIi4uL3NvdW5kL1dpbmRvd3NOb3RpZnlNZXNzYWdpbmcud2F2XCJcbi8vICAgICAgIC8vIGF1ZGlvLmxvYWQoKVxuLy8gICAgICAgLy8gYXVkaW8ucGxheSgpXG4vLyAgICAgfVxuLy8gICAgIGNsZWFyVGltZXJzKGFsYXJtOiBBbGFybSkge1xuLy8gICAgICAgbGV0IHRpbWVyID0gdGhpcy50aW1lcnMuZ2V0KGFsYXJtLmlkKSB8fCBbXVxuLy8gICAgICAgZm9yIChjb25zdCB0IG9mIHRpbWVyKSB7XG4vLyAgICAgICAgIGNsZWFyVGltZW91dCh0KVxuLy8gICAgICAgICBjbGVhckludGVydmFsKHQpXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHVwZGF0ZVRpbWVycygpIHtcbi8vICAgICAgIGZvciAoY29uc3QgYWxhcm0gb2YgdGhpcy5hbGFybXMpIHtcbi8vICAgICAgICAgaWYgKGFsYXJtLmRpc2FibGVkIHx8IGFsYXJtLmRvbmUpIHtcbi8vICAgICAgICAgICB0aGlzLmNsZWFyVGltZXJzKGFsYXJtKVxuLy8gICAgICAgICAgIGNvbnRpbnVlXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgbGV0IHRpbWVyID0gdGhpcy50aW1lcnMuZ2V0KGFsYXJtLmlkKVxuLy8gICAgICAgICBpZiAoIXRpbWVyKSB7XG4vLyAgICAgICAgICAgdGltZXIgPSBbXVxuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGVUaW1lcnMnLCBhbGFybSlcbi8vICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4vLyAgICAgICAgICAgaWYgKGFsYXJtLnR5cGUgPT09IEFsYXJtVHlwZS5vbmNlKSB7XG4vLyAgICAgICAgICAgICBsZXQgdDEgPSBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkoYWxhcm0pXG4vLyAgICAgICAgICAgICAgIHRoaXMuc2F2ZSh7XG4vLyAgICAgICAgICAgICAgICAgLi4uYWxhcm0sXG4vLyAgICAgICAgICAgICAgICAgZG9uZTogdHJ1ZVxuLy8gICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgfSwgYWxhcm0udGltZW91dCAtIChub3cgKyBhbGFybS5haGVhZCAqIER1cmF0aW9uLk0xKSlcbi8vICAgICAgICAgICAgIHRpbWVyLnB1c2godDEpXG4vLyAgICAgICAgICAgfSBlbHNlIGlmIChhbGFybS50eXBlID09PSBBbGFybVR5cGUucmVwZWF0KSB7XG4vLyAgICAgICAgICAgICBjb25zdCByZWNUaW1lb3V0ID0gKCkgPT4ge1xuLy8gICAgICAgICAgICAgICBsZXQgdDEgPSBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeShhbGFybSlcbi8vICAgICAgICAgICAgICAgICByZWNUaW1lb3V0KClcbi8vICAgICAgICAgICAgICAgfSwgYWxhcm0uZHVyYXRpb24gLSAoRGF0ZS5ub3coKSArIGFsYXJtLmFoZWFkICogRHVyYXRpb24uTTEpICUgYWxhcm0uZHVyYXRpb24pXG4vLyAgICAgICAgICAgICAgIHRpbWVyIVswXSA9IHQxXG5cblxuLy8gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVwZWF0ICR7YWxhcm0udGl0bGV9YCwgYWxhcm0sIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSlcbi8vICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG5leHQgcmVwZWF0ICR7YWxhcm0udGl0bGV9YCwgYWxhcm0sIG5ldyBEYXRlKERhdGUubm93KCkgKyBhbGFybS5kdXJhdGlvbiAtIChEYXRlLm5vdygpICsgYWxhcm0uYWhlYWQgKiBEdXJhdGlvbi5NMSkgJSBhbGFybS5kdXJhdGlvbikudG9Mb2NhbGVTdHJpbmcoKSlcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIHJlY1RpbWVvdXQoKVxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcGVhdCcsIGB0aW1lb3V0OiR7YWxhcm0uZHVyYXRpb24gLSAobm93ICsgYWxhcm0uYWhlYWQgKiBEdXJhdGlvbi5NMSkgJSBhbGFybS5kdXJhdGlvbn1gLCBhbGFybS5kdXJhdGlvbilcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgdGhpcy50aW1lcnMuc2V0KGFsYXJtLmlkLCB0aW1lcilcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLy8gd2luZG93WydhbGFybU1hbmFnZXInXSA9IG5ldyBBbGFybU1hbmFnZXIoKVxuXG5cbi8vIC8vIGNocm9tZS5hbGFybXMuZ2V0QWxsKGFsYXJtcyA9PiB7XG4vLyAvLyAgIGlmIChhbGFybXMuZmluZChhID0+IGEubmFtZSA9PT0gJ3Rlc3QnKSkge1xuLy8gLy8gICAgIC8vXG4vLyAvLyAgIH0gZWxzZSB7XG4vLyAvLyAgICAgY2hyb21lLmFsYXJtcy5jcmVhdGUoJ3Rlc3QnLCB7XG4vLyAvLyAgICAgICB3aGVuOiBEYXRlLm5vdygpICsgMTAwMCAqIDUsXG4vLyAvLyAgICAgfSlcbi8vIC8vICAgfVxuLy8gLy8gfSlcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGltZXIoYTogQWxhcm0pIHtcbiAgY2hyb21lLmFsYXJtcy5jbGVhcihhLmlkKVxuICBjb25zdCB3aGVuID0gRGF0ZS5ub3coKSArIGEuZHVyYXRpb24gLSAoRGF0ZS5ub3coKSArIGEuYWhlYWQgKiBEdXJhdGlvbi5NMSkgJSBhLmR1cmF0aW9uXG4gIGNocm9tZS5hbGFybXMuY3JlYXRlKGEuaWQsIHtcbiAgICB3aGVuLFxuICAgIHBlcmlvZEluTWludXRlczogYS5kdXJhdGlvblxuICB9KVxuICBjb25zb2xlLmxvZyhgaW5pdCAke2EudGl0bGV9OiAke25ldyBEYXRlKHdoZW4pLnRvTG9jYWxlU3RyaW5nKCl9YClcbn1cblxuY2hyb21lLmFsYXJtcy5vbkFsYXJtLmFkZExpc3RlbmVyKGEgPT4ge1xuICBjb25zb2xlLmxvZygnb25BbGFybScsIGEpXG4gIGxldCBhbGFybSA9IGFsYXJtS3YuZ2V0KGEubmFtZSlcbiAgaWYgKCFhbGFybSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+ayoeaJvuWIsGFsYXJtJywgYSlcbiAgICBuZXcgTm90aWZpY2F0aW9uKGDmsqHmib7liLAgYWxhcm06JHthLm5hbWV9YCwge1xuICAgICAgYm9keTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxuICAgICAgdmlicmF0ZTogMSxcbiAgICAgIHJlcXVpcmVJbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICB9KVxuICAgIGNocm9tZS5hbGFybXMuY2xlYXIoYS5uYW1lKVxuICAgIHJldHVyblxuICB9IGVsc2Uge1xuICAgIG5ldyBOb3RpZmljYXRpb24oYCR7YWxhcm0udGl0bGV9IHwgJHthLm5hbWV9IHwg5pW054K55oql5pe2YCwge1xuICAgICAgYm9keTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxuICAgICAgdmlicmF0ZTogMSxcbiAgICAgIHJlcXVpcmVJbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICB9KVxuICB9XG59KVxuXG5hbGFybUt2LmdldEFsbCgpLmZvckVhY2goYSA9PiB7XG4gIGNyZWF0ZVRpbWVyKGEpXG59KVxuIiwiZXhwb3J0IGNsYXNzIEt2IHtcbiAgZ2V0PFQ+KGs6IHN0cmluZywgZGVmYXVsdHM6IFQpOiBUXG4gIGdldDxUPihrOiBzdHJpbmcpOiBUIHwgbnVsbFxuICBnZXQ8VD4oazogc3RyaW5nLCBkZWZhdWx0cz86IFQpOiBUIHwgbnVsbCB7XG4gICAgbGV0IHYgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrKVxuICAgIGlmICh2KSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2KVxuICAgIH1cbiAgICBpZiAoZGVmYXVsdHMgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRzXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgc2V0PFQ+KGs6IHN0cmluZywgdjogVCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGssIEpTT04uc3RyaW5naWZ5KHYpKVxuICB9XG4gIGRlbGV0ZShrOiBzdHJpbmcpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrKVxuICB9XG59XG5cbmNsYXNzIEZpZWxkPFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfa3Y6IEt2LFxuICAgIHByaXZhdGUgX2tleTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2RlZmF1bHRzPzogVFxuICApIHt9XG4gIGdldChkZWY6IFQpOiBUXG4gIGdldCgpOiB1bmRlZmluZWRcbiAgZ2V0KGRlZiA9IHRoaXMuX2RlZmF1bHRzKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2t2LmdldCh0aGlzLl9rZXksIGRlZilcbiAgfVxuICBzZXQodmFsPzogVCkge1xuICAgIHJldHVybiB0aGlzLl9rdi5zZXQodGhpcy5fa2V5LCB2YWwpXG4gIH1cbiAgZGVsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9rdi5kZWxldGUodGhpcy5fa2V5KVxuICB9XG5cbn1cbmV4cG9ydCBlbnVtIEFsYXJtVHlwZSB7XG4gIG9uY2UgPSAnb25jZScsXG4gIHJlcGVhdCA9ICdyZXBlYXQnLFxufVxuZXhwb3J0IGludGVyZmFjZSBBbGFybSB7XG4gIHR5cGU6IEFsYXJtVHlwZVxuICBhaGVhZDogbnVtYmVyXG4gIGR1cmF0aW9uOiBudW1iZXJcbiAgdGltZW91dDogbnVtYmVyXG4gIHRpdGxlOiBzdHJpbmdcbiAgaWQ6IHN0cmluZ1xuICBkb25lPzogYm9vbGVhblxuICBkaXNhYmxlZD86IGJvb2xlYW5cbn1cbmV4cG9ydCBjb25zdCBEdXJhdGlvbiA9IHtcbiAgTTE6IDYwICogMTAwMCxcbiAgSDE6IDYwICogNjAgKiAxMDAwLFxufVxuZXhwb3J0IG5hbWVzcGFjZSBBbGFybSB7XG4gIGV4cG9ydCBmdW5jdGlvbiBlbXB0eSgpOiBBbGFybSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFoZWFkOiAwLFxuICAgICAgdHlwZTogQWxhcm1UeXBlLnJlcGVhdCxcbiAgICAgIGR1cmF0aW9uOiBEdXJhdGlvbi5IMSxcbiAgICAgIHRpbWVvdXQ6IERhdGUubm93KCkgKyBEdXJhdGlvbi5IMSxcbiAgICAgIHRpdGxlOiAnTmV3IEFsYXJtJyxcbiAgICAgIGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSxcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgQWxhcm1LdiB7XG4gIHByaXZhdGUgX2t2ID0gbmV3IEt2KClcbiAgcHJpdmF0ZSBhbGFybXMgPSBuZXcgRmllbGQ8QWxhcm1bXT4odGhpcy5fa3YsICdhbGFybXMnKVxuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxhcm1zLmdldChbXSlcbiAgfVxuICBnZXQoaWQ6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKCdpZCcsIGlkLCB0aGlzLmdldEFsbCgpKVxuICAgIHJldHVybiB0aGlzLmdldEFsbCgpLmZpbmQoXz0+Xy5pZD09PWlkKVxuICB9XG4gIHNldEFsbChhczogQWxhcm1bXSkge1xuICAgIHRoaXMuYWxhcm1zLnNldChhcylcbiAgfVxuICByZW1vdmUoYTogQWxhcm0pIHtcbiAgICBsZXQgYWxhcm1zID0gdGhpcy5nZXRBbGwoKS5maWx0ZXIoXyA9PiBfLmlkICE9PSBhLmlkKVxuICAgIHRoaXMuc2V0QWxsKGFsYXJtcylcbiAgfVxuICBzYXZlKGE6IEFsYXJtKSB7XG4gICAgbGV0IGFsYXJtcyA9IHRoaXMuZ2V0QWxsKClcbiAgICBsZXQgaWR4PSBhbGFybXMuZmluZEluZGV4KF8gPT4gXy5pZCA9PT0gYS5pZClcbiAgICBpZiAoaWR4PDApIHtcbiAgICAgIGlkeD1hbGFybXMubGVuZ3RoXG4gICAgfVxuICAgIGFsYXJtc1tpZHhdID09IGFcbiAgICB0aGlzLnNldEFsbChhbGFybXMpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFsYXJtS3YgPSBuZXcgQWxhcm1LdigpXG4iXSwic291cmNlUm9vdCI6IiJ9