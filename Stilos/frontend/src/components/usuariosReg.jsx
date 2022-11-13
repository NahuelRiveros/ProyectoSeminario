import axios from "axios";
import { useState, useEffect } from "react";
import {jsPDF} from "jsPDF";
import { Await, Link } from "react-router-dom";
// HOOCKs useState y useEffect
const URI = "http://localhost:8000/registro/";

export const CompoShowRegis = () => {
  const [users, setRegistro] = useState([]);

  // useEffect(() => {
  //   getRegistro();
  // }, []);
  const printPdf = () =>{
    const doc = new jsPDF();

    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
  }

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
      <div>
        {/* <!-- Carousel wrapper --> */}
<div id="carouselMaterialStyle" className="carousel slide carousel-fade" data-mdb-ride="carousel">
  {/* <!-- Indicators --> */}
  <div className="carousel-indicators">
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" className="active" aria-current="true"
      aria-label="Slide 1"></button>
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
  </div>

  {/* <!-- Inner --> */}
  <div className="carousel-inner rounded-5 shadow-4-strong">
    {/* <!-- Single item --> */}
    <div className="carousel-item active">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(3).webp" className="d-block w-100"
        alt="Sunset Over the City" />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(2).webp" className="d-block w-100"
        alt="Canyon at Nigh" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(1).webp" className="d-block w-100"
        alt="Cliff Above a Stormy Sea" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  {/* <!-- Inner --> */}

  {/* <!-- Controls --> */}
  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* <!-- Carousel wrapper --> */}
    </div>
    <div>
      <button onClick={printPdf}>
        PDF
      </button>
    </div>


    {/* termina */}
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
                <Link to={"/"}>Editar</Link> 
                 <button
                  onClick={() => {
                    deletRegistro(user.id);
                  }}
                ></button>
              </tr>
            ))}
          </div>
        </table>
      </div>
    </div> */}