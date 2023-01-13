import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className=" bottom-0 left-0 z-20 mt-1 w-full border-t border-gray-200 bg-white p-4 shadow dark:border-gray-800 dark:bg-slate-800 md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023 <a className="hover:underline"></a>
          Todos los derechos reservados
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <Link to={"/contactanos"} className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </footer>
      <div className="bottom-0 mt-1 w-full bg-slate-200 p-4 transition-all duration-500 dark:bg-slate-800 dark:text-gray-400 ">
        <p className="text-center text-xl sm:text-2xl  ">
          Pagina web creada por <strong>Cristian Illi </strong> para el curso de
          react en Coderhouse usando{" "}
          <strong>Vite + Tailwind / FlowBite + React 18.2.0</strong>
        </p>
      </div>
    </>
  );
};
export default Footer;
