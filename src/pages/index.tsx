import Image from 'next/image';

import Foto from '../assets/foto.png'

import NavBar from '../components/NavBar';
import Stacks from '../components/Stacks';
import Contact from '../components/Contact';
import Cards from '../components/Cards';
import Link from 'next/link';

import JessicaTech from '../assets/jessicatech.png'
import NlwCopa from '../assets/nlw-copa.png'
import NlWEsports from '../assets/nlw-esports-ignite.png'
import NlWEsportsReact from '../assets/nlw-esports-react.png'
import ExplorerLab from '../assets/project-explorer-lab.png'
import NftsRocket from '../assets/nfts-rocket.png'


function Home() {
  return (
    <div className='scroll-m-0'>
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


      <div id="projects" className='bg-gray-900'>
        <div className='text-center mt-[100px]'>
            <h2 className='text-white text-2xl font-bold mb-6'>Meus Projetos</h2>
            <p className='text-gray-400 mb-24' >O que construí até agora.</p>
        </div>
      <div className='flex flex-col justify-center items-center '>

          <div className='flex gap-4 md:flex-row sm:flex flex-col'>
            <Cards
            image={<Image alt="" src={JessicaTech} className="rounded-t-lg"/>}
            title='Jessica Tech'
            description='Uma Landing Page para assistência em Tecnologia da Informação, com informações para serviços de manutenção de computadores'
            stack='Tech stack: HTML, CSS, JavaScript e Scroll Reveal Js'
            url= {<a href="https://jessicatech.vercel.app/"  className="text-[9pt]" rel="noreferrer" target={'_blank'}>Demo</a>}
            code= {<a href="https://github.com/jessica-guedes/jessicatech"  className="text-[9pt]" rel="noreferrer" target={'_blank'}>Código</a>}
            />
            <Cards
            image={<Image alt="" src={NftsRocket} className="rounded-t-lg"/>}
            title='NFTs Rocket'
            description='Uma Landing Page sobre NFTS'
            stack='Tech stack: HTML, CSS, JavaScripte e Scroll Reveal Js'
            url= {<a href="https://jessica-guedes.github.io/rocket-nfts/"  className="text-[9pt]" rel="noreferrer" target={'_blank'}>Demo</a>}
            code= {<a href="https://github.com/jessica-guedes/rocket-nfts"  className="text-[9pt]" rel="noreferrer" target={'_blank'}>Código</a>}


            />
            <Cards
            image={<Image alt="" src={NlwCopa} className="rounded-t-lg"/>}
            title='Bolão para a Copa do Mundo'
            description='Um bolão da Copa, uma aplicação completa, web e mobile, pra garantir a diversão da família e dos amigos durante os jogos.'
            stack='Tech stack: React, NextJs, React Native, Native Base, TypeScript, Expo, TailwindCSS, Prisma, Node e NPM'
            url= {<a href=""  className="text-[9pt]" rel="noreferrer">Demo</a>}
            code= {<a href="https://github.com/jessica-guedes/nlw-copa"  className="text-[9pt]" rel="noreferrer" target={'_blank'}>Código</a>}

            
            />
          </div>
          <div className='flex gap-4 md:flex-row sm:flex flex-col'>
          <Cards
            image={<Image alt="" src={NlWEsports} className="rounded-t-lg"/>}
            title='Find Your Duo'
            description='Projeto voltado para área de eSports e a ideia é basicamente conseguir conectar pessoas que jogam os mesmos games.'
            stack='Tech stack: ReactJs, React Native, Expo, Vite, Prisma, SQLite, TailwindCSS, Radix e Phosphor Icons'
            url= {<a href=""  className="text-[9pt]" rel="noreferrer" >Demo</a>}
            code= {<a href="https://github.com/jessica-guedes/nlw-esports"  className="text-[9pt]" rel="noreferrer" target={'_blank'}>Código</a>}

            />

            <Cards
            image={<Image alt="" src={NlWEsportsReact} className="rounded-t-lg"/>}
            title='NLW eSports React'
            description='Uma page sobre os games que mais gosto de jogar!'
            stack='Tech stack: HTML e CSS, JavaScript e React'
            url= {<a href="https://nlw-esports-react-xi.vercel.app/" target={'_blank'} className="text-[9pt]" rel="noreferrer" >Demo</a>}
            code= {<a href="https://github.com/jessica-guedes/nlw-esports-react"  className="text-[9pt]" rel="noreferrer" target={'_blank'}>Código</a>}

            />

            <Cards
            image={<Image alt="" src={ExplorerLab} className="rounded-t-lg"/>}
            title='RocketPay'
            description='é um componente que simula o formulário de preenchimento de cartão de crédito.'

            stack='Tech stack: HTML e CSS, JavaScript e JSON, Node e NPM, Vite e iMask'
            url= {<a href="https://explorer-lab-j5q38ocjx-jessica-guedes.vercel.app/" target={'_blank'} className="text-[9pt]" rel="noreferrer" >Demo</a>}
            code= {<a href="https://github.com/jessica-guedes/explorer-lab-dom"  className="text-[9pt]" rel="noreferrer" target={'_blank'}>Código</a>}

            
            />
      </div>
    </div>
  </div>

  <Contact />
  </div>
        
    
    

  )
}

export default Home;