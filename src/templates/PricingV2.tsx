import { Button } from 'flowbite-react';
import React from 'react';
import { ChevronLeft } from 'react-feather';

import { overviewPricingList, pricesList } from '@/utils/prices';

type PriceType = {
  title: string;
  desc: string;
  price: string;
  priceList: any;
  list: string[];
  id: number;
  paquet: string;
  isDetail?: boolean;
};

const findMinAndMaxPrice = (prices: PriceType[], frequency: string) => {
  let min = prices[0]?.priceList[frequency];
  let max = prices[0]?.priceList[frequency];
  prices.forEach((p) => {
    if (p?.priceList[frequency] < min) {
      min = p?.priceList[frequency];
    }
    if (p?.priceList[frequency] > max) {
      max = p?.priceList[frequency];
    }
  });
  return { min, max };
};

const PricingCard: React.FC<{
  prices: Array<PriceType | undefined>;
  frequency?: string;
  setData?: any;
  activeTab?: string;
  isDetail?: boolean;
}> = ({ prices, frequency = 'month', setData, activeTab, isDetail }) => (
  <div
    className={` space-y-8 px-4 sm:gap-6 md:grid md:grid-cols-2 lg:grid ${`lg:grid-cols-${prices.length}`} md:space-y-0 lg:space-y-0 xl:gap-10`}
  >
    {prices.map((p, index1) => {
      if (!p) return null;
      const priceMinMax = findMinAndMaxPrice(
        pricesList
          .flatMap((pr) => pr.prices as PriceType[])
          .filter((pr: PriceType) => pr.paquet === p.paquet),
        frequency,
      );
      return (
        <div
          className={` ${
            !isDetail && index1 === 1
              ? 'scale-110 border-[5px] border-secondary-900'
              : ''
          } flex max-w-lg flex-col rounded-lg border border-gray-100 bg-primary-900 p-6 text-center text-white shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8`}
          key={p?.id}
        >
          {!isDetail && index1 === 1 && (
            <span className="absolute right-[-10px] top-[-15px] rounded-md bg-secondary-900 px-4 text-[14px]">
              Plus populaire
            </span>
          )}
          <h3 className="mb-4 text-xl font-semibold">
            {isDetail ? p?.title : p?.paquet}
          </h3>
          <div className="my-4 flex items-baseline justify-center">
            <span className="mr-2 text-3xl font-extrabold">
              {isDetail
                ? p.priceList[frequency]
                : `${priceMinMax.min} - ${priceMinMax.max}`}
              <span className="text-[12px]">$</span>
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              /{frequency}
            </span>
          </div>
          <ul
            role="list"
            className="mb-4 max-h-[250px] space-y-2 overflow-y-scroll text-left"
          >
            {(!isDetail
              ? overviewPricingList.find(
                  (o) => o.prices[0]?.paquet === p.paquet,
                )?.prices[0]?.list
              : p.list
            )?.map?.((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span
                  className={`text-sm ${
                    index === 0
                      ? 'rounded-[7px] bg-primary-800 px-3 py-1 font-bold'
                      : ''
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setData(`${activeTab} / ${p?.title}`, p?.paquet);
            }}
            className="rounded-lg bg-white px-5 py-2.5 text-center text-sm font-medium text-primary-900 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 dark:text-white dark:focus:ring-primary-900"
          >
            {isDetail ? 'Souscrire' : 'Selectionner'}
          </button>
        </div>
      );
    })}
  </div>
);

const PricingV2: React.FC<{
  setSubscriptionPaquet: any;
  setOpenModal: any;
}> = ({ setSubscriptionPaquet, setOpenModal }) => {
  const [activeFrequency, setActiveFrequency] = React.useState<string>('month');
  const [selectedPriceList, setSelectedPriceList] = React.useState<PriceType[]>(
    [],
  );
  return (
    <div className="bg-primary-900 pt-[15px]" id="pricing">
      {selectedPriceList.length > 0 && (
        <div className="animatedOpacity fixed bottom-0 z-50 flex h-[100%] w-full flex-col items-center justify-end bg-[#000]/60">
          <div className="animatedSlideIn h-[90%] w-[95%] overflow-y-scroll rounded-md bg-white p-5">
            <div className="mx-2 mb-10 mt-8 flex flex-row">
              <ChevronLeft
                className="mr-4 cursor-pointer text-blue"
                onClick={() => {
                  setSelectedPriceList([]);
                }}
              />
              <p className="font-bold uppercase text-blue">
                <span className="text-primary-900">
                  PAQUET {selectedPriceList[0]?.paquet}
                </span>
                {' - '}
                Sous Categories
              </p>
            </div>
            <PricingCard
              prices={selectedPriceList as PriceType[]}
              frequency={activeFrequency}
              setData={(data: string) => {
                setSubscriptionPaquet(data);
                setOpenModal(true);
              }}
              activeTab={''}
              isDetail
            />
          </div>
        </div>
      )}
      <h1 className="mb-4 mt-5 text-center text-lg font-bold text-white lg:text-2xl">
        Nos paquets de souscription
      </h1>
      <div className="align-center mx-auto flex flex-wrap items-center justify-center gap-5 text-white">
        <p className="mr-4">Afficher les prix par</p>
        <div className="h-[25px] w-[1px] bg-white"></div>
        <Button
          className={
            activeFrequency === 'month'
              ? 'bg-white text-primary-900'
              : 'border-2 border-white bg-primary-900 text-white'
          }
          onClick={() => setActiveFrequency('month')}
        >
          Moi
        </Button>
        <Button
          className={
            activeFrequency === 'trimestre'
              ? 'bg-white text-primary-900'
              : 'border-2 border-white bg-primary-900 text-white'
          }
          onClick={() => setActiveFrequency('trimestre')}
        >
          Trimestre
        </Button>
        <Button
          className={
            activeFrequency === 'semestre'
              ? 'bg-white text-primary-900'
              : 'border-2 border-white bg-primary-900 text-white'
          }
          onClick={() => setActiveFrequency('semestre')}
        >
          Semestre
        </Button>
        <Button
          className={
            activeFrequency === 'annee'
              ? 'bg-white text-primary-900'
              : 'border-2 border-white bg-primary-900 text-white'
          }
          onClick={() => setActiveFrequency('annee')}
        >
          Annee
        </Button>
      </div>
      <section className="md:mt-[-15px]">
        <div className="mx-auto max-w-screen-xl p-4 lg:px-6 lg:py-16">
          <div className="rounded-[10px] bg-white px-4 py-8 sm:mt-4">
            <PricingCard
              prices={[
                pricesList[0]?.prices[0] as PriceType,
                pricesList[2]?.prices[0] as PriceType,
                pricesList[3]?.prices[0] as PriceType,
              ]}
              frequency={activeFrequency}
              setData={(data: string, paquet: string) => {
                console.log(
                  pricesList
                    .filter((p) => p.name === data)
                    .flatMap((p) => p.prices as PriceType[]),
                  data,
                  paquet,
                );
                setSelectedPriceList(
                  pricesList
                    .filter((p) => p.name === paquet)
                    .flatMap((p) => p.prices as PriceType[]),
                );
              }}
              activeTab={''}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export { PricingV2 };
