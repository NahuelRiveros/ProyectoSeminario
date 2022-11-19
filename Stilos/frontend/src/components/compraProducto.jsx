import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function CompraProducto() {
  const { user, setUser } = useAuth();
  const [carProductos, setCarProductos] = useState([]);
  const [test, setTest] = useState([]);
  var precioMostrar = 0
  
  const navigate = useNavigate()
  for (let i = 0; i < carProductos.length; i++) {
    const element = carProductos[i].precio;
    precioMostrar += element;
  }

  const eventCompra = ()=>{
    Swal.fire(
      'Gracias!',
      'Haz clic en ok',
      'success'
    )
    navigate('/')
  }

  const getProductos = async (e) => {
    await axios
      .post(`http://localhost:8000/carrito/allProds/${user.id}`)
      .then((res) => {
        console.log(res.data)
        if (res.data == null) {
          setCarProductos(null);
        } else {
          setCarProductos(res.data)
        }
      });
  };

  useEffect(() => {
    if (!user.id) {
      return
    }
    getProductos();
  }, [user.id]);

  // function renderCarrito() {
  //   if (carProductos.json) {
  //     return (
  // //       <section className="h-100 gradient-custom">
  // //         <div className="container py-5">
  // //           <div className="row d-flex justify-content-center my-4">
  // //             <div className="col-md-8">
  // //               <div className="card mb-4">
  // //                 <div className="card-header py-3">
  // //                   <h5 className="mb-0">Carrito</h5>
  // //                 </div>
  // //               </div>
  // //             </div >
  // //             <div className="card mb-4 mb-lg-0" >
  // //               <div className="card-body">
  // //                 <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
  // //                 <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
  // //                 <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
  // //               </div>
  // //             </div >
  // //           </div >
  // //           <div className="col-md-4">
  // //             <div className="card mb-4">
  // //               <div className="card-header py-3">
  // //                 <h5 className="mb-0">Total</h5>
  // //               </div>
  // //               <div className="card-body">
  // //                 <ul className="list-group list-group-flush">
  // //                   <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
  // //                     Nada en el carrito
  // //                   </li>
  // //                 </ul>
  // //               </div>
  // //             </div>
  // //           </div>
  // //         </div >
  // //       </section >
  //     )
  //   } else {
  //     return (
  //     )



  return (
    <div>
      {!carProductos ?
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex my-4 justify-content-center">
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-3">Carrito</h5>
                    <h6>Su carrito no tiene productos</h6>
                  </div>
                </div>
              </div >
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Total</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Nada en el carrito
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-5 card mb-4 mb-lg-0" >
                <div className="card-body">
                  <div>
                    <h4>Recuerde que aceptamos estas tarjetas</h4>
                  </div>
                  <img className="me-2" width="70px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                  <img className="me-2" width="70px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                  <img className="me-2" width="70px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                </div>
              </div >
            </div>
          </div >
        </section >
        :
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Carrito</h5>
                  </div>
                  <div className="card-body">

                    {carProductos &&
                      carProductos.map((productos) => {
                        return (
                          <div className="row" key={productos.id}>
                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                              <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                <img src={productos.img} className="w-100" alt={productos.img} />
                                <a href="#!">
                                  <div className="mask rgba"></div>
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                              <p>
                                <strong>{productos.tipo} Marca {productos.marca}</strong>
                              </p>
                              <p>Color: {productos.color}</p>
                              <p>Talle: {productos.talle}</p>
                              <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                              <p className="text-start text-md-center">
                                <strong>${productos.precio}</strong>
                                

                              </p>
                            </div>
                          </div>
                        );
                      })}
                    <hr className="my-4" />
                  </div>
                </div >
                <div className="card mb-4 mb-lg-0" >
                  <div className="card-body">
                    <p>
                      <strong>Aceptamos</strong>
                    </p>
                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                  </div>
                </div >
              </div >
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Total</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Productos
                        <span></span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Gratis</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p className="mb-0">(incluye IVA)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>${precioMostrar}</strong>
                        </span>
                      </li>
                    </ul>
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={()=>{eventCompra()}}>
                      comprar
                    </button>
                  </div>
                </div>
              </div>
            </div >
          </div>
        </section>
      }
    </div>
  );
}
