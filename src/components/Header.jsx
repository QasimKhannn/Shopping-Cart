import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { UseGlobaldata } from "../Context/Context";

const Header = () => {
  let { state, dispatch } = UseGlobaldata();
  let { cart } = state;

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavbarBrand>
            <NavLink> E-Shopping</NavLink>
          </NavbarBrand>
          <Navbar.Text style={{ width: "500px" }} className="m-auto">
            <FormControl placeholder="Search" />
          </Navbar.Text>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle>
                <FaShoppingCart />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: "400px" }} align="end">
                {cart.length > 0 ? (
                  cart.map((e) => {
                    return (
                      <>
                        <div
                          className="container d-flex"
                          style={{ margin: "1rem" }}
                        >
                          <img
                            src={e.images}
                            style={{
                              height: "2.5rem",
                              width: "2.5rem",
                              borderRadius: "50%",
                              border: "1px solid black",
                            }}
                            alt="what"
                          />
                          <p style={{ marginLeft: "1rem" }}>{e.title}</p>
                          <p style={{ marginLeft: "4px" }}>{e.price}</p>
                          <button
                            style={{
                              border: "none",
                              backgroundColor: "white",
                              padding: "0px",
                              marginLeft: "1rem",
                              marginBottom: "1rem",
                            }}
                            onClick={() => {
                              dispatch({
                                type: "Remove from Cart",
                                payload: e,
                              });
                            }}
                          >
                            <AiFillDelete />
                          </button>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <h6>Empty</h6>
                )}
                <div className="container d-flex justify-content-center">
                  <button className="btn btn-dark">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/cart"
                    >
                      Go To Cart
                    </Link>{" "}
                  </button>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
