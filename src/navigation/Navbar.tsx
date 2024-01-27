import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite, Navbar } from 'flowbite-react';
import React, { useEffect } from 'react';
import { Link, scroller } from 'react-scroll';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export type NavbarProps = {
  // Prop types go here
  setOpenModal?: (value: boolean) => void;
};

const customTheme: CustomFlowbiteTheme = {
  navbar: {
    link: {
      base: 'block py-2 pr-4 pl-3 md:p-0 text-[#000]',
      active: {
        on: 'text-[#1278FBF2] dark:text-white md:bg-transparent md:text-cyan-700',
        off: 'border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white',
      },
      disabled: {
        on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
        off: '',
      },
    },
  },
};

const NavbarGlobal: React.FC<NavbarProps> = () => {
  const [token, setToken] = React.useState<string | null>(null);
  useEffect(() => {
    scroller.scrollTo('home', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
    const tokend = cookies.get('token');
    setToken(tokend);
  }, []);
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar
        className="px-4 lg:px-[100px]"
        style={{ position: 'fixed', width: '100%', zIndex: 99999999, top: 0 }}
      >
        <Navbar.Brand href="#">
          <img
            src="/fullLogo.png"
            className="h-8 lg:mr-3 lg:h-16"
            alt="Docta Mobile Logo"
          />
        </Navbar.Brand>
        <div className="flex gap-8 md:order-2">
          <button className="rounded-lg bg-primary-900 px-4 py-2 text-sm text-white">
            <a href="https://app.doktamobile.com" target="_blank">
              {token ? 'Tableau de bord' : 'Prendre rendez-vous'}
            </a>
          </button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link
            activeClass="text-primary-900 font-bold"
            to="home"
            smooth
            spy
            offset={-100}
          >
            Accueil
          </Link>
          <Link
            activeClass="text-primary-900 font-bold"
            to="how-it-work"
            smooth
            spy
            offset={-100}
          >
            Comment ça marche?
          </Link>
          <Link
            activeClass="text-primary-900 font-bold"
            to="services"
            smooth
            spy
          >
            Nos services
          </Link>
          <Link
            activeClass="text-primary-900 font-bold"
            to="pricing"
            smooth
            spy
            offset={-100}
          >
            Nos paquets
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
};

export { NavbarGlobal as Navbar };
