import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// importaciones del Chacra UI
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputGroup,
    InputRightElement,
    Button,Container,Box
  } from "@chakra-ui/react";


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
  //test
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const navigate = useNavigate();
  // Guardar Datos
  const saveUser = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombreUser: nombreUser,
      segundoNom: segundoNom,
      apellidoUser: apellidoUser,
      localidad: localidad,
      provincia: provincia,
      telefono: telefono,
    });
    navigate("/");
  };
  return (
    <Container maxW='2xl' bg='blue.600' centerContent>
        <Box padding='4' margin='2' bg='blue.300' color='black' maxW='md' >

    <FormControl isRequired>
      <FormLabel>Nombre</FormLabel>
      <Input placeholder="Nombre" />
      <FormLabel>Segundo Nombre</FormLabel>
      <Input placeholder="Segundo Nombre" />
      <FormLabel>Apellido</FormLabel>
      <Input placeholder="Apellido" />
      <FormLabel>Localidad</FormLabel>
      <Input placeholder="Localidad" />
      <FormLabel>Provincia</FormLabel>
      <Input placeholder="Provincia" />
      <FormLabel>Telefono</FormLabel>
      <Input placeholder="Telefono" />
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Ocultar" : "Ver"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
          </Box>
          </Container>
  );
};
