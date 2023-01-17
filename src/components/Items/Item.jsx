import { Link } from "react-router-dom";

const Item = ({ id, name, url, price }) => {
  return (
    <div>
      <Link to={"/item/" + id}>
        <div className="relative max-w-sm transform rounded-xl bg-white px-2 pt-2 pb-2 shadow-lg transition duration-500 hover:scale-105 dark:bg-slate-400 sm:h-[440px] md:h-[400px]">
          {/* <h3 className="mb-3 text-center text-xl font-bold text-black underline-offset-1">
            {name}
          </h3> */}
          <img src={url} className="w-full rounded-xl" />
          {/* <h1 className="text-center font-bold">{name}</h1> */}
          <div class="flex w-full min-w-0 items-center justify-between ">
            <h2 class="mr-4 cursor-pointer truncate text-lg font-medium text-gray-800">
              {name}
            </h2>
            <div class="ml-3 flex items-center rounded-lg bg-green-400 px-2 py-1 text-xs text-white dark:bg-gray-800">
              INSTOCK
            </div>
          </div>
          <div class="mt-2 flex items-center justify-between rounded-md bg-gray-900 px-4 py-2">
            <h1 class="text-xl font-bold text-gray-200">${price}</h1>
            <button class="rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-900">
              Add to card
            </button>
          </div>
          {/* <p className="mt-2 mb-2 text-right text-xl font-semibold text-white sm:absolute sm:bottom-2 sm:right-2">
            Precio: $ <strong>{price}</strong>
          </p> */}
        </div>
      </Link>
    </div>
  );
};

export default Item;
