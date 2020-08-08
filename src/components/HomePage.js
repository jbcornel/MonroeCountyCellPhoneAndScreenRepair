import React from 'react'

import 'react-slideshow-image/dist/styles.css';
import Prices from './Prices';
function HomePage() {
    return (
        <div>
            <title>Monroe County Cell Phone and Screen Repair</title>
            <header style={{fontSize: "large" }}>
            
            <Prices/>
            
            </header>

            <footer>
                Copyright &#169; Joseph Cornell
            </footer>
        </div>
    )
}

export default HomePage
