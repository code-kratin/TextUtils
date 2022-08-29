import React from 'react'    //rfc
import PropTypes from 'prop-types' //impt 
import {Link} from "react-router-dom"; 

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}>    {/* to make it javascript {}, to make it a string `` and by $ you can use variable*/}
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">
      <img src="https://th.bing.com/th/id/R.84fa65853d2bdf16519a34e63f4937ae?rik=Cyx24hIRy1F3%2fw&riu=http%3a%2f%2fmedia.idownloadblog.com%2fwp-content%2fuploads%2f2016%2f01%2fappster-logo.png&ehk=YH0%2fSBCYGbAScx8HhHyx4CLhGZ%2bFLPe9Pq8qplCTR88%3d&risl=&pid=ImgRaw&r=0" alt="" width="30" height="24" className="d-inline-block align-text-center mx-2" />
      {props.title}
    </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.navtext1}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  {props.navtext2}
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Tools
                </a>
              </li>
            </ul>
          </div>
            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                {/* <label className="nav-item form-check-label" htmlFor="flexSwitchCheckDefault">
                </label> */}
                <li className="nav-item dropdown list-unstyled">
                <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dark Mode
                </div>
                <ul className="dropdown-menu">
                    <li><div className="dropdown-item" onClick={(e) => props.colorTheme("green")} >Green</div></li>
                    <li><div className="dropdown-item" onClick={(e) => props.colorTheme("blue")} >Blue</div></li>
                    <li><div className="dropdown-item" onClick={(e) => props.colorTheme("purple")} >Purple</div></li>
                    {/* <li><div className="dropdown-item" onClick={props.colorTheme} >Purple</div></li>  WONT WORK as By using parentheses you are executing the function and passing the result as the thing to be executed. You are basically saying execute colorTheme() and onClick do the result of colorTheme()*/}
                </ul>
                </li>
            </div>
        </div>
      </nav>
  )
}
Navbar.prototype={
    title: PropTypes.string,    //if title: PropTypes.string.isRequired then there will be need to send props or it will give error, but if you have default itll work as by default itll get the prop
    navtext1: PropTypes.string
}
Navbar.defaultProps={
    title: "Title",
    navtext1: "Navtext here"
}