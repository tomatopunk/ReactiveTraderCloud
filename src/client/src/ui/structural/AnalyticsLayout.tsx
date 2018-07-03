import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import SidebarRegionContainer from '../sidebar'

const AnalyticsLayout: React.SFC<RouteComponentProps<any>> = ({ match }) => (
  <React.Fragment>
    <SidebarRegionContainer onPopoutClick={() => {}} tornOff={true} />
    <Link to="/">Bring me home</Link>
  </React.Fragment>
)

export default AnalyticsLayout
