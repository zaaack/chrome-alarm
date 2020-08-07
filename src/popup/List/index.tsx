import React, { useEffect } from 'react'
import { useAlarmContext } from 'popup/utils'
import { useLocation, useHistory } from 'react-router-dom'
import dayjs from 'dayjs'
import { ReactSortable, Sortable, MultiDrag, Swap } from "react-sortablejs";
import './index.scss'

export function List() {
  let { alarms,fetch, remove, save, saveAll: saveList } = useAlarmContext()
  let location = useLocation()
  let history = useHistory()

  useEffect(() => {
    fetch()
  }, [])
  return (
    <nav className="panel">
      <p className="panel-heading">
        <span>整点报时</span>
        <button
          className="button is-primary is-small"
          onClick={e => {
            history.push(`/form`)
          }}
        >
          <i className="fas fa-plus" aria-hidden="true"></i>
        </button>
      </p>
      <ReactSortable list={alarms} setList={saveList}>
      {alarms.map(a => {
        return (
          <a key={a.id} className="panel-block">
            <span className="panel-icon">
              <i
                className={`fas fa-${a.type === 'once' ? 'hourglass-half' : 'sync'}`}
                aria-hidden="true"
              ></i>
            </span>
            <span className="ca-title">
              {a.title}
              <div className="ca-subtitle">
                {a.type === 'once'
                  ? dayjs(a.timeout).format('YYYY/MM/DD HH:mm')
                  : dayjs(a.duration).add(-8, 'h').format('HH:mm')}
              </div>
            </span>
            <i
              className={`fas fa-times remove-btn`}
              aria-hidden="true"
              onClick={e => {
                let b = confirm(`确定要删除「${a.title}」吗?`)
                if (b) {
                  remove(a)
                }
              }}
            ></i>
            <i
              className={`fas fa-cog config-btn`}
              aria-hidden="true"
              onClick={e => {
            history.push(`/form?id=${a.id}`)

              }}
            ></i>
            <div className="field">
              <input
                id={a.id}
                type="checkbox"
                className="switch"
                defaultChecked={!a.disabled}
                onChange={e => {
                  save({ ...a, disabled: !e.target.checked })
                }}
              />
              <label htmlFor={a.id}></label>
            </div>
          </a>
        )
      })}
      </ReactSortable>
    </nav>
  )
}
