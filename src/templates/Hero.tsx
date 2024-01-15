import { Button, Carousel } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

export type HeroProps = {
  setOpenModal?: (value: boolean) => void;
};

const Hero: React.FC<HeroProps> = () => (
  <Background color="">
    <Section yPadding="py-6">
      <div
        className="grid h-[80vh] items-center px-4 md:mt-[100px] md:grid-cols-2 lg:mt-[100px] lg:px-[100px]"
        id="home"
      >
        <div className="my-auto pr-10">
          <h1 className="text-lg font-bold text-blue lg:text-[30px]">
            Une equipe d’
            <span className="text-secondary-900">Expert en santé</span> juste
            pour vous et <span className="text-primary-900">votre famille</span>
          </h1>
          <h2 className="mt-[20px] text-sm text-[#666] lg:text-[17px]">
            Avec doctamobile, ayez accès à une équipe permanente de medecins ( à
            domicile, au travail, ou à distance), infirmier et autres
            spécialiste de santé pour toute votre famille.
          </h2>
          <div className="mt-[20px] flex flex-col gap-5 lg:flex-row">
            <Button color="primary" className="mt-4 bg-primary-900 text-white">
              <Link href="/about">Nous Contacter</Link>
            </Button>
            <Button
              color="primary"
              className="mt-4 bg-primary-300 text-primary-900"
            >
              <Link href="#pricing">Souscrire ma famille</Link>
            </Button>
          </div>
        </div>
        <div className="hidden items-end justify-end md:block lg:block">
          <Carousel className="ml-auto h-[400px] w-[500px]" slideInterval={500}>
            <div className="flex flex-col items-end justify-end">
              <img
                src="/assets/images/home/img1.jpg"
                alt="Hero"
                className="rounded-md md:mr-[120px] md:w-[210px] lg:mr-[190px] lg:w-[250px]"
              />
              <img
                src="/assets/images/home/img2.jpg"
                alt="Hero"
                className="mt-[-40px] rounded-md md:w-[270px]  lg:w-[320px]"
              />
              <div className="absolute top-[40px] flex flex-col items-center justify-center">
                <div className="mb-[6px] h-[8px] w-[80px] rotate-[-5deg] bg-primary-300" />
                <p className="text-[12px] font-bold text-primary-900">
                  MALADIES CHRONIQUES
                </p>
                <div className=" ml-[20px] mt-[5px] h-[8px] w-[80px] rotate-[-5deg] bg-secondary-200" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </Section>
  </Background>
);

export { Hero };
