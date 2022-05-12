import React, { useState, useEffect } from 'react';
import Atom from '../../components/atom/atom';
import BilleFold from '../../components/bille-fold/bille-fold';
import CryptoHome from '../../components/cryptohome/cryptohome';
import EnsambleLengas from '../../components/ensamble-lengas/ensamble-lengas';
import PlannetCard from '../../components/plannet/plannet';
import CaseHeader from '../components/case-header/case-header';
import './uimagic.css';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// foto dedo pantalla
// https://d1w6lbg49kat6u.cloudfront.net/F0IKBt9KEAGvEZ69QmGcUP1bwEk4kZr0/143346485663.jpg
const UiMagic = ({seccionAbierta }) => {


  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      return true
    }
    if (!inView) {
      controls.start('hidden');
      return false
    }
    
  }, [controls, inView]);



  // const dispatch = useDispatch() 

  function render(){
      return  <div id="UiMagic-view">
                <article>
                  <section>
                    <header>
                      {/* <CaseHeader topic="CARFT & EXPERTISE" title="Breaking down the experience" description="Looks like magic, works like science." /> */}

                    </header>

                    <div>
                      <div id="big-center-txt">
                        <h3>Looks like magic, <br /> works like science.</h3>
                        <p>UI/UX design is a defining factor for any digital product these days. We're a user experience and UI design agency focused on improving conversion and increasing customer engagement. Our UI/UX design capabilities don't stop at mobile apps, web applicationsy.</p>
                      </div>
                      <div id="cards-cont">
                        <div>
                            <div id="intro-atom-landing" className="width100">
                                <Atom />
                            </div>
                        </div>
                        <div>
                          <div id="crypto-steps" className="width50">
                            {/* <div>
                              <h4>Crypto center on scroll</h4>
                            </div>
                            <div>
                              <img src="https://aerolab.co/images/banco-galicia-online-banking/banking-experience-01.jpg" />
                            </div> */}
                            <div>
                              <h3>If something big is happening, you should show it that way.</h3>
                            </div>

                          </div>
                          <div id="crypto-coin" className="width50">
                            <div>
                              {/* <h4>Crypto center insert coin</h4> */}
                            </div>
                            <div>
                              <CryptoHome />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div id="taggie-card" className="width100">
                            <div>
                              {/* <h4>Algun videito de taggie.</h4> */}
                            </div>
                            <div style={{'overflow':'hidden', 'borderRadius' : '10px'}}>
                              <img src="https://www.artesano.dev/imgs/mytaggie/taggie-demo.gif" style={{'transform':'scale(1.02)'}} width="100%" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div id="lengas-reloj" style={{'alignSelf':'selfStart'}} className="width50">
                            {/* <div>
                              <h4>Lengas apertura reloj</h4>
                            </div> */}
                            <div>
                              <EnsambleLengas />
                            </div>
                          </div>
                          <div id="lengas-bille" className="width50">
                            {/* <div>
                              <h4>Lengas abertura billetera</h4>
                            </div> */}
                            <div>
                                <BilleFold />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div id="plannet-card" className="width100">
                            <div>
                              <h4>Crash course.</h4>
                            </div>
                            <div>
                                <PlannetCard seccionAbierta={seccionAbierta} />
                            </div>
                          </div>
                        </div>

                      </div>
                      
                    </div>
                  </section>
                </article>
              </div>

       }
       
       
       return ( render() )
}




export default UiMagic;