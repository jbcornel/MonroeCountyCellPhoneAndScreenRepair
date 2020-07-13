import React from 'react'
import phoneRepairPhoto from './phoneRepairPhoto.jpg';
import 'react-slideshow-image/dist/styles.css';
import Slideshow from './Slideshow';
function HomePage() {
    return (
        <div>
            <title>Monroe County Cell Phone and Screen Repair</title>
            <header style={{fontSize: "large" }}>
            
            <Slideshow/>
            
            </header>

            <footer>
                Copyright &#169; Joseph Cornell
            </footer>
        </div>
    )
}

export default HomePage
