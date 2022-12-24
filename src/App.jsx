import "./App.css";

import NavbarContainer from "./components/NavbarContainer/NavbarContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavbarContainer />
      <ItemListContainer saludo="Tienda en construcción" />
    </>
  );
}

export default App;
