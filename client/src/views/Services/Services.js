import React, { useState, useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Services.css';

import Menu from '../../components/Menu/Menu'
import ContactFooter from '../../components/ContactFooter/ContactFooter';
import Footer from '../../components/Footer/Footer';


import ProductThinking from '../../services/product-thinking/product-thinking.js';
import UserOriented from '../../services/user-oriented/user-oriented';
import UiMagic from '../../services/uimagic/uimagic';
import ProductPage from '../../services/product-page/product-page';
import Contact from '../../services/contactOld/contact';
import AboutMe from '../../services/aboutme/aboutme';

// foto dedo pantalla
// https://d1w6lbg49kat6u.cloudfront.net/F0IKBt9KEAGvEZ69QmGcUP1bwEk4kZr0/143346485663.jpg
const Services = () => {

  const [seccionAbierta, setSeccionAbierta] = useState()

  // const dispatch = useDispatch()
  function abrirNuevaSeccion(seccion) {
    if (seccionAbierta != seccion) {
      setSeccionAbierta(seccion)
      window.location = "#"+seccion
    }else{
      setSeccionAbierta('')
    }
  }

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

 
  const variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }
  var variante = {hidden: { '':''}, visible: { '':''} }

  const textAnim = {
    hidden: { transform: "translate3d(0, 5em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0deg, 25deg)" ,
    // opacity: 0
    },
    show: {
      transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0deg, 0deg)",
      // opacity: 1
    //   transition: {ease: [0.26, 1.03, 0, 1]}
    }
}

useEffect(()=>{
        let href = window.location.href; // get the url
        let id = href.split("#")[1];
        let element = document.getElementById(id);
        // setTimeout(() => {
            if (element) {
                setSeccionAbierta(id)
                window.location = "#"+id
            }else{
              window.scrollTo({ top: 0});
            }
        // }, 100);
},[])

  function render(){
      return  <div id="Services-view">
                <Menu/>

                <header>
                  <div className="general-cont">
                      <div>
                        <div>
                            <h1>The art of structuring</h1><br/>
                            <motion.h1
                                            className="gradient framerAnim"
                                            variants={textAnim}
                                            initial="hidden"
                                            animate="show"
                                        >information.</motion.h1><h1>✨</h1>
                        </div>
                        <div>
                            <h2 className="general-cont">We know that design has the potential to transform reality. With that in mind, here are some of the challenges we’re looking forward.</h2>
                            {/* <p>Creemos en un consumo responsable, esto nos lleva a crear con propósito. Este taquito de madera lenga no solo es el responsable de hacer llegar tu billetera en perfectas condiciones. Sino que viene a dar un toque único, estética y funcionalmente, dentro de tu hogar.</p> */}
                            <div id="arrow-cont">
                              <a href="#looks-like-magic-works-like-science">
                                <img src="/assets/down.png" />

                              </a>
                            </div>
                        </div>
                      </div>
                  </div>
                </header>

                <div id="carrusel-cont">
                  <div>
                  </div>
                </div>

                {/* <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
                  <h1>Holaaa</h1>
                </motion.div> */}
                <div id="looks-like-magic-works-like-science"></div>
                <article style={{'position':'relative'}}>
                  <div>
                    <section className="general-cont" id="ProductThinking">
                      <div>
                        <div className="row-title" onClick={ (e) => abrirNuevaSeccion('ProductThinking')}>
                          <h3>Product thinking</h3>
                          <img src="http://cdn.onlinewebfonts.com/svg/img_221758.png" style={{'transform': seccionAbierta == 'ProductThinking' ? 'rotate(180deg)' : 'none'  }}  />
                        </div>
                        <div className="content-service">
                            {seccionAbierta == 'ProductThinking' &&
                              <ProductThinking />
                            }
                        </div>
                      </div>
                    </section>
                    <section className="general-cont" id="UserOriented">
                      <div>
                        <div className="row-title" onClick={ (e) => abrirNuevaSeccion('UserOriented')}>
                          <h3>User oriented</h3>
                          <img src="http://cdn.onlinewebfonts.com/svg/img_221758.png" style={{'transform': seccionAbierta == 'UserOriented' ? 'rotate(180deg)' : 'none'  }} />
                        </div>
                        <div className="content-service">
                          {seccionAbierta == 'UserOriented' &&
                            <UserOriented />
                          }
                        </div>
                      </div>
                    </section>
                    <section className="general-cont" id="UiMagic">
                      <div>
                        <div className="row-title" onClick={ (e) => abrirNuevaSeccion('UiMagic')}>
                          <h3>UI Magic</h3>
                          <img src="http://cdn.onlinewebfonts.com/svg/img_221758.png" style={{'transform': seccionAbierta == 'UiMagic' ? 'rotate(180deg)' : 'none'  }}/>
                        </div>
                        <div className="content-service">
                          {seccionAbierta == 'UiMagic' &&
                            <UiMagic ref={ref} inView={inView} controls={controls} seccionAbierta={seccionAbierta} />
                          }
                        </div>
                      </div>
                    </section>
                    <section className="general-cont" id="ProductPage">
                      <div>
                        <div className="row-title" onClick={ (e) => abrirNuevaSeccion('ProductPage')}>
                          <h3>Product pages</h3>
                          <img src="http://cdn.onlinewebfonts.com/svg/img_221758.png"  style={{'transform': seccionAbierta == 'ProductPage' ? 'rotate(180deg)' : 'none'  }} />
                        </div>
                        <div className="content-service">
                          {seccionAbierta == 'ProductPage' &&
                            <ProductPage />
                          }
                        </div>
                      </div>
                    </section>
                     <section className="general-cont" id="AboutMe">
                      <div>
                        <div className="row-title"  onClick={ (e) => abrirNuevaSeccion('AboutMe')}>
                          <h3>About me</h3>
                          <img src="http://cdn.onlinewebfonts.com/svg/img_221758.png" style={{'transform': seccionAbierta == 'AboutMe' ? 'rotate(180deg)' : 'none'  }} />
                        </div>
                        <div className="content-service">
                          {seccionAbierta == 'AboutMe' &&
                            <>
                              <AboutMe />
                            </>
                          }
                        </div>
                      </div>
                    </section>
                    <section className="general-cont" id="contact">
                      <div>
                        <a href="#get-in-touch">
                        <div className="row-title">
                            <h3>Contact</h3>

                          {/* <img src="http://cdn.onlinewebfonts.com/svg/img_221758.png" /> */}
                        </div>
                        </a>
                          
                        {/* <div className="content-service"> */}
                              {/* <Contact />
                              <img src="/assets/lamparita.png" id="final-foto" width="30%" />
                              <img src="/assets/plantita1.png" id="plantita" width="30%" />
                        </div> */}
                      </div>
                    </section>
                      <div id="astroCont"></div>

                              <ContactFooter />           
                  </div>
                </article>
                  <Footer />
              </div>

       }
       
       
       return ( render() )
}




export default Services;
