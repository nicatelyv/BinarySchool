import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Detail from "../pages/Detail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/products/:id/details",
        element: <Detail />
    }
])