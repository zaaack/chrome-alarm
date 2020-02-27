import { createHashHistory } from 'history'
import constate from "constate";
import { useState } from "react";
import type { AlarmManager } from '../../background/index'
import type { Alarm } from 'background/kv';
export const history = createHashHistory()

export function getAlarmManager(): AlarmManager {
  let bg = chrome.extension.getBackgroundPage() as any
  return bg['alarmManager']
}

export interface Actions {
  alarms: Alarm[]
  fetchAlarms: () => void
}

function useAlarm() {
  let [alarms, setAlarms]=useState<Alarm[]>([])
  return { alarms, fetchAlarms() {
    setAlarms(getAlarmManager().alarms)
  }}
}

export const [AlarmProvider, useAlarmContext] = constate(useAlarm)
