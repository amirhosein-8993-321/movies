import React from 'react';
import { ReactComponent as Hulu_Logo } from '../Hulu_Logo.svg';
import { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import '../components/header.css'
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from 'react-router-dom';
export default function Header() {
  const [navbar, setNavbar] = useState(false)
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const changeBackground = () => {
    if(window.scrollY >= 73) {
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBackground)
  return (
    <>
    <motion.div className="progress-bar absolute z-50 top-0" style={{ scaleX }} />
    <motion.header dir='rtl' className={navbar ? "navbar active" : "navbar"}>
      <div className='flex w-full items-center justify-between xl:max-w-5xl max-w-3xl'>
    <div className='flex items-center'>     
         <Hulu_Logo width={90} height={90} />
        <a href="/">
         <span className='text-white dark:text-[#1F1C2E] dark:hover:text-white mr-5 p-3 hover:bg-[#00DC82] rounded-lg transition-all cursor-pointer text-sm'>خانه</span>
         </a>
<span className='text-white dark:text-[#1F1C2E] dark:hover:text-white mr-5 p-3 hover:bg-[#00DC82] rounded-lg transition-all cursor-pointer text-sm'>انیمیشن</span>
<a href='/film-en' >
     <span className='text-white dark:text-[#1F1C2E] dark:hover:text-white mr-5 p-3 hover:bg-[#00DC82] rounded-lg transition-all cursor-pointer text-sm'>فیلم خارجی</span>
     </a>
         </div>
         <div className='flex text-white dark:text-[#1F1C2E] items-center'>
<IoSunnyOutline size={25} onClick={handleThemeSwitch} id='search' className="cursor-pointer" />
<CiSearch size={25} id='search' className='mr-4 cursor-pointer' />

         </div>
   </div>   
         </motion.header>
         </>
  )
}
