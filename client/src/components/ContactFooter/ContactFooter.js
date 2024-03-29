import React, { useState, useEffect } from 'react';
// import { ReactComponent as Coins } from '../../svgs/coins-2.svg';

import './ContactFooter.css';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ContactFooter = ({}) => {

    const [hiddenTxt, setHiddenTxt] = useState(false)

    function copyInfo(e) {
        e.preventDefault()
        console.log(e.target)
        console.log(e.target.getAttribute('data-info'))
        
        // add class
        e.target.classList.add("copied");
        // copy to clipboard
        navigator.clipboard.writeText( e.target.getAttribute('data-info') );
        // remove class
        setTimeout(() => {
            e.target.classList.remove("copied");
        }, 500);
    }

    const textAnim = {
        hidden: { 
            opacity : 0 ,
            transform: "translate3d(0, 20vh, 0em) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0deg, 15deg)",
        },
        show: {
            opacity : 1 ,
            transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0deg, 0deg)",
        }
    }

  function render(){
      return  <div id="ContactFooter-view" onMouseEnter={()=>setHiddenTxt(true)}>
                <div id="get-in-touch">
                    <div>
                        <div>
                            <div style={{"overflow":"hidden"}}>
                            <h5
                                className={`gradient framerAnim ${ hiddenTxt ? "showTxt" : "hiddenTxt" }`}
                                // initial="hidden"
                                // whileInView="show"
                                // viewport={{ once: true }}
                                // variants={textAnim}
                                >Let's chat,</h5>
                            </div>
                            <div style={{"overflow":"hidden"}}>
                            <h5
                                className={`framerAnim  ${ hiddenTxt ? "showTxt" : "hiddenTxt" }`}
                                // initial="hidden"
                                // whileInView="show"
                                // viewport={{ once: true }}
                                // transition={{duration: 0.5}}
                                // variants={textAnim}
                                >get in touch.</h5>
                            </div>
                        </div>
                        <div id="contact-info">
                            <a href="mailto:ffranbarbier@gmail.com?subject=Hi%20Francisco!">
                                <img className="info-icon" src="/assets/send.png" />
                                <div className="contact-data">ffranbarbier@gmail.com<img className="data-icon" data-info="ffranbarbier@gmail.com" src="/assets/copy.png" onClick={(e)=>{copyInfo(e)}}/></div>
                                
                            </a>
                            <a href="https://wa.me/5491134536136" target="_blank">
                                <img className="info-icon" src="/assets/burbuja-de-chat.png" />
                                <div data-contact="5491134536136" className="contact-data">(+54) 9 11 3453-6136<img className="data-icon" data-info="(+54) 9 11 3453-6136" src="/assets/copy.png" onClick={(e)=>{copyInfo(e)}}/></div>
                                
                            </a>
                        </div>
                    </div>
                    
                </div> 
              </div>

       }
       
       
       return ( render() )
}




export default ContactFooter;