import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { scroller } from 'react-scroll';

import { RendezVousForm } from './rendez-vous';
import { SubscriptionForm } from './subscription';

type DispatcherModalProps = {
  onClose: (data?: string) => void;
  show: boolean;
};

export const DispatcherModal: React.FC<DispatcherModalProps> = (props) => {
  const [showRendezVous, setShowRendezVous] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  return (
    <>
      {showRendezVous && (
        <RendezVousForm
          onClose={() => {
            setShowRendezVous(false);
          }}
        />
      )}

      {showSubscription && (
        <SubscriptionForm
          onClose={() => {
            setShowSubscription(false);
          }}
        />
      )}
      <Modal
        show={props.show}
        position="center"
        onClose={props.onClose}
        dismissible
      >
        <Modal.Body className="flex flex-col gap-5">
          <h3 className="rounded- ml-[-20px] mt-[-20px] p-4 text-[16px] font-semibold text-blue">
            Comment voulez-vous proceder ?
          </h3>
          <div>
            <button
              className="flex flex-row items-center gap-5 rounded-[15px] bg-secondary-200 px-5 py-2 text-[14px] text-blue"
              onClick={() => {
                setShowRendezVous(true);
              }}
            >
              <span className="h-[25px] w-[25px] rounded-[12px] bg-blue pt-[3px] text-secondary-200">
                1
              </span>
              <span className="text-left text-[14px] font-semibold text-blue">
                Je veux prendre un rendez-vous
              </span>
            </button>
          </div>
          <div>
            <button
              className="flex flex-row items-center gap-5 rounded-[15px] bg-primary-300 px-5 py-2 text-[14px] text-blue"
              onClick={() => {
                props.onClose();
                scroller.scrollTo('pricing', {
                  duration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart',
                });
              }}
            >
              <span className="h-[25px] w-[25px] rounded-[12px] bg-blue pt-[3px] text-secondary-200">
                2
              </span>
              <span className="text-left text-[14px] font-semibold text-blue">
                Je veux souscrire ma famille
              </span>
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
