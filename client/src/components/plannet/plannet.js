import React, { useState, useEffect } from 'react';
import './plannet.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PlannetCard = ({seccionAbierta}) => {

    

    function apareceBajada() {

        for (let index = 0; index < document.getElementsByClassName('plannet-cont').length; index++) { document.getElementsByClassName('plannet-cont')[index].classList.add("bajada"); }
    
      }
    
    
      const controlsFold = useAnimation();
      const { ref, inView } = useInView();
    
      useEffect(() => {
          if (inView ) {
            controlsFold.start('visible');
                apareceBajada()
          }
         
          
        }, [controlsFold, inView]);
    
        var variante = {hidden: {scale:1}, visible: { scale:1 } }

        // useEffect(() => {   
        //     // EFFEVTO ASTRONAUTO
        //     var lFollowX = 0,
        //     lFollowY = 0,
        //     x = 0,
        //     y = 0,
        //     friction = 1 / 30;

        //     function moveBackground(seccionAbierta) {
        //         x += (lFollowX - x) * friction;
        //         y += (lFollowY - y) * friction;
                
        //         var translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
                
        //         // if (seccionAbierta === 'UiMagic') {
        //             console.log('taca')
        //             document.querySelector('#astroCont').style.transform = translate;
        //         // }
        //         window.requestAnimationFrame(moveBackground);
        //     }

        //     // window.on('mousemove click', function(e) {
        //    window.addEventListener('mousemove', e => {
        //     var lMouseX = Math.max(-100, Math.min(100,window.innerWidth / 2 - e.clientX));
        //     var lMouseY = Math.max(-100, Math.min(100,window.innerHeight / 2 - e.clientY));
        //     lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
        //     lFollowY = (10 * lMouseY) / 100;

        //     });
        //     moveBackground();
            
        // } );
    

  function render(){
      return  <div id="PlannetCard-view">
                <article>
                
                <div id="features">

                        <div>
                          <div class="plannet-cont">
                          {/* <div> */}
                              <img src="/assets/plannet/plannetWeb.svg" alt=""/>
                          </div>
                          <div class="info-cont" style={{"opacity":"1"}}>
                              <h4>ADAPTADO.</h4>
                              <p>M??s del 70% del tr??fico web proviene de dispositivos m??viles. Te adaptamos a este paradigma con un dise??o "mobile first".</p>
                          </div>
                        </div>
                        <div>
                          <div class="plannet-cont">
                          {/* <div> */}
                              <img src="/assets/plannet/plannetMkt.svg" alt=""/>
                          </div>
                          <div class="info-cont" style={{"opacity":"1"}}>
                              <h4>MARKETINERO.</h4>
                              <p>Nos aseguramos de establecer una comunicaci??n clara orientada a conversiones a trav??s del dise??o.</p>
                          </div>
                        </div>

                        <div>
                          <div class="plannet-cont">
                          {/* <div> */}
                              <img src="/assets/plannet/plannetBranding.svg" alt=""/>
                          </div>
                          <div class="info-cont" style={{"opacity":"1"}}>
                              <h4>??NICO.</h4>
                              <p>Alguien dijo brand identity? Tu sitio va en coherencia con tu identidad de marca. Creamos el contenido necesario para llevarlo a cabo.</p><p>
                          </p></div>
                        </div>
                    </div>
                    <motion.div ref={ref} initial="hidden" animate={controlsFold} variants={variante}></motion.div>
                    {/* <div>
                        <div id="nauta">
                            <div id="astroCont">
                                <img src="/assets/plannet/Astronauta-Fixed.png" width="100%" alt="contact digital agency" />
                            </div>
                        </div>
                    </div> */}
                </article>
              </div>

       }
       
       
       return ( render() )
}




export default PlannetCard;