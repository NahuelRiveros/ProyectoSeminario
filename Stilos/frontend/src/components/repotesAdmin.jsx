import axios from "axios";
import { useState, useEffect } from "react";
import {jsPDF} from "jsPDF";
import autoTable from 'jspdf-autotable'

export const ReportesAdmin = () => {
  const [hombre,setHombre] = useState(0)
  const [mujer,setMujer] = useState(0)
  const [otro,setOtro] = useState(0)
  const [fecha,setFecha] = useState()

  const URI= "http://localhost:8000/admins/personas/"

  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  useEffect(() => {
    getCant()
    getFecha()
  }, []);


  const InformeGeneroUsers = async (e) => {
    printPDFGen()
  }

  const getCant = async () => {
    let hom = 0
    let muj = 0
    let otr = 0
    const AllPersons = await axios.get(URI);
    const usuarios = (AllPersons.data)
     for (let i = 0; i < usuarios.length; i++) {
       if (usuarios[i].fk_genero == 1) {
        hom +=1
        setHombre(hom)
       } else if (usuarios[i].fk_genero == 2) {
        muj +=1
        setMujer(muj)
       } else if (usuarios[i].fk_genero == 3) {
        otr +=1
        setOtro(otr)
       }
     }
     console.log("hombres: ", hombre, " mujeres: ", mujer, " otros: ", otro)
  };

  const getFecha = async () =>{
    var hoy = new Date();
    return setFecha(hoy)
  }

  const printPDFGen = async () =>{
    const doc = new jsPDF({orientation: 'p', unit: 'mm', format: 'a4'});

    doc.setFontSize(30)
    doc.text("Informe", 30, 18);
    doc.setFontSize(16)
    doc.text("Tipo: Cantidad de usuarios por genero", 20,30)
    doc.text("Orden: --",20,40)
    doc.text("Fecha: "+dias_semana[fecha.getDay()]+", "+fecha.getDate()+" de "+meses[fecha.getMonth()]+" de "+fecha.getUTCFullYear()+ " ("+fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getUTCFullYear()+")",20,50)

    doc.autoTable({
      startY: 65,
      head: [['Genero', 'Cantidad']],
      body: [["Hombres", hombre],["Mujeres", mujer],["Otros", otro]],
    })

    doc.save("Informe-Genero-"+fecha.getDate()+fecha.getMonth()+fecha.getUTCFullYear());
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
