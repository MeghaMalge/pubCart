import "./App.css";
import React from "react";
import ProductsList from "../PrductList/product-list";
import MembersList from "../MembersList/members-list";
import NavMenu from "../nav/nav";
import Cart from "../cart/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <NavMenu />
                <ProductsList />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/members"
            element={
              <React.Fragment>
                <NavMenu />
                <MembersList />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <React.Fragment>
                <NavMenu />
                <Cart />
              </React.Fragment>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
