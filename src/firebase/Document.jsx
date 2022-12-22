import React from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
const Document = () => {
  useEffect(() => {
    // const [product, setProduct] = useState({});
    const db = getFirestore();
    const item = doc(db, "items", "EooXE9jRcDYxLc8ScqXk");
    getDoc(item).then((data) => {
      if (data.exists()) {
        console.log(data.data());
      } else {
        console("no existe");
      }
    });
  }, []);
  return <div>Document</div>;
};

export default Document;
