import DataTable from "react-data-table-component";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Await } from "react-router-dom";
export const SuperAdmPanel = () => {

  const [buscador, setBuscador] = useState('')
  const [usuarios, setUsuarios] = useState([])
  const [listaUsers, setListaUsers] = useState([])
  const URI = 'http://localhost:8000/admins/viewUsers/'


const peticionGet = async()=> {
  await axios.get(URI).then((response)=>{
    setUsuarios(response.data)
    setListaUsers(response.data)
    console.log(response.data)
  }).catch (
    (error) => {
      console.log(error)
    }
  )

}

useEffect(() => {
  peticionGet()
}, []);



  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Nombre",
      selector: "nombre_uno",
      sortable: true,
    },
    {
      name: "Apellido",
      selector: "apellido",
      sortable: true,
    },
  ];
  const paginationOptions ={
    rowsPerPageText: 'Filas por Pagina',
    rangeSeparatorText : 'de',
    selectAllRowsItem : true,
    selectAllRowsItemText : 'todos'
  }
  
  const handelBuscador = (e)=>{
    setBuscador(e)
    filtrarElemento(e);
  }

  const filtrarElemento = (termBusqueda)=>{
    var search = listaUsers.filter(items=>{
      if(items.email.toString().toLowerCase().includes(termBusqueda.toLowerCase())){
        return items;
      }
    });
    setUsuarios(search)
  }

  return (
    <div className="table-responsive">
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          id="advanced-search-input"
          placeholder="Buscador"
          onChange={(e)=>{handelBuscador(e.target.value)}}
        />
        <button
          className="btn btn-primary"
          id="advanced-search-button"
          type="button"
        >
          <i className="fa fa-search"></i>
        </button>
        </div>
        <div className="table-responsive">
          <table className="table table-sm table-bordered">

            <thead>
              <th>Id</th>
              <th>Email</th>
              <th>Action</th>
            </thead>
            <tbody>
              {usuarios && usuarios.map((usuario)=>
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.email}</td>
                <td> <button className="btn">Otorgar Rango</button> <button>Quitar Rango</button></td>
              </tr>
              
              
              )}
            </tbody>
          </table>

        </div>

      
    </div>
  );
};
