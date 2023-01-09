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
      className="min flex justify-between bg-slate-200 p-[50px,20px] dark:bg-slate-800">
      <div className="m-auto max-w-[1100px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer">
            <img
              className="block  w-full"
              src={
                "http://www.agari.cl/imagenes-galeria/pantalon/pantalon-gabardina.jpg"
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
          <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer">
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
          <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer">
            <img
              className="block w-full"
              src={"https://paluca.com/fotosproductos/361_1.jpg"}
              alt=""
            />
            <div className="overlay">
              <h3>Chombas</h3>
            </div>
          </div>
          {/* <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Galeria;
