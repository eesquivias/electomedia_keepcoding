import React from "react"
import { numberWithCommas } from "../helpers/helper"

export default props => {
  const rows = props.data.map((row, i) => (
    <tr key={i}>
      <td>{row.PROVINCIA}</td>
      <td>{numberWithCommas(row.PSOE)}</td>
      <td>{numberWithCommas(row.PP)}</td>
      <td>{numberWithCommas(row.VOX)}</td>
      <td>{numberWithCommas(row.UP)}</td>
      <td>{numberWithCommas(row.ERC)}</td>
      <td>{numberWithCommas(row.CS)}</td>
      <td>{numberWithCommas(row.JxC)}</td>
      <td>{numberWithCommas(row.PNV)}</td>
      <td>{numberWithCommas(row.BILD)}</td>
      <td>{numberWithCommas(row.M_PA)}</td>
      <td>{numberWithCommas(row.CCA)}</td>
      <td>{numberWithCommas(row.NA_S)}</td>

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
            <th>ERC</th>
            <th>CS</th>
            <th>JxC</th>
            <th>PNV</th>
            <th>BILD</th>
            <th>M_PA</th>
            <th>CCA</th>
            <th>NA_S</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}
