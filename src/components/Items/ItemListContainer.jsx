import ItemCount from "../Items/ItemCount";
import ItemList from "../Items/ItemList";
import { products } from "../../utils/products";
import { useState, useEffect } from "react";
import { customPromise } from "../../utils/customPromise";
import { useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
const ItemListContainer = ({}) => {
  const [listProducts, setListProducts] = useState([]);
  const { id } = useParams();

  /* useEffect(() => {
    customPromise(products).then((res) =>
      setListProducts(id ? res.filter((el) => el.categoria === id) : res)
    );
  }, [id]); */
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
  }, [id]);
  //   useEffect(() => {
  //   const db = getFirestore();
  //   const itemsCollection = collection(db, "items");
  //   products.forEach((item) => {
  //     addDoc(itemsCollection, item);
  //   });
  // }, []);
  /*   useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((data) => {
      console.log(data);
    });
  }, []); */
  return (
    <div>
      <ItemList listaProductos={listProducts} />
    </div>
  );
};

export default ItemListContainer;
