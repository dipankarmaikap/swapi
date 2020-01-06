import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { randomColors } from "../templates/utils/helper"
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `${randomColors()}`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        className="logo"
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
      <div className="nav itemGrid">
        <Link className="navLinks" to="/films">
          Films
        </Link>
        <Link className="navLinks" to="/planets">
          Planets
        </Link>
        <Link className="navLinks" to="/species">
          Species
        </Link>
        <Link className="navLinks" to="/characters">
          characters
        </Link>
        <Link className="navLinks" to="/starships">
          starships
        </Link>
        <Link className="navLinks" to="/vehicles">
          Vehicles
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
