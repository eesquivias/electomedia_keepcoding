import React from "react"

export default props => {
  return (
    <div className="center-text">
      <p id="updated">
        <span>Proyecto Electomedia:</span> {props.date}
      </p>
    </div>
  )
}
