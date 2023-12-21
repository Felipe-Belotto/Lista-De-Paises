import Image from "next/image";
import Link from "next/link";

export default function Loading(){
  const arr = Array.from({length: 20})
  return(
    <section className="grid grid-cols-5 w-full container gap-2 mt-16">
    {arr.map((_, index)=> (
      <article  key={index} 
      className='h-64 min-w-full p-2 bg-gray-100 border-2  rounded-xl hover:border-indigo-200 transition-all hover:shadow-xl flex flex-col gap-4 items-center'>

       <div className='relative w-full h-40 p-2 overflow-hidden rounded-xl bg-gray-200 flex justify-center items-center'>

       <svg className="w-10 h-10 text-gray-200 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>

       </div>

       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 w-28 mb-4"></div>

      </article>
    ))}

    </section>
  )
}