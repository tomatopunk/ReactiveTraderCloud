import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import { ShellContainer } from './ui/shell'
import { AnalyticsLayout, BlotterLayout, TileLayout } from './ui/structural'

const styleObj = { color: '#00a8cc', padding: '8px', textDecoration: 'none' }

const Routes = () => (
  <React.Fragment>
    <Link to="/" style={styleObj}>
      Home
    </Link>
    <Link to="/blotter" style={styleObj}>
      Blotter
    </Link>
    <Link to="/analytics" style={styleObj}>
      Analytics
    </Link>
    <Link to="/pair/EURUSD" style={styleObj}>
      EURUSD
    </Link>
    <Link to="/pair/USDJPY" style={styleObj}>
      USDJPY
    </Link>
    <Link to="/pair/GBPUSD" style={styleObj}>
      GBPUSD
    </Link>
    <Link to="/pair/GBPJPY" style={styleObj}>
      GBPJPY
    </Link>
    <Link to="/pair/EURAUD" style={styleObj}>
      EURAUD
    </Link>
    <Link to="/pair/AUDUSD" style={styleObj}>
      AUDUSD
    </Link>
    <Link to="/pair/NZDUSD" style={styleObj}>
      NZDUSD
    </Link>
    <Link to="/pair/EURJPY" style={styleObj}>
      EURJPY
    </Link>
    <Link to="/pair/EURCAD" style={styleObj}>
      EURCAD
    </Link>

    <Route exact path="/" component={ShellContainer} />
    <Route path="/pair/:currencyPair" component={TileLayout} />
    <Route path="/blotter" component={BlotterLayout} />
    <Route path="/analytics" component={AnalyticsLayout} />
  </React.Fragment>
)

export default Routes
