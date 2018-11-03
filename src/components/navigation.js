import React from 'react'
import { Link } from 'gatsby'
import './layout.css'
import './googleFonts.css'
import './bootstrap.min.css'
import './clean-blog.css'






const Navigation = (data) => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
       
        {/* <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item last-li">
              <Link className="nav-link" to="/">Home</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )


}

export default Navigation
