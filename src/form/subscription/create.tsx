import { Modal } from 'flowbite-react';

import type { SubscriptionProps } from '.';

export const SubmitSubscription: React.FC<SubscriptionProps> = (props) => {
  return (
    <Modal show position="center">
      <Modal.Header className="border-0">
        <h3 className="rounded- ml-[-20px] mt-[-20px] rounded-t-[15px]  rounded-br-[15px] bg-blue/10 p-4 text-[14px] font-semibold text-blue">
          Demande d&apos;abonnement
        </h3>
      </Modal.Header>
      <Modal.Body className="flex flex-col">
        <button
          className="m-auto w-[40%] rounded-lg bg-primary-900/10 px-4 py-2 text-sm text-blue"
          onClick={() => {
            console.log('Submit');
          }}
        >
          Creer un compte
        </button>
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
