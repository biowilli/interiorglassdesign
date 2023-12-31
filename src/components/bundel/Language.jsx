import React, { useEffect, useState } from "react";
import LanguageService from "../../services/LanguageService";
import ISO6391 from "iso-639-1";

const Language = () => {
  const [selectedSVG, setSelectedSVG] = useState(null);

  const handleSVGClick = (id) => {
    setSelectedSVG(id === selectedSVG ? null : id);
    let code = id.slice(-2);
    LanguageService.changeLanguage(code).then((value) => {
      console.log("language changed");
    });
  };

  return (
    <div>
      <div class="flex justify-center items-center">
        <div
          className={`cursor-pointer rounded-full w-8 h-8 m-1 overflow-hidden ${
            selectedSVG === "flag-icons-de" ? "border-2 border-fairblue" : ""
          }`}
          onClick={() => handleSVGClick("flag-icons-de")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="flag-icons-de"
            viewBox="0 0 512 512"
          >
            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
            <path d="M0 0h512v170.7H0z" />
            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
          </svg>
        </div>
        <div
          className={`cursor-pointer rounded-full w-8 h-8 m-1 overflow-hidden ${
            selectedSVG === "flag-icons-en" ? "border-2 border-fairblue" : ""
          }`}
          onClick={() => handleSVGClick("flag-icons-en")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="flag-icons-en"
            viewBox="0 0 512 512"
          >
            <path fill="#012169" d="M0 0h512v512H0z" />
            <path
              fill="#FFF"
              d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
            />
            <path
              fill="#C8102E"
              d="m184 324 11 34L42 512H0v-3l184-185zm124-12 54 8 150 147v45L308 312zM512 0 320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"
            />
            <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z" />
            <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z" />
          </svg>
        </div>
        <div
          className={`cursor-pointer rounded-full w-8 h-8 m-1 overflow-hidden ${
            selectedSVG === "flag-icons-fr" ? "border-2 border-fairblue" : ""
          }`}
          onClick={() => handleSVGClick("flag-icons-fr")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="flag-icons-fr"
            viewBox="0 0 512 512"
          >
            <path fill="#fff" d="M0 0h512v512H0z" />
            <path fill="#002654" d="M0 0h170.7v512H0z" />
            <path fill="#ce1126" d="M341.3 0H512v512H341.3z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Language;
