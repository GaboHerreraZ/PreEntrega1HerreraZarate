import { Card } from "../../shared/libraries/primereact";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { CounterContainer } from "../../shared/components/counter/CounterContainer";
import { HeaderContainer } from "./components/HeaderContainer";
import { useCartContext } from "../../context/CartContext";
import { getItemById } from "../../fetch/itemFetch";

export const ItemDetailContainer = () => {
  const params = useParams();
  const [item, setItem] = useState();
  const { loading, updateLoading } = useCartContext();

  useEffect(() => {
    updateLoading(true);
    const getData = async () => {
      const { itemId: id } = params;
      const data = await getItemById(id);
      setItem(data);
      updateLoading(false);
    };
    getData();
  }, [params]);

  return (
    <div className="container">
      <h1>Detalle del producto</h1>
      {!loading && item && (
        <Card
          title="Producto "
          subTitle={item?.price}
          style={{ width: "25em" }}
          footer={<CounterContainer item={item} isDetail={true} />}
          header={<HeaderContainer urlImage={item?.urlImage} />}
        >
          <h1 className="m-0" style={{ lineHeight: "1.5" }}>
            {item?.description}
          </h1>
        </Card>
      )}
    </div>
  );
};
