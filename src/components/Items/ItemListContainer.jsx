import ItemCount from "../Items/ItemCount";
import ItemList from "../Items/ItemList";
import { products } from "../../utils/products";
import { useState, useEffect } from "react";
import { customPromise } from "../../utils/customPromise";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
const ItemListContainer = ({}) => {
  const [listProducts, setListProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    customPromise(products).then((res) =>
      setListProducts(id ? res.filter((el) => el.categoria === id) : res)
    );
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
