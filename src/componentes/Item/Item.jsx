import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="card w-25 mt-2 m-2">
      <div className="card-header">
        <h4>{producto.nombre}</h4>
      </div>
      <div className="card-body">
        <img src={producto.imagen} alt="foto" className="w-100" />
        <h5>
          Categoria: {producto.categoria} <br />
        </h5>
        <h5>
          Precio: ${producto.precio} <br />
        </h5>
      </div>
      <div className="card-footer">
        <Link to={`/detalle/${producto.id}`}>
          <button className="btn btn-outline-primary w-100">Detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;