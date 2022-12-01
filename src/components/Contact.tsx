import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import LogoWhite from '../assets/logo-white.png'



export default function Contact(){
  return(
    <div id="contact" className= "mt-[200px] mb-[100px] container mx-auto ">
      <div className='flex flex-wrap items-center justify-between mb-8'>
        <div>
          <a href="./" className="flex items-end flex-col md:ml-0 sm:ml-8">
                <Image
                src={LogoWhite}
                alt="Logo da Minha marca"
                width={40}
                quality={100}
                />
           </a>
        </div>
        <div className='flex flex-row gap-4 md:mr-0 sm:mr-8'>
          <div>
           <a href="https://www.instagram.com/jessicaguedes.dev/" rel="noreferrer" target="_blank">
             <FaInstagram size={16}
             color="#ffffff"
             />
           </a>
          </div>
          <div>
           <a href="https://www.linkedin.com/in/jessicaa-guedes/" rel="noreferrer" target="_blank">
             <FaLinkedin size={16}
             color="#ffffff"
             />
           </a>
          </div>
          <div>
           <a href="https://github.com/jessica-guedes" rel="noreferrer" target="_blank">
             <FaGithubSquare size={16}
             color="#ffffff"
             />
           </a>
          </div>
        </div>
    </div>

            <div className='flex justify-between items-center border-t-[1px] border-gray-700'>
              <div className="hidden md:block md:mt-14"  id="navbar-default" >

                  <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                  <Link href="/"className="block py-2 pl-3 pr-4 text-gray-700  rounded md:bg-transparent md:p-0 dark:text-white " >Home</Link>
                    </li>
                    <li>
                      <Link href="#stacks" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Stacks</Link>
                    </li>
                    <li>
                      <Link href="#projects" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projetos</Link>
                    </li>
                    <li>
                      <Link href="#contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contatos</Link>
                    </li>
                  </ul>
              </div>

              <div className='text-gray-700 text-sm md:mt-14 md:mx-0 sm:mx-auto sm:mt-14'>
                <p>Copyright © | Coded by Jessica Guedes</p>
              </div>

            </div>
    </div>

    
  )
}