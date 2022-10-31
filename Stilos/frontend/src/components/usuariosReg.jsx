import axios from "axios";
import { useState, useEffect } from "react";
import { Await, Link } from "react-router-dom";
// HOOCKs useState y useEffect
const URI = "http://localhost:8000/registro/";

export const CompoShowRegis = () => {
  const [users, setRegistro] = useState([]);

  // useEffect(() => {
  //   getRegistro();
  // }, []);


  //procesdimiento para mostrar todos los usuarios

  // const getRegistro = async () => {
  //   const res = await axios.get(URI);
  //   setRegistro(res.data);
  // };


  // procedimiento para eliminar usuarios

  // const deletRegistro = async (id) => {
  //   axios.delete(`${URI}${id}`);
  //   getRegistro();
  // };
  return (
    <div>
      HOME
    </div>
    
  );
};
// procedimientos para crear usuarios
{/* <div className="container">
      <div className="row-auto">
        <table className="col-auto">
          <table>
            <tr>
              <th>Titulo</th>
              <th>content</th>
              <th>actions</th>
            </tr>
          </table>
          <div>
          { users.map ( (user) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                {/* <Link to={"/"}>Editar</Link>  */}
    //             <button
    //               onClick={() => {
    //                 deletRegistro(user.id);
    //               }}
    //             ></button>
    //           </tr>
    //         ))}
    //       </div>
    //     </table>
    //   </div>
    // </div> */}