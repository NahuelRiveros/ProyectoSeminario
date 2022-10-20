import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const URI = "http://localhost:8000/registro/";

export const RegistroUsuario = () => {
  //datos personales
  const [nombreUser, setNombreUser] = useState("");
  const [segundoNom, setSegundoNom] = useState("");
  const [apellidoUser, setApellidoUser] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [provincia, setProvincia] = useState("");
  const [telefono, setTelefono] = useState("");
  //datos de usuario
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [test, setTest] = useState("");

  const navigate = useNavigate();
  // Guardar Datos
  const saveUser = async (e) => {
    e.preventDefault();
    await axios.post(URI, { nombreUser: nombreUser, segundoNom: segundoNom,apellidoUser:apellidoUser,localidad:localidad,provincia:provincia,telefono:telefono });
    navigate('/')
  };
  return (
    <div>
      <form onSubmit={saveUser}></form>
    </div>
  );
};
