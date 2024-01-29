import { Datepicker, Modal, TextInput } from 'flowbite-react';

import type { RendezVousProps } from '.';

export const AddressRendezVous: React.FC<RendezVousProps> = (props) => {
  return (
    <Modal show position="center" onClose={props.onClose}>
      <Modal.Header className="border-0">
        <h3 className="rounded- ml-[-20px] mt-[-20px] rounded-t-[15px]  rounded-br-[15px] bg-secondary-100 p-4 text-[14px] font-semibold text-blue">
          Demande de rendez-vous
        </h3>
      </Modal.Header>
      <Modal.Body className="flex flex-col gap-5">
        <div>
          <span className="text-[14px] font-semibold text-blue">
            Vous vivez A : ( tapez le nom quartier, avenue ou ville )
          </span>
          <TextInput
            className="mt-[10px] border-0 text-blue"
            onChange={(e) => {
              props.setData({
                ...props.data,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <span className="text-[14px] font-semibold text-blue">
              Vous serez disponible le :
            </span>
            <Datepicker className="mt-[10px]" type="datetime-local" />
          </div>
          <div>
            <span className="text-[14px] font-semibold text-blue">
              Jusqu&apos;a?
            </span>
            <Datepicker className="mt-[10px]" type="time" />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="rounded-lg bg-primary-900 px-4 py-2 text-sm text-white"
          onClick={() => {
            props.setStep(1);
          }}
        >
          Continuer
        </button>
      </Modal.Footer>
    </Modal>
  );
};
