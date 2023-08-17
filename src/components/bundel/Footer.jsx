import EasyTrans from "./EasyTrans";
import { NavLink } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-fairpage md:px-6 md:py-8 border-t-2 border-fairblue">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-2xl font-semibold nowrap text-fairblue">
            interior glass design
          </span>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-fairblue-500 sm:mb-0">
          <li>
            <NavLink
              to="/imprint"
              className=" px-3 py-2 text-sm font-medium text-fairblue hover:bg-fairblue hover:text-fairgray hover:rounded-md"
              aria-current={true ? "page" : undefined}
            >
              <EasyTrans>imprint</EasyTrans>
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
