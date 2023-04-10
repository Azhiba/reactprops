import React from 'react'


  const FullName = (props) => {
 
    console.log(props);
   
    const myStyle={
        textAlign:"center",
        fontFamily: 'Roboto Condensed',margin:"auto",
    }
    return (
        <div >
    <h1 style ={myStyle}>  {props.firstName} {props.lastName}</h1>

 
    {props.children}
        </div>
    
  )
}

export default FullName
