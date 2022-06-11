import React, { useState, useEffect } from 'react';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Home.css';
import WireAnimation from '../../components/wire-animation/Wire-animation';
import ContactFooter from '../../components/ContactFooter/ContactFooter.js';
import Footer from '../../components/Footer/Footer';
import Project from '../../components/Project/Project';
import { bbdd_projects } from '../../external';
import Button from '../../components/Button/Button';
import Menu from '../../components/Menu/Menu';

// import { gradient_fx } from '../../external';


// foto dedo pantalla
// https://d1w6lbg49kat6u.cloudfront.net/F0IKBt9KEAGvEZ69QmGcUP1bwEk4kZr0/143346485663.jpg
const Home = () => {


    const [openProject, setOpenProject]= useState(null)
    const [selectedProject, setSelectedProject]= useState()



    useEffect(()=>{
        setSelectedProject(bbdd_projects[openProject])
    },[openProject])
    
    function closeProjectDetail(){
        setOpenProject(null)
        document.getElementsByTagName('body')[0].style.overflowY = "auto"
    }
    
    function openProjectDetail(proyecto){
        setOpenProject(proyecto)
        document.getElementsByTagName('body')[0].style.overflowY = "hidden"
    }

    useEffect(()=>{
        console.log()
    },[openProject])

    const textAnim = {
        hidden: { transform: "translate3d(0, 5em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0deg, 25deg)" },
        show: {
          transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0deg, 0deg)",
        //   transition: {ease: [0.26, 1.03, 0, 1]}
        }
    }

    const textAnim2 = {
        hidden: { 
            opacity : 0 ,
            transform: "translate3d(0, 5.5em, 0em) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0deg, 15deg)",
            transition: {ease: [0.26, 1.03, 0, 1]}
        },
        show: {
            opacity : 1 ,
          transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0deg, 0deg)",
          transition: {ease: [0.26, 1.03, 0, 1] }
        }
    }

    
useEffect(()=>{
    let href = window.location.href; // get the url
    let id = href.split("#")[1];
    let element = document.getElementById(id);
    // setTimeout(() => {
        if (element) {
            window.location = "#"+id
        }else{
            window.scrollTo({ top: 0});
        }
    // }, 500);
},[])

  function render(){
      return  <div id="Home-view">
                <div>
                    <Menu home={true}/>
                    
                    <div className="cursor"></div>

                    <header>
                        <div>
                            <div id="txt-cuadrado">
                                <div>
                                    <span>✨</span>
                                    <br />
                                    <motion.div style={{'overflow':'hidden'}}  >
                                        <motion.h1
                                            className="framerAnim"
                                            variants={textAnim}
                                            initial="hidden"
                                            animate="show"
                                            transition={{ease: [0.26, 1.03, 0, 1] }}
                                        >
                                            Make <i className="gradient">them</i><br />remember <div className='gradient txt-effect'><b>you</b></div>.</motion.h1>
                                    </motion.div>
                                    {/* <button className="soft-btn">What i do</button> */}
                                    <Button text="What i do" link="" id={2}/> 

                                </div>
                            </div>
                            <div id="cuadraditos">
                                <a href="/expertise#ProductThinking">
                                    <div className='bckgrnd-cuadradito'>
                                        <img src="https://assets-global.website-files.com/5c5315d7d8fe7d4b71a1e69b/619b68ffe8e2861894b892e1_brand-gradient.jpg" />
                                    </div>
                                    <motion.div
                                        initial={{ transform: "translate3d(0px, 2em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        opacity: 0}}
                                        animate={{transform: "translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        opacity:1}}
                                        className='txt-cuadradito framerAnim'>
                                        <h5>Product thinking</h5>
                                        <img src="https://assets-global.website-files.com/5c51b8093dcfd38165099093/5f959b1cd3283e540294ea95_icon-enclosed-arrow.svg" />    
                                    </motion.div>
                                </a>
                                <a href="/expertise#UserOriented">
                                    <div className='bckgrnd-cuadradito'>
                                        <img src="https://assets-global.website-files.com/5c5315d7d8fe7d4b71a1e69b/619b690611243fbe9247defe_social-gradient.jpg" />
                                    </div>
                                    <motion.div
                                        initial={{ transform: "translate3d(0px, 2em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        opacity: 0}}
                                        animate={{transform: "translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        opacity:1}}
                                        className='txt-cuadradito framerAnim'>
                                        <h5>User oriented</h5>
                                        <img src="https://assets-global.website-files.com/5c51b8093dcfd38165099093/5f959b1cd3283e540294ea95_icon-enclosed-arrow.svg" />    
                                    </motion.div>
                                </a>
                                <a href="/expertise#UiMagic">
                                    <div className='bckgrnd-cuadradito'>
                                        <img src="https://assets-global.website-files.com/5c5315d7d8fe7d4b71a1e69b/619b68f7fe06e28555d58883_web-gradient.jpg" />
                                    </div>
                                    <motion.div
                                        initial={{ transform: "translate3d(0px, 2em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        opacity: 0}}
                                        animate={{transform: "translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        opacity:1}}
                                        className='txt-cuadradito framerAnim'>
                                        <h5>UI Magic</h5>
                                        <img src="https://assets-global.website-files.com/5c51b8093dcfd38165099093/5f959b1cd3283e540294ea95_icon-enclosed-arrow.svg" />    
                                    </motion.div>
                                </a>
                                <a href="/expertise#ProductPage">
                                    <div className='bckgrnd-cuadradito'>
                                        <img src="https://assets-global.website-files.com/5c5315d7d8fe7d4b71a1e69b/619b68effe06e2ae7ed58860_video-gradient.jpg" />
                                    </div>
                                    <motion.div
                                        initial={{ transform: "translate3d(0px, 2em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        opacity: 0}}
                                        animate={{transform: "translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        opacity:1}}
                                        className='txt-cuadradito framerAnim'>
                                        <h5>Product pages</h5>
                                        <img src="https://assets-global.website-files.com/5c51b8093dcfd38165099093/5f959b1cd3283e540294ea95_icon-enclosed-arrow.svg" />    
                                    </motion.div>
                                </a>
                            </div>
                        </div>
                    </header>
                    <main>
                        <div>
                            <motion.div
                                className="framerAnim"
                                initial={{y: 20, opacity: 0}}
                                whileInView={{y: 0, opacity: 1}}
                                viewport={{ once: true }}
                            >
                                <WireAnimation />
                            </motion.div>
                            <div>
                                <div style={{"overflow":"hidden"}}>

                                <motion.h3
                                    className="gradient framerAnim"
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    variants={textAnim2}
                                 >I am are here to elevate and empower your vision. Working with you to build comprehensive, thoughtful, and purpose-driven experiences.</motion.h3>
                                </div>
                                <br/>
                                {/* <button className="soft-btn">Check work</button> */}
                                <Button text="Check work" link="" id={1}/> 

                            </div>
                        </div>
                    </main>
                    <div id="clientes">
                        <motion.div
                            className="framerAnim"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{ once: true }}
                        >
                            <div>
                                <img className="logos1" style={{"filter":"invert(1)"}} src="/assets/lengas-logo.png"/>
                                <p className="logos1">Lengas</p>
                                <img className="logos2" style={{"filter":"invert(1)"}} src="/assets/logo-reforma.png"/>
                                <p className="logos2">Reforma</p>
                            </div>
                            <div>
                                <img className="logos1" src="/assets/atom8-logo.png"/>
                                <p className="logos1">Atom 8</p>
                                <img className="logos2" src="/assets/path-logo.png"/>
                                <p className="logos2">Path</p>
                            </div>
                            <div>
                                <img className="logos1" src="/assets/mytaggie-logo.png"/>
                                <p className="logos1">My Taggie</p>
                                <img className="logos2" src="/assets/fluxq-logo.png"/>
                                <p className="logos2">Flux Q</p>
                            </div>
                            <div>
                                <img className="logos1" style={{"filter":"invert(1)"}} src="/assets/plannet-logo.png"/>
                                <p className="logos1">Plannet cc</p>
                                <img className="logos2" style={{"filter":"invert(1)"}} src="/assets/vermu-logo1.png"/>
                                <p className="logos2">Vermú</p>
                            </div>
                        </motion.div>
                    </div>
                    <div id="work">
                        <div>
                            <div>
                                <div>
                                        <h5 className="gradient">Recent work</h5>
                                </div>
                            </div>
                            <div id="work-cards">
                                <div>
                                    <motion.div
                                        initial={{opacity: 0, y: 0}}
                                        whileInView={{opacity: 1, y: "-20%"}}
                                        viewport={{once:true}} 
                                        className='work-card framerAnim'
                                        onClick={()=>{ openProjectDetail('taggie') }}
                                    >

                                        <video loop muted src="/assets/vids/taggie-vid.mp4"  onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } }  />
                                        <div>
                                            <h6>Taggie</h6>
                                        </div>
                                            <hr />
                                        <div className="work-descr">
                                            <p>Rethinking the experience of digital presentations.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0, y: 0}}
                                        whileInView={{opacity: 1, y: "5%"}}
                                        viewport={{once:true}} 
                                        className='work-card framerAnim'
                                        onClick={()=>{ openProjectDetail('lengas') }}
                                    >
                                        
                                        <video loop muted src="/assets/vids/lengas-vid.mp4"  onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } }  />
                                        <div>
                                            <h6>Lengas</h6>
                                        </div>
                                            <hr />
                                        <div className="work-descr">
                                            <p>Feel the touch of nature, every time.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0, y: 0}}
                                        whileInView={{opacity: 1, y: "-20%"}}
                                        viewport={{once:true}}
                                        className='work-card framerAnim'
                                        onClick={()=>{ openProjectDetail('atom') }}
                                    >
                                        <video loop muted src="/assets/vids/atom-vid.mp4"  onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } }  />
                                        <div>
                                            <h6>Atom 8</h6>
                                        </div>
                                        <hr />
                                        <div className="work-descr">
                                            <p>Explain the past, predict the future.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0, y: 0}}
                                        whileInView={{opacity: 1, y: "5%"}}
                                        viewport={{once:true}} 
                                        className='work-card framerAnim'
                                        onClick={()=>{ openProjectDetail('reforma') }}
                                    >
                                        <video loop muted src="/assets/vids/reforma-vid.mp4"  onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } }  />
                                        <div>
                                            <h6>Reforma</h6>
                                        </div>
                                            <hr />
                                        <div className="work-descr">
                                            <p>A better wat to stay.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{opacity: 0, y: 0}}
                                        whileInView={{opacity: 1, y: "-20%"}}
                                        viewport={{once:true}}
                                        className='work-card framerAnim'
                                        onClick={()=>{ openProjectDetail('flux') }}
                                    >
                                        <video loop muted src="/assets/vids/flux-vid.mp4"  onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } }  />
                                        <div>
                                            <h6>Flux Q</h6>
                                        </div>
                                            <hr />
                                        <div className="work-descr">
                                            <p>A revolution in the pharmaceutical industry.</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <AnimatePresence>
                        {openProject &&
                            <>
                                <motion.div
                                    style={{
                                        'height': '100vh',
                                        'width': '100vw',
                                        'position': 'fixed',
                                        'top': '0',
                                        'left': '0',
                                        'backgroundColor': '#ddd',
                                        'zIndex': '0'
                                    }}
                                    initial={{ y: "100vh"}}
                                    animate={{ y: 0 }}
                                    exit={{ y: "100vh"}}
                                    transition={{ duration: 0.7 }}
                                />
                                <Project proyecto={selectedProject} close={closeProjectDetail} />
                            </>
                        }
                        </AnimatePresence>
                    </div>

                    <div id="tecnologias">
                        <div>
                            <h4>Technologies</h4>
                            <div id="tec-logos">
                                <div>

                                <div>
                                    <div>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/640px-React.svg.png" />
                                    </div>
                                    <p>React JS</p>
                                </div>
                                <div>
                                    <div>
                                        <img src="https://nodejs.org/static/images/logo.svg" />
                                    </div>
                                    <p>Node JS</p>
                                </div>
                                <div>
                                    <div>
                                        <img style={{'transform': 'scale(0.85) translate(-50%,-50%)', 'transformOrigin':'0% 20%'}} src="https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png" />
                                    </div>
                                    <p>HTML</p>
                                </div>
                                <div>
                                    <div>
                                        <img style={{'transform': 'scale(0.8) translate(-50%,-50%)', 'transformOrigin':'0% 20%'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" />
                                    </div>
                                    <p>CSS</p>
                                </div>
                                <div>
                                    <div>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/640px-React.svg.png" />
                                    </div>
                                    <p>React JS</p>
                                </div>
                                <div>
                                    <div>
                                        <img src="https://nodejs.org/static/images/logo.svg" />
                                    </div>
                                    <p>Node JS</p>
                                </div>
                                <div>
                                    <div>
                                        <img style={{'transform': 'scale(0.85) translate(-50%,-50%)', 'transformOrigin':'0% 20%'}} src="https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png" />
                                    </div>
                                    <p>HTML</p>
                                </div>
                                <div>
                                    <div>
                                        <img style={{'transform': 'scale(0.8) translate(-50%,-50%)', 'transformOrigin':'0% 20%'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" />
                                    </div>
                                    <p>CSS</p>
                                </div>
                                </div>

                                <div>

                                <div>
                                    <div>
                                        <img  style={{'transform':'scale(1.7) translate(-50%,-50%)', 'transformOrigin':'0% 0%'}} src="https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png" />
                                    </div>
                                    <p>JS & JQuery</p>
                                </div>
                                <div>
                                    <div>
                                        <img src="https://miro.medium.com/max/650/1*zzvdRmHGGXONZpuQ2FeqsQ.png" />
                                    </div>
                                    <p>Git</p>
                                </div>
                                <div>
                                    <div>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" />
                                    </div>
                                    <p>PHP</p>
                                </div>
                                <div>
                                    <div>
                                        <img src="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png" />
                                    </div>
                                    <p>MySQL</p>
                                </div>
                                <div>
                                    <div>
                                        <img  style={{'transform':'scale(1.7) translate(-50%,-50%)', 'transformOrigin':'0% 0%'}} src="https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png" />
                                    </div>
                                    <p>JS & JQuery</p>
                                </div>
                                <div>
                                    <div>
                                        <img src="https://miro.medium.com/max/650/1*zzvdRmHGGXONZpuQ2FeqsQ.png" />
                                    </div>
                                    <p>Git</p>
                                </div>
                                <div>
                                    <div>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" />
                                    </div>
                                    <p>PHP</p>
                                </div>
                                <div>
                                    <div>
                                        <img src="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png" />
                                    </div>
                                    <p>MySQL</p>
                                </div>
                            </div>
                            </div>

                                    {/* <CardEffect /> */}
                        </div>
                    </div>
                    <ContactFooter />
                    
                </div>
                    <Footer />
              </div>

       }
       
       
       return ( render() )
}




export default Home;
