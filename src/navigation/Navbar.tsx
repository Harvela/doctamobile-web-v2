import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite, Navbar } from 'flowbite-react';

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

const NavbarGlobal = () => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar className="px-4 lg:px-[100px]">
        <Navbar.Brand href="#">
          <img
            src="/fullLogo.png"
            className="h-8 lg:mr-3 lg:h-16"
            alt="FlowBite Logo"
          />
        </Navbar.Brand>
        <div className="flex gap-8 md:order-2">
          <button className="rounded-lg bg-primary-900 px-4 py-2 text-sm text-white">
            Prendre rendez-vous
          </button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Accueil
          </Navbar.Link>
          <Navbar.Link href="#">Comment ca marche?</Navbar.Link>
          <Navbar.Link href="#">Nos services</Navbar.Link>
          <Navbar.Link href="#">Nos paquets</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
};

export { NavbarGlobal as Navbar };
