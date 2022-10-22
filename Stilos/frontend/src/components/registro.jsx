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
  Button,
  Container,
  Box,
  ButtonGroup,
} from "@chakra-ui/react";

const URI = "http://localhost:8000/registro/";

export const RegistroUsuario = () => {
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
  const [contrasenaDos, setContrasenaDos] = useState("");
  
  //test
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const navigate = useNavigate();
  // Guardar Datos

  const RegistrarUser = async (e) => {
    e.preventDefault();
    if (contrasena === contrasenaDos){

      await axios.post(URI, {
        email: email,
        contrasena: contrasena
      });
      navigate("/home");
    }
  };
  return (
    <Container maxW="2xl" centerContent>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        py={12}
        bgImage="url('https://media.istockphoto.com/photos/orange-cement-background-picture-id1097244084?k=20&m=1097244084&s=612x612&w=0&h=v_Q_DKV6W_o8w8qrhG9RzN43z0Js7jXhqBFQ8-qfZT4=')"
        bgPosition="center"
        bgRepeat="no-repeat"
        mb={2}
        padding='2'
        margin='2'
      >
        <form onSubmit={RegistrarUser}>

        
        <FormControl>
          {/* EMAIL */}
          <FormLabel>Email</FormLabel>
          <Input placeholder="email"  onChange={(e)=>{setEmail(e.target.value)}} value={email} />
          {/* Contraseñas */}
          <FormLabel>Contraseña</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Contraseña" onChange={(e)=>{setContrasena(e.target.value)}}
              value={contrasena}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Ocultar" : "Ver"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {/* repetir contraseña */}
          <FormLabel>Repetir Contraseña</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type="password"
              placeholder="Repetir Contraseña" onChange={(e)=>{setContrasenaDos(e.target.value)}} value={contrasenaDos}
            />
          </InputGroup>

          {/* <FormLabel>Localidad</FormLabel>
      <Input placeholder="Localidad" />
      <FormLabel>Provincia</FormLabel>
      <Input placeholder="Provincia" />
      <FormLabel>Telefono</FormLabel>
      <Input placeholder="Telefono" /> */}
        <Button colorScheme='teal' bg='green.900' variant='solid' padding='2' margin='2' type={'submit'} >Registrar</Button>
        </FormControl>
        </form>

      </Box>
    </Container>
  );
};
