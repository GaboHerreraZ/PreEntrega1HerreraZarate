import { Card, Button } from "../../shared/primereact";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gfetchByItemId } from "../../utils/gfetch";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const params = useParams();
  const [item, setItem] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const { itemId: id } = params;
      const data = await gfetchByItemId({ id });
      setItem(data);
    };
    getData();
  }, [params]);

  const header = (
    <img
      alt="Card"
      src={item?.urlImage}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const footer = (
    <div className="button">
      <Button
        icon="pi pi-minus"
        className="p-button-raised"
        onClick={() => setCount(count - 1)}
      />
      <label>{count < 0 ? 0 : count}</label>
      <Button
        icon="pi pi-plus"
        className="p-button-raised p-button-success"
        onClick={() => setCount(count + 1)}
      />
    </div>
  );

  return (
    <div className="container">
      <Card
        title="Producto "
        subTitle={item?.price}
        style={{ width: "25em" }}
        footer={footer}
        header={header}
      >
        <p className="m-0" style={{ lineHeight: "1.5" }}>
          {item?.description}
        </p>
      </Card>
    </div>
  );
};
