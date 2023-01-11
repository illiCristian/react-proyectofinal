import ItemList from "../Items/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import Loading from "../Loading";
const ItemListContainer = ({}) => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "items");
    if (id) {
      const queryFilter = query(queryCollection, where("categoria", "==", id));
      getDocs(queryFilter).then((res) =>
        setListProducts(res.docs.map((el) => ({ id: el.id, ...el.data() })))
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setListProducts(res.docs.map((el) => ({ id: el.id, ...el.data() })))
      );
    }
    setLoading(false);
  }, [id]);
  return (
    <div>
      {loading ? <Loading /> : <ItemList listaProductos={listProducts} />}
    </div>
  );
};

export default ItemListContainer;
