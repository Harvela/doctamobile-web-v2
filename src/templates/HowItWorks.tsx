const HowItWork = () => (
  <div className="to-slate-white bg-gradient-to-b from-secondary-100 px-[100px] pt-[15px]">
    <h1 className="mt-5">Comment ca marche. ?</h1>
    <div className="grid grid-cols-4 gap-5 py-6">
      <div className="h-[250px] bg-primary-900 bg-opacity-10 p-4">
        <img src="/assets/images/how-it-work/med1.svg" className="h-[100px]" />
        <p className="mt-3">Vous faites une demande d abonnement</p>
        <button className="mt-4">Demande</button>
      </div>
      <div className="h-[250px] bg-primary-900 bg-opacity-10 p-4">
        <img src="/assets/images/how-it-work/med2.svg" className="h-[100px]" />
        <p className="mt-3">Vous faites une demande d abonnement</p>
        <button className="mt-4">Demande</button>
      </div>
      <div className="col-span-2  h-[250px]  bg-primary-900 bg-opacity-10 p-4">
        <h2 className="mb-[20px]">Vous beneficiez de nos services</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className=" border border-dashed border-white p-2">
            <img
              src="/assets/images/how-it-work/med3.svg"
              className="h-[80px]"
            />
            <p className="mt-3">Consultation A domicile</p>
          </div>
          <div className="border border-dashed border-white p-2">
            <img
              src="/assets/images/how-it-work/med4.svg"
              className="h-[80px]"
            />
            <p className="mt-3">Consultation A domicile</p>
          </div>
          <div className=" border border-dashed border-white p-2">
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
