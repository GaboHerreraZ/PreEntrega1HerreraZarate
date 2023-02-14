import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getDbContext } from "../utils/firebase";

const getItemList = async (categoryId) => {
  const dbContext = getDbContext();
  const dbInstance = collection(dbContext, "items");
  const q = !categoryId
    ? query(dbInstance)
    : query(dbInstance, where("category", "==", categoryId));

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

const getItemById = async (id) => {
  const dbContext = getDbContext();
  const itemInstance = doc(dbContext, "items", id);
  const item = await getDoc(itemInstance);
  return {
    id,
    ...item.data(),
    quantity: 0,
  };
};

export { getItemList, getItemById };
