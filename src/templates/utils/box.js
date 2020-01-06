import React from "react"
import { randomColors } from "./helper"
const Box = ({ title, value }) => {
  const testFunc = () => {
    if (Array.isArray(value)) {
      return <p className="cIndItems">{value.join()}</p>
    } else {
      return <p className="cIndItems">{value}</p>
    }
  }
  return (
    <>
      <div
        className={`${value ? "show" : "hide"} cItemContainer slide `}
        style={{ borderColor: `${randomColors()}` }}
      >
        <h2 className="cTitles">{title}</h2>
        {testFunc()}
      </div>
    </>
  )
}

export default Box
