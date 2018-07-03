import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import ConnectedSpotTileContainer from '../spotTile/SpotTileContainer'

interface SingleTileParams {
  currencyPair: string
}

const SingleTile: React.SFC<RouteComponentProps<SingleTileParams>> = ({ match }) => (
  <React.Fragment>
    <ConnectedSpotTileContainer id={match.params.currencyPair} onPopoutClick={() => {}} tornOff={true} />
  </React.Fragment>
)

export default SingleTile
