import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Form from "./components/Form";

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    code: "",
    name: "",
    price: 0,
    iva: 0,
    description: "",
    image: "",
    calification: 0,
  });
  const [listUpdate, setListUpdate] = useState(false);


  useEffect(() => {
    const getProducts = () => {
      fetch("http://localhost:3001/api/products")
        .then(res => res.json())
        .then(data => {
          const arrayData = Object.values(data);
          setProducts(arrayData[0]);
        });
    }
    getProducts();
    setListUpdate(false);
  }, [listUpdate]);

  return (
    <Fragment>
      <Navbar brand="Productos" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 style={{ textAlign: "center" }}>Administrar Productos</h2>
            <ProductsList product={product} products={products} setListUpdate={setListUpdate} setProduct={setProduct} />
          </div>
          <Form product={product} setProduct={setProduct} setListUpdate={setListUpdate} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
