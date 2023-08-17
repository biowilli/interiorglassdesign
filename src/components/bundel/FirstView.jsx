import React from "react";
import fairkomlogo from "./../../../src/assets/logo/logo.png";
import EasyTrans from "./EasyTrans";
const FirstView = (props) => {
  return (
    <div class="h-screen">
      <div>
        <div class="m-10 flex justify-center items-center">
          <img class="w-96 h-auto" src={fairkomlogo} alt="Bildbeschreibung" />
        </div>
        <div className="m-6 py-12 bg-fairpage">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h1 className="text-1xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{props.headerblack}</span>{" "}
                <span className="block text-fairblue xl:inline">
                  {props.headerColor}
                </span>
              </h1>
              <p class="mt-4 mb-6 text-lg font-normal text-gray-500 lg:text-xl xl:px-48 dark:text-gray-400">
                {props.caption}
              </p>
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-fairblue  rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                <EasyTrans>tellMore</EasyTrans>
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstView;
