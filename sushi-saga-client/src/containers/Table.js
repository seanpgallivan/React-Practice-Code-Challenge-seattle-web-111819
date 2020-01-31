import React, { Fragment } from 'react'

const Table = (props) => {

  const handleClick = () => {
    props.onAddFunds()
  }

  const renderPlates = (array) => {
    return array.map((_x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
        <button style={{backgroundColor: 'green'}} onClick={handleClick}>Add Another $100!</button>
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eatenSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table