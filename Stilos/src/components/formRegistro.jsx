import {useState, useContext} from 'react'
import {ContextoPrincipal} from '../context/context';
export  const Registro = () =>{
    
    const [User, setmiUsuario] = useState('');
    const [Pass, setMiPassword] = useState('');
    const value = useContext(ContextoPrincipal);
    console.log(value);
    const handelSubmit = (e)=>{
        e.preventDefault()
        const nuevoUser={
            id,User,Pass
        }
        insertUser(User,Pass)
        setmiUsuario('')
        setMiPassword('')
    }
  return (
    <form onSubmit={handelSubmit}>
        <input type="text" onChange={(e)=> setmiUsuario(e.target.value)}
        value={User} />

        <input type="password" onChange={(e) => setMiPassword(e.target.value)} value={Pass} />
        <button >Agregar</button>
    </form>
  )
}

