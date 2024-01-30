import React from 'react';

export const InitialPricingCard: React.FC<{
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
