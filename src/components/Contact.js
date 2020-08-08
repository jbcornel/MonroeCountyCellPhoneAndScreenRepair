
import contactPhoto from './headshot.JPG';
import React, { Component } from 'react'
import {ListGroup, Figure} from 'react-bootstrap';
import FigureCaption from 'react-bootstrap/esm/FigureCaption';



class Contact extends Component {

    

    render() {return (
        <div style={{background: 'lightBlue', borderRadius:'4rem'}}>
        <div style={{ marginBottom:'10rem'}}>
            <title>Monroe County Cell Phone and Screen Repair</title>
                    <Figure>
                    <img style={{padding:'2rem', borderRadius:'4rem'}}src={contactPhoto} height='30%' width='30%'alt=""></img>
                    <FigureCaption style={{color: 'black'}}>Who you'll be speaking to; Joey Cornell</FigureCaption>
                    </Figure>
                    <Figure>
                <ListGroup style={{padding:'2rem', borderRadius:'4rem'}}>
                    <ListGroup.Item>Call or Text: &nbsp; 734-731-9094</ListGroup.Item>
                    <ListGroup.Item>Email: &nbsp; josephbcornell@gmail.com</ListGroup.Item>
                    <ListGroup.Item>Snapchat: &nbsp; joeycornelll</ListGroup.Item>
                    <ListGroup.Item style={{color:'#00ace6'}} target='_blank' action href="https://goo.gl/maps/oPTrCS8iCc53a7Q97">Location: 4954 Frary ln (By appointment only)</ListGroup.Item>
                    <ListGroup.Item  style={{color:'#00ace6'}} target='_blank' action href="https://www.facebook.com/monroecountycellphonerepair">Facebook</ListGroup.Item>
                </ListGroup>
                <FigureCaption style={{color: 'black'}}>How to contact me</FigureCaption>
                </Figure>
                <Figure>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.7803616166925!2d-83.48875328474321!3d41.94057077921722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b646770f66b31%3A0x7611bf03de880e97!2s4954%20Frary%20Ln%2C%20Monroe%2C%20MI%2048161!5e0!3m2!1sen!2sus!4v1596865593781!5m2!1sen!2sus" style={{ margin: '2rem', width: "20rem", height: "20rem", frameborder: "0", allowfullscreen: "", tabindex:"0", borderRadius: '1rem'}}></iframe>
                <FigureCaption style={{color: 'black'}}>Where I'm located (By appointment only)</FigureCaption>
                </Figure>
                </div>
            <footer style={{backgroundColor: 'yellow'}}>Copyright &#169; Joseph Cornell</footer>
        </div>
        
    )
}
}

export default Contact




