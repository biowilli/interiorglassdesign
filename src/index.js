import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import LanguageService from "./services/LanguageService";
import React from "react";
import { createRoot } from "react-dom/client";

//import reportWebVitals from './reportWebVitals';
//https://tariqul-islam-rony.medium.com/internationalization-localization-with-react-js-65d6f6badd56

const container = document.getElementById("root");
const root = createRoot(container);
const languageService = LanguageService.initLanguage();

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={languageService}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
