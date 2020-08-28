import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

function ChessBackground() {
    return (
        <div className="scenery" id="background2">
            <img 
                id="r_pawn" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
                alt="pawn" />
            <img 
                id="r_knight" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
                alt="knight" />
            <img 
                id="palm2" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
                alt="palm2" />
        </div>
    )
}

export default ChessBackground
