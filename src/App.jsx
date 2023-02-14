import "./App.css";

import NavbarContainer from "./components/NavbarContainer/NavbarContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContainer } from "./components/CartContainer/CartContainer";
import { CartContexProvider } from "./context/CartContext";
import { OrderListContainer } from "./components/OrderListContainer/OrderListContainer";
function App() {
  return (
    <>
      <CartContexProvider>
        <BrowserRouter>
          <NavbarContainer />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/orders" element={<OrderListContainer />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </CartContexProvider>
    </>
  );
}

export default App;
