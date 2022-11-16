import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export function ProductoAccesorio() {

  const uriProductos = 'http://localhost:8000/productoShop/obtProducto';
  const uriTipoProducto = 'http://localhost:8000/productoShop/obtProductoTipo';
  const uriMarcaProducto = 'http://localhost:8000/productoShop/obtProductoMarca';
  const uriTalleProducto = 'http://localhost:8000/productoShop/obtProductoTalle';
  const uriColorProducto = 'http://localhost:8000/productoShop/obtProductoColor';

  const [buscador, setBuscador] = useState('');
  const [productos, setProductos] = useState([]);
  const [listPorduct, setListPorduct] = useState([]);
  const [listTipoProduct, setListTipoProduct] = useState([])
  const [listMarcaProduct, setListMarcaProduct] = useState([])
  const [listTalleProduct, setListTalleProduct] = useState([])
  const [listColorProduct, setListColorProduct] = useState([])

  // obtengo todo los productos
  const obtProductos = async () => {
      await axios.get(uriProductos).then((res)=>{
      setProductos(res.data)
      setListPorduct(res.data)
    })
  }
  // obtengo solo el tipo de producto remeras o pantalones , etc
  const obtTipoProducto = async () => {
      await axios.get(uriTipoProducto).then((res)=>{
        setListTipoProduct(res.data)
    })
  }
  // obtengo solo la marca del producto
  const obtMarcaProducto = async () => {
      await axios.get(uriMarcaProducto).then((res)=>{
      
      setListMarcaProduct(res.data)
    })
  }
  // obtengo solo el talle de los productos
  const obtTalleProducto = async () => {
      await axios.get(uriTalleProducto).then((res)=>{
      
        setListTalleProduct(res.data)
    })
  }
  // obtengo solo el color de los productos
  const obtColorProducto = async () => {
      await axios.get(uriColorProducto).then((res)=>{
      
        setListColorProduct(res.data)
    })
  }

  useEffect(() => {
    obtProductos()
    obtTipoProducto()
    obtColorProducto()
    obtMarcaProducto()
    obtTalleProducto()
  }, [])
  
  console.log(productos)
  console.log(listTipoProduct)
  
// buscador
const handelBuscador = (e) => {
  setBuscador(e);
  filtrarElemento(e);
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
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control mt-2"
                id="advanced-search-input"
                placeholder="Buscador"
                onChange={(e) => {
                  handelBuscador(e.target.value);
                }}
              />
              <button
                className="btn btn-primary mt-2"
                id="advanced-search-button"
                type="button"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </h4>
          
          <div className="row">
            {/* // Inicio */}
            {productos &&
            productos.map((producto)=>{
              return (

            <div className="col-lg-4 col-md-12 mb-4" key={producto.id}>
              <div className="card" >
                <div
                  className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
                    className="w-100"
                  />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">New</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask rgba"></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Product name</h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 className="mb-3">{producto.precio_unitario}</h6>
                  <h6 className="mb-3">{producto.fk_marca}</h6>
                  { productos && <h6 className="mb-3">{producto.fk_tipo}</h6>}
                  <h6 className="mb-3">{producto.precio_unitario}</h6>
                  {/* BOTON CARRITO */}
                  <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                    Agregar Carrito <i className="fas fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
              )
              


              

            })}

           
          </div>

         
        </div>
      </section>
    </div>
  )
}
