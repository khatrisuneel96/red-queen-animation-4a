import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

function PalmRooks({ playFast }) {
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
                className="bush" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"  
                alt="bush" />
            <img 
                className="w_rook_upright" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"  
                alt="rook_upright" />
        </div>
    )
}

export default PalmRooks
