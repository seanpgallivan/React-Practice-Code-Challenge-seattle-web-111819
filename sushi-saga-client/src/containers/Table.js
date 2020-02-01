import React, { Fragment } from 'react'

const Table = (props) => {

  const handleClick = () => props.onAddFunds()

  const renderPlates = arr => arr.map((_x, i) => <div key={i} className="empty-plate" style={{ top: -7 * i }}/>)

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
        <button style={{backgroundColor: 'green'}} onClick={handleClick}>Add Another $100!</button>
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.eatenSushi)}
        </div>
      </div>
    </Fragment>
  )
}
export default Table