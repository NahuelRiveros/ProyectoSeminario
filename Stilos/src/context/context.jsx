import {createContext, useState, useEffect} from 'react'
import {tasks} from '../data/TaskList';
export const ContextoPrincipal= createContext()
export function ContextProvider(props) {
  const [miLista, setLista] = useState([]);
  useEffect(() => {
    setLista(tasks);
  }, []);
  function insertarUsuario(User, Pass) {
    setLista([...miLista, { 
      id: miLista.length, 
      User: User, 
      Pass: Pass }]);
  }

  function eliCuenta(userId){
    setLista(miLista.filter(regUser => regUser.id !== userId ))
  }
  return (
    <ContextoPrincipal.Provider value={{miLista,insertarUsuario,eliCuenta}}>
      {props.children}
    </ContextoPrincipal.Provider>

  );
}


