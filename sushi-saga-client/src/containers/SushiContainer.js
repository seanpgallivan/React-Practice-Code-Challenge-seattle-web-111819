import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


// props of four sushis

const showSushis = props => props.sushis.map(sushi => <Sushi sushi={sushi} onEatSushi={props.onEatSushi}/>)

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {showSushis(props)}
        <MoreButton onMoreSushi={props.onMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer