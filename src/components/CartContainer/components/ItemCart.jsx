import "../CartContainer.css";

export const ItemsCart = (item) => {
  const price = item.quantity * item.price;

  return (
    <div className="item-container">
      <img className="img" alt={item.description} src={item.urlImage} />
      <div className="item-container-detail">
        <h1>{item.description}</h1>
        <h3>
          <strong>Cantidad:</strong> {item.quantity}
        </h3>
      </div>
      <h1>${price}</h1>
    </div>
  );
};
