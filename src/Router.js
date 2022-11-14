import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home"
import { Products } from "./Pages/Products/Products";
import { Orders } from "./Pages/My Orders/Orders"
import { ProductView } from "./Pages/Product View/ProductView"
import { About } from "./Pages/About/About"
import { Navbar } from "./Components/Navbar/Navbar"
import { Footer } from "./Components/Footer/Footer"


export function Router() {
    return (
        <div id="router_container">
            <div id="router-left-content">
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/product_view/:id" element={<ProductView />} />
            </Routes>
            <Footer />
        </div>
    );
}
