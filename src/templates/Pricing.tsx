const prices = [
  {
    id: 1,
    title: 'Free',
    desc: 'Best option for personal use & for your next project.',
    price: '$0',
    list: ['Rhume', 'Grippe', 'Fievre', 'Malaria'],
  },
  {
    id: 2,
    title: 'Starter',
    desc: 'Best option for personal use & for your next project.',
    price: '$20',
    list: ['Rhume', 'Grippe', 'Fievre', 'Malaria'],
  },
  {
    id: 3,
    title: 'Medium',
    desc: 'Best option for personal use & for your next project.',
    price: '$40',
    list: ['Rhume', 'Grippe', 'Fievre', 'Malaria'],
  },
  {
    id: 4,
    title: 'Premium',
    desc: 'Best option for personal use & for your next project.',
    price: '$100',
    list: ['Rhume', 'Grippe', 'Fievre', 'Malaria'],
  },
];

const Pricing = () => (
  <div className="bg-primary-900 pt-[15px]">
    <h1 className="mb-8 mt-5 text-center text-2xl font-bold text-white">
      Nos paquets
    </h1>
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-4 lg:space-y-0 xl:gap-10">
          {prices.map((p) => (
            <div
              className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8"
              key={p.id}
            >
              <h3 className="mb-4 text-xl font-semibold">{p.title}</h3>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {p.desc}
              </p>
              <div className="my-4 flex items-baseline justify-center">
                <span className="mr-2 text-3xl font-extrabold">{p.price}</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
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
                className="rounded-lg bg-primary-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 dark:text-white dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export { Pricing };
