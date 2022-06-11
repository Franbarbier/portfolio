import React, { useState, useEffect } from 'react';
// import { ReactComponent as Coins } from '../../svgs/coins-2.svg';

import './Project.css';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Project = ({proyecto, close}) => {

    console.log(proyecto)

    const list = {
        visible: {
          y: 0,
        //   opacity: 1,
          transition: {
            delay: 0.7,
            opacity: { type: "spring", stiffness: 100, delay: 1 },
            default: { duration: 1 }
          }
        },
        hidden:{
            y: '100vh',
            // opacity: 0
        }
      }
      
      const item = {
        hidden: {
          opacity: 0,
          transition: { duration: 2 }
        }
      }
      

  function render(){
      return  <motion.div
                    id="Project-view"
                    variants={list}
                    animate="visible"
                    initial="hidden"
                    exit="hidden">
                {/* <div> */}
                    {/* <AnimatePresence> */}


                    <div id="info-project">
                        <div>
                            <h6>Project</h6>
                            <h4>{proyecto?.title}</h4>
                        </div>
                        <div>
                            <h6>Overview</h6>
                            <p>{proyecto?.overview}</p>
                        </div>
                    </div>
                    <div id="horizontal-cont">
                        <div>
                            <div className='imgs-cont'>
                                <img src={proyecto?.imgs[0]} />
                            </div>
                            <div className='imgs-cont'>
                                <img src={proyecto?.imgs[1]} />
                            </div>
                            <div className='txts-cont'>
                                <h6>Discipline</h6>
                                {/* <p>Lorem ipsum dolor sit amet requiem listom veolpe tired emlog jurjul ivil sim no temdon</p> */}
                                <ul className="tags-cont">
                                    {proyecto?.data.map((data)=>(
                                        <li className="tags-project"><span>{data}</span></li>
                                    ))}
                                </ul>
                            </div>
                            <div className='imgs-cont'>
                                <img src={proyecto?.imgs[2]} />
                            </div>
                            <div className='txts-cont'>
                                <h6>Challenge</h6>
                                <p>{proyecto?.challenge}</p>
                            </div>
                            <div className='imgs-cont'>
                                <img src={proyecto?.imgs[3]} />
                            </div>
                            <div className='txts-cont'>
                                <h6>Result</h6>
                                <p>{proyecto?.result}</p>
                            </div>
                            <div className='imgs-cont'>
                                <img src={proyecto?.imgs[4]} />
                            </div>
                            {proyecto?.imgs.length > 4 &&
                            
                                proyecto?.imgs.map((img, index)=>(
                                    <>
                                    { index > 4 &&
                                        <div className='imgs-cont'>
                                            <img src={proyecto?.imgs[index]} />
                                        </div>
                                    }
                                    </>
                                    

                                ))                            
                            
                            }
                            
                        </div>
                        
                    </div>
                    

                    {/* </AnimatePresence> */}

                {/* </div> */}
                

                    <aside onClick={ ()=>{ close() } }>
                        <span>x</span>
                    </aside>




                    </motion.div>

       }
       
       
       return ( render() )
}




export default Project;