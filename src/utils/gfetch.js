let productos = [
  {
    id: 1,
    category: "camisetas",
    price: 123123,
    urlImage:
      "https://brunosmoda.com/wp-content/uploads/2022/12/CAMISETA-PLUMETI-NEGRA-MUJER-10050501_0005-735-500x680.webp",
    gender: "f",
    description: "Camiseta básica para mujer",
  },
  {
    id: 2,
    category: "camisetas",
    price: 123123,
    urlImage:
      "https://brunosmoda.com/wp-content/uploads/2022/12/CAMISETA-PLUMETI-NEGRA-MUJER-10050501_0005-735-500x680.webp",
    gender: "f",
    description: "Camiseta básica para mujer",
  },
  {
    id: 3,
    category: "camisetas",
    price: 123123,
    urlImage:
      "https://brunosmoda.com/wp-content/uploads/2022/12/CAMISETA-PLUMETI-NEGRA-MUJER-10050501_0005-735-500x680.webp",
    gender: "f",
    description: "Camiseta básica para mujer",
  },
  {
    id: 4,
    category: "camisetas",
    price: 123123,
    urlImage:
      "https://brunosmoda.com/wp-content/uploads/2022/12/CAMISETA-PLUMETI-NEGRA-MUJER-10050501_0005-735-500x680.webp",
    gender: "f",
    description: "Camiseta básica para mujer",
  },
  {
    id: 5,
    category: "camisetas",
    price: 123123,
    urlImage:
      "https://brunosmoda.com/wp-content/uploads/2022/02/POLO-AMARILLO-LOIS-JEANS-HOMBRE-130584000_418-1-500x680.jpg",
    gender: "m",
    description: "Camiseta básica para hombre",
  },
  {
    id: 6,
    category: "camisetas",
    price: 123123,
    urlImage:
      "https://brunosmoda.com/wp-content/uploads/2022/02/POLO-AMARILLO-LOIS-JEANS-HOMBRE-130584000_418-1-500x680.jpg",
    gender: "m",
    description: "Camiseta básica para hombre",
  },
  {
    id: 7,
    category: "camisetas",
    price: 123123,
    urlImage:
      "https://brunosmoda.com/wp-content/uploads/2022/02/POLO-AMARILLO-LOIS-JEANS-HOMBRE-130584000_418-1-500x680.jpg",
    gender: "m",
    description: "Camiseta básica para hombre",
  },
  {
    id: 8,
    category: "camisetas",
    price: 123123,
    urlImage:
      "https://brunosmoda.com/wp-content/uploads/2022/02/POLO-AMARILLO-LOIS-JEANS-HOMBRE-130584000_418-1-500x680.jpg",
    gender: "m",
    description: "Camiseta básica para hombre",
  },
  {
    id: 9,
    category: "gorras",
    price: 123123,
    urlImage:
      "https://brunosmoda.com/wp-content/uploads/2022/08/GORRO-NEGRO-CON-POMPON-PARA-MUJER-10046274_000-500x680.jpg",
    gender: "f",
    description: "Gorro básico para mujer",
  },
  {
    id: 10,
    category: "gorras",
    price: 123123,
    urlImage:
      "https://brunosmoda.com/wp-content/uploads/2022/08/GORRO-NEGRO-CON-POMPON-PARA-MUJER-10046274_000-500x680.jpg",
    gender: "f",
    description: "Gorro básico para mujer",
  },
  {
    id: 11,
    category: "gorras",
    price: 123123,
    urlImage:
      "https://brunosmoda.com/wp-content/uploads/2022/08/GORRA-GRIS-10046084_090-2-500x680.jpg",
    gender: "m",
    description: "Gorro básico para hombre",
  },
  {
    id: 12,
    category: "gorras",
    price: 123123,
    urlImage:
      "https://brunosmoda.com/wp-content/uploads/2022/08/GORRA-GRIS-10046084_090-2-500x680.jpg",
    gender: "m",
    description: "Gorro básico para hombre",
  },
];

const gfetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

const gfetchByCategory = async ({ categoryId }) => {
  const items = await gfetch();
  return items.filter((item) => item.category === categoryId);
};

const gfetchByItemId = async ({ id }) => {
  const items = await gfetch();
  return items.find((item) => `${item.id}` === id);
};

export { gfetch, gfetchByCategory, gfetchByItemId };
