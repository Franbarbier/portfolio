import React, { useState, useEffect } from 'react';
import CaseHeader from '../components/case-header/case-header';
import emailjs from 'emailjs-com';

import './contact.css';

// foto dedo pantalla
// https://d1w6lbg49kat6u.cloudfront.net/F0IKBt9KEAGvEZ69QmGcUP1bwEk4kZr0/143346485663.jpg
const Contact = () => {

   useEffect( () => {
    setTimeout(() => {
      
      for (let index = 0; index < document.getElementsByClassName('inputes').length; index++) {
        const element = document.getElementsByClassName('inputes')[index];
      element.addEventListener("focusout", function(){
        if( this.closest('div').querySelector('.inputes').value == '' ){
        this.closest('div').querySelector('.tags').style.transform = 'translate(20% , 160%) scale(1.4)'
        this.closest('div').querySelector('.tags').style.color = '#b5b5b5'
        this.closest('div').querySelector('.inputes').style.borderBottomColor = '#7b7b7b'
      }

      });

      element.addEventListener("focus", function(){
          this.closest('div').querySelector('.tags').style.transform = 'scale(1) translate(0)'
          this.closest('div').querySelector('.tags').style.color = '#e2c2b8'
          this.closest('div').querySelector('.inputes').style.borderBottomColor = '#e2c2b8'
      });
      
    }

  }, 1000);
  
  },[])

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ltzh6m1', 'template_8n5dj2u', e.target, 'user_C7St7QStBpGoXpmWKbAx4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  // const dispatch = useDispatch()   

  function render(){
      return  <div id="Contact-view">
                <article>
                  <section>
                    <div>
                      <form onSubmit={sendEmail}>
                        <div>
                          <label className="tags">Name</label>
                          <input type="text" name="name" class="inputes"  />
                        </div>
                        <div>
                          <label className="tags">Company</label>
                          <input type="text" name="company" class="inputes" />
                        </div>
                        <div>
                          <label className="tags">Email</label>
                          <input type="email" name="email" class="inputes" />
                        </div>
                        <div>
                          <label className="tags">Phone</label>
                          <input type="number" name="phone"  className="inputes" />
                        </div>
                        <div style={{'width':'100%'}}>
                          <label style={{'color' : '#b5b5b5'}}>Message</label>
                          <textarea name="message" rows={3} className="inputesTxt" >
                          </textarea>
                        </div>
                        <div id="enviar">
                          <input value="SUBMIT" type="submit" />
                        </div>
                      </form>
                      <div id="wpp">
                        <button><a href="https://wa.me/5491134536136" target="a_blank"> <img src="/assets/whatsapp.png" /> <span>WHATSAPP</span></a></button>
                      </div>
                    </div>
                  </section>
                </article>
              </div>

       }
       
       
       return ( render() )
}




export default Contact;