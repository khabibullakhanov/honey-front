import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home"
import { Products } from "./Pages/Products/Products";
import { Orders } from "./Pages/My Orders/Orders"
import { ProductView } from "./Pages/Product View/ProductView"
import { About } from "./Pages/About/About"
import { Navbar } from "./Components/Navbar/Navbar"
import { Footer } from "./Components/Footer/Footer"
import "./Assets/Css/Global.css";
import { NotFounded } from "./Components/NotFounded/NotFounded";
import { ViewOrder } from "./Components/ViewOrder/ViewOrder";

export function Router() {
    return (
        <div id="router">
            <Navbar />
            <Routes id="router-center">
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/product_view/:id" element={<ProductView />} />
                <Route path="/order_view/:id" element={<ViewOrder />} />
                <Route path="*" element={<NotFounded />} />
            </Routes>
            <Footer />
        </div>
    );
}
