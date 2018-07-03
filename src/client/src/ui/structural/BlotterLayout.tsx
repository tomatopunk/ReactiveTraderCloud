import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { BlotterContainer } from '../blotter'

const BlotterLayout: React.SFC<RouteComponentProps<any>> = () => (
  <React.Fragment>
    <div
      style={{
        width: '100%',
        height: 'auto',
        overflow: 'auto',
        position: 'absolute',
        top: '20px',
        left: '0',
        bottom: '0',
        right: '0'
      }}
    >
      <BlotterContainer onPopoutClick={() => {}} tornOff={true} />
    </div>
  </React.Fragment>
)

export default BlotterLayout
