// import ListRegistro from "./components/miRegistro";
// import { Registro } from "./components/formRegistro";
//aqui hay diferencias en la importacion de cosas porque la exportacion la podemos hacer de dos formas
// la primera es ´export´ simplemente exportamos funciones infividual mente y al recibir en otra carpeta esos datos utilizamos {y la funcion que queremos obtener}
// la otra forma es 'export default' la cual exporta todo
//El uso de estas dos formas es opcional pero recomiendo la primera par un mejor control de lo que se exporta
//Aqui tenemos nuestra app que  basicamente es cualquier cosa que nosotros progremos
import { CompoShowRegis } from "./components/usuariosReg";
import {Navbar} from './components/navbar';
import {RegistroUsuario} from './components/registro'
import {Footer} from './components/footer';
import {Carruserl} from './components/carruserl';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      hola mundo
      <BrowserRouter>
        <Navbar>
        <Routes>
          {/* <Route path="/Home" element={<Navbar/>}/> */}
          <Route path="/registrarse" element={<RegistroUsuario />}/>
          <Route path="/Homea" element={<CompoShowRegis />}/>
           
          
        </Routes>

        </Navbar>
          <Carruserl></Carruserl>
        <Footer>
        </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
