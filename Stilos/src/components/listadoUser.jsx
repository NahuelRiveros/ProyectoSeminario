import {ContextoPrincipal} from "../context/context";
import {useContext} from 'react'

// Aqui estamos obteniendo mediante listadoUser({listado}=> este funciona como un props)
// obtenemos el array ya mapeado y podemos mostrar esos datos en pantalla
// del useContext traemos la funciones que se va ejecutar con el boton el cual identifica el id del usuario y lo elimina del array
function ListadoUser({ listado }) {
  const {eliCuenta} = useContext(ContextoPrincipal);
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
