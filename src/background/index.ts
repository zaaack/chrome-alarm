import { alarmKv, Alarm, AlarmType } from './kv'

export class AlarmManager {
    alarms = alarmKv.alarms.get([])
    timers: Map<string, number[]> = new Map()
    constructor() {
      this.updateTimers()
    }
    add(alarm: Alarm) {
      this.alarms.push(alarm)
      alarmKv.alarms.set(this.alarms)
      this.updateTimers()
    }
    remove(alarm: Alarm) {
      this.alarms = this.alarms.filter(a => a.id !== alarm.id)
      alarmKv.alarms.set(this.alarms)
      this.clearTimers(alarm)
    }
    update(alarm: Alarm) {
      let idx = this.alarms.findIndex(a => a.id === alarm.id)
      this.alarms[idx] = alarm
      alarmKv.alarms.set(this.alarms)
      this.updateTimers()
    }
    notify(alarm: Alarm) {
      new Notification(`${alarm.title} | 整点报时`, {
        body: new Date().toLocaleString(),
        vibrate: 1,
        requireInteraction: true,
      })
      console.log('notify', alarm)
    }
    clearTimers(alarm: Alarm) {
      let timer = this.timers.get(alarm.id) || []
      for (const t of timer) {
        clearTimeout(t)
        clearInterval(t)
      }
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
              this.update({
                ...alarm,
                done: true
              })
            }, alarm.timeout - now)
            timer.push(t1)
          } else if (alarm.type === AlarmType.repeat) {
            const recTimeout = () => {
              let t1 = setTimeout(() => {
                this.notify(alarm)
                console.log(`repeat ${alarm.title}`, alarm, new Date().toLocaleString())
                console.log(`next repeat ${alarm.title}`, alarm, new Date(Date.now() + alarm.duration - Date.now() % alarm.duration).toLocaleString())
                recTimeout()
              }, alarm.duration - Date.now() % alarm.duration)
              timer![0] = t1
            }
            recTimeout()
            console.log('repeat', `timeout:${alarm.duration - now % alarm.duration}`, alarm.duration)
          }
          this.timers.set(alarm.id, timer)
        }
      }
    }
}

window['alarmManager'] = new AlarmManager()
