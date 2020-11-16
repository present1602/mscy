import React from "react"
import "./TopNav.css"


const TopNav = () => (
  <nav className="navbar navbar-sticky">
    <ul className="navbar--link">
      <a href="#welcomeBox"><li className="navbar--link-item">Home</li></a>
      <a href="#skillsWrap"><li className="navbar--link-item">Skills</li></a>
      {/* <a href="#introductionWrap"><li className="navbar--link-item">Introduction</li></a> */}
      <a href="#portfolioWrap"><li className="navbar--link-item">Portfolio</li></a>
    </ul>
  </nav>
)
export default TopNav;