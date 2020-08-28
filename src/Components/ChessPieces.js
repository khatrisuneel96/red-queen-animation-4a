import React from 'react'

function ChessPieces() {
    return (
        <div className="scenery" id="background1">
            <img 
                id="r_pawn_upright" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" alt="pawn-upright" />
            <img 
                id="w_rook" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" 
                alt="rook" />
            <img 
                id="palm1" 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" 
                alt="palm" />
        </div>
    )
}

export default ChessPieces
