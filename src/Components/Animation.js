import React from 'react'
import QueenAlice from './QueenAlice'
import Palm from './Palm'
import PalmRooks from './PalmRooks'
import ChessPieces from './ChessPieces'
import ChessBackground from './ChessBackground'


const  Animation = () => {

    const speedUp = (getAnimation) => {
        document.addEventListener('click', () => {
            const animation = getAnimation()
            animation && animation.updatePlaybackRate(animation.playbackRate * 1.1)
        })
    }

    return (
        <div className="container">
            <div className="sky" />
            <div className="earth">
                <QueenAlice playFast={ speedUp } />
            </div>
            <Palm playFast={ speedUp } />
            <PalmRooks playFast={ speedUp } />
            <ChessPieces playFast={ speedUp } />
            <ChessBackground playFast={ speedUp } />
        </div>
    )
}

export default Animation
