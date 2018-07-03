import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import ConnectedSpotTileContainer from '../spotTile/SpotTileContainer'

interface SingleTileParams {
  currencyPair: string
}

const SingleTile: React.SFC<RouteComponentProps<SingleTileParams>> = ({ match }) => (
  <div className="workspace-region__item">
    <ConnectedSpotTileContainer id={match.params.currencyPair} onPopoutClick={() => {}} tornOff={true} />
    <Link to="/">Bring me home</Link>
  </div>
)

export default SingleTile
