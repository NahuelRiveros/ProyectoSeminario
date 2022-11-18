import DataTable from "react-data-table-component";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Await } from "react-router-dom";
// CONTEXT
import { tipoUsers } from "../context/persContext";



export const SuperAdmPanel = () => {

  //COntext HOOCKs
  const {tipoUser, setTipoUser} = tipoUsers();
  // HOOCKs
  const [buscador, setBuscador] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [listaUsers, setListaUsers] = useState([]);
  const URI = "http://localhost:8000/superUser/viewUsers/";
  const user = [];
  
  const peticionGet = async () => {
    await axios
      .get(URI)
      .then((response) => {
        setUsuarios(response.data);
        setListaUsers(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  for (var i = 0; i < usuarios.length; i++) {
    const element = usuarios[i];
    if (element.fk_permiso_usuario < 3) {
      user.push(element);
    }
  }

  useEffect(() => {
    peticionGet();
  }, []);

  const handelBuscador = (e) => {
    setBuscador(e);
    filtrarElemento(e);
  };

  const filtrarElemento = (termBusqueda) => {
    var search = listaUsers.filter((items) => {
      if (
        items.email
          .toString()
          .toLowerCase()
          .includes(termBusqueda.toLowerCase())
      ) {
        return items;
      }
    });
    setUsuarios(search);
  };

  const addPermiso = async (e) => {
    const URIrangos= "http://localhost:8000/superUser/roles/" + e
    await axios.put(URIrangos,{fk_permiso_usuario : 2})
    peticionGet();
    console.log(URIrangos);
    
    // 
  };
  const removePermiso = async (e) => {
    const URIrangos= "http://localhost:8000/superUser/roles/" + e
    await axios.put(URIrangos,{fk_permiso_usuario : 1})
    console.log(URIrangos);
    peticionGet();
    
    // {"fk_permiso_usuario" : 1}
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8-sm">
          <div className="table-responsive">
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control mt-2"
                id="advanced-search-input"
                placeholder="Buscador"
                onChange={(e) => {
                  handelBuscador(e.target.value);
                }}
              />
              <button
                className="btn btn-primary mt-2"
                id="advanced-search-button"
                type="button"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-sm table-bordered">
                <thead>
                  <tr>
                    <th className="text-center">Email</th>
                    <th className="text-center">Rango</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {user &&
                    user.map((usuario) => (
                      <tr key={usuario.id}>
                        <td className="text-center">{usuario.email}</td>
                        <td>
                          {usuario.fk_permiso_usuario === 1
                            ? "Usuario"
                            : "Usuario Admin"}
                        </td>
                        <td className="text-center">
                          {usuario.fk_permiso_usuario === 1 ? (
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={(e) => {
                                addPermiso(usuario.id);
                              }}
                            >
                              Dar
                              <i className="fas fa-angle-double-up p-1"></i>
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              onClick={(e)=>{removePermiso(usuario.id)}}
                            >
                              remover
                              <i className="fas fa-angle-double-down p-1"></i>
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};
