import React, { useState, useEffect } from 'react';
import './case-header.css';


const CaseHeader = ({topic, title, description, tags=[] }) => {

  // const dispatch = useDispatch()

  function render(){
      return  <div id="CaseHeader-component">
                    <div>
                        <span>{topic}</span>
                        <h4>{title}</h4>
                        <p>{description}</p>
                        <div className="tags-cont">
                            {tags.map((tag)=>(
                                 <span className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
               
              </div>

       }
       
       
       return ( render() )
}




export default CaseHeader;
