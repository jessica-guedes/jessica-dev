import Image from 'next/image';

import Foto from '../assets/foto.png'

import NavBar from '../components/NavBar';
import Stacks from '../components/Stacks';
import Cards from '../components/Cards';



function Home() {
  return (
    <div>
      <NavBar/>

      
        <div className=" container sm:grid-cols-none sm:flex sm:flex-col-reverse md:w-[1024px] md:flex-row md:items-center md:mt-[90px] md:mx-auto ">
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
              priority
              />
          </div>
      </div>

      <Stacks />

      <div className='text-center mt-[100px]'>
          <h2 className='text-white text-2xl font-bold mb-6'>Meus Projetos</h2>
          <p className='text-gray-400 mb-24' >O que construí até agora.</p>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='flex gap-4'>
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className='flex gap-4'>
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    
      
    </div>


    
    

  )
}

export default Home;