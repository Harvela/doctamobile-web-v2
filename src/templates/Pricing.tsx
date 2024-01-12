import { Button, Tabs } from 'flowbite-react';
import React from 'react';

const pricesList = [
  {
    prices: [
      {
        id: 1,
        title: '1 A 4 pers',
        desc: 'Best option for personal use & for your next project.',
        price: '$0',
        priceList: { moi: 25, trimestre: 72.5 },
        list: [
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
        ],
      },
      {
        id: 2,
        title: 'Starter',
        desc: 'Best option for personal use & for your next project.',
        price: '$20',
        list: [
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
        ],
      },
      {
        id: 3,
        title: 'Medium',
        desc: 'Best option for personal use & for your next project.',
        price: '$40',
        list: [
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
        ],
      },
      {
        id: 4,
        title: 'Premium',
        desc: 'Best option for personal use & for your next project.',
        price: '$100',
        list: [
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
        ],
      },
    ],
    name: 'JAMAA A',
  },
  {
    prices: [
      {
        id: 1,
        title: 'Free',
        desc: 'Best option for personal use & for your next project.',
        price: '$0',
        priceList: { moi: '$0', trimestre: '$0', annee: '$0' },
        list: [
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
        ],
      },
      {
        id: 2,
        title: 'Starter',
        desc: 'Best option for personal use & for your next project.',
        price: '$20',
        list: [
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
        ],
      },
      {
        id: 4,
        title: 'Premium',
        desc: 'Best option for personal use & for your next project.',
        price: '$100',
        list: [
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
          'Rhume',
          'Grippe',
          'Fievre',
          'Malaria',
        ],
      },
    ],
  },
];

const PricingCard: React.FC<{
  prices: Array<{
    title: string;
    desc: string;
    price: string;
    list: string[];
    id: number;
  }>;
  frequency?: string;
}> = ({ prices, frequency = 'month' }) => (
  <div
    className={`space-y-8 px-4 sm:gap-6 md:gap-3 lg:grid ${`lg:grid-cols-${prices.length}`} lg:space-y-0 xl:gap-10`}
  >
    {prices.map((p) => (
      <div
        className="flex max-w-lg flex-col rounded-lg border border-gray-100 bg-primary-900 p-6 text-center text-white shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8"
        key={p.id}
      >
        <h3 className="mb-4 text-xl font-semibold">{p.title}</h3>
        <div className="my-4 flex items-baseline justify-center">
          <span className="mr-2 text-3xl font-extrabold">{p.price}</span>
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
        <a
          href="#"
          className="rounded-lg bg-white px-5 py-2.5 text-center text-sm font-medium text-primary-900 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 dark:text-white dark:focus:ring-primary-900"
        >
          Get started
        </a>
      </div>
    ))}
  </div>
);

const Pricing = () => {
  const [activeFrequency, setActiveFrequency] = React.useState<string>('month');
  return (
    <div className="bg-primary-900 pt-[15px]">
      <h1 className="mb-4 mt-5 text-center text-2xl font-bold text-white">
        Nos paquets
      </h1>
      <div className="align-center mx-auto flex items-center justify-center gap-5 text-white">
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
            activeFrequency === 'year'
              ? 'bg-white text-primary-900'
              : 'border-2 border-white bg-primary-900 text-white'
          }
          onClick={() => setActiveFrequency('year')}
        >
          Annee
        </Button>
      </div>
      <section className="mt-[-15px]">
        <div className="mx-auto max-w-screen-xl p-4 lg:px-6 lg:py-16">
          <div className="rounded-[10px] bg-white px-4 py-8">
            <Tabs
              aria-label="Pills"
              style="pills"
              theme={{
                tablist: {
                  tabitem: {
                    base: 'px-4 py-2 text-sm text-primary-900',
                    styles: {
                      pills: {
                        active: {
                          on: 'bg-primary-900 text-white px-4 py-2 rounded-[10px] text-sm ',
                          off: 'bg-white text-primary-900',
                        },
                      },
                    },
                  },
                  base: 'w-full flex flex-row gap-10 justify-center mb-10',
                },
              }}
            >
              <Tabs.Item
                title={
                  <div>
                    <h1 className="text-[17px] font-bold">JAMAA 1</h1>
                    <p className="text-[12px] font-medium">120 USD - 150 USD</p>
                  </div>
                }
                active
              >
                <PricingCard
                  prices={pricesList[0]?.prices || []}
                  frequency={activeFrequency}
                />
              </Tabs.Item>
              <Tabs.Item
                title={
                  <div>
                    <h1 className="text-[17px] font-bold">JAMAA 1</h1>
                    <p className="text-[12px] font-medium">120 USD - 150 USD</p>
                  </div>
                }
              >
                <PricingCard
                  prices={pricesList[1]?.prices || []}
                  frequency={activeFrequency}
                />
              </Tabs.Item>
              <Tabs.Item
                title={
                  <div>
                    <h1 className="text-[17px] font-bold">JAMAA 1</h1>
                    <p className="text-[12px] font-medium">120 USD - 150 USD</p>
                  </div>
                }
              >
                <div></div>
              </Tabs.Item>
              <Tabs.Item
                title={
                  <div>
                    <h1 className="text-[17px] font-bold">JAMAA 1</h1>
                    <p className="text-[12px] font-medium">120 USD - 150 USD</p>
                  </div>
                }
              >
                <div></div>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Pricing };
