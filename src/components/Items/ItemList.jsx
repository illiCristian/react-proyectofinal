import Item from "./Item";
const ItemList = ({ listaProductos }) => {
  return (
    <div className="mt-1 grid min-h-screen  justify-center bg-slate-200 py-20 transition-all duration-500 dark:bg-gray-800 ">
      <div className="grid max-w-[1000px] gap-2 p-4 transition-all duration-500 dark:bg-slate-800 sm:grid-cols-2 md:grid-cols-3">
        {listaProductos.map((el) => (
          <Item
            key={el.id}
            name={el.name}
            id={el.id}
            description={el.description}
            price={el.price}
            url={el.url}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

// className="md:grid md:grid-cols-2 md:space-y-0 md:px-4 lg:grid-cols-3 grid gap-5 space-y-4 transition-all duration-500 dark:bg-slate-800 sm:grid-cols-2 "
