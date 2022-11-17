import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export function ProductoAccesorio() {
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

  const filtrarElemento = (termBusqueda) => {
    var search = listPorduct.filter((items) => {
      if (
        items.fk_tipo
          .toString()
          .toLowerCase()
          .includes(termBusqueda.toLowerCase())
      ) {
        return items;
      }
    });
    setProductos(search);
  };

  return (
    <div className="container">
      <section className="rgba">
        <div className="text-center container py-5">
          <h4 className="mt-4 mb-5">
            <strong>Productos Hombres</strong>
          </h4>

          <div className="row">
            <div className="col-3-sm">
              <h6 className="font-weight-bold mb-3">Tipo Producto</h6>
              {/* // Inicio */}
              {listTipoProduct &&
                listTipoProduct.map((productoTipo) => {
                  return (
                    
                      <section className="text-center">
                        <div className="form-check" key={productoTipo.id}>
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
            </div>

            {/* // Inicio */}
            <div className="col-3-sm">
              <h6 className="font-weight-bold mb-3">Marcas</h6>

              {listMarcaProduct &&
                listMarcaProduct.map((productoMarca) => {
                  return (
                    
                      <section className="text-center">
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
            </div>
            {/* // Inicio */}
            <div className="col-3-sm">
              <h6 className="font-weight-bold mb-3">Color</h6>

              {listColorProduct &&
                listColorProduct.map((productoColor) => {
                  return (
                    
                      <section className="text-center">
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
            </div>
            {/* // Inicio */}
            <div className="col-3-sm">
              <h6 className="font-weight-bold mb-3">Talle</h6>

              {listTalleProduct &&
                listTalleProduct.map((productoTalle) => {
                  return (
                    
                      <section className="text-center">
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
                
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
