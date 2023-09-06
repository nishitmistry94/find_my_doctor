import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Navbar.css"
function Navbar() {
    const button_onclick = () => {
        const nav_icon = document.getElementById("nav-icon")
        nav_icon.classList.toggle("open")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo}></img>
                    </Link>
                    <div className='d-flex'>
                        <div className="navbar-toggler" onClick={button_onclick} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" id="nav-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Link</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled">Disabled</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar