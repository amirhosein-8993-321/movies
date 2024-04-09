import React from 'react';
import { people } from "../Date";
import { FaPlay } from "react-icons/fa";
import { motion } from 'framer-motion';
export default function result( ) {
    const listItems = people.map(person =>   
      <a href={`/animation-new/${person.name}`}>
  <motion.div whileHover={{scale: 1.1}} className='mt-6 truncate cursor-pointer group' key={person.id}>
            <div>
                <p className="absolute z-20 text-white bg-[#00DC82] text-sm mt-2 mr-2 px-0.5 py-0.5 rounded-lg">{person.dabel}</p>
            <div className="relative overflow-hidden">
            <img className="rounded-lg dark:hover:border-none" width={200} height={100} src={person.URL} />
             <div className="absolute h-full w-full bg-black/60 dark:border-black group-hover:border-2 rounded-lg flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
             <FaPlay size={30} color='white' />
             </div>
            </div>
            </div>
            <span className='text-white text-sm mr-1 truncate dark:text-[#48484C]'>{person.name}</span> 
        </motion.div>
        </a>
       );
  return (
    <>
    <div className='mt-32'>
    <span className='mr-8 dark:text-[#48484C] text-2xl font-bold text-white'>انیمیشن</span>
    <div className='flex mb-8 justify-center'>
    <div className='grid grid-cols-3 md:grid-cols-5 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 px-3 gap-5 items-center'>{listItems}</div>
    </div>
    </div>
    </>
  )
}