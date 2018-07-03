import * as React from 'react'
import { Route } from 'react-router-dom'
import { ShellContainer } from './ui/shell'
import OneTile from './ui/structural/OneTile'

export default class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={ShellContainer} />
        <Route path="/pair/:currencyPair" component={OneTile} />
      </React.Fragment>
    )
  }
}
