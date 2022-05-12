import React, { useState, useEffect } from 'react';
import CaseHeader from '../components/case-header/case-header';
import './product.css';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// foto dedo pantalla
// https://d1w6lbg49kat6u.cloudfront.net/F0IKBt9KEAGvEZ69QmGcUP1bwEk4kZr0/143346485663.jpg
const ProductThinking = () => {


  // const dispatch = useDispatch()

  function render(){
      return  <div id="ProductThinking-view">
               
                <article>
                    <header>
                      <CaseHeader topic="CASE STUDY" title="Reforma" description="Thinking the best process to find inspiration for your next trip" tags={['Figma', 'Illustrator', 'Html', 'Css', 'Js', 'JQuery', 'Vanilla Php', 'MySQL', 'Paypal', 'Mercado Pago' ]} />
                    </header>
                    <section>
                      <div id="work-approach">

                          <div id="paso1pt">
                              <div className="stepsNum">
                              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                                <span>.01</span>
                              </motion.div>
                              </div>
                              <div className="track">
                                <div></div>
                                {/* circulo + linea */}
                              </div>
                              <div className="description">
                              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>

                                <h5>the client</h5>
                                <p>Reforma is a startup that offers a software platform dedicated to offering accommodation to individuals and tourists through which certain spaces are selected and reformed together with a chosen artist to make the user experience an added value. It has the possibility of contracting the lease of its properties with its guests; The spaces can be valued, as a reference for future users.</p>
                                <div className="starting-info">
                                  <div>
                                    <b>3</b>
                                    <p>Locations where they operate</p>
                                  </div>
                                  <div>
                                    <b>10</b>
                                    <p>Starting available homes</p>
                                  </div>
                                </div>
                              </motion.div>
                              </div>
                          </div> 

                          <div id="paso2pt">
                              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>

                              <div className="stepsNum">
                                <span>.02</span>
                              </div>
                              </motion.div>

                              <div className="track">
                                <div></div>
                                {/* circulo + linea */}
                              </div>
                              <div className="description">
                              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>

                                <h5>the challenge</h5>
                                <p>The task was to create a site for Reforma that has the same functionalities as third-party online platforms to obtain and rent spaces. Thus do without commissions, have total control over the directed traffic and involve the user in a 360 ° experience. We convert the values of REforma into a complete and consistent graphic system. We defined the significant concepts and gave them visual results.</p>
                                
                              </motion.div>
                                <div>
                              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>

                                  <div id="challenge-label">
                                      <h5 className="big-lbl">REFORMA NEEDED</h5>
                                      <h5 className="big-lbl">OUR PLAN</h5>
                                  </div>
                                    
                                  <div className="franja-convert">
                                    <div>
                                      <h6>CREATE</h6>
                                      <p>A solid branding concept</p>
                                    </div>
                                    <div className="hr-cont">
                                        <hr/>
                                    </div>
                                    
                                    <div className="ciruclo-cont">
                                      <div>
                                        <div>
                                          <h6 className="big-lbl">DESIGN</h6>
                                          <p>An elegant, simple and subtle site.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              </motion.div>
                                  <p>&</p>
                              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>

                                  <div className="franja-convert">
                                    <div>
                                      <h6>CONVERT</h6>
                                      <p>Users into customers</p>
                                    </div>
                                    <div className="hr-cont">
                                        <hr/>
                                    </div>
                                    <div className="ciruclo-cont">
                                      <div>
                                        <div>
                                          <h6 className="big-lbl">BUILD</h6>
                                          <p>An understandable, practical and reliable experience.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  </motion.div>

                                </div>
                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>

                                <div id="personality">
                                  <div>
                                    <h5 className="big-lbl">PERSONALITY</h5>
                                  </div>
                                  <div className="flexi">
                                  <div className="butnot">
                                    <div>
                                      <div>
                                        <p>Elegant</p>
                                      </div>
                                      <div className="but">
                                        <span>But not</span>
                                      </div>
                                      <div>
                                        <p>Boring</p>
                                      </div>
                                    </div>
                                    <div>
                                      <div>
                                        <p>Professional</p>
                                      </div>
                                      <div className="but">
                                        <span>But not</span>
                                      </div>
                                      <div>
                                        <p>Corporate</p>
                                      </div>
                                    </div>
                                    <div>
                                      <div>
                                        <p>Exclusive</p>
                                      </div>
                                      <div className="but">
                                        <span>But not</span>
                                      </div>
                                      <div>
                                        <p>Inaccessible</p>
                                      </div>
                                    </div>
                                    <div>
                                      <div>
                                        <p>Simple</p>
                                      </div>
                                      <div className="but">
                                        <span>But not</span>
                                      </div>
                                      <div>
                                        <p>Plain</p>
                                      </div>
                                    </div>
                                  </div>
  
                                  <div id="diagrama">
                                    <img src="/assets/product-thinking/grafico-personalidad.svg" />
                                  </div>
                                  
                                  </div>
                                </div>
                                </motion.div>

                              </div>
                          </div>
                          <div id="paso3pt">
                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>

                              <div className="stepsNum">
                                <span>.03</span>
                              </div>
                              </motion.div>

                              <div className="track">
                                <div></div>
                                {/* circulo + linea */}
                              </div>

                              <div className="description">
                                <h5>our apporach</h5>
                                <p>This is how we dump and translate the information that we had previously plus the concepts discussed and the exchange of ideas:</p>
                                <div>
                              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                                  <div>
                                    <h6  className="big-lbl">THEY HAD</h6>
                                    <div className="q-hicimos concepto">
                                      <div>
                                        <h6 className="small-lbl">A name</h6>
                                        <h5>Reforma</h5>
                                      </div>
                                      <div>
                                        <h6 className="small-lbl">A concept</h6>
                                        <p>"Reforma is a startup that offers a software platform dedicated to offering accommodation to individuals and tourists through which certain spaces are selected and reformed together with a chosen artist to make the user experience an added value."</p>
                                        <b>- Pedro Grampa, Owner</b>
                                      </div>
                                    </div>
                                  </div>
                              </motion.div>

                                  <div>

                                    <h6 className="big-lbl">WE DEVELOPED FOR THEM</h6>
                                    <div>
                              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                                      <div>
                                        <h6 className="small-lbl">Typography</h6>
                                      </div>
                                      <div className="card3d tipografias">
                                        <div>
                                          <div>
                                            <h6 className="nombreTipo">Gotham</h6>
                                          </div>
                                          <div>
                                            <span className="weights"><b>Bold</b> - Medium - <span>Light</span></span>
                                          </div>
                                        </div>
                                        <div>
                                          <div className="letras">
                                            <span>A</span>
                                            <span>a</span>
                                            <br />
                                            <span>O</span>
                                            <span>o</span>
                                          </div>
                                          <div>
                                           <p>A modern and robust typography was chosen to develop a strong and reliable communication</p>
                                          </div>
                                        </div>
                                        <div>
                                        </div>
                                      </div>
                                    </motion.div>
                                    </div>

                                    <div>
                                      <div>
                                        <h6 className="small-lbl">Colors</h6>
                                      </div>
                              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>

                                      <div  className="card3d colores">
                                        <div>
                                          <div id="barra-colores">
                                              <div id="ffffff">
                                                  <div></div>
                                                  <p>#ffffff</p>
                                              </div>
                                              <div  id="fafafa">
                                                  <div></div>
                                                  <p>#fafafa</p>
                                              </div>
                                              <div  id="c272727">
                                                  <div></div>
                                                  <p>#272727</p>
                                              </div>
                                              <div  id="f3dda2">
                                                  <div></div>
                                                  <p>#f3dda2</p>
                                              </div>
                                          </div>
                                        </div>
                                        <div>
                                          <p>To give it an elegant and classy look, we decided to use white for the backgrounds, with a few touches of grey. The text in an almost black, to have a well marked contrast. And finally, the touch of magic, with subtlety, a beige for details, buttons, and some texts.</p>
                                        </div>

                                      </div>
                                    </motion.div>

                                    </div>

                                    <div>
                                      <div>
                                        <h6 className="small-lbl">ICONOGRAPHY Y DETAILS</h6>
                                      </div>
                              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                                      <div  className="card3d detalles">
                                      
                                        <div>
                                          <h6>Simplify wins</h6>
                                          <div className="iconos">
                                            <img src="https://www.reformastays.co/imgs/location.svg" />
                                            <img src="https://www.reformastays.co/imgs/checkout-black.svg" />
                                            <img src="https://www.reformastays.co/imgs/calendar-black.svg" />
                                            <img src="https://www.reformastays.co/imgs/huespedes-black.svg" />
                                          </div>
                                        </div>
                                        <div id="px-rule">
                                          <h6>The 2px rule</h6>
                                          <div>
                                            <div>
                                              <img src="/assets/product-thinking/city-card.png" />
                                            </div>
                                            <div>
                                              <p>Radius 2px</p>
                                              <img src="/assets/product-thinking/boton-radius.png" />
                                              <p>Buttons & components share the same roundy feel.</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <h6>Emphasis on values</h6>
                                          <p>With details in color, we highlight words that have a great semantic weight.</p>
                                          <img src="/assets/product-thinking/quote-enfasis.png"/> 
                                          <img src="/assets/product-thinking/text-enfasis.png"/> 
                                        </div>
                                      </div>
                                      </motion.div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                          </div> 

                          <div id="paso4pt">
                              <div className="stepsNum">
                                <span>.04</span>
                              </div>
                              <div className="track">
                                <div></div>
                                {/* circulo + linea */}
                              </div>
                              <div className="description">
                                <h5>the result</h5>
                                <p>Speak for itself</p>
                                <div>
                                  <h5 className="big-lbl">RESEARCH</h5>
                                  <div id="research-cont">
                                    <div>
                                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                                      <img src="/assets/product-thinking/research1.jpg"/>
                                      </motion.div>
                                      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>

                                      <img src="/assets/product-thinking/research2.jpg"/>
                                      </motion.div>

                                    </div>
                                    <div>
                                      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
                                      <img src="/assets/product-thinking/research3.jpg"/>
                                      </motion.div>
                                      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }}>
                                      <img src="/assets/product-thinking/research4.jpg"/>
                                      </motion.div>

                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h5 className="big-lbl">PAPER FIRST</h5>
                                  <div id="wires-cont">
                                    <img src="/assets/product-thinking/wires.png" />
                                    <img src="/assets/product-thinking/wires2.png" />
                                  </div>
                                </div>
                                <div>
                                  <h5 className="big-lbl">PROTOTYPE</h5>
                                  <div id="prototype-cont">
                                    <div>
                                      <img src="/assets/product-thinking/prototype.png"/>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h5 className="big-lbl">CONSISTENCY & PREDICTABILITY</h5>
                                  <div id="consistency-cont">
                                    <img src="/assets/product-thinking/consistency.png" />
                                    <img src="/assets/product-thinking/consistency2.png" />
                                  </div>
                                </div>
                                <div  id="finalResult-cont">
                                  <div>
                                    <img src="/assets/product-thinking/reforma-web.jpg" />
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




export default ProductThinking;
