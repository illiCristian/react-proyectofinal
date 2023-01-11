import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";
import Loading from "../Loading";
import Error404 from "../Error404";
const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "items", id);
    getDoc(queryDoc).then((res) => {
      if (res.exists()) {
        setItem({ id: res.id, ...res.data() });
        setLoading(false);
      } else {
        setLoading(false);
        setItem(false);
      }
    });
  }, [id]);
  if (item) {
    return <div>{loading ? <Loading /> : <ItemDetail item={item} />}</div>;
  } else {
    return (
      <div>
        <h1 className="text-4xl">El producto no existe</h1>
      </div>
    );
  }
};
export default ItemDetailContainer;
