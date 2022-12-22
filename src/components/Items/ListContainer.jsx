import { useEffect, useState } from "react";
import { products } from "../../utils/products";
import { customPromise } from "../../utils/customPromise";
import Item from "./Item";

const ListContainer = () => {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    customPromise(products).then((res) => setListProducts(res));
  }, []);

  return (
    <>
      <Item listProducts={listProducts} />
    </>
  );
};

export default ListContainer;
