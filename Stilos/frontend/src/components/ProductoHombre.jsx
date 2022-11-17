import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export function ProductoHombre() {
  const uriProductos = "http://localhost:8000/productoShop/obtProducto";
  const uriTipoProducto = "http://localhost:8000/productoShop/obtProductoTipo";
  const uriMarcaProducto =
    "http://localhost:8000/productoShop/obtProductoMarca";
  const uriTalleProducto =
    "http://localhost:8000/productoShop/obtProductoTalle";
  const uriColorProducto =
    "http://localhost:8000/productoShop/obtProductoColor";

  const [buscador, setBuscador] = useState("");
  const [productos, setProductos] = useState([]);
  const [listPorduct, setListPorduct] = useState([]);
  const [listTipoProduct, setListTipoProduct] = useState([]);
  const [listMarcaProduct, setListMarcaProduct] = useState([]);
  const [listTalleProduct, setListTalleProduct] = useState([]);
  const [listColorProduct, setListColorProduct] = useState([]);
  const [tipoRadio, setTipoRadio] = useState("");
  const [marcaRadio, setMarcaRadio] = useState("");
  const [colorRadio, setColorRadio] = useState("");
  const [talleRadio, setTalleRadio] = useState("");
  // obtengo todo los productos
  const obtProductos = async () => {
    await axios.get(uriProductos).then((res) => {
      setProductos(res.data);
      setListPorduct(res.data);
    });
  };
  // obtengo solo el tipo de producto remeras o pantalones , etc
  const obtTipoProducto = async () => {
    await axios.get(uriTipoProducto).then((res) => {
      setListTipoProduct(res.data);
    });
  };
  // obtengo solo la marca del producto
  const obtMarcaProducto = async () => {
    await axios.get(uriMarcaProducto).then((res) => {
      setListMarcaProduct(res.data);
    });
  };
  // obtengo solo el talle de los productos
  const obtTalleProducto = async () => {
    await axios.get(uriTalleProducto).then((res) => {
      setListTalleProduct(res.data);
    });
  };
  // obtengo solo el color de los productos
  const obtColorProducto = async () => {
    await axios.get(uriColorProducto).then((res) => {
      setListColorProduct(res.data);
    });
  };

  useEffect(() => {
    obtProductos();
    obtTipoProducto();
    obtColorProducto();
    obtMarcaProducto();
    obtTalleProducto();
  }, []);

  // buscador
  const handelTipoProducto = (e) => {
    setTipoRadio(e);
    console.log(e);
  };
  // buscador
  const handelMarcaProducto = (e) => {
    setMarcaRadio(e);
    console.log(e);
  };
  // buscador
  const handelColorProducto = (e) => {
    setColorRadio(e);
    console.log(e);
  };
  // buscador
  const handelTalleProducto = (e) => {
    setTalleRadio(e);
    console.log(e);
  };
  return (
    <div className="container">
      
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              {/* <!-- Section: Sidebar --> */}
              <section>
                {/* <!-- Section: Filters --> */}
                <section id="filters" data-auto-filter="true">
                  <h5>Filters</h5>

                  {/* <!-- Section: Condition --> */}
                  <section className="mb-4" data-filter="condition">
                    <h6 className="font-weight-bold mb-3">Condition</h6>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="new"
                        id="condition-checkbox"
                        autocompleted=""
                      />
                      <label
                        className="form-check-label text-uppercase small text-muted"
                        for="condition-checkbox"
                      >
                        New
                      </label>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="used"
                        id="condition-checkbox2"
                      />
                      <label
                        className="form-check-label text-uppercase small text-muted"
                        for="condition-checkbox2"
                      >
                        Used
                      </label>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="collectible"
                        id="condition-checkbox3"
                      />
                      <label
                        className="form-check-label text-uppercase small text-muted"
                        for="condition-checkbox3"
                      >
                        Collectible
                      </label>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="renewed"
                        id="condition-checkbox4"
                      />
                      <label
                        className="form-check-label text-uppercase small text-muted"
                        for="condition-checkbox4"
                      >
                        Renewed
                      </label>
                    </div>
                  </section>
                  {/* <!-- Section: Condition --> */}

                  {/* <!-- Section: Avg. Customer Review --> */}
                  <h6 className="font-weight-bold mb-3">Talle</h6>

              {listTalleProduct &&
                listTalleProduct.map((productoTalle) => {
                  return (
                    
                      <section className="mb-4">
                        <div className="form-check" key={productoTalle.id}>
                          <input
                            className="form-check-input"
                            type="radio"
                            value={productoTalle.id}
                            name="Talle"
                            id="price-radio"
                            onChange={(e) => {
                              handelTalleProducto(e.target.value);
                            }}
                          />
                          <label
                            className="form-check-label text-uppercase small text-muted"
                            
                          >
                            {productoTalle.talle}
                          </label>
                        </div>
                      </section>
                    
                  );
                })}
                  {/* <!-- Section: Avg. Customer Review --> */}

                  {/* <!-- Section: Price --> */}
                  
              <h6 className="font-weight-bold mb-3">Color</h6>

              {listColorProduct &&
                listColorProduct.map((productoColor) => {
                  return (
                    
                      <section className="mb-4">
                        <div className="form-check" key={productoColor.id}>
                          <input
                            className="form-check-input"
                            type="radio"
                            value={productoColor.id}
                            name="color"
                            id="price-radio"
                            onChange={(e) => {
                              handelColorProducto(e.target.value);
                            }}
                          />
                          <label
                            className="form-check-label text-uppercase small text-muted"
                            
                          >
                            {productoColor.color}
                          </label>
                        </div>
                      </section>
                    
                  );
                })}
                  {/* <!-- Section: Price --> */}

                  {/* <!-- Section: Size --> */}
                  <h6 className="font-weight-bold mb-3">Marcas</h6>

              {listMarcaProduct &&
                listMarcaProduct.map((productoMarca) => {
                  return (
                    
                      <section className="mb-4">
                        <div className="form-check" key={productoMarca.id}>
                          <input
                            className="form-check-input"
                            type="radio"
                            value={productoMarca.id}
                            name="Marca"
                            id="price-radio"
                            onChange={(e) => {
                              handelMarcaProducto(e.target.value);
                            }}
                          />
                          <label
                            className="form-check-label text-uppercase small text-muted"
                            
                          >
                            {productoMarca.marca}
                          </label>
                        </div>
                      </section>
                    
                  );
                })}
                  {/* <!-- Section: Size --> */}

                  {/* <!-- Section: Color --> */}
                  <h6 className="font-weight-bold mb-3">Tipo Producto</h6>
              {/* // Inicio */}
              {listTipoProduct &&
                listTipoProduct.map((productoTipo) => {
                  return (
                    
                      <section className="mb-4">
                        <div className="form-check mb-3" key={productoTipo.id}>
                          <input
                            className="form-check-input"
                            type="radio"
                            value={productoTipo.id}
                            name="Tipo"
                            id="price-radio"
                            onChange={(e) => {
                              handelTipoProducto(e.target.value);
                            }}
                          />
                          <label
                            className="form-check-label text-uppercase small text-muted"
                            
                          >
                            {productoTipo.tipo_producto}
                          </label>
                        </div>
                      </section>
                    
                  );
                })}
                  {/* <!-- Section: Color --> */}
                </section>
                {/* <!-- Section: Filters --> */}
              </section>
              {/* <!-- Section: Sidebar --> */}
            </div>
            <div className="col-md-8">
              <div className="row justify-content-center">
                <div className="col-md-6 my-auto py-3">
                  <div id="select-wrapper-893299" className="select-wrapper">
                    <div className="form-outline">
                      <input
                        className="form-control select-input"
                        type="text"
                        role="listbox"
                        aria-multiselectable="false"
                        aria-disabled="false"
                        aria-haspopup="true"
                        aria-expanded="false"
                        readonly=""
                      />
                      <label className="form-label select-label active">
                        Buscador
                      </label>
                      <span className="select-arrow"></span>
                      <div className="form-notch">
                        <div className="form-notch-leading"></div>
                        <div className="form-notch-middle"></div>
                        <div className="form-notch-trailing"></div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="row mb-4" id="content">
                <div className="col-md-4 my-4 justify-content-center text-center animation fade-in">
                  <div className="bg-image hover-overlay hover-zoom hover-shadow ripple rounded">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                      className="img-fluid w-100"
                    />
                    <a href="#!">
                      <div className="mask rounded"></div>
                    </a>
                  </div>
                  <div className="pt-4">
                    <h5>Fantasy T-shirt</h5>
                    <strong>$12.99</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}
