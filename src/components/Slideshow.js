
 
 import React from 'react';
 import { Fade } from 'react-slideshow-image';
 import 'react-slideshow-image/dist/styles.css';
  
 const fadeImages = [
    "https://i.imgur.com/ATgcpxI.jpg",
    "https://i.imgur.com/jdtT4hk.jpg",
    "https://i.imgur.com/PGlHEAw.jpg"

 ];
  
 const fadeProperties = {
   duration: 5000,
   transitionDuration: 500,
   infinite: true,
   indicators: true,
   onChange: (oldIndex, newIndex) => {
     console.log(`fade transition from ${oldIndex} to ${newIndex}`);
   }
 }
  
 const Slideshow = () => {
   return (
     <div  style={{backgroundColor: 'lightBlue'}}className="slide-container">
       <Fade {...fadeProperties}>
         <div className="each-fade">
           <div className="image-container">
             <img style={uniformSize} src={fadeImages[0] } alt=""/>
           </div>
           
         </div>
         <div className="each-fade">
           <div className="image-container">
             <img style={uniformSize} src={fadeImages[1]} alt=""/>
           </div>
           
         </div>
         <div className="each-fade">
           <div className="image-container">
             <img style={thirdImageStyle} src={fadeImages[2]} alt=""/>
             
           </div>
           
         </div>
         
       </Fade>
       <h3 style={{marginBottom: '2em', marginTop: '2em'}}>
Hello I am Joseph Cornell, Founder and sole employee of Monroe County Cell Phone and Screen Repair. I have replaced screens and repaired hundreds of phones in my career as a Cell Phone Repair Technician and want to offer my low and affordable prices to the Monroe County area! Call for a quote at 734-731-9094.</h3>
     </div>
   )
 }

 const uniformSize = {
     marginTop: '5em',
     height: '700px',
     width: '1000px',
     borderRadius: '7px'
 }
 const thirdImageStyle = {
  marginTop: '15em',
  height: 'auto',
  maxWidth:"80%",
  transform: 'scale(2.0)',
  borderRadius: '7px'
}
 export default Slideshow