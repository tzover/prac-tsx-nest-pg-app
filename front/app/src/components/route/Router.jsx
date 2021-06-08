import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Page404 from '../pages/Page404'
import SenderToolsRouter from './SenderToolsRouter'

// interfaces

// styled-components

// Functions and variables initialize

// MainComponents
const Routers = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <Home />} />
      <Route
        path='/tools/send'
        render={({ match: { url } }) => (
          <Switch>
            {SenderToolsRouter.map((route) => (
              <Route
                key={route.path}
                path={`${url}${route.path}`}
                exact={route.exact}
                render={() => route.children}
              />
            ))}
          </Switch>
        )}
      />
      <Route path='*' render={() => <Page404 />} />
    </Switch>
  )
}

export default Routers
