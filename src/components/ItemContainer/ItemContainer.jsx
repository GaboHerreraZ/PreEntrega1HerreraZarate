import { useNavigate } from "react-router-dom";

import { Card, Button } from "../../shared/primereact";
import "./ItemContainer.css";

export const ItemContainer = ({ item }) => {
  const navigate = useNavigate();
  const { urlImage, description, price, id } = item;
  console.log(item);
  const header = <img alt="Card" src={urlImage} />;
  const subTitle = <h1>${price}</h1>;
  const footer = (
    <span>
      <Button
        label="Ver detalle"
        icon="pi pi-check"
        className="p-button-raised p-button-secondary"
        onClick={() => navigate(`/item/${id}`)}
      />
    </span>
  );

  return (
    <Card footer={footer} header={header} subTitle={subTitle}>
      <p className="description">{description}</p>
    </Card>
  );
};
