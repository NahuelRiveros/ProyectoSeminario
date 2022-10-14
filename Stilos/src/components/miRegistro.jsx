import ListadoUser from "./listadoUser";
import {useContext} from 'react';
import {ContextoPrincipal} from '../context/context';
//Aqui exportamos el array creado en la carpeta data
// Aqui vasicamente mapeamos el array creado anterior mente y cada elemento tiene el nombre de listado lo mandamos por medio de parametos a ListadoUser quien va a mortrar en pantalla a todos los usuarios
// usamos las funciones ya creadas por react useContext y solamente le pedimos la funcion que contiene el array
export default function ListRegistro() {
    const {miLista} = useContext(ContextoPrincipal)
    // console.log(miLista)
    return (
      
      <div>
        {miLista.map((listado) => (<ListadoUser key={listado.id} listado={listado}  />))}
      </div>
        )
}