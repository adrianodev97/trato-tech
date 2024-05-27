import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultPage from "./components/DefaultPage";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />} >
          <Route index element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}