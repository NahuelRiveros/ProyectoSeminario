import {ContextoPrincipal} from "../context/context";
import {useContext} from 'react'

// Aqui estamos obteniendo mediante listadoUser({listado}=> este funciona como un props)
// obtenemos el array ya mapeado y podemos mostrar esos datos en pantalla
// del useContext traemos la funciones que se va ejecutar con el boton el cual identifica el id del usuario y lo elimina del array
function ListadoUser({ listado }) {
  const {eliCuenta} = useContext(ContextoPrincipal);
  return (
    
      <div className="bg-gray-800 text-white p-2 rounded-md">
        <h1 className="text-xl font-bold capitalize">{listado.id}</h1>
        <h3> {listado.User}</h3>
        <h3> {listado.Pass}</h3>
        <button onClick={() => eliCuenta(listado.id)} className="bg-red-600 rounded-lg">Eliminar</button>
      </div>

  );
}

export default ListadoUser;
