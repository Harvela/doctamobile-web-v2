import { Button, Carousel } from 'flowbite-react';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="">
    <Section yPadding="py-6 ">
      <div className="grid h-[80vh] items-center px-[100px] sm:grid-cols-1 md:grid-cols-2">
        <div className="my-auto">
          <h1>Une equipe d’Expert en santé juste pour vous et votre famille</h1>
          <h2>
            Avec doctamobile, ayez accès à une équipe permanente de medecins ( A
            domicile, au travail, ou à distance), infirmier et autres
            spécialiste de santé pour toute votre famille.
          </h2>
          <div className="flex flex-row">
            <Button color="primary" className="mt-4">
              <Link href="/about">En savoir plus</Link>
            </Button>
            <Button color="primary" className="mt-4">
              <Link href="/about">Souscrire</Link>
            </Button>
          </div>
        </div>
        <Carousel className="h-[400px]" slideInterval={500}>
          <div className="flex flex-col items-end justify-end">
            <img src="/images/hero.png" alt="Hero" />
            <img src="/images/hero.png" alt="Hero" />
            <div className="absolute">
              <div className="mb-[6px] h-[8px] w-[80px] rotate-[-5deg] bg-primary-300" />
              <p>MALADIES CHRONIQUES</p>
              <div className="ml-[20px] mt-[5px] h-[8px] w-[80px] rotate-[-5deg] bg-amber-200" />
            </div>
          </div>

          <div className="flex flex-col items-end justify-end">
            <img src="/images/hero.png" alt="Hero" />
            <img src="/images/hero.png" alt="Hero" />
            <div className="absolute">
              <div className="mb-[6px] h-[8px] w-[80px] rotate-[-5deg] bg-primary-300" />
              <p>AUTRES MALADIES</p>
              <div className="ml-[20px] mt-[5px] h-[8px] w-[80px] rotate-[-5deg] bg-amber-200" />
            </div>
          </div>
        </Carousel>
      </div>
    </Section>
  </Background>
);

export { Hero };
