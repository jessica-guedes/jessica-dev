import Image from 'next/image';
import Link from 'next/link';
import GitHubIcon from '../assets/github.png'
import quizDexter from '../assets/quizDexter.png'

export default function Projects(){
  return (
    <div>
      <div className='w-[300px] px-4 py-8 mx-auto'>
          

          <div className=' bg-zinc-900 rounded-lg shadow-lg' >

            <div >
              <Image 
                className='w-full bg-zinc-800  rounded-t-lg'
                src={quizDexter}
                alt=''
              />
             

            </div>

            <div className='p-4 text-white'>
              <h2 className='mb-4'>Project Tile Goes Here</h2>

              <p className='text-sm text-justify mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor incidunt dolorem itaque laudantium, quis praesentium! Obcaecati.</p>

              <p className='text-[12px] text-slate-600'>Tech stack: HTML, JavaScript, SASS, React</p>

              <div className='flex flex-row gap-2 mt-4'>
                <Link href={''} className="text-[10px] ">Live Preview</Link>
                <Link href={''} className="text-[10px]">View Code</Link>
              </div>
            </div>
          </div>
        </div>
    </div>

    
  )
}