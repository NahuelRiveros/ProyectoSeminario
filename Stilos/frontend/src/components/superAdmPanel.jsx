import DataTable from "react-data-table-component";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Await } from "react-router-dom";
export const SuperAdmPanel = () => {
  const [buscador, setBuscador] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [listaUsers, setListaUsers] = useState([]);
  const URI = "http://localhost:8000/admins/viewUsers/";

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

  useEffect(() => {
    peticionGet();
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
  const paginationOptions = {
    rowsPerPageText: "Filas por Pagina",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "todos",
  };

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
                  <th className="text-center">Email</th>
                  <th className="text-center">Action</th>
                </thead>
                <tbody>
                  {usuarios &&
                    usuarios.map((usuario) => (
                      <tr key={usuario.id}>
                        <td className="text-center">{usuario.email}</td>
                        <td className="text-center">
                          <button className="btn btn-outline-success m-1 btn-sm">
                            Dar Rango <i className="fas fa-angle-double-up"></i>
                          </button>
                          <button className="btn btn-outline-danger m-1 btn-sm">
                            Quitar Rango{" "}
                            <i className="fas fa-angle-double-down"></i>
                          </button>
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
