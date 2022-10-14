import {ContextoPrincipal} from "../context/context";
import {useContext} from 'react'
function ListadoUser({ listado, eliCuenta }) {
  
  return (
    
      <div>
        <h1>{listado.id}</h1>
        <h3> {listado.User}</h3>
        <h3> {listado.Pass}</h3>
        <button onClick={() => eliCuenta(listado.id)}>Eliminar</button>
      </div>

  );
}

export default ListadoUser;
