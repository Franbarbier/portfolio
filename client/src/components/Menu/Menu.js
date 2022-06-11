import React, { useState, useEffect } from 'react';
// import { ReactComponent as Coins } from '../../svgs/coins-2.svg';
import {Link} from 'react-router-dom';
import './Menu.css';

import { motion, useAnimation } from 'framer-motion';


const Menu = ({home = false}) => {

  const [menuOpen,setMenuOpen] = useState(false)

  function scrollToWork() {
      if (home) {
        document.querySelector('#work').scrollIntoView({
          behavior: 'smooth'
        });
      }
  }


  // Cerrar menu si cliqueas fuera
  document.addEventListener("click", function(event) {
      // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
      if ( !event.target.closest("#Menu-view") ) {
        setMenuOpen(false)
      }
    }, false )


  function render(){
      return  <div id="Menu-view">
                  <nav>
                    <div>
                      <div id="menu-hamb" onClick={()=>{ setMenuOpen(!menuOpen) }} className={menuOpen && "opened"}  > 
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </nav>
                  { menuOpen &&
                  <motion.div 
                      id="opened-menu"
                      initial={{y:30, opacity:0}}
                      animate={{y: 0, opacity:1}}
                      >
                      <ul>
                        <motion.li
                            initial={{y: -20, opacity:0}}
                            animate={{y: 0, opacity:1}}
                            trnasition={{delay:0.5}}
                        ><Link to="/">Home</Link></motion.li>
                        <motion.li
                            initial={{y: -20, opacity:0}}
                            animate={{y: 0, opacity:1}}
                            trnasition={{delay:0.7}}
                        ><Link onClick={scrollToWork} to="/#work">Work</Link></motion.li>
                        <motion.li
                            initial={{y: -20, opacity:0}}
                            animate={{y: 0, opacity:1}}
                            trnasition={{delay:0.9}}
                        ><Link to="/expertise">Expertise</Link></motion.li>
                        <motion.li
                            initial={{y: -20, opacity:0}}
                            animate={{y: 0, opacity:1}}
                            trnasition={{delay: 1}}
                        ><Link to="/expertise#AboutMe">About me</Link></motion.li>
                      </ul>
                        <motion.div
                          initial={{y: -23, opacity:0}}
                          animate={{y: 0, opacity:1}}
                          trnasition={{delay:0.5}}
                        >
                          <span>Get in touch</span>
                          <a href="#">ffranbarbier@gmail.com</a>
                        </motion.div>
                  </motion.div>
                  }
              </div>

       }
       
       
       return ( render() )
}




export default Menu;