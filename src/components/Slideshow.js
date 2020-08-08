
 
 import React from 'react';
 import { Fade } from 'react-slideshow-image';
 import 'react-slideshow-image/dist/styles.css';
 import {Carousel} from 'react-bootstrap';
 import iphonePhoto from './iphonePricesPhoto.jpg';
 import samsungPhoto from './samsungPricePhoto.jpg';
  
 const fadeImages = [
    "https://i.imgur.com/0rFDQMB.jpeg"
    ,"https://i.imgur.com/feKJ7N3.jpeg"

 ];
  
 
  
 const Slideshow = () => {
   return (
     <div  style={{backgroundColor: 'lightBlue'}}className="slide-container">
       
       <Carousel >
  <Carousel.Item>
    <img
      
      src={fadeImages[0]}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img

      style={{transform: 'scale(.75)'}}
      src={fadeImages[1]}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
       <h3 >
Hello I am Joseph Cornell, Founder and sole propietor of Monroe County Cell Phone and Screen Repair. I have replaced screens and repaired hundreds of phones in my career as a Cell Phone Repair Technician and want to offer my low and affordable prices to the Monroe County area! Call for a quote at 734-731-9094.</h3>
     </div>
   )
 }

 
 export default Slideshow