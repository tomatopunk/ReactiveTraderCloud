import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { BlotterContainer } from '../blotter'

const BlotterLayout: React.SFC<RouteComponentProps<any>> = ({ match }) => (
  <React.Fragment>
    <div className="shell__blotter-container">
      <div className="shell__blotter">
        <BlotterContainer onPopoutClick={() => {}} tornOff={true} />
      </div>
    </div>
    <Link to="/">Bring me home</Link>
  </React.Fragment>
)

export default BlotterLayout
