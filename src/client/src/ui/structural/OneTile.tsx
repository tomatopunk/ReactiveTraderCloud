import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import ConnectedSpotTileContainer from '../spotTile/SpotTileContainer'

interface OneTileParams {
  currencyPair: string
}

const OneTile: React.SFC<RouteComponentProps<OneTileParams>> = ({ match }) => (
  <div>
    <ConnectedSpotTileContainer
      id={match.params.currencyPair}
      onPopoutClick={() => {
        console.log('popout')
      }}
      tornOff={false}
    />
    <Link to="/">Bring me home</Link>
  </div>
)

export default OneTile
