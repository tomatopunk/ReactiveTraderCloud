import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import { ShellContainer } from './ui/shell'
import { AnalyticsLayout, BlotterLayout, TileLayout } from './ui/structural'

const Routes = () => (
  <React.Fragment>
    <Link to="/">Home</Link>
    <Link to="/pair/EURUSD">EURUSD</Link>
    <Link to="/blotter">Blotter</Link>
    <Link to="/analytics">Analytics</Link>
    <Route exact path="/" component={ShellContainer} />
    <Route path="/pair/:currencyPair" component={TileLayout} />
    <Route path="/blotter" component={BlotterLayout} />
    <Route path="/analytics" component={AnalyticsLayout} />
  </React.Fragment>
)

export default Routes
