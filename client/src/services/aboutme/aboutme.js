import React, { useState, useEffect } from 'react';
import CaseHeader from '../components/case-header/case-header';
import './aboutme.css';

// foto dedo pantalla
// https://d1w6lbg49kat6u.cloudfront.net/F0IKBt9KEAGvEZ69QmGcUP1bwEk4kZr0/143346485663.jpg
const AboutMe = () => {


  // const dispatch = useDispatch()   

  function render(){
      return  <div id="AboutMe-view">
                <article>
                  <section>
                    <div id="about-cont">
                    <div id="fotitoMia">
                          <div id="profile-pic">
                            <img src="/assets/DSC08296-min.jpg" />
                            
                          </div>
                        </div>

                      <div>
                       
                        <div id="personal-info">
                          <div>
                            <span>My name is</span>
                            <h4>Francisco Barbier</h4>
                          </div>
                          <div>
                            <span>I am a</span>
                            <h5>Fullstack Developer</h5>
                          </div>
                          <div>
                            <span>I do this</span>
                            <p>Because I love to create disruptive interfaces, bringing them to life. Making possible an interaction between the user and the screen, achieving a connection with the audience thanks to the information structured in the correct way.</p>
                          </div>
                        </div>
                        <a href="#contact" id="contact-me">Contact me</a>

                      </div>
                      

                    </div>
                  </section>
                </article>
              </div>

       }
       
       
       return ( render() )
}




export default AboutMe;