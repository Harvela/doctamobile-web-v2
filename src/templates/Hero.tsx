import { Button, Carousel } from 'flowbite-react';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="">
    <Section yPadding="py-6 ">
      <div className="grid h-[80vh] items-center px-4 md:grid-cols-2 lg:px-[100px]">
        <div className="my-auto pr-10">
          <h1 className="text-lg font-bold text-blue lg:text-[30px]">
            Une equipe d’
            <span className="text-secondary-900">Expert en santé</span> juste
            pour vous et <span className="text-primary-900">votre famille</span>
          </h1>
          <h2 className="mt-[20px] text-sm text-[#666] lg:text-[17px]">
            Avec doctamobile, ayez accès à une équipe permanente de medecins ( A
            domicile, au travail, ou à distance), infirmier et autres
            spécialiste de santé pour toute votre famille.
          </h2>
          <div className="mt-[20px] flex flex-col gap-5 lg:flex-row">
            <Button color="primary" className="mt-4 bg-primary-900 text-white">
              <Link href="/about">Prendre rendez-vous</Link>
            </Button>
            <Button
              color="primary"
              className="mt-4 bg-primary-300 text-primary-900"
            >
              <Link href="/about">Enregistrez ma famille </Link>
            </Button>
          </div>
        </div>
        <div className="hidden items-end justify-end lg:block">
          <Carousel className="ml-auto h-[400px] w-[500px]" slideInterval={500}>
            <div className="flex flex-col items-end justify-end">
              <img
                src="/assets/images/home/img1.jpg"
                alt="Hero"
                className="mr-[170px] w-[280px] rounded-md"
              />
              <img
                src="/assets/images/home/img2.jpg"
                alt="Hero"
                className="mt-[-40px] w-[350px] rounded-md"
              />
              <div className="absolute top-[40px] flex flex-col items-center justify-center">
                <div className="mb-[6px] h-[8px] w-[80px] rotate-[-5deg] bg-primary-300" />
                <p className="text-[12px] font-bold">MALADIES CHRONIQUES</p>
                <div className="ml-[20px] mt-[5px] h-[8px] w-[80px] rotate-[-5deg] bg-amber-200" />
              </div>
            </div>

            <div className="flex flex-col items-end justify-end">
              <img
                src="/assets/images/home/img1.jpg"
                alt="Hero"
                className="mr-[170px] w-[280px] rounded-md"
              />
              <img
                src="/assets/images/home/img2.jpg"
                alt="Hero"
                className="mt-[-40px] w-[350px] rounded-md"
              />
              <div className="absolute top-[40px] flex flex-col items-center justify-center">
                <div className="mb-[6px] h-[8px] w-[80px] rotate-[-5deg] bg-primary-300" />
                <p className="text-[12px] font-bold">MALADIES CHRONIQUES</p>
                <div className="ml-[20px] mt-[5px] h-[8px] w-[80px] rotate-[-5deg] bg-amber-200" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </Section>
  </Background>
);

export { Hero };
