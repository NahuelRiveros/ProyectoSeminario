import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";

export function asd() {
  const { user, setUser } = useAuth();
  const [carProductos, setCarProductos] = useState([]);
  const [test, setTest] = useState([]);

  
 
  const handleLogin = () => {
    const login = localStorage.getItem("authorization");
    console.log(login)
  };

  const getProductos = async (e) => {
    
    await axios
      .post(`http://localhost:8000/carrito/allProds/${user.id}`)
      .then((res) => {
        setCarProductos(res.data);
      });
  };

  useEffect(() => {
    handleLogin();
    getProductos();
  }, []);



  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Carrito</h5>
                </div>
                <div className="card-body">
                  {/* <!-- Single item --> */}

                  {carProductos &&
                    carProductos.map((productos) => {
                      return (
                        <div className="row" key={productos.id}>
                          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            {/* <!-- Image --> */}
                            <div
                              className="bg-image hover-overlay hover-zoom ripple rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src={productos.img}
                                className="w-100"
                                alt={productos.img}
                              />
                              <a href="#!">
                                <div className="mask rgba"></div>
                              </a>
                            </div>
                            {/* <!-- Image --> */}
                          </div>

                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            {/* <!-- Data --> */}
                            <p>
                              <strong>{productos.tipo} Marca {productos.marca}</strong>
                            </p>
                            <p>Color: {productos.color}</p>
                            <p>Talle: {productos.talle}</p>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm me-1 mb-2"
                              data-mdb-toggle="tooltip"
                              title="Remove item"
                              
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                            {/* <!-- Data --> */}
                          </div>

                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            {/* <!-- Price --> */}
                            <p className="text-start text-md-center">
                              <strong>${productos.precio}</strong>
                            </p>
                            {/* <!-- Price --> */}
                          </div>
                        </div>
                      );
                    })}

                  <hr className="my-4" />
                  {/* <!-- Single item --> */}
                </div>
              </div>

              {/* tarjetas */}
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>Aceptamos</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Total</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Productos
                      <span>$53.98</span>
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
                        <strong>$53.98</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
