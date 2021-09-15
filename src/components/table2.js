import React from "react"
import { numberWithCommas } from "../helpers/helper"

export default props => {
  const rows = props.data2.map((row, i) => (
    <tr key={i}>
      <td>{row.PROVINCIA}</td>
      <td>{numberWithCommas(row.PSOE)}</td>
      <td>{numberWithCommas(row.PP)}</td>
      <td>{numberWithCommas(row.VOX)}</td>
      <td>{numberWithCommas(row.UP)}</td>
      <td>{numberWithCommas(row.CS)}</td>
    </tr>
  ))
  return (
    <div className="column" id="table-holder">
      <table>
        <thead>
          <tr>
            <th>Circunscripción</th>
            <th>PSOE</th>
            <th>PP</th>
            <th>VOX</th>
            <th>UP</th>
            <th>CS</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}
