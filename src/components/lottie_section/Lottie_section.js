import React from 'react'
import * as LottiePlayer from "@lottiefiles/lottie-player";
import "./Lottie_section.css"
function Lottie_section() {
    return (
        <div className='Lottie_section'>
            <h1 className='Lottie_heading' >
                World-class doctor at your fingertips
            </h1>
            <div className='Lottie_body'>
                <lottie-player autoplay loop mode="normal"
                    src="https://lottie.host/7d5db6b4-6d96-45d9-a260-309d983bf28b/Si0Cv2snX2.json">
                </lottie-player>
                <div className='Lottie_des' >
                    <h2>
                Say goodbye to long waits and hello to instant medical insights - because your health shouldn't wait!
                    </h2>

                </div>

            </div>
        </div> 
    )
}

export default Lottie_section