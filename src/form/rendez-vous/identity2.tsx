import { Modal, Select } from 'flowbite-react';

import type { RendezVousProps } from '.';

export const Identity2RendezVous: React.FC<RendezVousProps> = (props) => {
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
            {props.data.for === 'self'
              ? 'Votre age se situe entre'
              : 'Son age se situe entre'}
          </span>
          <Select
            className="mt-[10px]"
            onChange={(e) => {
              props.setData({
                ...props.data,
                for: e.target.value,
              });
            }}
          >
            <option value="unknown">Inconnu</option>
            <option value="baby">Bébé (0-2 ans)</option>
            <option value="child">Enfant (3-12 ans)</option>
            <option value="teenager">Adolescent (13-17 ans)</option>
            <option value="adult">Adulte (18-64 ans)</option>
            <option value="senior">Personne âgée (65 ans et plus)</option>
          </Select>
        </div>
        <div>
          <span className="text-[14px] font-semibold text-blue">
            {props.data.for === 'self'
              ? 'Quelle est votre sexe ?'
              : 'Quelle est son sexe ?'}
          </span>
          <Select
            className="mt-[10px]"
            onChange={(e) => {
              props.setData({
                ...props.data,
                for: e.target.value,
              });
            }}
          >
            <option value="M">Homme</option>
            <option value="M">Femme</option>
            <option value="M">Autre</option>
          </Select>
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
