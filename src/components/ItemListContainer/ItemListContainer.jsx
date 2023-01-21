import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { gfetch, gfetchByCategory } from "../../utils/gfetch";
import { ItemContainer } from "../ItemContainer/ItemContainer";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const params = useParams();
  const { categoryId } = params;

  useEffect(() => {
    if (categoryId) {
      gfetchByCategory({ categoryId }).then((p) => setItems(p));
    } else {
      gfetch().then((p) => setItems(p));
    }
  }, [categoryId]);

  return (
    <div className="itemListContainer">
      <>
        <div className="item-list">
          {items.map((item) => (
            <ItemContainer key={item.id} item={item} />
          ))}
        </div>
      </>
    </div>
  );
};

export default ItemListContainer;
