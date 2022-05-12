import React, { useState, useEffect } from 'react';
import './ensamble-lengas.css';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EnsambleLengas = () => {

  function apareceEnsamble() {

    document.querySelector('#tapa-png').style.transform = 'translateY(29%)'
    document.querySelector('#cristal-png').style.transform = 'translateY(-26%)'

  }


  const controlsEnsamble = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
	  if (inView) {
		controlsEnsamble.start('visible');
			apareceEnsamble()

	  }
	 
	  
	}, [controlsEnsamble, inView]);

	var variante = {hidden: {scale:1}, visible: { scale:1 } }

  // const dispatch = useDispatch() 

  function render(){
      return  <div id="EnsambleLengas-view">
                <article>
                  <div id="ensamble-fotos">
                    <img src="assets/lengas/tapa-png.png" id="tapa-png" alt="" />
                    <img src="assets/lengas/reloj-guayubira-png.png" id="reloj-png" alt="" />
                    <img src="assets/lengas/cristal-png.png" id="cristal-png" alt="" />
                  </div>
                </article>
    				  <motion.div ref={ref} initial="hidden" animate={controlsEnsamble} variants={variante}>
              </motion.div>
              </div>

       }
       
       
       return ( render() )
}




export default EnsambleLengas;