import Image from 'next/image';

import CSSIcon from '../assets/css.svg'
import HtmlIcon from '../assets/html.svg'
import JavascriptIcon from '../assets/javascript.svg'
import ReactIcon from '../assets/react.svg'
import TailwindIcon from '../assets/tailwind.svg'
import GitIcon from '../assets/git.svg'
import VsCodeIcon from '../assets/vscode.svg'
import GitHubIcon from '../assets/github.png'



export default function Stacks(){
  return(
    <div id="stacks">
      <div className='text-center mt-[300px] sm:mt-[200px] md:'>
          <h2 className='text-white text-2xl font-bold sm:text-md sm:font-light'>Minhas Stacks</h2>
          <p className='text-gray-400 mb-24 sm:text-sm sm:px-10 sm:mb-10' >Tecnologias, Ferramentas e Apps que uso no dia a dia.</p>
        </div>
        
        <div className='flex flex-col gap-4'>

            <div className='flex justify-center mt-16 md:gap-[100px] sm:gap-[40px]'>
              <Image
              className='md:w-16 sm:w-8'
              src={HtmlIcon}
              alt="Icone Html"
              />
              <Image
              className='md:w-16 sm:w-8'
              src={CSSIcon}
              alt="Icone CSS"
              />
              <Image
              className='md:w-16 sm:w-8'
              src={JavascriptIcon}
              alt="Icone JavaScript"
              />
              <Image
              className='md:w-16 sm:w-8'
              src={ReactIcon}
              alt="Icone React"
              />
            </div>

            <div className='flex justify-center mt-16 md:gap-[100px] mb-48 sm:gap-[40px]'>
              <Image
              className='md:w-16 md:h-16 sm:w-8 sm:h-8' 
              src={GitHubIcon}
              alt="Icone GitHub"
              />
              <Image
              className='md:w-16 sm:w-8'
              src={GitIcon}
              alt="Icone Git"
              />
              <Image
              className='md:w-16 sm:w-8'
              src={VsCodeIcon}
              alt="Icone Visual Studio Code"
              />
              <Image
              className='md:w-16 sm:w-8'
              src={TailwindIcon}
              alt="Icone TailwindCss"
              />
            </div>
          </div>
    </div>
  )
}