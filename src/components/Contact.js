
import contactPhoto from './headshot.JPG';
import React, { Component } from 'react'




class Contact extends Component {

    

    render() {return (
        
        <div>
            <title>Monroe County Cell Phone and Screen Repair</title>
                <div style= {{backgroundColor: 'lightBlue'}}>
                    <img style={blurredImageStyle} src={contactPhoto} height='30%' width='30%'alt=""></img>
                </div>
                
            <h1 >Contact info: </h1>
            <h2 style= {{marginBottom: '2em'}}>Phone Number: &nbsp; 734-731-9094</h2>
            <h2 style= {{marginBottom: '2em'}}>Email: &nbsp; josephbcornell@gmail.com</h2>
            <h2 style= {{marginBottom: '2em'}}>Snapchat: &nbsp; joeycornelll</h2>
            <h2 style= {{marginBottom: '1em', textDecoration: 'underline'}}>Location:</h2>
            <h2 style= {{marginBottom: '20em'}}>Mobile service! So wherever you want. Or call before hand and I can give you the location of my temporary storefront! </h2><footer style={{backgroundColor: 'yellow'}}>Copyright &#169; Joseph Cornell</footer>
        </div>
        
    )
}
}

export default Contact


const blurredImageStyle = {
    boxShadow: '25px 25px 50px 0 white inset, -25px -25px 50px 0 white inset',
    backgroundColor: 'lightBlue',
    marginLeft:'30px',
    borderRadius: '10px',
    float: 'left'
    
  }

