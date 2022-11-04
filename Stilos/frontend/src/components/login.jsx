import axios from "axios";
import { useState, useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/registro/unUser/"


export const LoginUsuario = () => {
  //datos personales
  // const [nombreUser, setNombreUser] = useState("");
  // const [segundoNom, setSegundoNom] = useState("");
  // const [apellidoUser, setApellidoUser] = useState("");
  // const [localidad, setLocalidad] = useState("");
  // const [provincia, setProvincia] = useState("");
  // const [telefono, setTelefono] = useState("");
  //datos de usuario
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  //test
  //   const [show, setShow] = useState(false);
  //   const handleClick = () => setShow(!show);
  // <Button h="1.75rem" size="sm" onClick={handleClick}>
  //                 {show ? "Ocultar" : "Ver"}
  //               </Button>
  const navigate = useNavigate();
  // Guardar Datos
  const eventoReg = () => {
    navigate("/registro")
  }
  const loginAcces = async (e) => {
    e.preventDefault();
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      return Swal.fire({
        title: 'Error!',
        text: 'El correo no es valido',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    } else if (contrasena.length < 7) {
      return Swal.fire({
        title: 'Error!',
        text: 'La contraseña debe tener almenos 8 caracteres',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    } else {

      //se cambio a post para poder pasar la contraseña. El metodo GET es incapaz de enviar un body, por lo cual "req.body.contrasena" no existe
      await axios.post(URI, { email: email, contrasena: contrasena })
        .then((res) => {
          if (res.data.error) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${res.data.error}`
            })
            alert(res.data.error)
          } 
          else {
            localStorage.setItem("authorization", res.data.Token)
            Swal.fire(
              'Logeado!',
              'Haz clic en ok',
              'success'
            )
            navigate('/')
            
          }
        })
    }
  }


  return (
    <div className="bg-Body">
      <section className="h-100 gradient-form">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                          style={{ width: "185px" }}
                        />

                        <h4 className="mt-1 mb-5 pb-1">
                          Stilo`s Web
                        </h4>
                      </div>

                      <form onSubmit={loginAcces}>
                        <p>Por favor, ingrese a su cuenta</p>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Direccion de correo electrónico"
                            onChange={(e) => { setEmail(e.target.value) }} value={email}
                          />
                          <label className="form-label" >
                            Email
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="**********"
                            onChange={(e) => { setContrasena(e.target.value) }} value={contrasena}
                          />
                          <label className="form-label">
                            Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="submit"
                          >
                            Log in
                          </button>
                          <Link className="text-muted" to={"#!"}>
                            ¿Se te olvidó tu contraseña?
                          </Link>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">¿No tienes una cuenta?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={eventoReg}
                          >
                            Crear Nuevo
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">
                        We are more than just Link company
                      </h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
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
