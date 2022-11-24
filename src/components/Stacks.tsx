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
    <div>
      <div className='text-center mt-[200px]'>
          <h2 className='text-white text-2xl font-bold'>Minhas Stacks</h2>
          <p className='text-gray-400 mb-24' >Tecnologias que trabalhei recentemente.</p>
        </div>
        
        <div className='flex flex-col gap-4'>

            <div className='flex justify-center mt-16 gap-[100px] '>
              <Image
              className='w-16'
              src={HtmlIcon}
              alt="Icone Html"
              />
              <Image
              className='w-16'
              src={CSSIcon}
              alt="Icone CSS"
              />
              <Image
              className='w-16'
              src={JavascriptIcon}
              alt="Icone JavaScript"
              />
              <Image
              className='w-16'
              src={ReactIcon}
              alt="Icone React"
              />
            </div>

            <div className='flex justify-center mt-16 gap-[100px] mb-48'>
              <Image
              className='w-16'
              src={GitIcon}
              alt="Icone Git"
              />
              <Image
              className='w-16'
              src={VsCodeIcon}
              alt="Icone Visual Studio Code"
              />
              <Image
              className='w-16'
              src={GitHubIcon}
              alt="Icone GitHub"
              />
              <Image
              className='w-16'
              src={TailwindIcon}
              alt="Icone TailwindCss"
              />
            </div>
          </div>
    </div>
  )
}