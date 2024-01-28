import { Modal, Select } from 'flowbite-react';

import type { RendezVousProps } from '.';

export const PlaceRendezVous: React.FC<RendezVousProps> = (props) => {
  return (
    <Modal show position="center">
      <Modal.Header className="border-0">
        <h3 className="rounded- ml-[-20px] mt-[-20px] rounded-t-[15px]  rounded-br-[15px] bg-secondary-100 p-4 text-[14px] font-semibold text-blue">
          Demande de rendez-vous
        </h3>
      </Modal.Header>
      <Modal.Body className="flex flex-col gap-5">
        <div>
          <span className="text-[14px] font-semibold text-blue">
            Ou voulez vous vous faire consulter ?
          </span>
          <Select
            className="mt-[10px]"
            onChange={(e) => {
              props.setData({
                ...props.data,
                for: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <span className="text-[14px] font-semibold text-blue">
            Quelles langues parlez vous ?
          </span>
          <Select
            className="mt-[10px]"
            onChange={(e) => {
              props.setData({
                ...props.data,
                for: e.target.value,
              });
            }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="rounded-lg bg-primary-900 px-4 py-2 text-sm text-white"
          onClick={() => {
            props.setStep(5);
          }}
        >
          Continuer
        </button>
      </Modal.Footer>
    </Modal>
  );
};
