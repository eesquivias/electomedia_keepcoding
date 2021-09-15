import React from "react"
import FAQ from "./FAQ"



export default props => {
  const faqs = props.data.map((item, index) => (
    <FAQ
      key={index}
      tabIndex={index}
      question={item.question}
      answer={item.answer}
    />
  ))
  return (
    <div id="faqs">
      <h4 id="faq-title">Pipeline del Proyecto</h4><a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia">Github del Proyecto</a>
      <div id="pipe_img"></div>
      {faqs}
    </div>
  )
}
