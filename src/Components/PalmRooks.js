import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

function PalmRooks() {
    return (
        <div className="scenery foreground">
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
