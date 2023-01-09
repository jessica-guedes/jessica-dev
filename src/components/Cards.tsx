import Link from 'next/link';
import { GoMarkGithub, GoLink} from "react-icons/go";

interface Props {
  image?: JSX.Element,
  title: string;
  description: string;
  stack: string;
  url: JSX.Element;
  code: JSX.Element;
}

export default function Cards(props: Props){
  return (
    <div  className='w-[360px] '>

      <div className='px-4 py-8 mx-auto '>
          

          <div className='bg-zinc-900 rounded-lg shadow-sm hover:scale-105 h-[500px]' >

            <div className='w-full rounded-t-lg' >
                {props.image}
            </div>
            <div className='p-4'>
              <h2 className='mb-4 text-slate-200'>
                {props.title}
              </h2>

              <p className='text-[10pt] text-slate-400 text-justify mb-4 h-[100px]'>
                {props.description}
              </p>

              <p className='text-[10pt] text-slate-600 h-[80px]'>
                {props.stack}
                
              </p>

              <div className='flex flex-row justify-between mt-4 text-slate-200'>
                <div className='flex flex-row gap-1 items-center'>
                  <GoLink size={12}/>
                  {props.url}
                </div>

                
                  <div className='flex flex-row gap-1 items-center '>
                    <GoMarkGithub size={12}/>
                    {props.code}
                  </div>
                
              </div>
            </div>
          </div>
        </div>
    </div>

    
  )
}