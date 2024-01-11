import ReactSelect from 'react-select';

const Service = () => (
  <div className="bg-white px-[100px] pt-[15px]">
    <h1 className="mt-5">Services</h1>
    <div className="flex w-full flex-row gap-5 bg-primary-200 p-5">
      <div className="w-[200px]">
        <ReactSelect
          menuIsOpen
          options={[
            { label: 'One', value: 'one' },
            { label: 'Two', value: 'two' },
            { label: 'Three', value: 'three' },
          ]}
        />
      </div>
      <div className=" h-[200px] grow bg-white shadow-sm"></div>
    </div>
  </div>
);

export { Service };
