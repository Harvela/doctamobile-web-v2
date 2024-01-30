import { useState } from 'react';

import { AddressSubscription } from './address';
import { SubmitSubscription } from './create';
import { SubscriptionIdentity } from './identity';
import { SubscriptionIdentity2 } from './identity2';
import { PackageSubscription } from './package';

export type SubscriptionProps = {
  setData: (data: any) => void;
  data: any;
  setStep: (step: number) => void;
  step: number;
};

export type SubscriptionType = {
  id: string;
  fullName: string;
  patient: string;
  numberOfMembers: string;
  typeOfMembers: string;
  package: string;
  address: string;
  budget: string;
  startTime?: Date;
  endTime?: Date;
  language: string;
};

export type SubscriptionFormProps = {
  onClose: () => void;
  email?: string;
};

export const SubscriptionForm: React.FC<SubscriptionFormProps> = () => {
  const [data, setData] = useState<SubscriptionType>({
    id: '',
    fullName: '',
    patient: '',
    numberOfMembers: '',
    typeOfMembers: '',
    package: '',
    budget: '',
    address: '',
    language: '',
  });
  const [step, setStep] = useState<number>(0);
  const stepsComponent = [
    <SubscriptionIdentity
      key="identity"
      setData={setData}
      setStep={setStep}
      step={step}
      data={data}
    />,
    <SubscriptionIdentity2
      key="identity2"
      setData={setData}
      setStep={setStep}
      step={step}
      data={data}
    />,
    <AddressSubscription
      key="address"
      setData={setData}
      setStep={setStep}
      step={step}
      data={data}
    />,
    <PackageSubscription
      key="package"
      setData={setData}
      setStep={setStep}
      step={step}
      data={data}
    />,
    <SubmitSubscription
      key="place"
      setData={setData}
      setStep={setStep}
      step={step}
      data={data}
    />,
  ];
  return <>{stepsComponent[step]}</>;
};
