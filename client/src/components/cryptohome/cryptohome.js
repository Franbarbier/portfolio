import React, { useState, useEffect } from 'react';
import { ReactComponent as Coins } from '../../svgs/coins-2.svg';
import Coin from './Coin/Coin';

import './cryptohome.css';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const CryptoHome = () => {



	function apareceCripto() {
		function step1() {
			document.querySelector('#paso1 .step-img-cont>img').style.filter = 'brightness(1)'
			document.querySelector('#paso1 .step-num-cont p').style.color = '#f5911b'
			document.querySelector('#paso1 .step-num-cont p').style.textShadow = '0px 0px 3px #f5911b'
		}
		function step2() {
			document.querySelector('#paso1 .progress-chain .linea-naranja').style.height = '13vh'
			
			setTimeout(() => {
				let none1 = document.querySelector('#paso1 .progress-chain .link-naranja').style.display
				document.querySelector('#paso1 .progress-chain .link-naranja').style.display = 'block'

				if (none1 == 'none' ) {
				document.querySelector('#paso1 .progress-chain .chains-cont').style.boxShadow = '0px 0px 3px -1px #f5911b'
				setTimeout(() => {
					document.querySelector('#paso1 .progress-chain .chains-cont').style.boxShadow  = '0px 0px 3px -1px rgba(0,0,0,0.3)'
				}, 450);
				}
			}, 150);
			setTimeout(() => {
		
				document.querySelector('#paso2 .step-img-cont>img').style.filter = 'brightness(1)'
				document.querySelector('#paso2 .step-num-cont p').style.color = '#f5911b'
				document.querySelector('#paso2 .step-num-cont p').style.textShadow = '0px 0px 3px #f5911b'

			}, 550);
		}

		function step3() {
			document.querySelector('#paso2 .progress-chain .linea-naranja').style.height = '13vh'
			
			setTimeout(() => {
				let none2 = document.querySelector('#paso2 .progress-chain .link-naranja').style.display
				document.querySelector('#paso2 .progress-chain .link-naranja').style.display = 'block'
		
				if (none2 == 'none' ) {
				document.querySelector('#paso2 .progress-chain .chains-cont').style.boxShadow = '0px 0px 3px -1px #f5911b'
				setTimeout(() => {
					document.querySelector('#paso2 .progress-chain .chains-cont').style.boxShadow = '0px 0px 3px -1px rgba(0,0,0,0.3)'
				}, 450);
				}
			}, 150);
			setTimeout(() => {
		
				document.querySelector('#paso3 .step-img-cont>img').style.filter ='brightness(1)'
				document.querySelector('#paso3 .step-num-cont p').style.color = '#f5911b'
				document.querySelector('#paso3 .step-num-cont p').style.textShadow = '0px 0px 3px #f5911b'
			}, 550);
		}

		function caidaMoneda() {
			document.querySelector('#coin-cont').classList.add('caidaGrav')
			setTimeout(() => {
				
				for (let index = 0; index < document.querySelectorAll('.monedin ellipse').length; index++) {  document.querySelectorAll('.monedin ellipse')[index].style.strokeDashoffset = '0' }
				for (let index = 0; index < document.querySelectorAll('.monedin path').length; index++) {  document.querySelectorAll('.monedin path')[index].style.strokeDashoffset = '0' }
			
				document.querySelector('#celu').style.filter = 'drop-shadow(0px 0px 76px rgba(255,255,255,.05))'
			}, 2500);
		};

		step1()
		setTimeout(() => {
			step2()
		}, 300);
		setTimeout(() => {
			step3()
		}, 600);
		setTimeout(() => {
			caidaMoneda()
		}, 900);

	}
  // const dispatch = useDispatch() 

  const controlsCripto = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
	  if (inView) {
		controlsCripto.start('visible');
			apareceCripto()

	  }
	 
	  
	}, [controlsCripto, inView]);

	var variante = {hidden: {scale:1}, visible: { scale:1 } }

  function render(){
      return  <div id="CryptoHome-view">
                <article>
                  <section>
                  <section>

	<article id="pasos-art">
		<div>
			<section>
            <article id="pasos-art">
		<div>
			<header>
				<h3>Un sólo lugar donde invertir y<br/>hacer negocios con cryptomonedas.</h3>
			</header>
			<div id="pasos-cont">
				<div id="paso1">
					<div>
						<div className="step-img-cont">
							<img src="/assets/criptohome/icono-proceso-1.png" alt=""/>
						</div>
						<div className="step-num-cont">
							<div>
								<p>1</p>
							</div>
						</div>
						<div className="step-text-cont">
							<h6>PASO #1</h6>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa quidem quae nemo, excepturi.</p>
						</div>
					</div>
					<aside className="progress-chain">
						<div>
							<div className="linea-negra"></div>
							<div className="linea-naranja"></div>
							<div className="chains-cont">
								<div>
									<img src="/assets/criptohome/chain-dark.svg" alt=""/>
									<img className="link-naranja" src="/assets/criptohome/chain-yellow.svg" alt=""/>
								</div>
							</div>

						</div>
					</aside>
				</div>
				<div id="paso2">
					<div>
						<div className="step-text-cont">
							<h6>PASO #2</h6>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa quidem quae nemo, excepturi.</p>
						</div>
						<div className="step-num-cont">
							<div>
								<p>2</p>
							</div>
						</div>
						<div className="step-img-cont">
							<img src="/assets/criptohome/icono-proceso-2.png" alt=""/>
						</div>
					</div>
					<aside className="progress-chain">
						<div>
							<div className="linea-negra"></div>
							<div className="linea-naranja"></div>
							<div className="chains-cont">
								<div>
									<img src="/assets/criptohome/chain-dark.svg" alt=""/>
									<img className="link-naranja" src="/assets/criptohome/chain-yellow.svg" alt=""/>
								</div>
							</div>
								
						</div>
					</aside>
				</div>
				<div id="paso3">
					<div>
						<div className="step-img-cont">
							<img src="/assets/criptohome/icono-proceso-3.png" alt=""/>
						</div>
						<div className="step-num-cont">
							<div>
								<p>3</p>
							</div>
						</div>
						<div className="step-text-cont">
							<h6>PASO #3</h6>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa quidem quae nemo, excepturi.</p>
						</div>
					</div>
				</div>
				<aside id="step-coin">
					<div id="coin-cont">
						<div>
							<Coin />
						</div>
					</div>
				</aside>
				<div id="celu-cont">
					<img id="celu" src="/assets/criptohome/celu-vacio.png" alt=""/>
					<img id="coin1" className="iconos-celu" src="/assets/criptohome/coins.svg" alt=""/>
					<aside className="iconos-celu">
						<Coins />
					</aside>

				</div>					
			</div>
		</div>
	</article>
            </section>
		</div>
	</article>
	<motion.div ref={ref} initial="hidden" animate={controlsCripto} variants={variante}></motion.div>
		
</section>
                  </section>
                </article>
              </div>

       }
       
       
       return ( render() )
}




export default CryptoHome;