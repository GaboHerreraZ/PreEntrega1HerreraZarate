import { Menubar, Badge } from "../../shared/libraries/primereact";
import { useNavigate } from "react-router-dom";
import "./NavbarContainer.css";
import { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";

const NavbarContainer = () => {
  const navigate = useNavigate();
  const { cartList } = useCartContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const count = cartList.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);

    setTotal(count);
  }, [cartList]);

  const items = [
    {
      label: "Productos",
      items: [
        {
          label: "Camisetas",
          command: () => {
            navigate("/category/camiseta");
          },
        },
        {
          label: "Gorras",
          command: () => {
            navigate("/category/gorras");
          },
        },
      ],
    },
  ];

  const start = <h1 className="title">Strongest</h1>;
  const end = (
    <span className="badge-container">
      <Badge value={total} size="large"></Badge>
      <i
        onClick={() => navigate("/cart")}
        className="pi pi-shopping-cart cart-icon"
        style={{ fontSize: "3rem" }}
      ></i>
    </span>
  );

  return (
    <Menubar
      start={start}
      model={items}
      end={end}
      style={{ fontSize: "1rem" }}
    />
  );
};

export default NavbarContainer;
