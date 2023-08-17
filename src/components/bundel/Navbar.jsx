//import React from 'react';
/* This example requires Tailwind CSS v2.0+ */

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";

import EasyTrans from "./EasyTrans";
import { Fragment } from "react";
import Language from "./Language";
import { NavLink } from "react-router-dom";
import fairkomlogo from "./../../../src/assets/logo/logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [landingpage, setLandingpage] = useState(true);
  const [searchwork, setSearchwork] = useState(true);

  useEffect(() => {
    resetAllNavStates();
    switch (window.location.pathname) {
      case "/":
        setLandingpage(true);
        break;
      case "/glas":
        setSearchwork(true);
        break;
    }
  });

  function resetAllNavStates() {
    setLandingpage(false);
    setSearchwork(false);
  }

  return (
    <Disclosure as="nav" className="bg-fairpage border-b-2 border-fairblue">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:border-2 hover:border-fairblue focus:fairblue">
                  <span className="sr-only">
                    <EasyTrans>Navigation.SrMenuOpen</EasyTrans>
                  </span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 text-fairblue"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block h-6 w-6 text-fairblue"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <NavLink
                    to="/"
                    onClick={() => {
                      resetAllNavStates();
                      setLandingpage(true);
                    }}
                  >
                    <img
                      className="hidden lg:block h-10 w-auto"
                      src={fairkomlogo}
                      alt="fairkomlogo"
                    />
                  </NavLink>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <NavLink
                      to="/"
                      onClick={() => {
                        resetAllNavStates();
                        setLandingpage(true);
                      }}
                      className={classNames(
                        landingpage ? "border-b-2 border-fairblue" : "",
                        "px-3 py-2 text-sm font-medium text-fairblue hover:bg-fairblue hover:text-fairgray hover:rounded-md",
                      )}
                      aria-current={true ? "page" : undefined}
                    >
                      Organisator
                    </NavLink>
                    <NavLink
                      to="/glas"
                      onClick={() => {
                        resetAllNavStates();
                        setSearchwork(true);
                      }}
                      className={classNames(
                        searchwork ? "border-b-2 border-fairblue" : "",
                        "px-3 py-2 text-sm font-medium text-fairblue hover:bg-fairblue hover:text-fairgray hover:rounded-md",
                      )}
                      aria-current={true ? "page" : undefined}
                    >
                      Glas
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700",
                            )}
                          >
                            <EasyTrans>Navigation.Profil</EasyTrans>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700",
                            )}
                          >
                            <EasyTrans>Navigation.Logout</EasyTrans>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <Language></Language>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                onClick={() => {
                  resetAllNavStates();
                  setLandingpage(true);
                }}
              >
                <Disclosure.Button
                  as="a"
                  className={classNames(
                    landingpage ? "border-b-2 border-fairblue" : "",
                    "block px-3 py-2 text-base px-3 py-2 text-sm font-medium text-fairblue hover:bg-fairblue hover:text-fairgray hover:rounded-md",
                  )}
                  aria-current={false ? "page" : undefined}
                >
                  Organisator
                </Disclosure.Button>
              </NavLink>
              <NavLink
                to="/glas"
                onClick={() => {
                  resetAllNavStates();
                  setSearchwork(true);
                }}
              >
                <Disclosure.Button
                  as="a"
                  className={classNames(
                    searchwork ? "border-b-2 border-fairblue" : "",
                    "block px-3 py-2 text-base px-3 py-2 text-sm font-medium text-fairblue hover:bg-fairblue hover:text-fairgray hover:rounded-md",
                  )}
                  aria-current={false ? "page" : undefined}
                >
                  Glas
                </Disclosure.Button>
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
//Disclosure.Panel Hamburger Icon BUG
export default Navbar;
