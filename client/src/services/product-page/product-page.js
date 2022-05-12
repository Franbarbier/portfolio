import React, { useState, useEffect } from 'react';
import CaseHeader from '../components/case-header/case-header';
import './product-page.css';

// foto dedo pantalla
// https://d1w6lbg49kat6u.cloudfront.net/F0IKBt9KEAGvEZ69QmGcUP1bwEk4kZr0/143346485663.jpg
const ProductPage = () => {


  // const dispatch = useDispatch()   

  function render(){
      return  <div id="ProductPage-view">
                <article>
                  <section>
                    <header>
                      <CaseHeader />
                    </header>
                    <div>
                      
                      <div id="historia" className="pp-container">
                        <h3>It all began with a story.</h3>
                        <p>The only thing that matters in a brand is what you feel when interacting with a product. When we talk about branding, we mean the vital link between your product and the user.</p>
                      </div>
                      <div id="img-story">
                        <img src="https://aerolab.co/images/zepl/story-group.png" />
                        {/* <img src="https://aerolab.co/images/zepl/sketch-book-mobile.jpg" /> */}
                      </div>

                      <div id="wire-text">
                        <h4 className="titulo-pp">Easy navigation calls for clear understanding.</h4>
                        <p>With the idea of clarifying the path that users should take to get things done with Reforma, we created a new set of guidelines for their Brand style. Got to work on defining the narrative and the different hierarchies that would eventually would guide users’ decision making process.</p>
                      </div>
                      <div id="wire-reforma">
                        <div id="wire">
                          <img src="/assets/product-pages/home-reforma-wire.svg" />
                          <img id="foto-home-reforma" src="/assets/product-pages/vista-home-reforma.jpg" />
                        </div>
                        <div id="aclaraciones">
                          <img src="/assets/product-pages/home-reforma-wire-aclaraciones.png" />
                        </div>
                      </div>


                      <div className="pp-container" id="atom-landing-cont">
                        <div id="atom-landings">
                          <img className='desk' src="/assets/product-pages/landing-atom-desk.jpg"/>
                          <img className='mob' src="/assets/product-pages/landing-atom-mob.jpg"/>
                        </div>
                        <div id="atom-texts">
                          <h4 className="titulo-pp">Make it memorable.</h4>
                          <p>We wanted illustrations to serve as a clean and engaging visual reminder of the potential that Atom brings to users, while also reassuring them that their work flow will always be agile.</p>
                          {/* <ul>
                            <li>Hola pasa esto</li>
                            <li>Hola pasa esto</li>
                            <li>Hola pasa esto</li>
                            <li>Hola pasa esto</li>
                          </ul> */}
                        </div>
                      </div>

                      <div className="pp-container" id="lengas-landings">
                        <div>

                          <h4 className="titulo-pp">Onboarding different kinds of users.</h4>
                          
                          <p>Where digital meets physical. </p>

                          <p>This is what Lengas products looks like. The end product is a unique brand identity, accompanied by a website that accurately transmits it’s values, as well as all the relevant information and calls to action for users who are interested in the products.</p>
                          
                          <img id="landing2" src="/assets/product-pages/pagina-bille-desk-part1.jpg" />
                        </div>
                        
                      <div>
                        <img id="landing1" src="/assets/product-pages/pagina-reloj-desk-part1.png" />
                        <h4 className="titulo-pp">Understanding user needs.</h4>
                          <p>Developing websites is about so much more than marketing. It’s also about aesthetics. For me, your site is the face of your company. Let’s make it stunning.</p>
                          
                      </div>
                    </div>
                    </div>
                  </section>
                </article>
              </div>

       }
       
       
       return ( render() )
}




export default ProductPage;