 import React from 'react'

 export const Welcome = (props) => {
     return (
         <div classnName="welcome-screen">
             <h1>Botique Mariposa</h1> 
                <button onClick={props.startPage}> Click here to Enter</button> 
         </div> 
     )
 }