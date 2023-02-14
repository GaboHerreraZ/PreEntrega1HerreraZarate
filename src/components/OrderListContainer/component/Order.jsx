import "../OrderListContainer.css";

export const Order = (item) => {
  const price = item.quantity * item.price;

  return (
    <div className="list-container">
      <img className="img" alt={item.description} src={item.urlImage} />
      <div className="item-container-detail">
        <h2>{item.description}</h2>
        <h4>
          <strong>Cantidad:</strong> {item.quantity}
        </h4>
      </div>
      <h1>${price}</h1>
    </div>
  );
};
