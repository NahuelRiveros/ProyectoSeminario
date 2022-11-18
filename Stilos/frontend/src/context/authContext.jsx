import { createContext, useContext , useState} from "react";

export const AuthContext = createContext();

export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('NO validado')
    }
    return context;
}

export function UserProvider({children}) {
    const [user, setUser] = useState({
        id : '', 
        rango : '',
        status : false,
        
    }) 
    return (
        <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
    )

}