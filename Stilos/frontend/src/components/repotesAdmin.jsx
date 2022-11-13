import axios from "axios";
import { useState, useEffect } from "react";
import {jsPDF} from "jsPDF";

export const ReportesAdmin = () => {
  const [hombre,setHombre] = useState(0)
  const [mujer,setMujer] = useState(0)
  const [otro,setOtro] = useState(0)

  const URI= "http://localhost:8000/admins/personas/"


  const InformeGeneroUsers = async (e) => {
    getCant()
    //printPDF()
  }

  const getCant = async (e) => {
    var hom, muj, otr = 0
    const AllPersons = await axios.get(URI);
    const usuarios = (AllPersons.data)
    console.log(usuarios[1])
    for (var i = 0; i < usuarios.lenght; i++) {
      console.log(usuarios[i])
      if (i = 0, usuarios[i].fk_genero == 1) {
        hom += 1
      } else if (usuarios[i].fk_genero == 2) {
        muj += 1
      } else if (usuarios[i].fk_genero == 3) {
        otr += 1
      }
    }
    console.log("hombres: ", hom, " mujeres: ", muj, " otros: ", otr)
  };

  const printPDF = () =>{
    const doc = new jsPDF();

    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
  }
    
  return (
    <div>
      <main>
        <div className="container pt-4">
          <section>
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div className="align-self-center">
                        <i className="bi bi-file-earmark-plus-fill text-info fa-3x"></i>
                      </div>
                      <div className="text-end">
                        <h3>278</h3>
                        <button className=" btn btn-tertiary mb-0">
                          Agregar Producto
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div className="align-self-center">
                        <i className="fas fa-chart-line text-success fa-3x"></i>
                      </div>
                      <div className="text-end">
                        <h3>64.89 %</h3>
                        <button className="btn btn-tertiary mb-0">
                          Reporte de ventas Anual
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div className="align-self-center">
                        <i className="bi bi-clipboard-data-fill text-danger fa-3x"></i>
                      </div>
                      <div className="text-end">
                        <h3>423</h3>
                        <button className="btn btn-tertiary mb-0">
                          Reporte de ventas Mensual
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div className="align-self-center">
                        <i className="bi bi-archive text-warning fa-3x"></i>
                      </div>
                      <div className="text-end">
                        <h3>423</h3>
                        <button className="btn btn-tertiary mb-0">
                          Reporte de Stock
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div className="align-self-center">
                        <i className="far fa-user text-success fa-3x"></i>
                      </div>
                      <div className="text-end">
                        <h3>423</h3>
                        <button className="btn btn-tertiary mb-0" onClick={InformeGeneroUsers}>
                          Reporte de usuario por genero
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
        <div className="col-xl-3 col-sm-6 col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between px-md-1">
                <div>
                  <h3 className="text-danger">278</h3>
                  <p className="mb-0">New Projects</p>
                </div>
                <div className="align-self-center">
                  <i className="fas fa-rocket text-danger fa-3x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
          </section>
        </div>
      </main>
      {/* <!--Main layout--> */}
    </div>
  );
};
