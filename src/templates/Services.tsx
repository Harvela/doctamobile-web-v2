import ReactSelect from 'react-select';

const services = [
  {
    label: 'Gynéco-Obstétrique',
    value: 'gyneco_obstetrique',
    color: '#F7FBFF',
  },
  { label: 'Pédiatrie', value: 'pediatrie', color: '#FEF4E7' },
  { label: 'Gériatrie', value: 'geriatrie', color: '#F7FFFA' },
  { label: 'Médecine interne', value: 'medecine_interne', color: '#FFF5F5' },
  {
    label: 'Traumato-orthopédie',
    value: 'traumato_orthopedie',
    color: '#EAE8F1',
  },
  // { label: 'Chirurgie générale', value: 'chirurgie_generale', color: '#FDECEA'  },
  // { label: 'Nutrition-diétetique', value: 'nutrition_dietetique' },
  // { label: 'Ophtalmologie', value: 'ophtalmologie' },
  // { label: 'Dentisterie', value: 'dentisterie' },
  // { label: 'Dermatologie', value: 'dermatologie' },
  // { label: 'Cardiologie', value: 'cardiologie' },
  // { label: 'Diabétologue', value: 'diabetologue' },
  // { label: 'Pneumologie', value: 'pneumologie' },
  // { label: 'Gastro entérologie', value: 'gastro_enterologie' },
  // { label: 'Neuro-psychiatrie', value: 'neuro_psy' },
  // { label: 'Oncologie', value: 'oncologie' },
  // { label: 'ORL', value: 'orl' },
  // { label: 'Médecine de voyage', value: 'medecine_voyage' },
  // { label: 'Kinésithérapie', value: 'kinesitherapie' },
  // { label: 'Médecine de sport', value: 'medecine_sport' },
  // { label: 'Santé et sécurité au travail', value: 'sante_securite_travail' },
  // { label: 'Santé sexuelle & reproductive', value: 'sante_sexuelle_reproductive' },
  // { label: 'Soins palliatif', value: 'soins_palliatif' },
  // { label: 'Multi service', value: 'multi_service' },
  // { label: 'Check up', value: 'check_up' },
];

const CustomDropdownIndicator = () => null;

const Service = () => (
  <div className="bg-white px-4 py-[60px] lg:px-[100px]">
    <h1 className="mb-8 mt-5 text-lg font-bold text-blue lg:text-2xl">
      Nos services
    </h1>
    <div className="flex w-full flex-col gap-8 bg-primary-200 p-4 lg:flex-row lg:p-8">
      <div className="h-[70vh] w-full rounded-xl bg-white p-4 lg:w-[30%] lg:p-8">
        <ReactSelect
          menuIsOpen
          options={services}
          placeholder="Rechercher un service, specialite"
          unstyled
          components={{ DropdownIndicator: CustomDropdownIndicator }}
          className="border-b-1 border border-x-0 border-t-0 border-[#99A0B4] text-sm font-semibold text-blue"
          styles={{
            option: (base, { data }) => ({
              ...base,
              backgroundColor: data.color,
              color: '#1278FB',
              fontWeight: '600',
              fontSize: '14px',
              padding: '8px',
              borderRadius: '8px',
              marginTop: '20px',
            }),
          }}
        />
      </div>
      <div className="w-full grow rounded-xl bg-white p-8 shadow-sm lg:h-[70vh] lg:w-[65%]">
        <h2 className="mb-8 text-lg font-bold text-blue">Nos specialistes</h2>

        <div className=" flex flex-col gap-3 lg:grid lg:grid-cols-3">
          <div className="border-primary-100 border-1 flex flex-col items-center justify-between border p-4 shadow-sm">
            <img
              src="/assets/images/how-it-work/med3.svg"
              className="border-primary-100 border-1 h-28 w-28 rounded-full border"
            />
            <h5 className="text-md my-4 mb-1 font-semibold text-blue">
              Dr. Murhula Metre
            </h5>
            <div className="flex flex-row gap-2">
              <span className="rounded-md bg-primary-900/20 px-2 py-1 text-[8px] text-blue">
                Chirurgien
              </span>
              <span className="rounded-md bg-primary-900/20 px-2 py-1 text-[8px] text-blue">
                Pediatre
              </span>
            </div>
            <p className="my-2 text-center text-[10px] text-blue/40">
              La tete mujumpe les cheveux La tete mujumpe les cheveux
            </p>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-blue px-4 py-1 text-center text-[10px] font-medium text-white"
            >
              Voir plus
            </a>
          </div>

          <div className="border-primary-100 border-1 flex flex-col items-center justify-between border p-4 shadow-sm">
            <img
              src="/assets/images/how-it-work/med3.svg"
              className="border-primary-100 border-1 h-28 w-28 rounded-full border"
            />
            <h5 className="text-md my-4 mb-1 font-semibold text-blue">
              Dr. Murhula Metre
            </h5>
            <div className="flex flex-row gap-2">
              <span className="rounded-md bg-primary-900/20 px-2 py-1 text-[8px] text-blue">
                Chirurgien
              </span>
              <span className="rounded-md bg-primary-900/20 px-2 py-1 text-[8px] text-blue">
                Pediatre
              </span>
            </div>
            <p className="my-2 text-center text-[10px] text-blue/40">
              La tete mujumpe les cheveux La tete mujumpe les cheveux
            </p>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-blue px-4 py-1 text-center text-[10px] font-medium text-white"
            >
              Voir plus
            </a>
          </div>

          <div className="border-primary-100 border-1 flex flex-col items-center justify-between border p-4 shadow-sm">
            <img
              src="/assets/images/how-it-work/med3.svg"
              className="border-primary-100 border-1 h-28 w-28 rounded-full border"
            />
            <h5 className="text-md my-4 mb-1 font-semibold text-blue">
              Dr. Murhula Metre
            </h5>
            <div className="flex flex-row gap-2">
              <span className="rounded-md bg-primary-900/20 px-2 py-1 text-[8px] text-blue">
                Chirurgien
              </span>
              <span className="rounded-md bg-primary-900/20 px-2 py-1 text-[8px] text-blue">
                Pediatre
              </span>
            </div>
            <p className="my-2 text-center text-[10px] text-blue/40">
              La tete mujumpe les cheveux La tete mujumpe les cheveux
            </p>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-blue px-4 py-1 text-center text-[10px] font-medium text-white"
            >
              Voir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { Service };
