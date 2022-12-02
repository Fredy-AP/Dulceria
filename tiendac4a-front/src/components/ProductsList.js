import React from "react";
const ProductsList = ({ product, products, setListUpdate, setProduct }) => {

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    let { code, name, price, iva, description, image } = product;
    const handleSubmit = (e) => {
        e.preventDefault();
        //pasar a numero
        price = Number(price);
        iva = Number(iva);

        if (code === "" || name === "" || description === "" || image === "") {
            alert("Todos los campos son obligatorios");
            return;
        }

        if (price < 0 || iva < 0) {
            alert("El precio y el iva no pueden ser negativos");
            return;
        }

        //agregar producto
        const requestInit = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        };

        fetch("http://localhost:3001/api/products", requestInit)
            .then(res => res.json())
            .then(data => console.log(data));

        setProduct({
            code: "",
            name: "",
            price: 0,
            iva: 0,
            description: "",
            image: "",
            calification: 0,
        });

        setListUpdate(true);
    }
    const deleteProduct = (id) => {
        const requestInit = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        };
        fetch(`http://localhost:3001/api/products/${id}`, requestInit)
            .then(res => res.json())
            .then(data => console.log(data));

        setListUpdate(true);
    };

    let item = [];

    const getProduct = (id) => {
        const requestInit = {
            method: "GET",
            headers: { "Content-Type": "application/json" },

        };
        fetch(`http://localhost:3001/api/products/${id}`, requestInit)
            .then(res => res.json())
            .then(data => {
                const arrayData = Object.values(data);
                //guradar para mostrar en modal
                item = arrayData[0];
                setProduct({
                    code: item.code,
                    name: item.name,
                    price: item.price,
                    iva: item.iva,
                    description: item.description,
                    image: item.image,
                    calification: item.calification,
                    id: item._id
                });

            });
    };

    const updateProduct = (id) => {
        const requestInit = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        };
        fetch(`http://localhost:3001/api/products/${id}`, requestInit)

            .then(res => res.json())
            .then(data => console.log(data));

        setListUpdate(true);
    };

    return (
        <div>
            <table className="table">
                <caption><button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar Producto</button></caption>
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Iva</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Calificación</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product.code}</td>
                            <td>{product.name}</td>
                            <td>$ {product.price}</td>
                            <td>{product.iva}%</td>
                            <td>{product.description}</td>
                            <td><img src={product.image} alt={product.name} width="100" /></td>
                            <td>{product.calification}</td>
                            <td>
                                <button onClick={() => getProduct(product._id)} className="btn btn-danger m-1" data-bs-toggle="modal" data-bs-target="#DeleteModal">Delete</button>
                                <button onClick={() => getProduct(product._id)} className="btn btn-warning m-1" data-bs-toggle="modal" data-bs-target="#EditModal">Edit</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            {/* Modal */}
            <div className="modal fade" id="EditModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Editar Producto</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="code" className="form-label">Código</label>
                                        <input type="text" className="form-control" id="code" name="code" value={code} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Nombre</label>
                                        <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">Precio</label>
                                        <input type="number" className="form-control" id="price" name="price" value={price} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="iva" className="form-label">Iva</label>
                                        <input type="number" className="form-control" id="iva" name="iva" value={iva} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Descripción</label>
                                        <input type="text" className="form-control" id="description" name="description" value={description} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label">Imagen</label>
                                        <input type="text" className="form-control" id="image" name="image" value={image} onChange={handleChange} />
                                    </div>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => updateProduct(product.id)}>Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="DeleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Eliminar Producto</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                        </div>
                        <div class="modal-body">
                            <div class="alert alert-danger" role="alert">
                                ¿Está seguro que desea eliminar el producto <b> {product.name}</b>?
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => deleteProduct(product.id)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
}

export default ProductsList;