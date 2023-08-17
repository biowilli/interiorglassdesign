import React from "react";
import EasyTrans from "./EasyTrans";
import profil from "./../../assets/profil/profil.jpeg";

const Contact = (props) => {
  return (
    <div className="flex justify-center gap-8 mb-6 lg:mb-16 md:grid-cols-2 mt-20">
      <div className="items-center bg-gray-50 rounded-lg shadow p-2">
        <img className="rounded-lg" src={profil} alt="Steffi Avatar" />
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">
              <EasyTrans>name</EasyTrans>
            </a>
          </h3>
          <span className="text-gray-500 dark:text-gray-400">
            <EasyTrans>CEO</EasyTrans>
          </span>
          <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
            <EasyTrans>introductionText</EasyTrans>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
