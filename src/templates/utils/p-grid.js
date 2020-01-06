import React from "react"
import { Link } from "gatsby"
import { randomColors, removeSpace } from "./helper"
const Pgrid = ({ item, sublink }) => {
  return (
    <>
      <div>
        <Link
          to={`/${sublink}
/${removeSpace(item.name)}`}
          className="gridItem grow"
          style={{ backgroundColor: `${randomColors()}` }}
        >
          <div className="innerContainer">
            <p className="fTitle">{item.name.slice(0, 1)}</p>
            <h2 className="f2title">{item.name}</h2>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Pgrid
