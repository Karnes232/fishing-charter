import PropTypes from "prop-types"
import React from "react"

import Logo from "./Logo"
import Nav from "./Nav"

function Header({ siteTitle }) {
  console.log(siteTitle)
  return (
    <nav className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className='flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto'>
        <Logo />

        <Nav />
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
