import { Alert } from "flowbite-react";
const GeneratedOrder = ({ orderId }) => {
  return (
    <Alert color="info" className="rounded-none dark:bg-slate-900 ">
      <span>
        <span className="text-3xl font-medium dark:text-black">
          Orden Generada Correctamente!
        </span>{" "}
        <div>
          <b className="dark:text-black">
            Se genero la orden de compra con el id: {orderId}
          </b>
        </div>
        <div>
          <b className="dark:text-black">
            {" "}
            Recibira un mail con toda la informacion para proceder con su compra
          </b>
        </div>
      </span>
    </Alert>
  );
};

export default GeneratedOrder;
