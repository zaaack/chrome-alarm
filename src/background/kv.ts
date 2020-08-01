export class Kv {
  get<T>(k: string, defaults: T): T
  get<T>(k: string): T | null
  get<T>(k: string, defaults?: T): T | null {
    let v = localStorage.getItem(k)
    if (v) {
      return JSON.parse(v)
    }
    if (defaults != null) {
      return defaults
    }
    return null
  }
  set<T>(k: string, v: T) {
    localStorage.setItem(k, JSON.stringify(v))
  }
  delete(k: string) {
    localStorage.removeItem(k)
  }
}

class Field<T> {
  constructor(
    private _kv: Kv,
    private _key: string,
    private _defaults?: T
  ) {}
  get(def: T): T
  get(): undefined
  get(def = this._defaults): T | undefined {
    return this._kv.get(this._key, def)
  }
  set(val?: T) {
    return this._kv.set(this._key, val)
  }
  delete() {
    return this._kv.delete(this._key)
  }

}
export enum AlarmType {
  once = 'once',
  repeat = 'repeat',
}
export interface Alarm {
  type: AlarmType
  ahead: number
  duration: number
  timeout: number
  title: string
  id: string
  done?: boolean
  disabled?: boolean
}
export const Duration = {
  M1: 60 * 1000,
  H1: 60 * 60 * 1000,
}
export namespace Alarm {
  export function empty(): Alarm {
    return {
      ahead: 0,
      type: AlarmType.repeat,
      duration: Duration.H1,
      timeout: Date.now() + Duration.H1,
      title: 'New Alarm',
      id: Math.random().toString(36).slice(2),
    }
  }
}

class AlarmKv {
  private _kv = new Kv()
  private alarms = new Field<Alarm[]>(this._kv, 'alarms')
  getAll() {
    return this.alarms.get([])
  }
  get(id: string) {
    console.log('id', id, this.getAll())
    return this.getAll().find(_=>_.id===id)
  }
  setAll(as: Alarm[]) {
    this.alarms.set(as)
  }
  remove(a: Alarm) {
    let alarms = this.getAll().filter(_ => _.id !== a.id)
    this.setAll(alarms)
  }
  save(a: Alarm) {
    let alarms = this.getAll()
    let idx= alarms.findIndex(_ => _.id === a.id)
    if (idx<0) {
      idx=alarms.length
    }
    alarms[idx] == a
    this.setAll(alarms)
  }
}

export const alarmKv = new AlarmKv()
