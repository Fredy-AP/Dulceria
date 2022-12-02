import React from "react";

const Form = ({ product, setProduct, setListUpdate }) => {

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
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Agregar Producto</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="code" className="form-label">Código</label>
                                <input onChange={handleChange} type="number" className="form-control" id="code" name="code" value={code} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input onChange={handleChange} type="text" className="form-control" id="name" name="name" value={name} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Precio</label>
                                <input onChange={handleChange} type="number" className="form-control" id="price" name="price" value={price} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="iva" className="form-label">Iva</label>
                                <input onChange={handleChange} type="number" className="form-control" id="iva" name="iva" value={iva} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Descripción</label>
                                <textarea className="form-control" id="description" rows="3" name="description" onChange={handleChange} value={description}></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Imagen</label>
                                <input onChange={handleChange} type="text" className="form-control" id="image" name="image" value={image} />
                            </div>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;