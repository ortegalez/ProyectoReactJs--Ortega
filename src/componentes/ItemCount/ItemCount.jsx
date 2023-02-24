import React from "react";
import { useState } from "react";

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleSuma = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleResta = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const handleOnAdd = () => {
    onAdd(count);
  };

  return (
    <>
      <center className="card mt-5 w-100 ">
        <div className="card-body row">
          <div className="col">
            <button
              className="btn btn-outline-dark w-100"
              onAdd={onAdd}
              onClick={handleSuma}
            >
              +
            </button>
          </div>
          <div className="col">
            <center>
              <label>{count}</label>
            </center>
          </div>
          <div className="col">
            <button
              className="btn btn-outline-dark w-100"
              onClick={handleResta}
            >
              -
            </button>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-outline-dark w-100" onClick={handleOnAdd}>
            Agregar al carrito
          </button>
        </div>
      </center>
    </>
  );
};

export default ItemCount;
