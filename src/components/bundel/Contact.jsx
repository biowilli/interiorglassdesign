
import React from "react";
import EasyTrans from "./EasyTrans";
import profil from "./../../assets/profil/profil.jpeg";
const Contact = (props) => {
  return (
<div class="flex justify-center gap-8  mb-6 lg:mb-16 md:grid-cols-2 mt-20">
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="w-full rounded-lg m-2"
                  src={profil}
                  alt="Steffi Avatar"
                />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">                <EasyTrans>name</EasyTrans></a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">                <EasyTrans>CEO</EasyTrans></span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                <EasyTrans>introductionText</EasyTrans>
                </p>
              </div>
            </div>
    </div>
  );
};

export default Contact;
