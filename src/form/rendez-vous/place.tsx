import { Modal, Select, TextInput } from 'flowbite-react';

import type { RendezVousProps } from '.';

export const PlaceRendezVous: React.FC<RendezVousProps> = (props) => {
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
            Selectionner le lieu de la consultation
          </span>
          <Select
            className="mt-[10px]"
            onChange={(e) => {
              props.setData({
                ...props.data,
                place: e.target.value,
              });
            }}
          >
            <option>A Domicile</option>
            <option>En ligne ( Virtuel )</option>
            <option>Au Travail</option>
            <option>Autre</option>
          </Select>
        </div>
        <div>
          <span className="text-[14px] font-semibold text-blue">
            Selectionner la langue preférée?
          </span>
          <TextInput
            className="mt-[10px] border-0 text-blue"
            onChange={(e) => {
              props.setData({
                ...props.data,
                language: e.target.value,
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
