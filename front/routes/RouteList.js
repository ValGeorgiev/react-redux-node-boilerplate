import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Home from 'containers/Home'
import NotFound from 'containers/NotFound'

class RouteList extends Component {
  render () {
    return (
      <Switch>
        <Route key='/' exact path='/' component={Home} />
        <Route key='/*' component={NotFound} />
      </Switch>
    )
  }
}

export default RouteList
