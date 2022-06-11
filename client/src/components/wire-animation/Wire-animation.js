import React, { useState, useEffect } from 'react';
import './Wire-animation.css';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WireAnimation = () => {

  // const dispatch = useDispatch() 

  function render(){
      return  <div id="WireAnimation-view">
                <aside>
                        <div id="circulo-celeste"></div>
                        <div id="circulo-rosa"></div>
                        <div id="color-top-bar"></div>
                        <div id="great-wire">
                                <div id="wire-card">
                            <div>
                                    <div id='top-bar'>
                                        <div id="users">
                                            <div id="add-user"><span>+</span></div>
                                            <div className="user"><span>G</span></div>
                                            <div className="user"><span>B</span></div>
                                            <div className="user"><span>F</span></div>
                                        </div>
                                        <div id="nav-menu">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div id="rects">
                                        <div>
                                            <div className='rect-vacio'></div>
                                            <div className='rect-color'></div>
                                        </div>
                                        <div>
                                            <div className='rect-vacio'></div>
                                            <div className='rect-color'></div>
                                        </div>
                                        <div>
                                            <div className='rect-vacio'></div>
                                            <div className='rect-color'></div>
                                        </div>
                                        <div id="final-rect"></div>
                                    </div>
                                    <div id="tipos">
                                        <div id="wire-tit"></div>
                                        <div id="wire-desc">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div>
                                            <span>Aa Bb</span>
                                        </div>
                                    </div>

                            </div>
                                </div>
                        </div>
                </aside>
    				  
              </div>

       }
       
       
       return ( render() )
}




export default WireAnimation;