import React, { useState, useEffect } from 'react';
import './bille-fold.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BilleFold = () => {

    useEffect(()=>{
    },[])
    function apareceFold() {

        document.querySelector('#persp-movi>div').style.transform = 'rotateY(0deg)'
    
      }
    
    
      const controlsFold = useAnimation();
      const { ref, inView } = useInView();
    
      useEffect(() => {
          if (inView ) {
            controlsFold.start('visible');
           
                apareceFold()

    
          }
         
        }, [controlsFold, inView]);
    
        var variante = {hidden: {scale:1}, visible: { scale:1 } }
  // const dispatch = useDispatch() 

  function render(){
      return  <div id="BilleFold-view">
                <article>
                <div id="usabilidad-img">
                    <div id="persp-movi">
                        <img id="billete" src="/assets/lengas/abierta-tesh-billete.png" alt=""/>
                        <div>
                            <img id="tarjeta" src="/assets/lengas/abierta-tesh-tarjeta.png" alt=""/>
                            <img id="frente" src="/assets/lengas/abierta-tesh-frente.png" alt=""/>
                        </div>
                    </div>
            
                </div>
                </article>
    				  <motion.div ref={ref} initial="hidden" animate={controlsFold} variants={variante}>
                        </motion.div>
              </div>

       }
       
       
       return ( render() )
}




export default BilleFold;