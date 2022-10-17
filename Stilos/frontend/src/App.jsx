// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// } esto de aqui arriba es un ejemplo de como utilizar diseños con className y manejos de eventos mediante  botones


import ListRegistro from "./components/miRegistro";
import { Registro } from "./components/formRegistro";
//aqui hay diferencias en la importacion de cosas porque la exportacion la podemos hacer de dos formas
// la primera es ´export´ simplemente exportamos funciones infividual mente y al recibir en otra carpeta esos datos utilizamos {y la funcion que queremos obtener}
// la otra forma es 'export default' la cual exporta todo
//El uso de estas dos formas es opcional pero recomiendo la primera par un mejor control de lo que se exporta
//Aqui tenemos nuestra app que  basicamente es cualquier cosa que nosotros progremos
function App() {
  

  return (
    <div>
      <Registro/>
      <ListRegistro/>
    </div>
  );
}

export default App;
