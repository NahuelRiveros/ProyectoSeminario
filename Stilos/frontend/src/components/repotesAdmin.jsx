import axios from "axios";
import { useState, useEffect } from "react";
import { jsPDF } from "jsPDF";
import autoTable from 'jspdf-autotable'

export const ReportesAdmin = () => {
  const [hombre, setHombre] = useState(0)
  const [mujer, setMujer] = useState(0)
  const [otro, setOtro] = useState(0)
  const [fecha, setFecha] = useState()
  const [año, setAño] = useState('2022')
  const [VentaMensual, setVentaMensual] = useState([])
  const [Stock, setStock] = useState([])

  const URI = "http://localhost:8000/admins/personas/"
  const URIVentasMensual = "http://localhost:8000/admins/VentasM?año=" + año
  const URIStock = "http://localhost:8000/admins/prod/"

  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  useEffect(() => {
    getCantGen()
    getFecha()
    getVentasMensual()
    getStock()
  }, []);


  const InformeGeneroUsers = async (e) => {
    printPDFGen()
  }

  const InformeVentaMensual = async (e) => {
    printPDFMen()
  }

  const InformeStock = async (e) => {
    printPDFStock()
  }

  const getCantGen = async () => {
    let hom = 0
    let muj = 0
    let otr = 0
    const AllPersons = await axios.get(URI);
    const usuarios = (AllPersons.data)
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].fk_genero == 1) {
        hom += 1
        setHombre(hom)
      } else if (usuarios[i].fk_genero == 2) {
        muj += 1
        setMujer(muj)
      } else if (usuarios[i].fk_genero == 3) {
        otr += 1
        setOtro(otr)
      }
    }
  };

  const getVentasMensual = async () => {

    let ventas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    let ingresos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    let ventasMensuales = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

    let x = 0


    const queryVentas = await axios.get(URIVentasMensual)
    const ventasData = (queryVentas.data)

    for (let i = 0; i < ventasData.length; i++) {
      let dateMonth = new Date(ventasData[i].createdAt)
      if (dateMonth.getMonth() == 0) {
        x = 0
        ventas[x] = ventas[x] + ventasData[i].cantidad_producto
        ingresos[x] = ingresos[x] + ventasData[i].total_pagado
      }
      if (dateMonth.getMonth() == 1) {
        x = 1
        ventas[x] = ventas[x] + ventasData[i].cantidad_producto
        ingresos[x] = ingresos[x] + ventasData[i].total_pagado
      }
      if (dateMonth.getMonth() == 2) {
        x = 2
        ventas[x] = ventas[x] + ventasData[i].cantidad_producto
        ingresos[x] = ingresos[x] + ventasData[i].total_pagado
      }
      if (dateMonth.getMonth() == 3) {
        x = 3
        ventas[x] = ventas[x] + ventasData[i].cantidad_producto
        ingresos[x] = ingresos[x] + ventasData[i].total_pagado
      }
      if (dateMonth.getMonth() == 4) {
        x = 4
        ventas[x] = ventas[x] + ventasData[i].cantidad_producto
        ingresos[x] = ingresos[x] + ventasData[i].total_pagado
      }
      if (dateMonth.getMonth() == 5) {
        x = 5
        ventas[x] = ventas[x] + ventasData[i].cantidad_producto
        ingresos[x] = ingresos[x] + ventasData[i].total_pagado
      }
      if (dateMonth.getMonth() == 6) {
        x = 6
        ventas[x] = ventas[x] + ventasData[i].cantidad_producto
        ingresos[x] = ingresos[x] + ventasData[i].total_pagado
      }
      if (dateMonth.getMonth() == 7) {
        x = 7
        ventas[x] = ventas[x] + ventasData[i].cantidad_producto
        ingresos[x] = ingresos[x] + ventasData[i].total_pagado
      }
      if (dateMonth.getMonth() == 8) {
        x = 8
        ventas[x] = ventas[x] + ventasData[i].cantidad_producto
        ingresos[x] = ingresos[x] + ventasData[i].total_pagado
      }
      if (dateMonth.getMonth() == 9) {
        x = 9
        ventas[x] = ventas[x] + ventasData[i].cantidad_producto
        ingresos[x] = ingresos[x] + ventasData[i].total_pagado
      }
      if (dateMonth.getMonth() == 10) {
        x = 10
        ventas[x] = ventas[x] + ventasData[i].cantidad_producto
        ingresos[x] = ingresos[x] + ventasData[i].total_pagado
      }
      if (dateMonth.getMonth() == 11) {
        x = 11
        ventas[x] = ventas[x] + ventasData[i].cantidad_producto
        ingresos[x] = ingresos[x] + ventasData[i].total_pagado
      }
    }
    for (let i = 0; i < 12; i++) {
      ventasMensuales[i].mes = meses[i]
      ventasMensuales[i].cantidadVendida = ventas[i]
      ventasMensuales[i].totalIngresos = ingresos[i]
      if (i > 0) {
        ventasMensuales[i].crecimiento = ingresos[i] - ingresos[i - 1]
      } else {
        ventasMensuales[i].crecimiento = 0
      }
    }
    setVentaMensual(ventasMensuales)
  }

  const getStock = async () => {
    const AllStock = await axios.get(URIStock)
    setStock(AllStock.data)
  }

  const getFecha = async () => {
    var hoy = new Date();
    return setFecha(hoy)
  }

  const printPDFGen = async () => {
    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });

    doc.setFontSize(30)
    doc.text("Informe", 30, 18);
    doc.setFontSize(16)
    doc.text("Tipo: Cantidad de usuarios por genero", 20, 30)
    doc.text("Orden: --", 20, 40)
    doc.text("Fecha: " + dias_semana[fecha.getDay()] + ", " + fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getUTCFullYear() + " (" + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getUTCFullYear() + ")", 20, 50)

    doc.autoTable({
      startY: 65,
      head: [['Genero', 'Cantidad']],
      body: [["Hombres", hombre], ["Mujeres", mujer], ["Otros", otro]],
    })

    doc.save("Informe-Genero-" + fecha.getDate() + fecha.getMonth() + fecha.getUTCFullYear());
  }

  const printPDFMen = async () => {
    let jsPDFinfo = []

    VentaMensual.forEach((element, index, array) => {
      jsPDFinfo.push([element.mes, element.cantidadVendida, element.totalIngresos, element.crecimiento])
    })
    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });

    doc.setFontSize(30)
    doc.text("Informe", 30, 18);
    doc.setFontSize(16)
    doc.text("Tipo: Ventas mensuales del año" + año, 20, 30)
    doc.text("Orden: Por mes", 20, 40)
    doc.text("Fecha: " + dias_semana[fecha.getDay()] + ", " + fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getUTCFullYear() + " (" + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getUTCFullYear() + ")", 20, 50)

    doc.autoTable({
      startY: 65,
      head: [['Mes', 'Cantidad vendido', 'Ingresos totales', 'Diferencia (Crecimiento)']],
      body: jsPDFinfo,
    })

    doc.save("Informe-Venta-Mensual-" + fecha.getDate() + fecha.getMonth() + fecha.getUTCFullYear());
  }

  const printPDFStock = async () => {
    let jsPDFinfo = []

    Stock.forEach((element, index, array) => {
      jsPDFinfo.push([element.tipo, element.marca, element.genero, element.color, element.talle, element.existencias, element.stock])
    })
    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });

    doc.setFontSize(30)
    doc.text("Informe", 30, 18);
    doc.setFontSize(16)
    doc.text("Tipo: Stock", 20, 30)
    doc.text("Orden: --", 20, 40)
    doc.text("Fecha: " + dias_semana[fecha.getDay()] + ", " + fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getUTCFullYear() + " (" + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getUTCFullYear() + ")", 20, 50)

    doc.autoTable({
      startY: 65,
      head: [['Producto', 'Marca', 'genero', 'color', 'talle', 'existencia', 'stock']],
      body: jsPDFinfo,
    })

    doc.save("Informe-Stock-" + fecha.getDate() + fecha.getMonth() + fecha.getUTCFullYear());
  }

  return (
    <div>
      <div className="container pt-4">
        <section>
          <div className="row">
            <button className="btn btn-tertiary mb-0">
              <div className="col-12 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-3">
                      <div className="align-self-center">
                        <i className="bi bi-file-earmark-plus-fill text-info fa-3x"></i>
                      </div>
                      <div className="text-end">
                        <h3>Agregar Producto</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button className="btn btn-tertiary mb-0" onClick={InformeVentaMensual}>
              <div className="col-12 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-3">
                      <div className="align-self-center">
                        <i className="bi bi-clipboard-data-fill text-danger fa-3x"></i>
                      </div>
                      <div className="text-end">
                        <h3>Reporte de ventas Mensual</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button className="btn btn-tertiary mb-0" onClick={InformeStock}>
              <div className="col-12 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-3">
                      <div className="align-self-center">
                        <i className="bi bi-archive text-warning fa-3x"></i>
                      </div>
                      <div className="text-end">
                        <h3>Reporte de Stock</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button className="btn btn-tertiary mb-1" onClick={InformeGeneroUsers}>
              <div className="col-12 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-3">
                      <div className="align-self-center">
                        <i className="far fa-user text-success fa-3x"></i>
                      </div>
                      <div className="text-end">
                        <h3>Reporte de usuario por genero</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
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
      {/* <!--Main layout--> */}
    </div>
  );
};
