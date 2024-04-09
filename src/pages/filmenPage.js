import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../data.json'
import { motion } from 'framer-motion';
import { FaPlay } from "react-icons/fa";
const FilmEnPage = () => {
  let { id } = useParams();
  return (
    <>
    <div>
      {api.data.movies.map((index) => (
        <div className='flex h-auto items-center w-full' key={index.id}>
          <motion.div whileHover={{scale: 1.1}} className="relative group overflow-hidden cursor-pointer">
              <img className="rounded-lg dark:hover:border-none" width={200} height={100} src={index.poster} />
               <div className="absolute h-full w-full bg-black/60 dark:border-black group-hover:border-2 rounded-lg flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
               <FaPlay size={30} color='white' />
               </div>
              </motion.div>
          <div className="w-full mr-5">
            <div className="w-full flex items-center justify-between">
             <div className=' font-bold text-white dark:text-black'><h1>{index.name} - {index.name_fa}</h1></div>
              <div className='flex gap-4 text-[#00DC82] transition-all font-bold'>
                 <span>سال: {index.year}</span>
                 <span>زمان: {index.runtime}</span>
                </div>
             </div>
             <div className='mt-2 text-[#a0a0a2]'><span>{index.genre}</span></div>
             <div className='mt-2 text-[#a0a0a2]'><span>مناسب برای افراد: {index.age}</span></div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};
export default FilmEnPage;