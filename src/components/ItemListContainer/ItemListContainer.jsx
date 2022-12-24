import "./ItemListContainer.css";

const ItemListContainer = (obj) => {
  const { saludo } = obj;
  return <div className="itemListContainer">{saludo}</div>;
};

export default ItemListContainer;
