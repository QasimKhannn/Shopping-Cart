import React from "react";
import { UseGlobaldata } from "../Context/Context";
const Cart = ({ prod }) => {
  let { state, dispatch } = UseGlobaldata();
  let { cart } = state;
  return (
    <>
      <div className="container mt-3 row">
        {cart.length > 0 ? (
          cart.map((e) => {
            return (
              <>
                <div className="container d-flex">
                  <img
                    src={e.images}
                    alt="...."
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      marginLeft: "3rem",
                    }}
                  />
                  <p style={{ marginLeft: "3rem" }}>{e.title}</p>
                  <p style={{ marginLeft: "3rem" }}>{e.price}</p>
                  <p style={{ marginLeft: "3rem" }}>{e.description}</p>
                </div>
              </>
            );
          })
        ) : (
          <h1>Empty</h1>
        )}
      </div>
    </>
  );
};

export default Cart;
