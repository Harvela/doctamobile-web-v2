import { Button, Carousel, TextInput } from 'flowbite-react';
import React from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

export type HeroProps = {
  setOpenModal: (value: boolean) => void;
};

const Hero: React.FC<HeroProps> = ({ setOpenModal }) => (
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
            CRESAMEF CONSULTING, et d’autres spécialistes pouvant vous consulter
            quand et où vous voulez.
          </h2>
          <div className="mt-[20px] flex flex-col gap-5 lg:flex-row">
            <div className="mb-[4px]">
              <label className="text-[12px] font-bold text-primary-900">
                Votre numéro de téléphone / email
              </label>
              <TextInput
                placeholder="+243990455626"
                className="mt-3 h-[40px] md:w-[250px]"
              />
            </div>
            <Button
              onClick={() => setOpenModal(true)}
              color="white"
              className="animate-infinite h-[45px] animate-wiggle bg-primary-900 text-white md:self-end"
            >
              Commencez par ici
            </Button>
          </div>
        </div>
        <div className="hidden items-end justify-end md:block lg:block">
          <Carousel className="ml-auto h-[400px] w-[500px]" slideInterval={500}>
            <div className="flex flex-col items-end justify-end">
              <img
                src="/assets/images/home/img1.png"
                alt="Hero"
                className="rounded-md md:mr-[120px] md:w-[210px] lg:mr-[190px] lg:w-[250px]"
              />
              <img
                src="/assets/images/home/img2.png"
                alt="Hero"
                className="mt-[-40px] rounded-md md:w-[270px]  lg:w-[320px]"
              />
              {/* <div className="absolute top-[40px] flex flex-col items-center justify-center">
                <div className="mb-[6px] h-[8px] w-[80px] rotate-[-5deg] bg-primary-300" />
                <p className="text-[12px] font-bold text-primary-900">
                  MALADIES CHRONIQUES
                </p>
                <div className=" ml-[20px] mt-[5px] h-[8px] w-[80px] rotate-[-5deg] bg-secondary-200" />
              </div> */}
            </div>
          </Carousel>
        </div>
      </div>
    </Section>
  </Background>
);

export { Hero };
