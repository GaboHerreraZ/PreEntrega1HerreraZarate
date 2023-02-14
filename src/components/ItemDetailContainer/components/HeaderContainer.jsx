export const HeaderContainer = ({ urlImage }) => {
  return (
    <img
      alt="Card"
      src={urlImage}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
};
