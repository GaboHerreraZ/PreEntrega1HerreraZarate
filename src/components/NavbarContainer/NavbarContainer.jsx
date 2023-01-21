import { Menubar } from "../../shared/primereact";
import { useNavigate } from "react-router-dom";
import "./NavbarContainer.css";

const NavbarContainer = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Productos",
      items: [
        {
          label: "Camisetas",
          command: () => {
            navigate("/category/camisetas");
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
    <i
      onClick={() => navigate("/cart")}
      className="pi pi-shopping-cart cart-icon"
      style={{ fontSize: "3rem" }}
    ></i>
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
