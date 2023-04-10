import React from 'react'

function Profession( {Profession,handlealert}) {
  return (
    <div>

         <h5 className="card-title">Profession</h5>
      <p >I am currently a student at GO My Code,I'm looking for a new opportunity as a Full stack Developpeur</p>
    <p><b>SKIILS</b> <br/> -HTML/CSS <br/> -JAVASCRIPT <br/> -REACT <br/> -Visual Studio <br/></p>

    
    <button onClick ={ () =>handlealert ("Hiba")}>Click on me</button> 


    </div>
  )
}

export default Profession





   
    
  

  
