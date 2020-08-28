import React from 'react'
import QueenAlice from './QueenAlice'
import Palm from './Palm'
import PalmRooks from './PalmRooks'
import ChessPieces from './ChessPieces'
import ChessBackground from './ChessBackground'


const  Animation = () => {

    const playFast = (getAnimation) => {
        document.addEventListener('click', () => {
            const animation = getAnimation()
            animation && animation.updatePlaybackRate(animation.playbackRate * 1.1)
        })
    }

    return (
        <div className="container">
            <div className="sky"></div>
            <div className="earth">
                <QueenAlice playFast={playFast} />
            </div>
            <Palm />
            <PalmRooks />
            <ChessPieces playFast={playFast} />
            <ChessBackground playFast={playFast} />
        </div>
    )
}

export default Animation
