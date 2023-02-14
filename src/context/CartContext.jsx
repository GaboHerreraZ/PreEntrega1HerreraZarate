import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { LoadingContainer } from "../components/LoadingContainer/LoadingContainer";
import { LoadingContainerState } from "../components/LoadingContainer/LoadingContainerState";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContexProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const { loading, updateLoading } = LoadingContainerState();

  const addCart = (product) => {
    const productFound = cartList.find((p) => p.id === product.id);
    if (productFound) {
      productFound.quantity = product.quantity;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, product]);
    }
  };

  const clearCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addCart, clearCart, loading, updateLoading }}
    >
      {loading && <LoadingContainer />}
      {children}
    </CartContext.Provider>
  );
};
