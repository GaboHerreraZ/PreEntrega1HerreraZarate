import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { getDbContext } from "../utils/firebase";

const createOrder = (order) => {
  const dbContext = getDbContext();
  const dbInstance = collection(dbContext, "orders");
  return addDoc(dbInstance, order);
};

const getOrders = async () => {
  const dbContext = getDbContext();
  const dbInstance = collection(dbContext, "orders");
  const q = query(dbInstance);
  const docs = await getDocs(q);
  const items = [];
  docs.forEach((d) => {
    items.push({
      id: d.id,
      ...d.data(),
    });
  });
  return items;
};

export { createOrder, getOrders };
