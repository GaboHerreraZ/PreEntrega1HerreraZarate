import { Card, Button, Dialog } from "../../shared/libraries/primereact";
import { useCartContext } from "../../context/CartContext";
import "./CartContainer.css";
import { DataView } from "../../shared/libraries/primereact";
import { ItemsCart } from "./components/ItemCart";
import { useState } from "react";
import { OrderContainer } from "../OrderContainer/OrderContainer";
import { useNavigate } from "react-router-dom";

export const CartContainer = () => {
  const { cartList } = useCartContext();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const total = cartList.reduce((previous, current) => {
    return previous + current.quantity * current.price;
  }, 0);

  return (
    <div style={{ textAlign: "center" }}>
      {cartList.length > 0 ? (
        <div className="purchase-detail">
          <h1>Detalle de su compra</h1>
          <Card className="items-container">
            <DataView value={cartList} itemTemplate={ItemsCart} />
            {total ? (
              <>
                <h1 style={{ textAlign: "end" }}>Total: ${total} </h1>
                <Button
                  style={{ marginRight: "1rem" }}
                  className="p-button-raised"
                  label="Seguir Comprando"
                  onClick={() => navigate("/")}
                />
                <Button
                  icon="pi pi-cart-plus"
                  className="p-button-raised p-button-success btn-addCart"
                  label="Generar Orden"
                  onClick={() => setVisible(true)}
                />
              </>
            ) : null}
          </Card>
        </div>
      ) : (
        <h1 className="container">No hay productos en el carrito</h1>
      )}
      <Button
        style={{ marginTop: "1rem" }}
        className="p-button-raised container"
        label="Ver Ordenes"
        onClick={() => navigate("/orders")}
      />
      <Dialog
        header="Generar Orden"
        visible={visible}
        style={{ width: "15vw" }}
        onHide={() => setVisible(false)}
      >
        <OrderContainer />
      </Dialog>
    </div>
  );
};
