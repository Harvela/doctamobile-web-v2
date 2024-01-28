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
};

export type RendezVousType = {
  id: string;
  fullName: string;
  patient: string;
  symptoms: string;
  ageRange: string;
  sexe: string;
  address: string;
  date?: Date;
  startTime?: Date;
  endTime?: Date;
  language: string;
};

export type RendezVousFormProps = {
  onClose: () => void;
  email?: string;
};

export const RendezVousForm: React.FC<RendezVousFormProps> = () => {
  const [data, setData] = useState<RendezVousType>({
    id: '',
    fullName: '',
    patient: '',
    symptoms: '',
    ageRange: '',
    sexe: '',
    address: '',
    language: '',
  });
  const [step, setStep] = useState<number>(0);
  const stepsComponent = [
    <IdentityRendezVous
      key="identity"
      setData={setData}
      setStep={setStep}
      step={step}
      data={data}
    />,
    <SymptomRendezVous
      key="symptoms"
      setData={setData}
      setStep={setStep}
      step={step}
      data={data}
    />,
    <Identity2RendezVous
      key="identity2"
      setData={setData}
      setStep={setStep}
      step={step}
      data={data}
    />,
    <AddressRendezVous
      key="address"
      setData={setData}
      setStep={setStep}
      step={step}
      data={data}
    />,
    <PlaceRendezVous
      key="place"
      setData={setData}
      setStep={setStep}
      step={step}
      data={data}
    />,
  ];
  return <>{stepsComponent[step]}</>;
};
