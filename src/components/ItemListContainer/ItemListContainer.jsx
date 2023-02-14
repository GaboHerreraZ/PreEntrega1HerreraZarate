import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { ItemContainer } from "../ItemContainer/ItemContainer";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { getItemList } from "../../fetch/itemFetch";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { loading, updateLoading } = useCartContext();
  const params = useParams();
  const { categoryId } = params;

  useEffect(() => {
    updateLoading(true);
    const getItemListDb = async (categoryId) => {
      const items = await getItemList(categoryId);
      setItems(items);
    };

    if (categoryId) {
      getItemListDb(categoryId);
    } else {
      getItemListDb();
    }
    updateLoading(false);
  }, [categoryId]);

  return (
    <>
      {!loading && (
        <div className="itemListContainer">
          <>
            <div className="item-list">
              {items.map((item) => (
                <ItemContainer key={item.id} item={item} />
              ))}
            </div>
          </>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
