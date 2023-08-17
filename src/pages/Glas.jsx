import {
  AtSymbolIcon,
  DeviceMobileIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import EasyTrans from "./../components/bundel/EasyTrans";
import React from "react";
import FirstView from "../components/bundel/FirstView";
import Contact from "../components/bundel/Contact";
import ImageGallery from "../components/bundel/ImageGallery";

const features = [
  {
    name: <EasyTrans>serviceGlas1</EasyTrans>,
    description: <EasyTrans>serviceCaptionGlas1</EasyTrans>,
    icon: HeartIcon,
  },
  {
    name: <EasyTrans>serviceGlas2</EasyTrans>,
    description: <EasyTrans>serviceCaptionGlas2</EasyTrans>,
    icon: HeartIcon,
  },
  {
    name: <EasyTrans>serviceGlas3</EasyTrans>,
    description: <EasyTrans>serviceCaptionGlas2</EasyTrans>,
    icon: HeartIcon,
  },
  {
    name: <EasyTrans>serviceGlas4</EasyTrans>,
    description: <EasyTrans>serviceGlas4</EasyTrans>,
    icon: HeartIcon,
  },
];

const Glas = () => {
  //let navigate = useNavigate();
  // Somewhere in your code, e.g. inside a handler:

  //#region Views
  return (
    <div>
      <FirstView
        headerblack={<EasyTrans>headerBlackGlas</EasyTrans>}
        headerColor={<EasyTrans>headerColorGlas</EasyTrans>}
        caption={<EasyTrans>headerCaptionGlas</EasyTrans>}
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
          <div className="mt-20">
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
      <div id="method" className="m-6 py-12  bg-fairpage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-fairblue font-semibold tracking-wide uppercase">
              <EasyTrans>method</EasyTrans>
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <EasyTrans>process</EasyTrans>
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              <EasyTrans>processCaption</EasyTrans>
            </p>
          </div>
          <div class="flex mt-20">
            <div class="flex flex-col items-center mx-auto my-4">
              <div class="text-6xl flex items-center justify-center h-24 w-24 rounded-full bg-fairblue text-white">
                1
              </div>
              <div class="mx-auto my-4">
                <EasyTrans>processStep1</EasyTrans>
              </div>
            </div>
            <div class="flex flex-col items-center mx-auto my-4">
              <div class="text-6xl flex items-center justify-center h-24 w-24 rounded-full bg-fairblue text-white">
                2
              </div>
              <div class="mx-auto my-4">
                <EasyTrans>processStep2</EasyTrans>
              </div>
            </div>
            <div class="flex flex-col items-center mx-auto my-4">
              <div class="text-6xl flex items-center justify-center h-24 w-24 rounded-full bg-fairblue text-white">
                3
              </div>
              <div class="mx-auto my-4">
                <EasyTrans>processStep3</EasyTrans>
              </div>
            </div>
            <div class="flex flex-col items-center mx-auto my-4">
              <div class="text-6xl flex items-center justify-center h-24 w-24 rounded-full bg-fairblue text-white">
                4
              </div>
              <div class="mx-auto my-4">
                <EasyTrans>processStep4</EasyTrans>
              </div>
            </div>
            <div class="flex flex-col items-center mx-auto my-4">
              <div class="text-6xl flex items-center justify-center h-24 w-24 rounded-full bg-fairblue text-white">
                5
              </div>
              <div class="mx-auto my-4">
                <EasyTrans>processStep5</EasyTrans>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="features" className="m-6 py-12 bg-fairpage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-fairblue font-semibold tracking-wide uppercase">
              <EasyTrans>projects</EasyTrans>
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <EasyTrans>works</EasyTrans>
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              <EasyTrans>done</EasyTrans>
            </p>
          </div>
          <div className="mt-20 ">
            <ImageGallery></ImageGallery>
          </div>
        </div>
      </div>

      <div id="reachout" className="m-6 py-12  bg-fairpage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-fairblue font-semibold tracking-wide uppercase">
              <div class="mx-auto my-4">
                <EasyTrans>intrest</EasyTrans>
              </div>
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <EasyTrans>contactdata</EasyTrans>
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              <EasyTrans>contactCaption</EasyTrans>
            </p>
          </div>
          <div class="flex flex-wrap justify-center place-content-evenly items-center mt-20 text-gray-500 ">
            <div class=" mt-5 m-40 mb-5 lg:mb-0 text-fairblue">
              <div class="flex flex-col  items-center mx-auto my-4">
                <DeviceMobileIcon
                  className={"items-center h-20 w-20"}
                  aria-hidden="true"
                />
                <div class="mx-auto my-4">+436641048041</div>
              </div>
            </div>
            <div class="mt-5 m-40 mb-5 lg:mb-0 text-fairblue">
              <div class="flex flex-col items-center mx-auto my-4">
                <AtSymbolIcon
                  className={"items-center h-20 w-20"}
                  aria-hidden="true"
                />

                <div class="mx-auto my-4">stefaniekoechle99@gmail.com</div>
              </div>
            </div>
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

export default Glas;
