import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/img/p1.jpg";
import image2 from "../assets/img/p2.jpg";
import image3 from "../assets/img/p3.jpg";
import image4 from "../assets/img/p4.jpg";
import image5 from "../assets/img/p5.jpg";
import image6 from "../assets/img/p6.jpg";
import "../styles/galeria.css";

const Galeria = () => {
  return (
    <section
      id="portfolio"
      className="flex justify-between bg-slate-200 p-[50px,20px] dark:bg-slate-800">
      <div className="m-auto max-w-[1100px]">
        <div className="flex flex-wrap justify-around">
          <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer">
            <img
              className="block h-[230px] w-full"
              src={
                "https://http2.mlstatic.com/D_NQ_NP_936504-MLA31979001433_082019-O.jpg"
              }
              alt=""
            />
            <div className=" overlay ">
              {/* overlay absolute top-0 flex h-full w-full flex-col justify-center from-cyan-200 to-cyan-400 text-center text-[18px] tracking-widest mix-blend-multiply transition hover:bg-gradient-to-r hover:opacity-100*/}
              <Link to={"/category/pantalones"}>
                <h3>Pantalones</h3>
              </Link>
            </div>
          </div>
          <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer">
            <img
              className="block h-[230px] w-full "
              src={
                "https://imagenes.cordobavende.com/medianas/chombas-lisas-somos-fabricantes-44165288-1-1.jpg"
              }
              alt=""
            />
            <div className="overlay">
              <Link to={"/category/chombas"}>
                <h3>Chombas</h3>
              </Link>
            </div>
          </div>
          <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer">
            <img
              className="block h-[230px] w-full"
              src={
                "https://d3ugyf2ht6aenh.cloudfront.net/stores/533/749/products/remeras-cuello-redondo1-29e6a0fbb0f812b0d815125364200182-480-0.jpg"
              }
              alt=""
            />
            <div className="overlay">
              <Link to={"/category/remeras"}>
                <h3>Remeras</h3>
              </Link>
            </div>
          </div>
          <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer">
            <img className="block w-full" src={image4} alt="" />
            <div className="overlay">
              <h3>Diseño Creativo</h3>
              <p>Fotografía</p>
            </div>
          </div>
          <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer">
            <img className="block w-full" src={image5} alt="" />
            <div className="overlay">
              <h3>Diseño Creativo</h3>
              <p>Fotografía</p>
            </div>
          </div>
          <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer">
            <img className="block w-full" src={image6} alt="" />
            <div className="overlay">
              <h3>Diseño Creativo</h3>
              <p>Fotografía</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
