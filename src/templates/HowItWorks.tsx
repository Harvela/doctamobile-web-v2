const HowItWork = () => (
  <div className="to-slate-white bg-gradient-to-b from-secondary-100 px-[100px] pt-[15px]">
    <h1 className="mb-8 mt-5 text-2xl font-bold text-blue">
      Comment ca marche ?
    </h1>
    <div className="grid grid-cols-4 gap-5 py-6">
      <div className="h-[250px] rounded-xl bg-primary-900 bg-opacity-10 p-4">
        <img src="/assets/images/how-it-work/med1.svg" className="h-[100px]" />
        <p className="my-4 text-sm font-semibold text-blue">
          Vous faites une demande d’abonnement
        </p>
        <button className="rounded-lg bg-primary-900 px-4 py-1 text-sm font-semibold text-white">
          Demander
        </button>
      </div>
      <div className="h-[250px] rounded-xl bg-primary-900 bg-opacity-10 p-4">
        <img src="/assets/images/how-it-work/med2.svg" className="h-[100px]" />
        <p className="my-4 text-sm font-semibold text-blue">
          Vous rend visite et enregistre votre famille sur la platforme
        </p>
        <button className="text-start text-sm text-primary-900">
          Recevez votre carte medical
        </button>
      </div>
      <div className="col-span-2  h-[250px]  rounded-xl bg-primary-900 p-4 text-white">
        <h2 className="mb-6 font-semibold">
          Vous pouvez ensuite acceder A nos services
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div className=" rounded-xl border border-dashed border-white p-2">
            <img
              src="/assets/images/how-it-work/med3.svg"
              className="h-[80px]"
            />
            <p className="mt-3">Consultation A domicile</p>
          </div>
          <div className="rounded-xl border border-dashed border-white p-2">
            <img
              src="/assets/images/how-it-work/med4.svg"
              className="h-[80px]"
            />
            <p className="mt-3">Consultation A domicile</p>
          </div>
          <div className=" rounded-xl border border-dashed border-white p-2">
            <img
              src="/assets/images/how-it-work/med5.svg"
              className="h-[80px]"
            />
            <p className="mt-3">Consultation A domicile</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { HowItWork };
