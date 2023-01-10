// aca van los detalles del item
import { customPromise } from "../../utils/customPromise";
import { products } from "../../utils/products";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";
import Loading from "../Loading";
const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "items", id);
    getDoc(queryDoc).then((res) => setItem({ id: res.id, ...res.data() }));
    setLoading(false);
  }, [id]);

  return <div>{loading ? <Loading /> : <ItemDetail item={item} />}</div>;
};
export default ItemDetailContainer;
