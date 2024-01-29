import { useState } from 'react';

import { AddressRendezVous } from './address';
import { IdentityRendezVous } from './identity';
import { Identity2RendezVous } from './identity2';
import { PlaceRendezVous } from './place';
import { SymptomRendezVous } from './symptoms';

export type RendezVousProps = {
  setData: (data: any) => void;
  data: any;
  setStep: (step: number) => void;
  step: number;
  onClose: () => void;
};

export type RendezVousType = {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  city?: string;
  symptoms: string;
  dateOfBirth: Date;
  sexe: string;
  address: string;
  language: string;
  requestedTimeFrom?: Date;
  requestedTimeTo?: Date;
  requestedTime?: Date;
  requestedPlace?: string;
  requestedAddress?: string;
  preferredNotificationWay?: string;
};

export type RendezVousFormProps = {
  onClose: () => void;
  email?: string;
};

export const RendezVousForm: React.FC<RendezVousFormProps> = (props) => {
  const [data, setData] = useState<RendezVousType>();
  const [step, setStep] = useState<number>(0);
  const stepsComponent = [
    <IdentityRendezVous
      key="identity"
      setData={setData}
      setStep={setStep}
      step={step}
      data={data}
      onClose={props.onClose}
    />,
    <SymptomRendezVous
      key="symptoms"
      setData={setData}
      setStep={setStep}
      step={step}
      data={data}
      onClose={props.onClose}
    />,
    <Identity2RendezVous
      key="identity2"
      setData={setData}
      setStep={setStep}
      step={step}
      data={data}
      onClose={props.onClose}
    />,
    <AddressRendezVous
      key="address"
      setData={setData}
      setStep={setStep}
      step={step}
      data={data}
      onClose={props.onClose}
    />,
    <PlaceRendezVous
      key="place"
      setData={setData}
      setStep={setStep}
      step={step}
      data={data}
      onClose={props.onClose}
    />,
  ];
  return <>{stepsComponent[step]}</>;
};
