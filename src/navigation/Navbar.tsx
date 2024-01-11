import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Button, Flowbite, Navbar } from 'flowbite-react';

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
      <Navbar className="px-[100px]">
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Docta Mobile
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
};

export { NavbarGlobal as Navbar };
