import React from 'react'

const Sushi = (props) => {

  const handleClick = () => {
    props.onEatSushi(props.sushi)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
      {props.sushi.eaten ? null : <img src={props.sushi.img_url} alt="sushi" width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}
export default Sushi