import {useState, useContext} from 'react'
import {ContextoPrincipal} from '../context/context';


//Aqui lo que se intenta hacer es registrar un usuario por medio de un formulario obteniendo sus datos ingreasdor por un imput y capturandolos en un evento en este caso una funcion llamada 'handelSubmit' puede tener cualquier nombre y el formulario requiere el evneto onSubmit el cual ejecuta la funcion del handel
// Aca hacemos importaciones de 2 funciones propias del react que nos va trar funciones para ejecutar este componenete
// useState basicamente una variable que va tomando valor y se setea, basicamente lo que ingresa un usuario por imputs
// useContext es para selecionar el contexto que vamos utilizar mediante los ( 'Aqui le pasamos ese contexto ' )
// como el contexto trae todas las funciones que tenemos, nosotros seleccionamos el que queremos utilizar mendiante {}
//sintaxis const {insertarUsuario} = useContext(ContextoPrincipal);



export  const Registro = () =>{
    
    const [User, setmiUsuario] = useState('');
    const [Pass, setMiPassword] = useState('');
    const {insertarUsuario} = useContext(ContextoPrincipal);
    
    const handelSubmit =  (e)=>{
        e.preventDefault()
        insertarUsuario(User,Pass)
        setmiUsuario('')
        setMiPassword('')
    }
  return (
    <form onSubmit={handelSubmit} >
        <input type="text" onChange={(e)=> setmiUsuario(e.target.value)}
        value={User} className='rounded-lg bg-slate-600 m-2 placeholder-inherit' placeholder='USUARIO'/>

        <input type="password" onChange={(e) => setMiPassword(e.target.value)} value={Pass} className='rounded-lg bg-slate-600 m-2 placeholder-inherit' placeholder='PASSWORD'/>
        <button className='rounded-lg bg-green-600 ' >Agregar</button>
    </form>
  )
}

