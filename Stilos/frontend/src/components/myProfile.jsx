import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export  const PerfilUser = ()=> {
  const [users, setRegistro] = useState([]);
  const URI= "a"
  useEffect(() => {
    getRegistro();
  }, []);


  //procesdimiento para mostrar todos los usuarios

  const getRegistro = async () => {
    const res = await axios.get(URI , acces);
    setRegistro(res.data);
  };


  // procedimiento para eliminar usuarios

  const cargarRegistro = async (id) => {
    axios.delete(`${URI}${id}`);
    getRegistro();
  };
  return (
    <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block objBodes">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo" className="img-fluid"
                />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Mi Perfil</h3>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                      <label className="form-label">Primer Nombre</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                      <label className="form-label" >Segundo Nombre</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                      <label className="form-label">Apellido</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                      <label className="form-label" >Telefono</label>
                    </div>
                  </div>
                </div>

                

                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 className="mb-0 me-4">Genero: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="1" />
                    <label className="form-check-label" for="femaleGender">Femenino</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="2" />
                    <label className="form-check-label" for="maleGender">Masculino</label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="3" />
                    <label className="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">Provincia</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                  <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">Localidad</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                </div>


                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg">Reset all</button>
                  <button type="button" className="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





    );
  }
  // procedimientos para crear personas
  
  // ver mas adelante
  // <div className="container">
  //   <div className="row-auto">
  //     <div className="col-auto">
  //       <table className="p-2 m-2">
  //         <tr className="">
  //           <th>id</th>
  //           <th>Email</th>
  //           <th>actions</th>
  //         </tr>
  //       </table>
  //       <tbody>
  //       { users.map ( (user) => (
  //           <tr key={user.id}>
  //             <td>{user.email}</td>
  //             {/* <Link to={"/"}>Editar</Link>  */}
  //             <button
  //               onClick={() => {
  //                 cargarRegistro(user.id);
  //               }}
  //             > hola</button>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </div>
  //   </div>
  // </div>