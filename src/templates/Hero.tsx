import { Button, TextInput } from 'flowbite-react';
import React from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

export type HeroProps = {
  setOpenModal: (value: boolean) => void;
};

const Hero: React.FC<HeroProps> = ({ setOpenModal }) => {
  const [email, setEmail] = React.useState('' as string);
  return (
    <Background color="">
      <Section yPadding="lg:py-6">
        <div className="-skew-6 absolute top-[-50px] mx-[30%] h-[120vh] w-[40%] -rotate-12 bg-primary-900 opacity-5 " />
        <div
          className="mt-[60px] grid h-[80vh] items-center px-4 md:mt-[100px] md:grid-cols-2 lg:mt-[100px] lg:h-[90vh] lg:px-[100px]"
          id="home"
        >
          <div className="md:pr-10">
            <span className="rounded-[15px] bg-primary-900/10 px-2 py-1 text-[6px] font-semibold text-primary-900 lg:text-[10px]">
              L’hôpital chez vous à la maison
            </span>
            <h1 className="mt-4 text-[24px] font-bold text-blue lg:text-[28px]">
              Une équipe mobile des spécialistes en
              <span className="ml-2 text-secondary-900">
                Médecine de Famille
              </span>{' '}
              juste pour vous et{' '}
              <span className="text-primary-900">votre famille</span>
            </h1>
            <h2 className="mt-[20px] text-[15px] text-[#666] md:text-[15px]">
              Avec Doktamobile, accédez à une équipe permanente de médecins de
              famille de la Clinique mobile de Médecine de Famille (CMMF) de
              CRESAMEF CONSULTING, et d’autres spécialistes pouvant vous
              consulter quand et où vous voulez.
            </h2>
            <div className="mt-[20px] flex flex-col gap-5 md:flex-row">
              <div className="mb-[4px]">
                <label className="text-[12px] font-bold text-primary-900">
                  Votre numéro de téléphone / email
                </label>
                <TextInput
                  placeholder="+243990455626"
                  className="mt-3 h-[40px] md:w-[250px]"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <Button
                onClick={() => {
                  if (email) {
                    window.localStorage.setItem('email', email);
                    setOpenModal(true);
                  } else alert('Veuillez entrer votre email');
                }}
                color="white"
                className="animate-infinite h-[45px] animate-wiggle bg-primary-900 text-white md:self-end"
              >
                Commencez par ici
              </Button>
            </div>
          </div>
          <div className="hidden items-end justify-end md:block lg:block">
            <img
              src="/assets/images/illustration-doktamobile.svg"
              alt="Hero"
              className="ml-auto rounded-md md:w-[30vw]"
            />
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { Hero };
