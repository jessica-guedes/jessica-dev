import Image from "next/image";
import { Link } from 'react-scroll';
import { useState } from "react";
import Logo from "../assets/logo.png"
import { VscMenu, VscChromeClose } from "react-icons/vsc";
export default function NavBar(){
  let [open, setOpen] = useState(false);

  

  return(
    <div>
      <nav className="px-2 sm:px-4 py-2.5 dark:bg-gray-900" >
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="./" className="flex flex-col w-[40px] sm:mt-2 sm:ml-2">
            <Image 
            src={Logo}
            color="pink"
            alt="Logo da Minha marca"
            quality={100}
            />
          </a>


          <div onClick={()=> setOpen(!open)} className="text-2xl text-white md:hidden">
          {open ? <VscChromeClose/> : <VscMenu /> }
          </div>

          <div className={`w-full md:block md:w-auto ${open ? 'text-center mb-[500px]' : 'hidden' }`} >
            
            <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-900 cursor-pointer">
              <li>
            <Link to="/" smooth={true} className="block py-8 pl-3 pr-4 text-gray-400 md:p-0 md:hover:text-white md:hover:bg-transparent sm:hover:text-white sm:hover:bg-transparent" onClick={() => setOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="stacks" smooth={true} spy={true} offset={-70} duration={500} 
                className="block py-8 pl-3 pr-4 md:border-0 md:p-0 text-gray-400 md:hover:text-white md:hover:bg-transparent" onClick={() => setOpen(false)}>Stacks</Link>
              </li>
              <li>
                <Link to="projects" smooth={true} spy={true} offset={-70} duration={500} className="block py-8 pl-3 pr-4 md:border-0 md:p-0 text-gray-400 md:hover:text-white md:hover:bg-transparent" onClick={() => setOpen(false)}>Projetos</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} spy={true} offset={-70} duration={500} className="block py-8 pl-3 pr-4 md:border-0 md:p-0 text-gray-400 md:hover:text-white md:hover:bg-transparent " onClick={() => setOpen(false)}>Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}