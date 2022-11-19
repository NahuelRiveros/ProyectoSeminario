import axios from "axios";
import { useEffect, useState } from "react";
import * as yup from "yup"
import {Formik,Form,Field} from "formik"

export function ProductoCargaAdmin() {
  const uriTipoProducto = "http://localhost:8000/productoShop/obtProductoTipo";
  const uriMarcaProducto = "http://localhost:8000/productoShop/obtProductoMarca";
  const uriTalleProducto = "http://localhost:8000/productoShop/obtProductoTalle";
  const uriColorProducto = "http://localhost:8000/productoShop/obtProductoColor";
  const uriGeneroProducto = "http://localhost:8000/productoShop/obtProductoGenero";
  const URISUBIR = "http://localhost:8000/admins/prodAdd/";

  const [listTipoProduct, setListTipoProduct] = useState([]);
  const [listMarcaProduct, setListMarcaProduct] = useState([]);
  const [listTalleProduct, setListTalleProduct] = useState([]);
  const [listColorProduct, setListColorProduct] = useState([]);
  const [listGeneroProduct, setListGeneroProduct] = useState([]);

  const [file, setFile] = useState({preview:"", data:""})

  const initialValues = {
      tipo:1,
      marca:5,
      color:3,
      genero:4,
      precio:999,
      talle:2,
      cantidad:999,
      file:""
  }

  const miFormulario = document.getElementById("formularioImagen")

  const validationScheme = yup.object().shape({
    tipo:yup.number(),
    marca:yup.number(),
    color:yup.number(),
    genero:yup.number(),
    precio:yup.number(),
    talle:yup.number(),
    cantidad:yup.number(),
  })

  const cargarProducto = (data) => {
    const formData = new FormData(miFormulario)
    formData.append("data", JSON.stringify(data))
    formData.append("file",file?.data)
    try {
      axios.post(URISUBIR, formData,{
        "Content-Type":"application/json"
      }).then((res)=>{
        console.log(res)
      })
    } catch(error){
      console.log(error.message)
    }
  }

  const handleFile = (e) => {
    let fileC = {data:e.target.files[0],preview:URL.createObjectURL(e.target.files[0])}
    setFile(fileC)
  }

  const funtGetTipo = (e) => {
    setgetInputTipo(e)
  }
  const funtGetMarca = (e) => {
    setgetInputMarca(e)
  }
  const funtGetTalle = (e) => {
    setgetInputTalle(e)
  }
  const funtGetColor = (e) => {
    setgetInputColor(e)
  }
  const funtGetGenero = (e) => {
    setgetInputGenero(e)
  }


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

                  <Formik className="px-md-2" onSubmit={cargarProducto} initialValues={initialValues} validationSchema={validationScheme}>
                    <Form id="formularioImagen">
                    {/* IMG */}
                    <div className="form-outline mb-4">
                      <Field
                        type="file"
                        id="file"
                        className="form-control-plaintext"
                        placeholder="IMG"
                        name="file"
                        onChange={handleFile}
                      />
                      <div>
                        {file.preview &&(
                          <img src={file.preview} width="100"/>)}
                      </div>
                    </div>
                    {/* IMG */}
                    <div className="row">
                      {/* 1 */}
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker">
                          <i className="fas fa-clipboard-list"> Stock</i>
                          <Field
                            type="number"
                            required
                            min={0}
                            className="form-control-plaintext"
                            name="cantidad"
                            placeholder="Existencia producto"
                          />
                        </div>
                      </div>
                      {/* 1 */}
                      {/* 2 */}
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker">
                          <i className="fas fa-comment-dollar"> Valor</i>
                          <Field
                            type="number"
                            required
                            className="form-control-plaintext"
                            name="precio"
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
                        <Field as="select" className="select" name="talle">
                          {listTalleProduct &&
                            listTalleProduct.map((talle) => {
                              return (
                                <option value={talle.id} type="number" key={talle.id} >{talle.talle}</option>
                              );
                            })}
                        </Field>
                      </div>
                      {/* select Talle */}
                      {/* selects Color*/}
                      <label htmlFor=""> Color Producto</label>
                      <div className="col-md-6 mb-4">
                        <Field as="select" className="select" name="color">
                          {listColorProduct &&
                            listColorProduct.map((color) => {
                              return (

                                <option value={color.id} type="number" key={color.id}>{color.color}</option>

                              );
                            })}
                        </Field>
                      </div>
                      {/* select Color */}
                      {/* selects Genero*/}
                      <label htmlFor=""> Genero</label>
                      <div className="col-md-6 mb-4">

                        <Field as="select" className="select" name="genero">
                          {listGeneroProduct &&
                            listGeneroProduct.map((genero) => {
                              return (

                                <option value={genero.id} type="number" key={genero.id}>{genero.genero}</option>


                              );
                            })}
                        </Field>
                      </div>
                      {/* select Genero*/}
                      {/* selects Marca */}
                      <label htmlFor=""> Marca</label>
                      <div className="col-md-6 mb-4">
                        <Field as="select" className="select" name="marca">
                          {listMarcaProduct &&
                            listMarcaProduct.map((marca) => {
                              return (

                                <option value={marca.id} type="number" key={marca.id}>{marca.marca}</option>

                              );
                            })}
                        </Field>
                      </div>
                      {/* select Marca*/}
                      {/* selects Tipo */}
                      <label htmlFor=""> Tipo Producto</label>
                      <div className="col-md-6 mb-4">
                        <Field as="select" className="select" name="tipo">
                          {listTipoProduct &&
                            listTipoProduct.map((tipo) => {
                              return (

                                <option value={tipo.id} type="number" key={tipo.id}>{tipo.tipo_producto}</option>

                              );
                            })}
                        </Field>
                      </div>
                      {/* select Tipo*/}

                    </div>

                    <button
                      className="btn btn-success btn-lg mb-1"
                      type="submit">
                        Submit
                    </button>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
