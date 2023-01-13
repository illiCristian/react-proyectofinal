import { Link } from "react-router-dom";
import "../styles/galeria.css";
const Galeria = () => {
  return (
    <section
      id="portfolio"
      className="flex justify-between  bg-slate-200 p-[50px,20px] dark:bg-slate-800">
      <div className="m-auto max-w-[1100px] ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 ">
          <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer overflow-hidden rounded-2xl">
            <img
              className="block  w-full"
              src={
                "http://www.agari.cl/imagenes-galeria/pantalon/pantalon-gabardina.jpg"
              }
              alt=""
            />
            <div className=" overlay ">
              <Link to={"/category/pantalones"}>
                <h3>Pantalones</h3>
              </Link>
            </div>
          </div>
          <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer overflow-hidden rounded-2xl">
            <img
              className="block  w-full "
              src={
                "https://www.propagadorcristiano.com.ar/wp-content/uploads/2020/05/ID-CA_-_Camisas_todas.jpg"
              }
              alt=""
            />
            <div className="overlay">
              <Link to={"/category/camisas"}>
                <h3>Camisas</h3>
              </Link>
            </div>
          </div>
          <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer overflow-hidden rounded-2xl">
            <img
              className="block  w-full"
              src={"https://paluca.com/fotosproductos/316_1.jpg"}
              alt=""
            />
            <div className="overlay">
              <Link to={"/category/remeras"}>
                <h3>Remeras</h3>
              </Link>
            </div>
          </div>
          <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer overflow-hidden rounded-2xl">
            <img
              className="block w-full"
              src={"https://paluca.com/fotosproductos/361_1.jpg"}
              alt=""
            />
            <div className="overlay">
              <h3>Chombas</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
