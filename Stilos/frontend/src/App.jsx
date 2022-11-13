// import ListRegistro from "./components/miRegistro";
// import { Registro } from "./components/formRegistro";
//aqui hay diferencias en la importacion de cosas porque la exportacion la podemos hacer de dos formas
// la primera es ´export´ simplemente exportamos funciones infividual mente y al recibir en otra carpeta esos datos utilizamos {y la funcion que queremos obtener}
// la otra forma es 'export default' la cual exporta todo
//El uso de estas dos formas es opcional pero recomiendo la primera par un mejor control de lo que se exporta
//Aqui tenemos nuestra app que  basicamente es cualquier cosa que nosotros progremos
import { CompoShowRegis } from "./components/usuariosReg";
import {Navbar} from './components/navbar';
import {LoginUsuario} from './components/login'
import {Footer} from './components/footer';
import {Carruserl} from './components/carruserl';
import { ReportesAdmin } from "./components/repotesAdmin";
import {RegistroUser} from './components/registro';
import {PerfilUser} from './components/myProfile'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useAuth} from './context/authContext'
import {useState, useEffect, useContext} from "react";
import axios  from "axios";


function App() {

  const {user, setUser} = useAuth()
  
  useEffect(() => {
    // Perfil logeado con su token 
    // Peticion al backend
    axios.get('http://localhost:8000/registro/auth', {headers: { "authorization" : localStorage.getItem("authorization") }}).then((res)=>{
      if (res.data.error){
        setUser({...user,status:false})
      }
      else {
        setUser({
          id:res.data.id,
          email:res.data.email,
          status: true
        })
        
      } 
    })
    
  }, [])

  return (
    <div>
      <BrowserRouter>
        {/* cambiar el navbar segun tipo de usuario */}
        <Navbar>
        </Navbar>
        
        <Routes>
          
          <Route path="/registro" element={<RegistroUser/>}/>
          <Route path="/login" element={<LoginUsuario />}/>
          <Route path="/Admin" element={<CompoShowRegis />}/>
          <Route path="/MiPerfil" element={<PerfilUser/>}/>
          <Route path="/admin/reportes" element={<ReportesAdmin/>}/>
        </Routes>
        

        <Footer>
        </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
