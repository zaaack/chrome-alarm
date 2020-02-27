import React from 'react'
import { render } from 'react-dom'
import 'bulma/css/bulma.min.css'
import 'bulma-switch/dist/css/bulma-switch.min.css'
import css from './index.scss'
import cx from 'classnames'
import { Switch, Route, Router, useLocation } from 'react-router-dom'
import { Form } from './Form'
import { List } from './List'
import { history, AlarmProvider, useAlarmContext } from './utils'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function App() {
  let location = useLocation()
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

function Root() {
  return (
    <AlarmProvider>
      <div className={cx(css.root, 'container')}>
        <Router history={history}>
          <App />
        </Router>
      </div>
    </AlarmProvider>
  )
}

render(<Root />, document.querySelector('#app'))
