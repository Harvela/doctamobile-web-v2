import {
  Alert,
  Label,
  Modal,
  Select,
  Spinner,
  TextInput,
} from 'flowbite-react';
import React from 'react';

export type RegisterFamilyProps = {
  // Prop types go here
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  subscriptionPaquet: string;
};

const RegisterFamily: React.FC<RegisterFamilyProps> = ({
  openModal,
  setOpenModal,
  subscriptionPaquet,
}) => {
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onSubmit = async (event: any) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch(
        'http://localhost:3001/api/subscription-requests',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullname: event.target[0].value,
            contact: event.target[1].value,
            ville: event.target[2].value,
            commune: event.target[3].value,
            address: event.target[4].value,
            subscriptionPaquet,
          }),
        },
      );

      if (response.ok) {
        setSuccess(true);
        setLoading(false);
        // Handle success, redirect, or perform any other action
      } else {
        setLoading(false);
        console.error('Failed to send subscription request.');
        // Handle failure, display error message, or perform any other action
      }
    } catch (error) {
      setLoading(false);
      console.error('Error sending subscription request:', error);
      // Handle unexpected errors
    }
  };

  const formRef = React.useRef<HTMLFormElement>(null);

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Enregistrer ma famille</Modal.Header>
      <Modal.Body className="">
        {success && (
          <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
            <span className="font-medium">
              Votre requette a été enregsitré avec succès
            </span>{' '}
            Un membre de l&apos;équipe Doctamobile va vous contacter pour la
            suite.
          </Alert>
        )}
        {!success && (
          <form
            id="formRequest"
            ref={formRef}
            onSubmit={onSubmit}
            className=" text-blue sm:grid-cols-1 sm:p-3 md:grid md:grid-cols-2 md:gap-5"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Nom complet" />
              </div>
              <TextInput
                required
                name="fullname"
                id="small"
                type="text"
                sizing="sm"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Numero de telephone" />
              </div>
              <TextInput
                required
                name="contact"
                id="small"
                type="text"
                sizing="sm"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Province / Ville / Localite" />
              </div>
              <Select aria-required name="ville" id="countries" required>
                <option>Selectionner</option>
                <option value="goma">Goma</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Commune de residence" />
              </div>
              <Select aria-required name="commune" id="countries" required>
                <option>Selectionner</option>
                <option value="goma">Goma</option>
                <option value="karisimbi">Karisimbi</option>
                <option value="nyiragongo">Nyiragongo</option>
              </Select>
            </div>
            <div className="col-span-2">
              <div className="mb-2 block">
                <Label htmlFor="small" value="Addresse complete" />
              </div>
              <TextInput required id="small" type="text" sizing="sm" />
            </div>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className=" hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5 w-full rounded-lg border border-primary-900 bg-white px-5 py-2.5 text-center text-sm font-medium text-primary-900 focus:outline-none focus:ring-4 sm:w-auto"
            >
              Annuler
            </button>
            <button
              type="submit"
              className=" hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5 w-full rounded-lg bg-primary-900 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-auto"
            >
              Submit
              {loading && <Spinner aria-label="Default status example" />}
            </button>
          </form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export { RegisterFamily };
