import { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { getOrders } from "../../fetch/orderFetch";
import {
  Card,
  DataView,
  Dialog,
  DataTable,
  Column,
  Button,
} from "../../shared/libraries/primereact";
import { Order } from "./component/Order";

export const OrderListContainer = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [listProduct, setListProducts] = useState([]);

  const { loading, updateLoading } = useCartContext();

  useEffect(() => {
    const orders = async () => {
      updateLoading(true);
      const orderList = await getOrders();
      setItems(orderList);
      updateLoading(false);

      console.log("orderList", orderList);
    };
    orders();
  }, []);

  const setProductsOrder = (rowData) => {
    console.log("rowData", rowData);
    const { order } = rowData;
    setListProducts(order);
    setVisible(true);
  };

  const getButton = (rowData) => {
    return (
      <Button
        icon="pi pi-bars"
        className="p-button-raised p-button-success"
        placeholder="Ver productos"
        onClick={() => setProductsOrder(rowData)}
      />
    );
  };

  return (
    <>
      {!loading && (
        <Card>
          <DataTable value={items} responsiveLayout="scroll">
            <Column field="name" header="Nombre"></Column>
            <Column field="email" header="Correo"></Column>
            <Column field="address" header="Dirección"></Column>
            <Column body={getButton}></Column>
          </DataTable>
        </Card>
      )}
      <Dialog
        header="Productos"
        visible={visible}
        style={{ width: "35vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="order-list-container">
          <DataView value={listProduct} itemTemplate={Order}></DataView>
        </div>
      </Dialog>
    </>
  );
};
