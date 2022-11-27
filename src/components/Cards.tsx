import Link from 'next/link';


interface Props {
  image?: JSX.Element,
  title: string;
  description: string;
  stack: string;
  link: string;
}


export default function Projects(props: Props){
  return (
    <div>
      <div className='w-[300px] px-4 py-8 mx-auto'>
          

          <div className=' bg-zinc-900 rounded-lg shadow-lg' >

            <div className='w-full bg-zinc-800  rounded-t-lg' >
                {props.image}
            </div>
            <div className='p-4 text-white'>
              <h2 className='mb-4'>
                {props.title}
              </h2>

              <p className='text-sm text-justify mb-4'>
                {props.description}
              </p>

              <p className='text-[12px] text-slate-600'>
                {props.stack}
                
              </p>

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