import React from "react";
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
            <img className="block w-full" src={image1} alt="" />
            <div className=" overlay ">
              {/* overlay absolute top-0 flex h-full w-full flex-col justify-center from-cyan-200 to-cyan-400 text-center text-[18px] tracking-widest mix-blend-multiply transition hover:bg-gradient-to-r hover:opacity-100*/}
              <a href="http://youtube.com" target="_blank">
                <h3>Diseño Creativo</h3>
              </a>
              <p>Fotografía</p>
            </div>
          </div>
          <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer">
            <img className="block w-full" src={image2} alt="" />
            <div className="overlay">
              <h3>Diseño Creativo</h3>
              <p>Fotografía</p>
            </div>
          </div>
          <div className="relative m-2.5 h-fit max-w-[300px] cursor-pointer">
            <img className="block w-full" src={image3} alt="" />
            <div className="overlay">
              <h3>Diseño Creativo</h3>
              <p>Fotografía</p>
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
