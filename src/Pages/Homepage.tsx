import {animate, motion} from 'framer-motion';
import { useEffect, useRef } from 'react';
import Counter from './components/Counter';

type Props = {}


const Homepage = (props: Props) => {
  const  sentence = {
    hidden:{opacity:1},
    visible:{
        opacity:1,
        transition:{
            delay:0.1,
            staggerChildren:0.1,
        },
    },
  }
  const letter = {
    hidden : {
        opacity : 0,
        y : 50,
    },
    visible:{
        opacity:1,
        y:0,
       
    }
  }
  const line1 = "Expert";
  const line2 = "Hub";
  const line3 = "Seminar";
  const line4 = "Experts";
  const line5 = "Student";
  const line6 = "Courses";
  const line7 = "Registered";

  return (
   <div className='w-[80vw]'>
     <div className='w-full flex-col items-center justify-center'>
        <motion.h1 variants={sentence} initial="hidden" animate="visible" className="flex items-center justify-center md:ml-40 ml-24 font-semibold text-5xl py-4">{line1.split("").map((char,index)=> {
                return (
                    <motion.span className='text-cyan-500' whileHover={{ rotate: [0, 10, -10, 10, 0],color:'black' }} style={{display:'inline-block'}} key={char + "-" + index} variants={letter}>
                        {char}
                    </motion.span>
                )
            })}
            <span className='ml-3'></span>
            {line2.split("").map((char,index)=> {
                return (
                    <motion.span className='text-cyan-500' whileHover={{ rotate: [0, 10, -10, 10, 0],color:'black' }} style={{display:'inline-block'}} key={char + "-" + index} variants={letter}>
                        {char}
                    </motion.span>
                )
            })}
        </motion.h1>

        <div className='lg:mt-10 lg:ml-20 md:ml-40 md:mt-5 ml-28 flex flex-col lg:flex-row items-center justify-center space-x-10 max-w-[70vw]'>
          <img className="w-[500px] rounded-xl h-[350px]" src="https://www.revistaeconomia.com/wp-content/uploads/2021/09/Plantilla-de-tamano-para-las-entradas-139.gif" alt="" />
         <div className='italic text-lg mt-3'>
          
         <p>
         {"\" "}<span className='font-bold'>Expert Hub</span> is an innovative platform that connects students with <span className='font-bold'>expert teachers</span> for online tutoring.
          </p>
          <p>It offers a wide range of subject areas and a flexible scheduling system to accommodate students' needs. In addition, Expert Hub also arranges <span className='font-bold'>seminars</span> for students to attend, providing opportunities for them to learn from industry leaders and network with peers. </p>
          <p>
          With its user-friendly interface and top-notch resources, Expert Hub is the go-to destination for students seeking <span className='font-bold'>academic support and professional development</span>.{"\" "}
          </p>
            
         </div>
         
        </div>

        <div className='ml-24 md:ml-32 mt-10 flex flex-col lg:flex-row space-x-10 pb-10'>
          <div className='text-center font-bold text-xl bg-cyan-200 px-3 py-2 rounded-xl mt-3 ml-10'>
          <motion.h1 variants={sentence} initial="hidden" animate="visible">{line3.split("").map((char,index)=> {
                return (
                    <motion.span className='text-cyan-500' whileHover={{ rotate: [0, 10, -10, 10, 0],color:'black' }} style={{display:'inline-block'}} key={char + "-" + index} variants={letter}>
                        {char}
                    </motion.span>
                )
            })}<span className='ml-3'></span>{line7.split("").map((char,index)=> {
              return (
                  <motion.span className='text-cyan-500' whileHover={{ rotate: [0, 10, -10, 10, 0],color:'black' }} style={{display:'inline-block'}} key={char + "-" + index} variants={letter}>
                      {char}
                  </motion.span>
              )
          })}</motion.h1>
          <Counter from={0} to={30} />
          </div>
          <div className='text-center font-bold text-xl bg-cyan-200 px-3 py-2 rounded-xl mt-3 ml-10'>
          <motion.h1 variants={sentence} initial="hidden" animate="visible">{line4.split("").map((char,index)=> {
                return (
                    <motion.span className='text-cyan-500' whileHover={{ rotate: [0, 10, -10, 10, 0],color:'black' }} style={{display:'inline-block'}} key={char + "-" + index} variants={letter}>
                        {char}
                    </motion.span>
                )
            })}<span className='ml-3'></span>{line7.split("").map((char,index)=> {
              return (
                  <motion.span className='text-cyan-500' whileHover={{ rotate: [0, 10, -10, 10, 0],color:'black' }} style={{display:'inline-block'}} key={char + "-" + index} variants={letter}>
                      {char}
                  </motion.span>
              )
          })}</motion.h1>
          <Counter from={0} to={50} />
          </div>
          <div className='text-center font-bold text-xl bg-cyan-200 px-3 py-2 rounded-xl mt-3 ml-10'>
          <motion.h1 variants={sentence} initial="hidden" animate="visible">{line5.split("").map((char,index)=> {
                return (
                    <motion.span className='text-cyan-500' whileHover={{ rotate: [0, 10, -10, 10, 0],color:'black' }} style={{display:'inline-block'}} key={char + "-" + index} variants={letter}>
                        {char}
                    </motion.span>
                )
            })}<span className='ml-3'></span>{line7.split("").map((char,index)=> {
              return (
                  <motion.span className='text-cyan-500' whileHover={{ rotate: [0, 10, -10, 10, 0],color:'black' }} style={{display:'inline-block'}} key={char + "-" + index} variants={letter}>
                      {char}
                  </motion.span>
              )
          })}</motion.h1>
          <Counter from={0} to={14} />
          </div>
          <div className='text-center font-bold text-xl bg-cyan-200 px-3 py-2 rounded-xl mt-3 ml-10'>
          <motion.h1 variants={sentence} initial="hidden" animate="visible">{line6.split("").map((char,index)=> {
                return (
                    <motion.span className='text-cyan-500' whileHover={{ rotate: [0, 10, -10, 10, 0],color:'black' }} style={{display:'inline-block'}} key={char + "-" + index} variants={letter}>
                        {char}
                    </motion.span>
                )
            })}<span className='ml-3'></span>{line7.split("").map((char,index)=> {
              return (
                  <motion.span className='text-cyan-500' whileHover={{ rotate: [0, 10, -10, 10, 0],color:'black' }} style={{display:'inline-block'}} key={char + "-" + index} variants={letter}>
                      {char}
                  </motion.span>
              ) 
          })}</motion.h1>
          <Counter from={0} to={100} />
          </div>
        </div>
        
    </div>
   </div>
  )
}

export default Homepage;