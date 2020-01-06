import React from "react"
import { Link } from "gatsby"
import { randomColors, removeSpace } from "./helper"
const Grid = ({ item }) => {
  return (
    <>
      <div
        className={`gridItem grow`}
        style={{ backgroundColor: `${randomColors()}` }}
      >
        <Link to={`/films/${removeSpace(item.title)}`}>
          <div className="innerContainer">
            <p className="fTitle">{item.title.slice(0, 1)}</p>
            <h2 className="f2title">{item.title}</h2>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Grid
