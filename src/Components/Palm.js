import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

function Palm({ playFast }) {

    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: "translateX(100%)" },
            { transform: "translateX(-100%)" }
        ],
        timing: {
            duration: 12000,
            iterations: Infinity,
            playbackRate: 1
        }
    })

    playFast(getAnimation)

    return (
        <div className="scenery foreground" ref={ref} >
            <img 
                className="palm" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" 
                alt="palm" />
        </div>
    )
}

export default Palm
