import { Button } from "../../libraries/primereact";
import { useCartContext } from "../../../context/CartContext";
import "./CounterContainer.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CounterContainer = ({ item, isDetail }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const { addCart, cartList } = useCartContext();

  useEffect(() => {
    const itemQuantity = cartList.find((i) => i.id === item.id)?.quantity;
    setCount((c) => (itemQuantity ? c + itemQuantity : 0));
  }, []);

  const countItem = (value) => {
    setCount(count + value);
  };

  return (
    <>
      <div className="button">
        <Button
          icon="pi pi-minus"
          className="p-button-raised"
          onClick={() => countItem(-1)}
        />
        <label>{count < 0 ? 0 : count}</label>
        <Button
          icon="pi pi-plus"
          className="p-button-raised p-button-success"
          onClick={() => countItem(1)}
        />
      </div>
      <Button
        style={{ marginRight: "1rem" }}
        className="p-button-raised"
        label="Ver más"
        onClick={() => navigate("/")}
      />
      {isDetail && count > 0 ? (
        <Button
          icon="pi pi-cart-plus"
          className="p-button-raised p-button-success btn-addCart"
          label="Agregar al carrito"
          onClick={() => addCart({ ...item, quantity: count })}
        />
      ) : null}
    </>
  );
};
