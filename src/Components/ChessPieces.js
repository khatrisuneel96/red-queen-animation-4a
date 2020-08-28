import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

function ChessPieces() {
    return (
        <div className="scenery" id="background1">
            <img 
                className="r_pawn" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" alt="pawn-upright" />
            <img 
                className="w_rook" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" 
                alt="rook" />
            <img 
                className="small_palm" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" 
                alt="palm" />
        </div>
    )
}

export default ChessPieces
