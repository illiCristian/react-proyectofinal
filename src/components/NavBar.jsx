
import React, { useEffect, useRef, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import CardWidget from "./CardWidget";
import IconSun from "./Icons/IconSun";
import IconMoon from "./Icons/IconMoon";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { navigation } from "../utils/navbar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const initialStateDarkMode = localStorage.getItem("theme") === "dark";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);
  let location = useLocation().pathname;
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Disclosure
      as="nav"
      className="bg-slate-200 transition-all duration-500 dark:bg-slate-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl border-b px-2 shadow-lg sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-around">
              <div className="absolute inset-y-0 left-0 flex items-center  sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex  items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-10 w-10" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 pl-[80px] sm:flex sm:pl-0">
                  <NavLink to="/">
                    <img
                      /* ml-[] */
                      className=" block h-12 w-auto rounded-md lg:hidden"
                      src="https://images.template.net/wp-content/uploads/2017/04/Logo-Design1.jpg"
                      alt="Your Company"
                    />
                  </NavLink>
                  <NavLink to="/">
                    <img
                      className="hidden h-8 w-auto rounded-md lg:block"
                      src="https://images.template.net/wp-content/uploads/2017/04/Logo-Design1.jpg"
                      alt="Your Company"
                    />
                  </NavLink>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="mt-1 flex space-x-1 align-middle md:mt-0">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          location === item.to
                            ? "bg-gray-900 text-white"
                            : "font-semibold text-black transition-all duration-500 hover:bg-gray-600 hover:text-white dark:text-white",
                          "rounded-md px-2 py-2  text-base md:text-lg"
                        )}
                        aria-current={
                          location === item.to ? "page" : undefined
                        }>
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <CardWidget />
              </div>
              <div className="flex items-center pl-2">
                <button onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <IconMoon /> : <IconSun />}
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Disclosure.Button>
                {navigation.map((item) => (
                  <NavLink
                    to={item.to}
                    key={item.name}
                    className={classNames(
                      location === item.to
                        ? "bg-gray-500 dark:text-gray-200"
                        : " hover:bg-gray-700 hover:text-white dark:text-gray-200",
                      "block rounded-md px-3 py-2 text-left text-base font-medium"
                    )}
                    aria-current={location === item.to ? "page" : undefined}>
                    {item.name}
                  </NavLink>
                ))}
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
