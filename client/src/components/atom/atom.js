import React, { useState, useEffect } from 'react';

// import svg1 from '../../../public/assets/atom/wireframe.svg';
import { ReactComponent as DashWire } from '../../svgs/wireframe.svg';
import dash from '../../svgs/wireframeMock.svg';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './atom.css';


const Atom = () => {

    function apareceWire(params) {
        
        document.getElementById('rect1').classList.add("newPos")
        document.getElementById('linea1Top').classList.add("newPos")
        document.getElementById('circuloMasNav').classList.add("newPos")
        document.getElementById('circuloUser').classList.add("newPos")
        document.getElementById('circuloNav1').classList.add("newPos")
        document.getElementById('circuloNav2').classList.add("newPos")
        document.getElementById('circuloNav3').classList.add("newPos")
        document.getElementById('circuloNav3').classList.add("newPos")
        document.getElementById('circuloNav4').classList.add("newPos")
        document.getElementById('flechita1').classList.add("newPos")
        document.getElementById('flechita2').classList.add("newPos")
        document.getElementById('breadCrumb').classList.add("newPos")
        document.getElementById('box1').classList.add("newPos")
        document.getElementById('box2').classList.add("newPos")
        document.getElementById('box3').classList.add("newPos")
        document.getElementById('tituloLeads').classList.add("newPos")
        document.getElementById('textBox1').classList.add("newPos")
        document.getElementById('textBox2').classList.add("newPos")
        document.getElementById('textBox3').classList.add("newPos")
        document.getElementById('textBox4').classList.add("newPos")
        document.getElementById('textBox5').classList.add("newPos")
        document.getElementById('textBox6').classList.add("newPos")
        document.getElementById('tituloFunnel').classList.add("newPos")
        
        for (let index = 0; index < document.getElementsByClassName('boxes').length; index++) { document.getElementsByClassName('boxes')[index].classList.add("newPos"); }
        for (let index = 0; index < document.getElementsByClassName('textBoxes').length; index++) { document.getElementsByClassName('textBoxes')[index].classList.add("newPos"); }
        for (let index = 0; index < document.getElementsByClassName('numBoxes').length; index++) { document.getElementsByClassName('numBoxes')[index].classList.add("newPos"); }
        for (let index = 0; index < document.getElementsByClassName('circuloLeads').length; index++) { document.getElementsByClassName('circuloLeads')[index].classList.add("newPos"); }
        for (let index = 0; index < document.getElementsByClassName('tituloTable').length; index++) { document.getElementsByClassName('tituloTable')[index].classList.add("newPos"); }
        for (let index = 0; index < document.getElementsByClassName('primeraFila').length; index++) { document.getElementsByClassName('primeraFila')[index].classList.add("newPos"); }
        for (let index = 0; index < document.getElementsByClassName('segundaFila').length; index++) { document.getElementsByClassName('segundaFila')[index].classList.add("newPos"); }
        for (let index = 0; index < document.getElementsByClassName('terceraFila').length; index++) { document.getElementsByClassName('terceraFila')[index].classList.add("newPos"); }
        for (let index = 0; index < document.getElementsByClassName('cuartaFila').length; index++) { document.getElementsByClassName('cuartaFila')[index].classList.add("newPos"); }
        for (let index = 0; index < document.getElementsByClassName('quintaFila').length; index++) { document.getElementsByClassName('quintaFila')[index].classList.add("newPos"); }
        for (let index = 0; index < document.getElementsByClassName('personasXetapa').length; index++) { document.getElementsByClassName('personasXetapa')[index].classList.add("newPos"); }
        for (let index = 0; index < document.getElementsByClassName('porcentajeXetapa').length; index++) { document.getElementsByClassName('porcentajeXetapa')[index].classList.add("newPos"); }
        for (let index = 0; index < document.getElementsByClassName('nombreEtapas').length; index++) { document.getElementsByClassName('nombreEtapas')[index].classList.add("newPos"); }

        for (let index = 0; index < document.getElementsByClassName('barritas').length; index++) { document.getElementsByClassName('barritas')[index].querySelector('path').classList.add("newPos"); }
        
        document.getElementById('barrita1').querySelector('path').classList.add("newPos")
        document.getElementById('barrita2').querySelector('path').classList.add("newPos")
        document.getElementById('barrita3').querySelector('path').classList.add("newPos")
        document.getElementById('barrita4').querySelector('path').classList.add("newPos")

    
    setTimeout(() => {
        document.getElementById('dash-cont').style.opacity = 1
    }, 2500);


    }

    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
          controls.start('visible');
          console.log(true)
          
          setTimeout(() => {
              apareceWire()
          }, 500);

        }
        if (!inView) {
          controls.start('hidden');
          return false
        }
        
      }, [controls, inView]);

      var variante = {hidden: {scale:1}, visible: { scale:1 } }
  // const dispatch = useDispatch() 

  function render(){
      return  <div id="Atom-view" style={{'position': 'relative'}}>
                <div id="atom-tit">
                    <h4>The new era<br/>of ERP systems.</h4>
                </div>
                        <div id="dash-imgs-cont">
                            <div id="dash-wire" style={{ 'position': 'relative'}}>
                                <DashWire />
                            </div>
                            
                            {/* <img src="http://localhost/plannet/landing-atom/imgs/wireframeMock.svg" /> */}
                        </div>
                        <div id="dash-cont">
                            <img src={dash} />
                        </div>
                <motion.div ref={ref} initial="hidden" animate={controls} variants={variante}>
                </motion.div>

              </div>

       }
       
       
       return ( render() )
}




export default Atom;