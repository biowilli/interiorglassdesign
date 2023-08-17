import { HeartIcon } from "@heroicons/react/outline";

import React from "react";
import EasyTrans from "./../components/bundel/EasyTrans";
import { useNavigate } from "react-router-dom";
import FirstView from "../components/bundel/FirstView";
import Contact from "../components/bundel/Contact";

const features = [
  {
    name: <EasyTrans>serviceOrganisator1</EasyTrans>,
    description: <EasyTrans>serviceCaptionOrganisator1</EasyTrans>,
    icon: HeartIcon,
  },
  {
    name: <EasyTrans>serviceOrganisator2</EasyTrans>,
    description: <EasyTrans>serviceCaptionOrganisator2</EasyTrans>,
    icon: HeartIcon,
  },
  {
    name: <EasyTrans>serviceOrganisator3</EasyTrans>,
    description: <EasyTrans>serviceCaptionOrganisator3</EasyTrans>,
    icon: HeartIcon,
  },
  {
    name: <EasyTrans>serviceOrganisator4</EasyTrans>,
    description: <EasyTrans>serviceCaptionOrganisator4</EasyTrans>,
    icon: HeartIcon,
  },
  {
    name: <EasyTrans>serviceOrganisator5</EasyTrans>,
    description: <EasyTrans>serviceCaptionOrganisator5</EasyTrans>,
    icon: HeartIcon,
  },
  {
    name: <EasyTrans>serviceOrganisator6</EasyTrans>,
    description: <EasyTrans>serviceCaptionOrganisator6</EasyTrans>,
    icon: HeartIcon,
  },
];

const Organisator = () => {
  let navigate = useNavigate();

  //#region Views
  return (
    <div>
      <FirstView
        headerblack={<EasyTrans>headerBlackGlas</EasyTrans>}
        headerColor={<EasyTrans>headerColorOrganistor</EasyTrans>}
        caption={<EasyTrans>headerCaptionOrganistor</EasyTrans>}
        link=""
      ></FirstView>
      <div id="features" className="bg-fairpage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-fairblue font-semibold tracking-wide uppercase">
              <EasyTrans>characteristics</EasyTrans>
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <EasyTrans>services</EasyTrans>
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              <EasyTrans>servicesCaption</EasyTrans>
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-fairblue text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-fairblue">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <section class="bg-fairpage dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="text-base text-fairblue font-semibold tracking-wide uppercase">
              <EasyTrans>expert</EasyTrans>
            </h2>
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              <EasyTrans>introduction</EasyTrans>
            </h2>
            <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              <EasyTrans>introductionCaption</EasyTrans>
            </p>
          </div>
          <Contact></Contact>
        </div>
      </section>
    </div>
  );
  //#endregion
};

export default Organisator;
