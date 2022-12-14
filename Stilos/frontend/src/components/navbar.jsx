import { Link , useNavigate } from "react-router-dom";
import {useEffect, useState,} from 'react'
import axios from "axios";
import { useAuth } from "../context/authContext";



export const Navbar = () => {
  const URI = "http://localhost:8000/persona/obtDatos/";
  //procesdimiento para mostrar todos los usuarios

  const navigate = useNavigate();

// Provider
const {user, setUser}=useAuth()
// const token = localStorage.getItem('authorization')

const handleLogout = () => {
  const logoutToken = localStorage.removeItem('authorization')
  setUser({status:false})
  navigate('/login')
  
}
// otra forma de lograr el logount

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
            <Link className="navbar-brand mt-2 mt-lg-0" to={"/"}>
              <img
                src="../src/assets/stilo1.jpg"
                width="40"
                alt="Stilos Logo"
                loading="lazy"
              />
            </Link>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/producto/mujer"}>
                  Damas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/producto/hombre"}>
                  Hombres
                </Link>
              </li>  
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center">
            {/* <!-- Carrito --> */}
            
            { user.status === true &&
            <Link className="text-reset me-3" to={'/producto/compra'}>
              <i className="fas fa-shopping-cart"></i>
            </Link>
            }

            {/* <!-- Notifications --> */}
            {
              user.rango > 1 &&
              <Link
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                aria-expanded="false"
                to={'admin/reportes'}
              >
                <i className="fas fa-dolly-flatbed"></i>
                
              </Link>
            }
              
            {/* SUPER ADMIN */}
            {
              user.rango === 3 &&
              <Link
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                aria-expanded="false"
                to={'/superAdmin/Panel'}
              >
                <i className="fas fa-users-cog"></i>
                
              </Link>
            }
              
            {/* SUPER ADMIN */}
            

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
                
                {user.status === true ? <li>
                  <button className="dropdown-item" type="button" onClick={handleLogout}>
                    Logout
                  </button>
                </li> : <li>
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