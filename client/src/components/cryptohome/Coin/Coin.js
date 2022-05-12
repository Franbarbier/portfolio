import React, { useState, useEffect } from 'react';

import './Coin.css';


const Coin = () => {
    
  // const dispatch = useDispatch() 

  function render(){
      return  <div id="Coin-view" style={{'position': 'relative'}}>
                <div class="coin">
                    <div class="coin__front"></div>
                    <div class="coin__edge">
                        <div class="coin__edge_image"></div><div class="coin__edge_image"></div><div class="coin__edge_image"></div><div class="coin__edge_image"></div><div class="coin__edge_image"></div><div class="coin__edge_image"></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    </div>
                    <div class="coin__back"></div>
                    <div class="coin__shadow"></div>
                </div>
              </div>

       }
       
       
       return ( render() )
}




export default Coin;