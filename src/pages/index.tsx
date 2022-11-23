import Image from 'next/image';

import Foto from '../assets/foto.png'
import CSSIcon from '../assets/css.svg'
import HtmlIcon from '../assets/html.svg'
import JavascriptIcon from '../assets/javascript.svg'
import ReactIcon from '../assets/react.svg'
import TailwindIcon from '../assets/tailwind.svg'
import NavBar from '../../components/NavBar';

function Home() {
  return (
    <div>
      <NavBar/>
      <div className="sm:grid-cols-none sm:flex sm:flex-col-reverse md:w-[1024px] md:flex-row md:items-center md:mt-[90px] md:mx-auto relative">
        <main className='md:w-[60%]'>
          <h1 className='text-white text-center pt-10 mb-2 text-2xl  leading-tight md:text-left md:pl-8 md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            Olá, sou Jéssica Guedes
          </h1>
          <p className='text-white text-center md:text-left md:pl-8'>
            Web Developer
          </p>

          <p className='mt-10 px-8 pb-10 text-justify text-white text-md leading-relaxed'>
              Tenho 26 anos, sou programadora front-end e
              tenho experiência com essas tecnologias: HTML, CSS, JavaScript, TypeScript, TailwindCSS, ReactJs e NextJs.
          </p>
        </main>
        <div className=''>
          <Image
            className='w-[300px] mt-5 ml-[50px] md:w-[300px] '
         
            src={Foto}
            alt="Uma foto minha de rosto com fundo da foto na cor roxa"
            quality={100}
            />
        </div>

        
      </div>
      <div className='flex items-center justify-center mt-16 gap-28 sm:gap-12 md '>
          <Image 
          className='w-[20px]'
          src={HtmlIcon}
          alt="Icone Html"
          />

          <Image 
          className='w-[20px]'
          src={CSSIcon}
          alt="Icone CSS"
          />

          <Image 
          className='w-[20px]'
          src={JavascriptIcon}
          alt="Icone JavaScript"
          />

          <Image 
          className='w-[20px]'
          src={ReactIcon}
          alt="Icone React"
          />

          <Image 
          className='w-[20px]'
          src={TailwindIcon}
          alt="Icone TailwindCss"
          />
        </div>
    </div>


    
    

  )
}

export default Home;