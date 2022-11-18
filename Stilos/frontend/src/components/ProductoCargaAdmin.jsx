import axios from "axios";
import { useEffect, useState } from "react";

export function ProductoCargaAdmin() {
  const uriTipoProducto = "http://localhost:8000/productoShop/obtProductoTipo";
  const uriMarcaProducto ="http://localhost:8000/productoShop/obtProductoMarca";
  const uriTalleProducto ="http://localhost:8000/productoShop/obtProductoTalle";
  const uriColorProducto ="http://localhost:8000/productoShop/obtProductoColor";
  const uriGeneroProducto ="http://localhost:8000/productoShop/obtProductoGenero";

    const [listTipoProduct, setListTipoProduct] = useState([]);
    const [listMarcaProduct, setListMarcaProduct] = useState([]);
    const [listTalleProduct, setListTalleProduct] = useState([]);
    const [listColorProduct, setListColorProduct] = useState([]);
    const [listGeneroProduct, setListGeneroProduct] = useState([]);

    const [getInputTipo, setgetInputTipo] = useState('')
    const [getInputMarca, setgetInputMarca] = useState('')
    const [getInputTalle, setgetInputTalle] = useState('')
    const [getInputColor, setgetInputColor] = useState('')
    const [getInputGenero, setgetInputGenero] = useState('')

  console.log(listTalleProduct)
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
  // obtengo solo el Genero de los productos
  const obtGeneroProducto = async () => {
    await axios.get(uriGeneroProducto).then((res) => {
      setListGeneroProduct(res.data);
    });
  };

  useEffect(() => {
    obtTipoProducto();
    obtColorProducto();
    obtMarcaProducto();
    obtTalleProducto();
    obtGeneroProducto();
  }, []);

  return (
    <div>
      <section className="h-100 h-custom bgBoddy">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                  className="w-100 img-carProduc"
                  alt="Sample photo"
                />
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                    Registration Info
                  </h3>

                  <form className="px-md-2">
                    {/* IMG */}
                    <div className="form-outline mb-4">
                      <input
                        type="file"
                        id="form3Example1q"
                        className="form-control-plaintext"
                        placeholder="IMG"
                      />
                    </div>
                    {/* IMG */}
                    <div className="row">
                      {/* 1 */}
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker">
                          <input
                            type="number"
                            required
                            min={0}
                            className="form-control-plaintext"
                            id="exampleDatepicker1"
                            placeholder="Existencia producto"
                          />
                        </div>
                      </div>
                      {/* 1 */}
                      {/* 2 */}
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker">
                          <input
                            type="number"
                            required
                            className="form-control-plaintext"
                            id="exampleDatepicker1"
                            placeholder="$ Precio"
                            min={0}
                          />
                        </div>
                      </div>
                      {/* 2 */}
                        {/* selects  Talle*/}
                        <label htmlFor=""> Talle Producto</label>
                      <div className="col-md-6 mb-4">
                        talle
                          <select className="select" >
                        {listTalleProduct &&
                          listTalleProduct.map((talle) => {
                            return (
                                <option value={talle.id}>{talle.talle}</option>
                                );
                            })}
                            </select>
                      </div>
                        {/* select Talle */}
                        {/* selects Color*/}
                        <label htmlFor=""> Color Producto</label>
                      <div className="col-md-6 mb-4">
                          <select className="select" >
                        {listColorProduct &&
                          listColorProduct.map((color) => {
                            return (
                                
                                <option value={color.id}>{color.color}</option>
                                
                                );
                            })}
                            </select>
                      </div>
                        {/* select Color */}
                        {/* selects Genero*/}
                        <label htmlFor=""> Genero</label>
                      <div className="col-md-6 mb-4">
                        
                          <select className="select" >
                        {listGeneroProduct &&
                          listGeneroProduct.map((genero) => {
                            return (
                                <option value={genero.id}>{genero.genero}</option>
                                );
                            })}
                            </select>
                      </div>
                        {/* select Genero*/}
                        {/* selects Marca */}
                        <label htmlFor=""> Marca</label>
                      <div className="col-md-6 mb-4">
                          <select className="select" >
                        {listMarcaProduct &&
                          listMarcaProduct.map((marca) => {
                            return (
                                
                                <option value={marca.id}>{marca.marca}</option>
                                
                                );
                            })}
                            </select>
                      </div>
                        {/* select Marca*/}
                        {/* selects Tipo */}
                        <label htmlFor=""> Tipo Producto</label>
                      <div className="col-md-6 mb-4">
                          <select className="select" >
                        {listTipoProduct &&
                          listTipoProduct.map((tipo) => {
                            return (
                                
                                <option value={tipo.id}>{tipo.tipo_producto}</option>
                                
                                );
                            })}
                            </select>
                      </div>
                        {/* select Tipo*/}

                    </div>

                   

                    <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                      <div className="col-md-6">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1w"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-success btn-lg mb-1"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
