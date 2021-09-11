import React from "react"
import { numberWithCommas } from "../helpers/helper"

export default props => {
  const totalPSOE = props.data.reduce(
    (total, item) => total + parseInt(item.PSOE),
    0
  )
  const totalPP = props.data.reduce(
    (total, item) => total + parseInt(item.PP),
    0
  )
  const totalVOX = props.data.reduce(
    (total, item) => total + parseInt(item.VOX),
    0
  )
  const totalUP = props.data.reduce(
    (total, item) => total + parseInt(item.UP),
    0
  )
  const totalCS = props.data.reduce(
    (total, item) => total + parseInt(item.CS),
    0
  )
  return (
    <div className="column center-text" id="total-holder">
      <div className="total-group">
        <h1 className="h-title">Total PSOE</h1>
        <h1 className="h-value">{numberWithCommas(totalPSOE)}</h1>
      </div>
      <div className="total-group">
        <h1 className="h-title">Total PP</h1>
        <h1 className="h-value">{numberWithCommas(totalPP)}</h1>
      </div>
      <div className="total-group">
        <h1 className="h-title">Total VOX</h1>
        <h1 className="h-value">{numberWithCommas(totalVOX)}</h1>
      </div>
      <div className="total-group">
        <h1 className="h-title">Total UP</h1>
        <h1 className="h-value">{numberWithCommas(totalUP)}</h1>
      </div>
      <div className="total-group">
        <h1 className="h-title">Total CS</h1>
        <h1 className="h-value">{numberWithCommas(totalCS)}</h1>
      </div>
    </div>
  )
}
