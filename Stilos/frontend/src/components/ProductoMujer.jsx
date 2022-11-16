import React from 'react'

export function ProductoMujer() {
  return (
    <div className="container">
        <section className="rgba">
        <div className="text-center container py-5">
          <h4 className="mt-4 mb-5">
            <strong>Productos Hombres</strong>
          </h4>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
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
                  <h6 className="mb-3">$61.99</h6>
                  {/* BOTON CARRITO */}
                  <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                    Agregar Carrito <i class="fas fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                    className="w-100"
                  />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-success ms-2">Eco</span>
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
                  <h6 className="mb-3">$61.99</h6>
                  {/* BOTON CARRITO */}
                  <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                    Agregar Carrito <i class="fas fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp"
                    className="w-100"
                  />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-danger ms-2">-10%</span>
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
                  <h6 className="mb-3">
                    <s>$61.99</s>
                    <strong className="ms-2 text-danger">$50.99</strong>
                  </h6>
                  {/* BOTON CARRITO */}
                  <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                    Agregar Carrito <i class="fas fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </section>
    </div>
  )
}