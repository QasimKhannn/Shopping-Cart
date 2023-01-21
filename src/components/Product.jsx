import React from "react";
import { UseGlobaldata } from "../Context/Context";

function Products(props) {
  let { prod } = props;
  let { state, dispatch } = UseGlobaldata();
  let { cart } = state;

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div class="card mb-5" style={{ boxShadow: "0px 0px 20px 3px black" }}>
        <img
          class="card-img-top"
          src={prod.images}
          alt="Card cap"
          style={{ objectFit: "contain" }}
        />
        <div class="card-body">
          <h5 class="card-title">{prod.title}</h5>
          <p>{prod.price}$</p>
          <p>{prod.description}</p>
          {cart.some((item) => item.id === prod.id) ? (
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch({
                  type: "Remove from Cart",
                  payload: prod,
                });
              }}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => {
                dispatch({
                  type: "Add to Cart",
                  payload: prod,
                });
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
