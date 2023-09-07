import React from 'react'
import img from "../../assets/5.jpeg"
function Section1() {
  const myStyle={
    backgroundImage: `url(${img})`,
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

};
  return (
    <div style={myStyle}>
    </div>
  )
}

export default Section1