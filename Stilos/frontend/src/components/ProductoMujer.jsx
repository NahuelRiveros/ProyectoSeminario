import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../context/authContext";

export function ProductoMujer() {
  const uriProductos = "http://localhost:8000/productoShop/obtProductoF";
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
  const { user, setUser } = useAuth()
  // obtengo todo los productos
  const obtProductos = async () => {

    await axios.post(uriProductos, { talle: talleRadio, color: colorRadio, marca: marcaRadio, tipo: tipoRadio }).then((res) => {
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
  }, [tipoRadio, marcaRadio, colorRadio, talleRadio]);

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
  // AddCarrito
  const handelAddCarrito = async (e) => {
    const uriAddCarrito = "http://localhost:8000/carrito/newCarrProd/" + user.id;
    let idProd = e
    console.log(e, uriAddCarrito)
    await axios.post(uriAddCarrito, { idProd })
  }

  return (
    <div className="container">

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 col-sm-3">
            {/* <!-- Section: Sidebar --> */}
            <section >
              {/* <!-- Section: Filters --> */}
              <section id="filters" data-auto-filter="true">
                <h5>Filtros</h5>


                {/* <!-- Section: Avg. Customer Review --> */}
                <h6 className="font-weight-bold mb-2 mt-3">Talle</h6>
                <section className="mb-1">
                  <div className="form-check" key="deselect">
                    <input
                      className="form-check-input"
                      type="radio"
                      value=""
                      name="Talle"
                      id="price-radio"
                      onChange={(e) => {
                        handelTalleProducto(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label text-uppercase small text-muted"
                      htmlFor="price-radio"
                      
                    >
                      No filtrar
                    </label>
                  </div>
                </section>

                {listTalleProduct &&
                  listTalleProduct.map((productoTalle) => {
                    return (

                      <section className="mb-1" key={productoTalle.id}>
                        <div className="form-check">
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

                <h6 className="font-weight-bold mt-3">Color</h6>
                <section className="mb-1">
                  <div className="form-check" key="deselect">
                    <input
                      className="form-check-input"
                      type="radio"
                      value=""
                      name="color"
                      id="price-radio"
                      onChange={(e) => {
                        handelColorProducto(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label text-uppercase small text-muted"

                    >
                      No filtrar
                    </label>
                  </div>
                </section>

                {listColorProduct &&
                  listColorProduct.map((productoColor) => {
                    return (

                      <section className="mb-1" key={productoColor.id}>
                        <div className="form-check" >
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
                <h6 className="font-weight-bold mt-3">Marcas</h6>
                <section className="mb-1">
                  <div className="form-check" key="deselect">
                    <input
                      className="form-check-input"
                      type="radio"
                      value=""
                      name="Marca"
                      id="price-radio"
                      onChange={(e) => {
                        handelMarcaProducto(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label text-uppercase small text-muted"

                    >
                      No filtrar
                    </label>
                  </div>
                </section>

                {listMarcaProduct &&
                  listMarcaProduct.map((productoMarca) => {
                    return (

                      <section className="mb-1" key={productoMarca.id}>
                        <div className="form-check" >
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
                <h6 className="font-weight-bold mt-3">Tipo Producto</h6>
                <section className="mb-1">
                  <div className="form-check" key="deselect">
                    <input
                      className="form-check-input"
                      type="radio"
                      value=""
                      name="Tipo"
                      id="price-radio"
                      onChange={(e) => {
                        handelTipoProducto(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label text-uppercase small text-muted"

                    >
                      No filtrar
                    </label>
                  </div>
                </section>
                {/* // Inicio */}
                {listTipoProduct &&
                  listTipoProduct.map((productoTipo) => {
                    return (

                      <section className="mb-1" key={productoTipo.id}>
                        <div className="form-check" >
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
                  

                </div>
              </div>
            </div>
            <div className="container ">
              <div className="row align-items-start">
                {listPorduct &&
                  listPorduct.map((producto) => {
                    return (

                        <div className="col-md-4 my-4 text-center animation fade-in" key={producto.id}>
                          <h5>{producto.marca}</h5>
                          <div className="bg-image hover-overlay hover-zoom hover-shadow ripple rounded">
                            <img
                              src={producto.img}
                              className="img-fluid w-100"
                              alt= "IMG-Producto"
                            />
                            <a href="#!">
                              <div className="mask rounded"></div>
                            </a>
                          </div>
                          <div className="pt-4">
                            
                            <h5>Talle: {producto.talle}</h5>
                            <h5>Tipo: {producto.tipo}</h5>
                            
                            <strong>${producto.precio}</strong>
                          </div>
                          <button className="btn btn-outline-primary btn-sm mt-2" type="button" onClick={() => { handelAddCarrito(producto.id) }}>
                            Agregar Carrito <i className="fas fa-cart-plus"></i>
                          </button>
                        </div>

                    )
                  }
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
