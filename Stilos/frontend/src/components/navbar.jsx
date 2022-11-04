<<<<<<< HEAD
import { Link } from "react-router-dom";
import {useEffect, useState, useContext} from 'react'
import {AuthContext} from '../context/authContext'
import axios from "axios";
=======
import { Link , useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react'

>>>>>>> c3385246626c93c7899526dbaffab4da30ba1e20

export const Navbar = () => {
  const URI = "http://localhost:8000/persona/obtDatos/";
  //procesdimiento para mostrar todos los usuarios
<<<<<<< HEAD
// const {authState} = useContext(AuthContext)
=======

  const navigate = useNavigate();

const token = localStorage.getItem('authorization')
console.log(token)

const handleLogout = () => {
  const logoutToken = localStorage.removeItem('authorization')
  navigate("/login")
}

>>>>>>> c3385246626c93c7899526dbaffab4da30ba1e20


const [authState, setAuthState] = useState([])
useEffect(() => {
    axios.get('http://localhost:8000/registro/auth', {headers: { "authorization" : localStorage.getItem("authorization") }}).then((res)=>{
        if (res.data.error){
            return setAuthState(false)
        }
        else {
            return setAuthState(true)
        } 
    })
    
}, [])
console.log(authState)
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-Navbar">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <Link className="navbar-brand mt-2 mt-lg-0" to={"/home"}>
              <img
                src="./assets/react.svg"
                height="25"
                alt="Stilos Logo"
                loading="lazy"
              />
            </Link>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/Damas"}>
                  Damas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Hombres"}>
                  Hombres
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Accesorios"}>
                  Accesorios
                </Link>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center">
            {/* <!-- Icon --> */}
            <Link className="text-reset me-3">
              <i className="fas fa-shopping-cart"></i>
            </Link>

            {/* <!-- Notifications --> */}
            <div className="dropdown">
              <Link
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item">Some news</Link>
                </li>
                <li>
                  <Link className="dropdown-item">Another news</Link>
                </li>
                <li>
                  <Link className="dropdown-item">Something else here</Link>
                </li>
              </ul>
            </div>
            {/* <!-- Avatar --> */}
            <div className="dropdown">
              <Link
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of Link Man"
                  loading="lazy"
                />
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link className="dropdown-item" to={"/miPerfil"}>
                    My profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item">Settings</Link>
                </li>
<<<<<<< HEAD
                {localStorage.getItem("authorization") ? <li>
                  <Link className="dropdown-item" to={"/login"}>
                    Logout
                  </Link>
                </li> : <li>
=======
                {token ? <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </li>: <li>
>>>>>>> c3385246626c93c7899526dbaffab4da30ba1e20
                  <Link className="dropdown-item" to={"/login"}>
                    Login
                  </Link>
                </li>}
                {/* <li>
                  <Link className="dropdown-item" to={"/login"}>
                    Login
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </div>
  );
};
