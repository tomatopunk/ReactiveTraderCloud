import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import SidebarRegionContainer from '../sidebar'

const AnalyticsLayout: React.SFC<RouteComponentProps<any>> = () => (
  <React.Fragment>
    <SidebarRegionContainer onPopoutClick={() => {}} tornOff={true} />
  </React.Fragment>
)

export default AnalyticsLayout
