import { Modal } from 'flowbite-react';
import PackageSelect from 'react-select';

import type { SubscriptionProps } from '.';

const packages = [
  {
    id: 1,
    name: 'JAMAA  20-35 USD/mois',
  },
  {
    id: 2,
    name: 'AFYA  40-85 USD/mois',
  },
  {
    id: 3,
    name: 'VIP  90-200 USD/mois',
  },
];

export const PackageSubscription: React.FC<SubscriptionProps> = (props) => {
  const DropdownIndicator = () => null;
  const NoControlInput = () => null;

  return (
    <Modal show position="center">
      <Modal.Header className="border-0">
        <p className="rounded- ml-[-20px] mt-[-20px] rounded-t-[15px]  rounded-br-[15px] bg-blue/10 p-4 text-[14px] font-semibold text-blue">
          Demande d&apos;abonnement
        </p>
      </Modal.Header>
      <Modal.Body className="flex flex-col gap-5">
        <div>
          <span className="text-[14px] font-semibold text-blue">
            Quel paquet d’abonnement voulez vous ?
          </span>
          <div className="h-[100px]">
            <PackageSelect
              menuIsOpen
              unstyled
              options={packages.map((pack) => ({
                label: pack.name,
                value: pack.name,
                name: pack.name,
              }))}
              onChange={() => {
                props.setData({
                  ...props.data,
                });
              }}
              components={{
                DropdownIndicator,
                Control: NoControlInput,
              }}
              isSearchable={false}
              styles={{
                option: (base) => {
                  return {
                    ...base,
                    backgroundColor: '#F6FAFF',
                    color: '#001344',
                    fontWeight: '600',
                    fontSize: '12px',
                    padding: '8px',
                    borderRadius: '4px',
                    marginTop: '10px',
                  };
                },
              }}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="rounded-lg bg-primary-900 px-4 py-2 text-sm text-white"
          onClick={() => {
            props.setStep(4);
          }}
        >
          Continuer
        </button>
      </Modal.Footer>
    </Modal>
  );
};
