import React from "react";
import { useState } from "react";

const Contactanos = () => {
  const [data, setData] = useState({
    email: "",
    nombre: "",
    telefono: "",
    mensaje: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="min-h-screen p-8 transition-all duration-500 dark:bg-slate-800">
        <div className="group relative z-0 mb-6 w-full">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="transhtmlForm absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
            Direccion de email
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              value={data.nombre}
              onChange={(e) => setData({ ...data, nombre: e.target.value })}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="transhtmlForm absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
              Nombre Completo
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="tel"
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              value={data.telefono}
              onChange={(e) => setData({ ...data, telefono: e.target.value })}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="transhtmlForm absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
              Numero de telefono
            </label>
          </div>
        </div>

        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          value={data.mensaje}
          onChange={(e) => setData({ ...data, mensaje: e.target.value })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Leave a comment..."></textarea>

        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
          Submit
        </button>
      </form>
    </>
  );
};

export default Contactanos;
