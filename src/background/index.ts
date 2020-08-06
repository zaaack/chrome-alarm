// import { alarmKv, Alarm, AlarmType, Duration } from './kv'

import { Alarm, Duration, alarmKv, AlarmType } from "./kv"

export class AlarmManager {
    alarms = alarmKv.getAll()
    timers: Map<string, any[]> = new Map()
    constructor() {
      this.updateTimers()
    }
    save(alarm: Alarm) {
      alarmKv.save(alarm)
      this.updateTimers()
    }
    remove(alarm: Alarm) {
      alarmKv.remove(alarm)
      this.clearTimers(alarm)
    }
    notify(alarm: Alarm) {
      new Notification(`${alarm.title} | 整点报时`, {
        body: new Date().toLocaleString(),
        vibrate: 1,
        requireInteraction: true,
      })
      console.log('notify', alarm, new Date().toLocaleString())
      // var audio = new Audio();
      // audio.src= "../sound/WindowsNotifyMessaging.wav"
      // audio.load()
      // audio.play()
    }
    clearTimers(alarm: Alarm) {
      let timer = this.timers.get(alarm.id) || []
      for (const t of timer) {
        clearTimeout(t)
        clearInterval(t)
      }
      this.timers.delete(alarm.id)
    }
    updateTimers() {
      for (const alarm of this.alarms) {
        if (alarm.disabled || alarm.done) {
          this.clearTimers(alarm)
          continue
        }
        let timer = this.timers.get(alarm.id)
        if (!timer) {
          timer = []
          console.log('updateTimers', alarm)
          const now = Date.now()
          if (alarm.type === AlarmType.once) {
            let t1 = setTimeout(() => {
              this.notify(alarm)
              this.save({
                ...alarm,
                done: true
              })
            }, alarm.timeout - (now + alarm.ahead * Duration.M1))
            timer.push(t1)
          } else if (alarm.type === AlarmType.repeat) {
            const recTimeout = () => {
              let t1 = setTimeout(() => {
                this.notify(alarm)
                recTimeout()
              }, alarm.duration - (Date.now() + alarm.ahead * Duration.M1) % alarm.duration)
              timer![0] = t1 // 用数组作为引用


              console.log(`repeat ${alarm.title}`, alarm, new Date().toLocaleString())
              console.log(`next repeat ${alarm.title}`, alarm, new Date(Date.now() + alarm.duration - (Date.now() + alarm.ahead * Duration.M1) % alarm.duration).toLocaleString())
            }
            recTimeout()
            console.log('repeat', `timeout:${alarm.duration - (now + alarm.ahead * Duration.M1) % alarm.duration}`, alarm.duration)
          }
          this.timers.set(alarm.id, timer)
        }
      }
    }
}

window['alarmManager'] = new AlarmManager()


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
