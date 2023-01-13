import { Carousel } from "flowbite-react";
const Carousel1 = () => {
  return (
    <>
      <div className="mt-[1px] h-56 text-center sm:h-64 xl:h-80 2xl:h-96">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel className="w-full">
            <img
              className="h-full"
              src="https://i.ibb.co/Mpg6Y59/img3.jpg"
              alt="..."
            />
            <img
              src="https://vermediamanager.prod.ingecloud.com/MediaFiles/Topyed/2022/12/23/1905089.jpg"
              alt="..."
            />
            <img
              className="h-full"
              src="https://i.ibb.co/1btNrSb/img2.jpg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Carousel1;
