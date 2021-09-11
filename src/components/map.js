import React, { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { numberWithCommas } from "../helpers/helper"

const Popup = props => {
  return (
    <div
      id="popup"
      style={{
        display: props.visibility ? "block" : "none",
        left: props.left + "px",
        top: props.top + "px",
      }}
    >
      <h6>{props.PROVINCIA}</h6> 
      <table>
        <thead>
          <tr>
            <th>PSOE</th>
            <th>PP</th>
            <th>VOX</th>
            <th>UP</th>
            <th>CS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.PSOE}</td>
            <td>{props.PP}</td>
            <td>{props.VOX}</td>
            <td>{props.UP}</td>
            <td>{props.CS}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const SpainMap = ({
  mapData,
  popupData,
  width,
  height,
  scale,
  mouseLeaveHandler,
  mouseMoveHandler,
  mouseEnterHandler,
   }) => {
  const svgRef = useRef(null)
  let ratio = 0
      /*
  const fillColor = number => {
      if (number > 0) {
        //if (number < 50) {
          return "#ff9f9f"
          }
    }
  



    if ( data.PP > 25 & data.PSOE <= 35) {
      //if (number < 50) {
        return "#c0dec7"
      }
    if (data.PP > 2) {
      //if (number < 50) {
        return "#ccdfff"
      }
   */

  const createThePlot = () => {
    const w = width
    const h = height

    const svg = d3
      .select(svgRef.current)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("id", "svg-map-spain")
      .attr("pointer-events", "auto")
      .attr("preserveAspectRatio", "none")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .on("mousemove", function(e) {
        mouseMoveHandler(d3.mouse(this)[0] * ratio, d3.mouse(this)[1] * ratio)
      })

    const projection = d3.geo
      .azimuthalEqualArea()
      .rotate([0, 0])
      .center([-2, 39])
      .scale(scale*2)
      .translate([w / 2, h / 2])

    const path = d3.geo.path().projection(projection)

    svg
      .selectAll("append")
      .data(mapData.features)
      .enter()
      .append("path")
      .attr("d", path)
      //.attr("fill", (d, i) => fillColor(popupData[i].PSOE)) // Declaración de la variable number
      .attr("fill", (d, i) => {if((popupData[i].PSOE) > (popupData[i].PP)){return "#ff9f9f"}
      if((popupData[i].PSOE) < (popupData[i].PP)){return "#78b5b8"}
      if((popupData[i].VOX) > (popupData[i].PP)){return "#c0dec7"}  
      if((popupData[i].PSOE) = (popupData[i].PP)){return "#bbaa5e"}
    })  
      .attr("stroke", "#444")
      .attr("stroke-width", "0.35")
      .on("mouseenter", function(d, i, e) {  // e declarada en la linea 128
        mouseEnterHandler(
          popupData[i].PROVINCIA,
          popupData[i].PSOE,
          popupData[i].PP,
          popupData[i].VOX,
          popupData[i].UP,
          popupData[i].CS
        )
      })
      .on("mouseleave", function() {
        mouseLeaveHandler()

      })

    
    ratio = svgRef.current.getBoundingClientRect().height / height

    svg
      .selectAll("append")
      .data(popupData)
      .enter()
      .append("text")
      //.attr("x", (d, i) => countPos[i].cx)
      //.attr("y", (d, i) => countPos[i].cy)
      .attr("text-anchor", "middle")
      .attr("class", "counter-on-map")
      .text((d, i) => d.PSOE)
      .on("mouseenter", function(d, i, e) {  // e declarada en la linea 128
        mouseEnterHandler(
          popupData[i].PROVINCIA,
          popupData[i].PSOE,
          popupData[i].PP,
          popupData[i].VOX,
          popupData[i].UP,
          popupData[i].CS
        )
      })
      .on("mouseleave", function() {
        mouseLeaveHandler()

      })

    svg
      .selectAll("append")
      .data(popupData)
      .enter()
      .append("circle")
      .attr('cx', 25)
      .attr('cy', 250)
      .attr('r', 25)
      .attr("stroke", "#444")
      .attr("stroke-width", "0.35")
      .attr('fill', '#ff9f9f')

    svg
      .selectAll("append")
      .data(popupData)
      .enter()
      .append("circle")
      .attr('cx', 25)
      .attr('cy', 350)
      .attr('r', 25)
      .attr("stroke", "#444")
      .attr("stroke-width", "0.35")
      .attr('fill', '#78b5b8')

    svg
      .selectAll("append")
      .data(popupData)
      .enter()
      .append("circle")
      .attr('cx', 25)
      .attr('cy', 450)
      .attr('r', 25)
      .attr("stroke", "#444")
      .attr("stroke-width", "0.35")
      .attr('fill', '#bbaa5e')
  }

  useEffect(() => {
    createThePlot()
  }, [])

  return <div ref={svgRef} id="svg-holder" className="column"></div>
}

const Circle = () => {
  return (
    <div className="column center-text" id="total-holder">
      <div className="total-group"></div>
        <h1 className="h-title">Total PSOE</h1>
      </div>
  )
}

export default ({ data, mapData }) => {
  const [PROVINCIA, setProvince] = useState("")
  const [PSOE, setPSOE] = useState(0)
  const [PP, setPP] = useState(0)
  const [VOX, setVOX] = useState(0)
  const [UP, setUP] = useState(0)
  const [CS, setCS] = useState(0)
  const [popup, setPopup] = useState({ left: 0, top: 0 })
  const [visible, setVisible] = useState(false)

  const cumulativeOffset = element => {
    let top = 0,
      left = 0
    do {
      top += element.offsetTop || 0
      left += element.offsetLeft || 0
      element = element.offsetParent
    } while (element)

    return {
      top: top,
      left: left,
    }
  }

  const mouseMove = (left, top) => {
    const data = cumulativeOffset(document.getElementById("svg-holder"))
    let tmp = { ...popup }
    tmp.left = left + data.left - 0
    tmp.top = top + data.top - 80
    setPopup(tmp)
  }

  const mouseEnter = (PROVINCIA, PSOE, PP, VOX, UP, CS) => {
    setVisible(true)
    setProvince(PROVINCIA)
    setPSOE(numberWithCommas(PSOE))
    setPP(numberWithCommas(PP))
    setVOX(numberWithCommas(VOX))
    setUP(numberWithCommas(UP))
    setCS(numberWithCommas(CS))

  }

  const mouseLeave = () => {
    setVisible(false)
  }

  return (
    <div
      id="map-holder"
      role="img"
      aria-label="Map showing provinces hit by the virus"
      className="container"
    >
      <Popup
        PROVINCIA={PROVINCIA}
        PSOE={PSOE}
        PP={PP}
        VOX={VOX}
        UP={UP}
        CS={CS}
        visibility={visible}
        left={popup.left}
        top={popup.top}
      />

      <SpainMap
        mapData={mapData}
        popupData={data}
        mouseMoveHandler={mouseMove}
        mouseEnterHandler={mouseEnter}
        mouseLeaveHandler={mouseLeave}
        width={1200}
        height={800}
        scale={2000}
      />

    </div>
    
  )
}
