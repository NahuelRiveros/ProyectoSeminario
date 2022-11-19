import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
export const PerfilUser = () => {
  const [nombreUno, setNombreUno] = useState("");
  const [nombreDos, setNombreDos] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [provincia, setProvincia] = useState(1);
  const [localidad, setLocalidad] = useState(1);
  const [genero, setGenero] = useState(1);
  const [Registro, setRegistro] = useState([]);
  const [domicilio, setDomicilio] = useState("");
  const [calle, setCalle] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [piso, setPiso] = useState("");
  const [num_Casa, setNum_Casa] = useState("");
  const [barrio, setBarrio] = useState("");
  const [registroDomicilio, setRegistroDomicilio] = useState([]); 
  const URIobtDatos = "http://localhost:8000/persona/obtDatos/";
  const URIcreatePerfil = "http://localhost:8000/persona/createPerfil/";
  const URIdelPersona = "http://localhost:8000/persona/delPersona/";
  const URIdomicilio = 'http://localhost:8000/persona/domicilio/';

  console.log(registroDomicilio)

  const navigate = useNavigate();
  useEffect(() => {
    handleLogin();
    getRegistro();
  }, []);

  const handleLogin = () => {
    const login = localStorage.getItem("authorization");
    if (!login) {
      navigate("/login");
    }
  };

  //procesdimiento para mostrar todos los usuarios

  const getRegistro = async () => {
    const token = localStorage.getItem("authorization");
    const userRegistros = await axios.get(URIobtDatos, {
      headers: { authorization: `${token}` },
    });
    const getUri = URIdomicilio+userRegistros.data.id
    const userDomicilio = await axios.get(getUri, {
      headers: { authorization: `${token}` }
    });
    setRegistroDomicilio(userDomicilio.data)
    setRegistro(userRegistros.data);
  };
 
 
  

    

 

  //Cuando se envia

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(
    //   `nombre: ${nombreUno}, nombredos: ${nombreDos}, localidad: ${localidad}, provincia: ${provincia}, apellido: ${apellido},genero: ${genero}, telefono: ${telefono}`
    // );
    cargarRegistro();
    Swal.fire(
      'Gracias!',
      'Haz clic en ok',
      'success'
    )
    navigate('/')
  };

  // procedimiento para insertar datos del usuario

  const cargarRegistro = async () => {
    const token = localStorage.getItem("authorization");
    await axios.post(
      URIcreatePerfil,
      {
        nombre_uno: nombreUno,
        nombre_dos: nombreDos,
        apellido: apellido,
        fk_localidad: localidad,
        fk_provincia: provincia,
        fk_genero: genero,
        telefono: telefono,
        domicilio: domicilio,
        calle: calle,
        departamento: departamento,
        piso: piso,
        num_Casa: num_Casa,
        barrio: barrio,
      },
      { headers: { authorization: `${token}` } }
    );
  };

  const DeletePersona = async () => {
    const token = localStorage.getItem("authorization");
    const Uridel = URIdelPersona + Registro.id;
    const eliminar = await axios.delete(Uridel, {
      headers: { authorization: `${token}` },
    });
    Swal.fire(
      'Gracias!',
      'Haz clic en ok',
      'success'
    )
    navigate('/')
    
  };

  const generoMostrar = () => {
    if (Registro.fk_genero) {
      if (Registro.fk_genero == 1) {
        return <div> Mujer </div>;
      } else if (Registro.fk_genero == 2) {
        return <div> Hombre </div>;
      } else {
        return <div> Otro </div>;
      }
    }
  };

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <form onSubmit={handleSubmit}>
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block objBodes">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Mi Perfil</h3>

                      <div className="row">
                        <div className="col-sm-6 mb-4">
                          <div className="form-outline">
                            {Registro ? (
                              <input
                                defaultValue={Registro.nombre_uno}
                                required
                                type="text"
                                id="form3Example1m"
                                className="form-control-plaintext"
                                placeholder="Primer Nombre"
                                onChange={(e) => setNombreUno(e.target.value)}
                              />
                            ) : (
                              <input
                                required
                                type="text"
                                placeholder="Primer Nombre"
                                id="form3Example1m"
                                className="form-control-plaintext"
                                onChange={(e) => setNombreUno(e.target.value)}
                              />
                            )}
                          </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                          <div className="form-outline">
                            {Registro ? (
                              <input
                                defaultValue={Registro.nombre_dos}
                                required
                                type="text"
                                id="form3Example1n"
                                placeholder="Segundo Nombre"
                                className="form-control-plaintext"
                                onChange={(e) => setNombreDos(e.target.value)}
                              />
                            ) : (
                              <input
                                required
                                type="text"
                                id="form3Example1n"
                                placeholder="Segundo Nombre"
                                className="form-control-plaintext"
                                onChange={(e) => setNombreDos(e.target.value)}
                              />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6 mb-4">
                          <div className="form-outline">
                            {Registro ? (
                              <input
                                defaultValue={Registro.apellido}
                                required
                                type="text"
                                id="form3Example1m1"
                                placeholder="Apellido"
                                className="form-control-plaintext"
                                onChange={(e) => setApellido(e.target.value)}
                              />
                            ) : (
                              <input
                                required
                                type="text"
                                id="form3Example1m1"
                                placeholder="Apellido"
                                className="form-control-plaintext"
                                onChange={(e) => setApellido(e.target.value)}
                              />
                            )}
                          </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                          <div className="form-outline">
                            {Registro ? (
                              <input
                                defaultValue={Registro.telefono}
                                required
                                type="text"
                                id="form3Example1n1"
                                placeholder="telefono"
                                className="form-control-plaintext"
                                onChange={(e) => setTelefono(e.target.value)}
                              />
                            ) : (
                              <input
                                required
                                type="text"
                                id="form3Example1n1"
                                placeholder="telefono"
                                className="form-control-plaintext"
                                onChange={(e) => setTelefono(e.target.value)}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h6 className="mb-0 me-4">Genero: </h6>

                        {Registro ? (
                          generoMostrar()
                        ) : (
                          <div>
                            <div className="form-check form-check-inline mb-0 me-4">
                              <input
                                required
                                className="form-check-input"
                                type="radio"
                                name="genero"
                                id="femaleGender"
                                onChange={(e) => setGenero(e.target.value)}
                                value={1}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={"femaleGender"}
                              >
                                Femenino
                              </label>
                            </div>

                            <div className="form-check form-check-inline mb-0 me-4">
                              <input
                                required
                                className="form-check-input"
                                type="radio"
                                name="genero"
                                id="maleGender"
                                onChange={(e) => setGenero(e.target.value)}
                                value={2}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={"maleGender"}
                              >
                                Masculino
                              </label>
                            </div>

                            <div className="form-check form-check-inline mb-0">
                              <input
                                required
                                className="form-check-input"
                                type="radio"
                                name="genero"
                                id="otherGender"
                                onChange={(e) => setGenero(e.target.value)}
                                value={3}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={"otherGender"}
                              >
                                Other
                              </label>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="row">
                        <div className="col-sm-6 mb-4">
                          <select
                            required
                            className="select"
                            onChange={(e) => setProvincia(e.target.value)}
                          >
                            <option disabled>Provincia</option>
                            <option value={1}>Formosa</option>
                          </select>
                        </div>
                        <div className="col-sm-6 mb-4">
                          <select
                            required
                            className="select"
                            onChange={(e) => setLocalidad(e.target.value)}
                          >
                            <option disabled>Localidad</option>
                            <option value={0}>Formosa</option>
                            <option value={1}>Pirane</option>
                            <option value={2}>Pilcomayo</option>
                          </select>
                        </div>
                      </div>

                      <h3 className="mb-5 text-uppercase">Domicilio</h3>

                      {/* Datos DOMICILIO */}
                      {/* registroDomicilio.id */}
                      <div className="row">
                        {/* Domicilio */}
                        <div className="col-sm-6 mb-4">
                          <div className="form-outline">
                            {Registro ? (
                              <input
                                defaultValue={registroDomicilio.domicilio}
                                required
                                type="text"
                                placeholder="Domicilio"
                                id="form3Example1m"
                                className="form-control-plaintext"
                                onChange={(e) => setDomicilio(e.target.value)}
                              />
                            ) : (
                              <input
                                required
                                type="text"
                                placeholder="Domicilio"
                                id="form3Example1m"
                                className="form-control-plaintext"
                                onChange={(e) => setDomicilio(e.target.value)}
                              />
                            )}
                          </div>
                        </div>
                        {/* calle */}
                        <div className="col-sm-6 mb-4">
                          <div className="form-outline">
                            {Registro ? (
                              <input
                                defaultValue={registroDomicilio.calle}
                                required
                                type="text"
                                placeholder="calle"
                                id="form3Example1n"
                                className="form-control-plaintext"
                                onChange={(e) => setCalle(e.target.value)}
                              />
                            ) : (
                              <input
                                required
                                type="text"
                                id="form3Example1n"
                                placeholder="calle"
                                className="form-control-plaintext"
                                onChange={(e) => setCalle(e.target.value)}
                              />
                            )}
                          </div>
                        </div>

                        {/* departamento */}
                        <div className="col-sm-6 mb-4">
                          <div className="form-outline">
                            {Registro ? (
                              <input
                                defaultValue={registroDomicilio.departamento}
                                required
                                type="text"
                                placeholder="Departamento"
                                id="form3Example1n"
                                className="form-control-plaintext"
                                onChange={(e) =>
                                  setDepartamento(e.target.value)
                                }
                              />
                            ) : (
                              <input
                                required
                                type="text"
                                id="form3Example1n"
                                placeholder="Departamento"
                                className="form-control-plaintext"
                                onChange={(e) =>
                                  setDepartamento(e.target.value)
                                }
                              />
                            )}
                          </div>
                        </div>

                        {/* Piso */}
                        <div className="col-sm-6 mb-4">
                          <div className="form-outline">
                            {Registro ? (
                              <input
                                defaultValue={registroDomicilio.piso}
                                required
                                type="text"
                                placeholder="Piso"
                                id="form3Example1n"
                                className="form-control-plaintext"
                                onChange={(e) => setPiso(e.target.value)}
                              />
                            ) : (
                              <input
                                required
                                type="text"
                                id="form3Example1n"
                                placeholder="Piso"
                                className="form-control-plaintext"
                                onChange={(e) => setPiso(e.target.value)}
                              />
                            )}
                          </div>
                        </div>

                        {/* Numero de casa */}
                        <div className="col-sm-6 mb-4">
                          <div className="form-outline">
                            {Registro ? (
                              <input
                                defaultValue={registroDomicilio.num_Casa}
                                required
                                type="text"
                                placeholder="Número Casa"
                                id="form3Example1n"
                                className="form-control-plaintext"
                                onChange={(e) => setNum_Casa(e.target.value)}
                              />
                            ) : (
                              <input
                                required
                                type="text"
                                id="form3Example1n"
                                placeholder="Número Casa"
                                className="form-control-plaintext"
                                onChange={(e) => setNum_Casa(e.target.value)}
                              />
                            )}
                          </div>
                        </div>

                        {/* Barrio */}
                        <div className="col-sm-6 mb-4">
                          <div className="form-outline">
                            {Registro ? (
                              <input
                                defaultValue={registroDomicilio.barrio}
                                required
                                placeholder="Barrio"
                                type="text"
                                id="form3Example1n"
                                className="form-control-plaintext"
                                onChange={(e) => setBarrio(e.target.value)}
                              />
                            ) : (
                              <input
                                required
                                type="text"
                                id="form3Example1n"
                                placeholder="Barrio"
                                className="form-control-plaintext"
                                onChange={(e) => setBarrio(e.target.value)}
                              />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button
                          type="submit"
                          className="btn btn-warning btn-lg ms-2"
                        >
                          Guardar
                        </button>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button
                          type="button"
                          className="btn btn-warning btn-lg ms-2"
                          onClick={DeletePersona}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
