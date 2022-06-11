import React, { useState, useEffect } from 'react';
import CaseHeader from '../components/case-header/case-header';
import './user.css';

// foto dedo pantalla
// https://d1w6lbg49kat6u.cloudfront.net/F0IKBt9KEAGvEZ69QmGcUP1bwEk4kZr0/143346485663.jpg
const UserOriented = () => {


  // const dispatch = useDispatch() 

  function render(){
      return  <div id="UserOriented-view">
                <article>
                  <section>
                    <header>
                      <CaseHeader topic="CASE STUDY" title="Taggie" description="Taggie allows users to create projects and share them with friends and co-workers." tags={['Figma', 'Html', 'Css', 'Js', 'JQuery', 'Php', 'MySQL', 'Paypal', 'Mercado Pago', 'React JS' ]} />

                    </header>
                    <div id="franja-info-taggie">
                      <div>
                        <h3>My Taggie</h3>
                      </div>
                      <div id="info-description">
                        <div>
                          <h6>About project</h6>
                          <p>Taggie comes to revolutionize the traditional way of presenting your projects; you can have everything in one, working on a more interactive platform and projecting something visually more attractive.</p>
                        </div>
                        <div>
                          <h6>Key task</h6>
                          <p>Create the first remote platform that facilitates the understanding of ideas through attachable multimedia nodes.</p>
                        </div>
                      </div>
                    </div>

                    <div id="linea-approach">
                      <div>
                        <h3>It's worth approaching each project individually</h3>
                        <div>
                          <div className="approach-step">
                            <div id="step1">
                              <p>01</p>
                            </div>
                            <div>
                            </div>
                            <div>
                              <h6>Idea</h6>
                              <p>Identify a pain point that needs to be addressed</p>
                            </div>
                          </div>
                          <div className="approach-step">
                            <div id="step2">
                              <p>02</p>
                            </div>
                            <div>
                            </div>
                            <div>
                              <h6>Research</h6>
                              <p>User and competition research. CJM creation</p>
                            </div>
                          </div>
                          <div className="approach-step">
                            <div id="step3">
                              <p>03</p>
                            </div>
                            <div>
                            </div>
                            <div>
                              <h6>Wireframes</h6>
                              <p>Create of flow for using the application</p>
                            </div>
                          </div>
                          <div className="approach-step">
                            <div id="step4">
                                <p>04</p>
                            </div>
                            <div>
                            </div>
                            <div>
                              <h6>UI Design</h6>
                              <p>Creating a unique visual style for the application</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      {/* <div>
                        <h6>EXPLORE THE VERCEL WAY</h6>
                        <div>
                          <div>
                          </div>
                          <div>
                            <p>1</p>
                          </div>
                          <h6>Idea</h6>
                        </div>
                        <h3>Start with the developer</h3>
                      </div> */}
                      <div id="secciones-aero">
                        <div>
                          <div>
                            <h3>Knowledge is power</h3>
                            <p>The first stage of the project was all about learning. We set out to learn all there was to know about digital products in the banking industry and how we could help out their users.</p>
                            <img src="/assets/user-oriented/draft1.jpg" />
                          </div>
                        </div>
                        <div id="less-more">
                          <div>
                            <h3>Less is more</h3>
                            <p>The original flow had a series of different screens for each of the main actions within the platform. What we did was group those actions by stages, resulting in a much simpler, smoother experience.</p>
                            <img src="/assets/user-oriented/user-flow.jpg" />
                          </div>
                        </div>
                        <div id="paper-first">
                          <div>
                            <h3>Paper first ™</h3>
                            <p>As always, we moved from research to paper. This quick, cheap way of testing and iterating ideas allowed us to try different approaches early, making sure we explored all possible alternatives. Once we defined a clear navigation paradigm, we moved on to lo-fi wireframes.</p>
                            {/* <img src="https://aerolab.co/images/banco-galicia-online-banking/knowledge.png" /> */}
                            <img src="/assets/user-oriented/paper-first.jpg" />
                          </div>
                        </div>
                        <div>
                          <div>
                              
                            <h3>Lo-fi Wireframes</h3>
                            <p>We got to work on defining the narrative and the different hierarchies that would eventually make up our Web App.</p>
                            <img src="/assets/user-oriented/wire1.jpg" />
                          </div>
                        </div>
                        <div id="visuals">
                          <div>
                            
                            <h3>A world of visuals</h3>
                            <p>Consistency is one of the most challenging aspects of working with an ecosystem as large as this. Here are some of the visual elements we included in the platform:</p>
                            <img src="/assets/user-oriented/home-dash-2-collapse.jpg" />
                          </div>
                        </div>
                        <div>
                          <div>
                            
                          <h3>Breaking down the experience</h3>
                              <p>From videos to added notes and all the way to payments made, this project involved thinking a broad range of solutions for an even broader range of users.</p>
                              <div id="components-img">
                                <div className="flexi-beet">
                                  <div className="flexi-column treinta flexi-beet">
                                    <img src="/assets/user-oriented/components/agregar-diapo.jpg" />
                                    <img src="/assets/user-oriented/components/dropdown.jpg" />
                                  </div>
                                  <img className="treinta" src="/assets/user-oriented/components/colaboradores.jpg" />
                                  <img className="treinta" src="/assets/user-oriented/components/encuestas-vinculadas.jpg" />
                                </div>
                                <div className="flexi-beet margBotSiete">
                                  <img className="cuarentiocho" src="/assets/user-oriented/components/proyecto-vacio.jpg" />
                                  <div className="flexi-column cuarentiocho flexi-beet">
                                    <img src="/assets/user-oriented/components/tabs.jpg" />
                                    <img src="/assets/user-oriented/components/btn-nuevo.jpg" />
                                    <img src="/assets/user-oriented/components/btns.jpg" />
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div id="icons">
                          <div>
                              
                            <h3>Icons</h3>
                          
                            <div id="icons-cont">
                              <div>
                                <img src="/assets/user-oriented/icons/add.svg" />
                                <img src="/assets/user-oriented/icons/back-arrow.svg" />
                                <img src="/assets/user-oriented/icons/chevron.svg" />
                                <img src="/assets/user-oriented/icons/compartidos.svg" />
                                <img src="/assets/user-oriented/icons/config.svg" />
                                {/* <img src="/assets/user-oriented/icons/direct-download.svg" /> */}
                                <img src="/assets/user-oriented/icons/encuestas.svg" />
                                <img src="/assets/user-oriented/icons/favoritos.svg" />
                                <img src="/assets/user-oriented/icons/feedback.svg" />
                                <img src="/assets/user-oriented/icons/home.svg" />
                                <img src="/assets/user-oriented/icons/layers.svg" />
                                {/* <img src="/assets/user-oriented/icons/letter-x.svg" /> */}
                               
                              </div>
                              <div>
                                <img src="/assets/user-oriented/icons/list.svg" />
                              <img src="/assets/user-oriented/icons/logout.svg" />
                                <img src="/assets/user-oriented/icons/papelera.svg" />
                                <img src="/assets/user-oriented/icons/pencil.svg" />
                                <img src="/assets/user-oriented/icons/picture.svg" />
                                <img src="/assets/user-oriented/icons/save.svg" />
                                <img src="/assets/user-oriented/icons/search.svg" />
                                {/* <img src="/assets/user-oriented/icons/trash.svg" /> */}
                                <img src="/assets/user-oriented/icons/video.svg" />
                                <img src="/assets/user-oriented/icons/visibility-hidden.svg" />
                                <img src="/assets/user-oriented/icons/visibility.svg" />
                              </div>
                              {/* <div>
                                <img src="/assets/user-oriented/icons/file.svg" />
                                <img src="/assets/user-oriented/icons/google.svg" />
                                <img src="/assets/user-oriented/icons/phone.svg" />
                                <img src="/assets/user-oriented/icons/layers-white.svg" />
                                <img src="/assets/user-oriented/icons/play-button.svg" />
                              </div> */}
                            </div>
                          </div>
                        </div>
                        <div id="video-cont">
                          <div>
                            <img src="https://www.artesano.dev/imgs/mytaggie/taggie-demo.gif" width="100%" />
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




export default UserOriented;
