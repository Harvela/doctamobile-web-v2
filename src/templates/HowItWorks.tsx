const HowItWork = () => (
  <div className="bg-gradient-to-b from-slate-500 to-slate-50 px-[100px] pt-[15px]">
    <h1 className="mt-5">Comment ca marche. ?</h1>
    <div className="grid grid-cols-4 gap-5 py-6">
      <div className="h-[200px] bg-primary-900 bg-opacity-10">
        <img />
      </div>
      <div className="h-[200px] bg-primary-900 bg-opacity-10"></div>
      <div className="col-span-2 grid h-[200px] grid-cols-3 gap-3 bg-primary-900 bg-opacity-10 p-4">
        <div className="h-full border border-dashed border-white"></div>
        <div className="h-full border border-dashed border-white"></div>
        <div className="h-full border border-dashed border-white"></div>
      </div>
    </div>
  </div>
);

export { HowItWork };
