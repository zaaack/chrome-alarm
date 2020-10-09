import React, { useState } from 'react'
import { Alarm, AlarmType, Duration } from 'background/kv'
import { useAlarmContext } from 'popup/utils'
import { useHistory } from 'react-router-dom'
import dayjs from 'dayjs'
import Calendar from './Calendar'

export function Form() {
  const history = useHistory<{id?: string}>()
  const { alarms, fetch: fetchAlarms, save, remove } = useAlarmContext()
  const locSearch = new URLSearchParams(history.location.search.slice(1))
  const locId = locSearch.get('id')
  console.log('locId', locId, history.location.search)
  const [alarm, setAlarm] = useState<Alarm>(
    locId && alarms.find(a => a.id === locId) || Alarm.empty()
  )
  function setField(key: keyof Alarm, value: Alarm[keyof Alarm]) {
    setAlarm({
      ...alarm,
      [key]: value,
    })
  }
  return (
    <div className="form">
      <div className="field is-grouped">
        <label className="label">标题:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder={alarm.title}
            onChange={e => setField('title', e.target.value)}
          />
        </div>
      </div>
      <div className="field is-grouped">
        <label className="label">类型:</label>
        <div className="control">
          <div className="select">
            <select
              defaultValue={alarm.type}
              onChange={e => {
                setField('type', e.target.value)
              }}
            >
              <option value={AlarmType.repeat}>循环</option>
              {/* <option value={AlarmType.once}>仅一次</option> */}
            </select>
          </div>
        </div>
      </div>
      <div className="field is-grouped" hidden={alarm.type !== AlarmType.once}>
        <label className="label">到期:</label>
        <div className="control">
          <Calendar
            className="input"
            type="datetime"
            value={new Date(alarm.timeout) as any}
            bulmaCalendarOptions={{
              minDate: new Date(),
              closeOnOverlayClick: true,
            }}
            onChange={(e, d) => {
              setField('timeout', d.getTime())
            }}
          />
        </div>
      </div>

      <div className="field is-grouped" hidden={alarm.type !== AlarmType.repeat}>
        <label className="label">循环:</label>
        <div className="control">
          <Calendar
            className="input"
            type="time"
            value={new Date(alarm.duration + 16 * Duration.H1) as any}
            onChange={(e, d) => {
              let duration = new Date(0)
              duration.setHours(d.getHours() + duration.getHours())
              duration.setMinutes(d.getMinutes() + duration.getMinutes())
              setField('duration', duration.getTime())
            }}
          />
        </div>
      </div>
      <div className="field is-grouped">
        <label className="label">提前:</label>
        <div className="control">
          <input type="number" min={0} max={60 * 24} defaultValue={alarm.ahead} onChange={e => {
            setField('ahead', Number(e.target.value) || 0)
          }} />
        </div>
      </div>
      <div className="field is-grouped">
        <label className="label">弹窗:</label>
        <div className="control">
          <input type="checkbox" defaultChecked={alarm.alert} onChange={e => {
            setField('alert', e.target.checked)
          }} />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button
            onClick={e => {
              save(alarm)
              fetchAlarms()
              history.goBack()
            }}
            className="button is-primary is-link"
          >
            保存
          </button>
        </div>
        <div className="control">
          <button
            onClick={e => {
              history.push('/')
            }}
            className="button is-link is-light"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  )
}
