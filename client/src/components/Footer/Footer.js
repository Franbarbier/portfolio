import React, { useState, useEffect } from 'react';
// import { ReactComponent as Coins } from '../../svgs/coins-2.svg';

import './Footer.css';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Footer = () => {


  function render(){
      return  <div id="Footer-view">
                
                <footer>
                        <div>
                            
                        </div>
                        <ul>
                            <li>Home</li>
                            <li>Expertise</li>
                            <li>Me</li>
                            <li>Contact</li>
                        </ul>
                    </footer>
              </div>

       }
       
       
       return ( render() )
}




export default Footer;