import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";

const URI = "http://localhost:8000/registro/";


export const RegistroUser = () => {
  const [email, setEmail] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [contrasenaDos, setContrasenaDos] = useState('')
  const navigate = useNavigate();




  const submitRegist = async (e) => {
    e.preventDefault();
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      return alert('Error su correo no es valido');
    } else if (contrasena.length < 7) {
      return alert("La contraseña debe tener almenos 8 caracteres");
    } else if (contrasena !== contrasenaDos) {
      return alert("Las contraseñas no coinciden")
    } else {

      alert("Registrado Correctamente");
      let contHash = await bcrypt.hash(contrasena, 8);
      await axios.post(URI, {
        email: email,
        contrasena: contHash
      });
    }

    // if (contrasena === contrasenaDos){

    //   await axios.post(URI, {
    //     email: email,
    //     contrasena: contrasena
    //   });
    //   navigate("/home");
    // }
  };

  return (
    <div>
      <section className="">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5 bg-Reg">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Registro
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={submitRegist}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control text-light" onChange={(e) => { setEmail(e.target.value) }} value={email}
                            />
                            <label className="form-label">Your Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control text-light"
                              onChange={(e) => { setContrasena(e.target.value) }} value={contrasena}
                            />
                            <label className="form-label" >
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control text-light"
                              onChange={(e) => { setContrasenaDos(e.target.value) }} value={contrasenaDos}
                            />
                            <label className="form-label">
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label className="form-check-label">
                            Acepto todos los términos de servicio{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
