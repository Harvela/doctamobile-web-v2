import { Button, Tabs } from 'flowbite-react';
import React from 'react';

import { pricesList } from '@/utils/prices';

const PricingCard: React.FC<{
  prices: Array<{
    title: string;
    desc: string;
    price: string;
    priceList: any;
    list: string[];
    id: number;
  }>;
  frequency?: string;
  setData?: any;
  activeTab?: string;
}> = ({ prices, frequency = 'month', setData, activeTab }) => (
  <div
    className={`space-y-8 px-4 sm:gap-6 md:grid md:grid-cols-2 lg:grid ${`lg:grid-cols-${prices.length}`} md:space-y-0 lg:space-y-0 xl:gap-10`}
  >
    {prices.map((p) => (
      <div
        className="flex max-w-lg flex-col rounded-lg border border-gray-100 bg-primary-900 p-6 text-center text-white shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8"
        key={p.id}
      >
        <h3 className="mb-4 text-xl font-semibold">{p.title}</h3>
        <div className="my-4 flex items-baseline justify-center">
          <span className="mr-2 text-3xl font-extrabold">
            {p.priceList[frequency]}
            <span className="text-[12px]">$</span>
          </span>
          <span className="text-gray-500 dark:text-gray-400">/{frequency}</span>
        </div>
        <ul role="list" className="mb-4 space-y-2 text-left">
          {p.list.map((item, index) => (
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
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            setData(`${activeTab} / ${p.title}`);
          }}
          className="rounded-lg bg-white px-5 py-2.5 text-center text-sm font-medium text-primary-900 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 dark:text-white dark:focus:ring-primary-900"
        >
          Souscrire
        </button>
      </div>
    ))}
  </div>
);

const Pricing: React.FC<{
  setSubscriptionPaquet: any;
  setOpenModal: any;
}> = ({ setSubscriptionPaquet, setOpenModal }) => {
  const [activeFrequency, setActiveFrequency] = React.useState<string>('month');
  const [activeTab, setActiveTab] = React.useState<string>('JAMAA A');
  return (
    <div className="bg-primary-900 pt-[15px]" id="pricing">
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
            <Tabs
              aria-label="Pills"
              style="pills"
              onActiveTabChange={(tab) => {
                setActiveTab(['JAMAA A', 'JAMAA B', 'AFYA', 'VIP'][tab] || '');
              }}
              theme={{
                tablist: {
                  tabitem: {
                    base: 'px-4 py-2 text-[12px] text-primary-900',
                    styles: {
                      pills: {
                        active: {
                          on: 'bg-primary-900 text-white px-4 py-2 rounded-[10px] text-[12px] ',
                          off: 'bg-white text-primary-900 text-[12px]',
                        },
                      },
                    },
                  },
                  base: 'w-full md:flex md:flex-row gap-10 grid grid-cols-2 md:justify-center mb-10 text-[12px]',
                },
              }}
            >
              <Tabs.Item
                title={
                  <div>
                    <h1 className="sm:text[12px] font-bold md:text-[17px]">
                      {pricesList[0]?.name}
                    </h1>
                    <p className="sm:text[10px] text-[12px] font-medium sm:hidden">
                      25 USD - 486 USD
                    </p>
                  </div>
                }
                active
              >
                <PricingCard
                  prices={pricesList[0]?.prices || []}
                  frequency={activeFrequency}
                  setData={(data: string) => {
                    setSubscriptionPaquet(data);
                    setOpenModal(true);
                  }}
                  activeTab={activeTab}
                />
              </Tabs.Item>
              <Tabs.Item
                title={
                  <div>
                    <h1 className="sm:text[12px] font-bold md:text-[17px]">
                      {pricesList[1]?.name}
                    </h1>
                    <p className="sm:text[10px] text-[12px] font-medium sm:hidden">
                      10 USD - 432 USD
                    </p>
                  </div>
                }
              >
                <PricingCard
                  prices={pricesList[1]?.prices || []}
                  frequency={activeFrequency}
                  setData={(data: string) => {
                    setSubscriptionPaquet(data);
                    setOpenModal(true);
                  }}
                  activeTab={activeTab}
                />
              </Tabs.Item>
              <Tabs.Item
                title={
                  <div>
                    <h1 className="sm:text[12px] font-bold md:text-[17px]">
                      {pricesList[2]?.name}
                    </h1>
                    <p className="sm:text[10px] text-[12px] font-medium sm:hidden">
                      50 USD - 1080 USD
                    </p>
                  </div>
                }
              >
                <PricingCard
                  prices={pricesList[2]?.prices || []}
                  frequency={activeFrequency}
                  setData={(data: string) => {
                    setSubscriptionPaquet(data);
                    setOpenModal(true);
                  }}
                  activeTab={activeTab}
                />
              </Tabs.Item>
              <Tabs.Item
                title={
                  <div>
                    <h1 className="sm:text[12px] font-bold md:text-[17px]">
                      {pricesList[3]?.name}
                    </h1>
                    <p className="sm:text[10px] hidden text-[12px] font-medium md:visible">
                      150 USD - 2700 USD
                    </p>
                  </div>
                }
              >
                <PricingCard
                  prices={pricesList[3]?.prices || []}
                  frequency={activeFrequency}
                  setData={(data: string) => {
                    setSubscriptionPaquet(data);
                    setOpenModal(true);
                  }}
                  activeTab={activeTab}
                />
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Pricing };
