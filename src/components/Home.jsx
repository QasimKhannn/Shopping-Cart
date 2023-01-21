import React, { useContext } from "react";
import { AppContext } from "../Context/Context";
import Products from "./Product";

function Home() {
  let { state, isLoading } = useContext(AppContext);
  let { products } = state;

  return (
    <>
      <div className="container">
        <div className="container-fluid">
          <div className="row mt-2 d-flex">
            {isLoading ? (
              <h3>Loading</h3>
            ) : (
              products.map((prod) => {
                return <Products prod={prod} key={prod.id} />;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
