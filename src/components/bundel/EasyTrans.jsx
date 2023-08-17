import React from "react";
import { useTranslation } from "react-i18next";

const EasyTrans = (props) => {
  const { t } = useTranslation();
  return <>{t(props.children)}</>;
};

export default EasyTrans;
