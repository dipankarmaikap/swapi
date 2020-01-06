import React from "react"
import { randomColors, removeSpace } from "../utils/helper"
import { Link } from "gatsby"
const Grid = ({ item, sublink }) => {
  return (
    <div className="vt grow " style={{ backgroundColor: `${randomColors()}` }}>
      <Link to={`/${sublink}/${removeSpace(item.name)}`}>
        <h6 className="vtT">{item.name.slice(0, 2)}</h6>
        <h3>{item.name}</h3>
      </Link>
    </div>
  )
}

export default Grid
