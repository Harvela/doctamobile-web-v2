import Link from 'next/link';

const HowItWork = () => (
  <div
    id="how-it-work"
    className="to-slate-white relative z-20 bg-gradient-to-b from-secondary-200 px-4 pt-[15px] lg:px-[100px]"
  >
    <h1 className="mb-8 mt-5 text-lg font-bold text-blue lg:text-2xl">
      Comment ça marche ?
    </h1>
    <div className="flex flex-col gap-5 py-6 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
      <div className="h-[250px] rounded-xl bg-primary-900 bg-opacity-10 p-4">
        <img src="/assets/images/how-it-work/med1.svg" className="h-[100px]" />
        <p className="my-4 text-sm font-semibold text-blue">
          Vous faites une demande d’abonnement
        </p>
        <Link
          className="rounded-lg bg-primary-900 px-4 py-1 text-sm font-semibold text-white"
          href="#pricing"
        >
          Souscrire
        </Link>
      </div>
      <div className="h-[250px] rounded-xl bg-primary-900 bg-opacity-10 p-4">
        <img src="/assets/images/how-it-work/med2.svg" className="h-[100px]" />
        <p className="my-4 text-sm font-semibold text-blue">
          Notre équipe vous rend visite et enregistre votre famille sur la
          plateforme.
        </p>
        <button className="text-start text-sm text-primary-900">
          Recevez votre carte médicale.
        </button>
      </div>
      <div className="rounded-xl  bg-primary-900  p-4 text-white md:col-span-2 lg:col-span-2 lg:h-[250px]">
        <h2 className="text-md mb-6 font-semibold">
          Vous avez la possibilité d&apos;accéder à nos services par la suite.
        </h2>
        <div className="flex flex-col gap-3 sm:hidden md:grid md:grid-cols-3 lg:grid lg:grid-cols-3">
          <div className=" rounded-xl border border-dashed border-white p-2">
            <img
              src="/assets/images/how-it-work/med3.svg"
              className="h-[80px]"
            />
            <p className="mt-3">Consultation à domicile.</p>
          </div>
          <div className="rounded-xl border border-dashed border-white p-2">
            <img
              src="/assets/images/how-it-work/med4.svg"
              className="h-[80px]"
            />
            <p className="mt-3">Télémédecine.</p>
          </div>
          <div className=" rounded-xl border border-dashed border-white p-2">
            <img
              src="/assets/images/how-it-work/med5.svg"
              className="h-[80px]"
            />
            <p className="mt-3">Tourisme médical.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { HowItWork };
