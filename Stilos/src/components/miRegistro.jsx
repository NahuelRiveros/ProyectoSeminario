import ListadoUser from "./listadoUser";


export default function ListRegistro({miLista,eliCuenta}) {
    
  
    return (
      
      <div>
        {miLista.map((listado) => (<ListadoUser key={listado.id} listado={listado} eliCuenta={eliCuenta}/>))}
      </div>
        )
}