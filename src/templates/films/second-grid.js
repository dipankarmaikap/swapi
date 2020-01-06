import React from "react"
import { Link } from "gatsby"
import { randomColors, removeSpace } from "../utils/helper"
const SecondGrid = ({ item, sublink }) => {
  return (
    <div className="vtS grow ">
      <Link to={`/${sublink}/${removeSpace(item.name)}`}>
        <div className="vtTS" style={{ backgroundColor: `${randomColors()}` }}>
          {item.name.slice(0, 1)}
        </div>
        <p className="vtTP">{item.name}</p>
      </Link>
    </div>
  )
}

export default SecondGrid
