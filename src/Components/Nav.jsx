import { Button, Navbar, Flowbite } from 'flowbite-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { LiaWhatsapp } from 'react-icons/lia'

function Nav() {
  return (
    <Flowbite>
      <Navbar rounded className=" backdrop-blur rounded-b-3xl bg-grad-soso-secondary py-3 text-xl fixed top-0 w-full z-20">
        <Navbar.Brand href="sosocode.netlify.app">
          <span className="self-center whitespace-nowrap text-2xl font-bold text-soso-primary">
            <FontAwesomeIcon icon={faCode} className="text-white" /> Soso<span className=" text-gray-500">code</span>
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <a target="_blank" href="https://wa.me/2347065301316">
            <Button className="bg-grad-soso-primary duration-500  ease-linear transition-all">
              <LiaWhatsapp className="text-2xl" />
              <span className="ps-1">Whatsapp</span>
            </Button>
          </a>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active={true} className="text-soso-primary lg:text-soso-primary sm:bg-soso-secondary md:bg-none md:text-soso-primary lg:text-lg font-bold">
            Home
          </Navbar.Link>
          <Navbar.Link href="#About" className="text-white lg:hover:text-soso-primary-light hover:text-black lg:text-lg">
            About
          </Navbar.Link>
          <Navbar.Link href="#services" className="text-white lg:hover:text-soso-primary-light hover:text-black lg:text-lg">
            Services
          </Navbar.Link>
          <Navbar.Link href="#portfolio" className="text-white lg:hover:text-soso-primary-light hover:text-black lg:text-lg">
            portfolio
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white lg:hover:text-soso-primary-light hover:text-black lg:text-lg">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white lg:hover:text-soso-primary-light hover:text-black lg:text-lg">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  )
}

export default Nav
