import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import { services } from '@/utils/services';

interface ServiceOption {
  name: string;
  color: string;
  description: string;
}

interface SubService {
  name: string;
  description: string;
}

const DynamicReactSelect = dynamic(() => import('react-select'), {
  ssr: false,
});
const CustomDropdownIndicator = () => null;

const Service: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(
    services[0]
      ? {
          name: services[0].name,
          color: services[0].color,
          description: services[0].description,
        }
      : null,
  );
  const [isMenuOpen, setIsMenuOpen] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 900 : false,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(window.innerWidth >= 900);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelectChange = (selectedOption: any) => {
    setSelectedService(selectedOption as ServiceOption | null);
  };

  const getSubServices = (serviceName: string): SubService[] | undefined => {
    const service = services.find((s) => s.name === serviceName);
    return service?.subServices;
  };

  const handleInputChange = (inputValue: string) => {
    setIsMenuOpen(inputValue.trim().length > 0);
  };

  return (
    <div
      className="bg-white px-4 md:py-[50px] lg:px-[100px] lg:py-[30px]"
      id="services"
    >
      <h1 className="mb-8 mt-5 text-lg font-bold text-blue lg:text-2xl">
        Tous nos services
      </h1>
      <div className="flex w-full flex-col gap-8 bg-primary-200 p-4 lg:flex-row lg:p-8">
        <div className="z-50 w-full rounded-xl bg-white p-4 lg:h-[70vh] lg:w-[30%] lg:p-8">
          <DynamicReactSelect
            menuIsOpen={isMenuOpen}
            options={services.map(
              (service) =>
                ({
                  label: service.name,
                  value: service.name,
                  color: service.color,
                  description: service.description,
                  name: service.name,
                }) as ServiceOption,
            )}
            onChange={handleSelectChange}
            onInputChange={handleInputChange}
            placeholder="Rechercher un service, specialite"
            unstyled
            components={{ DropdownIndicator: CustomDropdownIndicator }}
            className="border-b-1 border border-x-0 border-t-0 border-[#99A0B4] text-sm font-semibold text-blue"
            styles={{
              option: (base, { data }) => {
                const optionData = data as ServiceOption;
                return {
                  ...base,
                  backgroundColor: optionData.color,
                  color: '#1278FB',
                  fontWeight: '600',
                  fontSize: '14px',
                  padding: '8px',
                  borderRadius: '8px',
                  marginTop: '20px',
                };
              },
              menuList: (base) => ({
                ...base,
                backgroundColor: '#fff',
              }),
            }}
          />
        </div>
        <div className="w-full grow rounded-xl bg-white p-8 shadow-sm lg:h-[70vh] lg:w-[65%]">
          {selectedService && (
            <>
              <h2 className="mb-8 text-lg font-bold text-blue">
                {selectedService.name}
              </h2>
              <p className="my-4 text-sm text-blue/40">
                {selectedService.description}
              </p>

              {/* Display Sub-Services */}
              {selectedService.name && getSubServices(selectedService.name) && (
                <div className="h-[60%] overflow-y-auto">
                  <h3 className="text-md mt-4 font-semibold text-blue">
                    Services inclus
                  </h3>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {getSubServices(selectedService.name)?.map((subService) => (
                      <div
                        key={subService.name}
                        className="border-primary-100 border-1 flex flex-col justify-between border p-4 shadow-sm"
                      >
                        <h5 className="text-sm font-semibold text-secondary-900">
                          {subService.name}
                        </h5>
                        <p className="my-2 text-[10px] text-blue">
                          {subService.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { Service };
