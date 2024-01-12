import { Button, Label, Modal, Select, TextInput } from 'flowbite-react';

export type RegisterFamilyProps = {
  // Prop types go here
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};

const RegisterFamily: React.FC<RegisterFamilyProps> = ({
  openModal,
  setOpenModal,
}) => {
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Enregistrer ma famille</Modal.Header>
      <Modal.Body>
        <form className="grid text-blue sm:grid-cols-1 md:grid-cols-2 md:gap-5">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Nom complet" />
            </div>
            <TextInput id="small" type="text" sizing="sm" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Numero de telephone" />
            </div>
            <TextInput id="small" type="text" sizing="sm" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Province / Ville / Localite" />
            </div>
            <Select id="countries" required>
              <option>Selectionner</option>
              <option value="goma">Goma</option>
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Commune de residence" />
            </div>
            <Select id="countries" required>
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
            <TextInput id="small" type="text" sizing="sm" />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => setOpenModal(false)}
          className="border border-primary-900 bg-transparent text-primary-900"
        >
          Annuler
        </Button>
        <Button onClick={() => setOpenModal(false)} className="bg-primary-900">
          Enregistrer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { RegisterFamily };
