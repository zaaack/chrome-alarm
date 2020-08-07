import { createHashHistory } from 'history'
import constate from 'constate'
import { useState } from 'react'
// import type { AlarmManager } from '../../background/index'
import { Alarm, alarmKv, Duration } from 'background/kv'
import { AlarmManager } from 'background'
// import { createTimer } from 'background'
export const history = createHashHistory()


export interface Actions {
  alarms: Alarm[]
  fetchAlarms: () => void
}

export function getAlarmManager(): AlarmManager {
  let bg = chrome.extension.getBackgroundPage() as any
  return bg['alarmManager']
}
function useAlarm() {
  let [alarms, setAlarms] = useState<Alarm[]>(getAlarmManager().alarms)
  function fetch() {
    setAlarms(getAlarmManager().alarms)
  }
  return {
    alarms,
    fetch,
    saveAll(alarms: Alarm[]) {
      getAlarmManager().saveAll(alarms)
      fetch()
    },
    remove(a: Alarm) {
      getAlarmManager().remove(a)
      fetch()
    },
    save(a: Alarm) {
      getAlarmManager().save(a)
      fetch()
    },
  }
}

// function useAlarm() {
//   let [alarms, setAlarms] = useState<Alarm[]>(alarmKv.getAll())
//   function fetch() {
//     setAlarms(alarmKv.getAll())
//   }
//   return {
//     alarms,
//     fetch,
//     remove(a: Alarm) {
//       alarmKv.remove(a)
//       chrome.alarms.clear(a.id)
//       fetch()
//     },
//     save(a: Alarm) {
//       alarmKv.save(a)
//       createTimer(a)
//       fetch()
//     },
//   }
// }

export const [AlarmProvider, useAlarmContext] = constate(useAlarm)
