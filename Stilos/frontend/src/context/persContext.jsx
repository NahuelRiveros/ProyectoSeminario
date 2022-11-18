import { createContext, useContext , useState} from "react";

export const PersContext = createContext();

export const tipoUsers = ()=>{
    const context = useContext(PersContext);
    if(!context){
        throw new Error('NO validado')
    }
    return context;
}

export function PersProvider({children}) {
    const [tipoUser, setTipoUser] = useState({}) 
    return (
        <PersContext.Provider value={{tipoUser, setTipoUser}}>{children}</PersContext.Provider>
    )

}