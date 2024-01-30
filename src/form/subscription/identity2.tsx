import { Modal } from 'flowbite-react';

import type { SubscriptionProps } from '.';

const options = [
  { id: 1, label: 'Des membres de plus de 70' },
  { id: 2, label: 'Des membres  avec maladie chronique' },
  { id: 3, label: 'Des enfants' },
];

export const SubscriptionIdentity2: React.FC<SubscriptionProps> = (props) => {
  return (
    <Modal show position="center">
      <Modal.Header className="border-0">
        <h3 className="rounded- ml-[-20px] mt-[-20px] rounded-t-[15px]  rounded-br-[15px] bg-blue/10 p-4 text-[14px] font-semibold text-blue">
          Demande d&apos;abonnement
        </h3>
      </Modal.Header>
      <Modal.Body className="flex flex-col">
        <div>
          <span className="text-[14px] font-semibold text-blue">
            Votre menage a :
          </span>

          <div className="mt-[24px] flex flex-col gap-4">
            {options.map((option) => (
              <label key={option.id} className="text-sm text-blue">
                <input
                  type="checkbox"
                  className="mr-[10px]"
                  onChange={(e) => {
                    props.setData({
                      ...props.data,
                      for: e.target.value,
                    });
                  }}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="rounded-lg bg-primary-900 px-4 py-2 text-sm text-white"
          onClick={() => {
            props.setStep(2);
          }}
        >
          Continuer
        </button>
      </Modal.Footer>
    </Modal>
  );
};
