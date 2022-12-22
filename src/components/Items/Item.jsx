import { Link } from "react-router-dom";

const Item = ({ id, name, url, price, description }) => {
  return (
    <div>
      <Link to={"/item/" + id}>
        <div className="max-w-sm transform rounded-xl bg-white px-6 pt-6 pb-2 shadow-lg transition duration-500 hover:scale-105 dark:bg-slate-400">
          <h3 className="mb-3 text-xl font-bold text-indigo-600">{name}</h3>
          <img src={url} className="w-full rounded-xl" />
          <h1 className="text-center font-bold">{name}</h1>
          <p className="mt-4 cursor-pointer text-2xl font-bold text-gray-800">
            {" "}
            {description}
          </p>
          <p>Precio: $ {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
