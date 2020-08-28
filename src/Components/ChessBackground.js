import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

function ChessBackground({ playFast }) {

    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: "translateX(100%)" },
            { transform: "translateX(-100%)" }
        ],
        timing: {
            duration: 36000,
            iterations: Infinity,
            playbackRate: 1
        }
    })

    playFast(getAnimation)

    return (
        <div className="scenery" ref={ref} >
            <img 
                className="pawn" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
                alt="pawn" />
            <img 
                className="knight" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
                alt="knight" />
            <img 
                className="medium_palm" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
                alt="medium_palm" />
        </div>
    )
}

export default ChessBackground
