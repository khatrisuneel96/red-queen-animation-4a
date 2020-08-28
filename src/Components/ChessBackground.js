import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

function ChessBackground() {
    return (
        <div className="scenery">
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
