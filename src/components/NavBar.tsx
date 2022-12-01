import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../assets/logo.png"

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


          <button 
          onClick={()=> setOpen(!open)} 
          
          data-collapse-toggle="navbar-default" 
          type="button" 
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden text-gray-400" 
          aria-controls="navbar-default" 
          aria-expanded="false">
            
          <span className="sr-only">
            Open main menu
          </span>

          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>

          </button>

          <div className={`w-full md:block md:w-auto ${open ? 'text-center mb-[500px]' : 'hidden'}`} >
            <ul className="flex flex-col p-4 
            
            md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-900"
            
            >
              <li>
            <Link href="/" className="block py-8 pl-3 pr-4 text-gray-400 md:p-0 md:hover:text-white md:hover:bg-transparent sm:hover:text-white sm:hover:bg-transparent">Home</Link>
              </li>
              <li>
                <Link href="#stacks" className="block py-8 pl-3 pr-4 md:border-0 md:p-0 text-gray-400 md:hover:text-white md:hover:bg-transparent">Stacks</Link>
              </li>
              <li>
                <Link href="#projects" className="block py-8 pl-3 pr-4 md:border-0 md:p-0 text-gray-400 md:hover:text-white md:hover:bg-transparent">Projetos</Link>
              </li>
              <li>
                <Link href="#contact" className="block py-8 pl-3 pr-4 md:border-0 md:p-0 text-gray-400 md:hover:text-white md:hover:bg-transparent ">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}