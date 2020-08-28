import React from 'react'
import QueenAlice from './QueenAlice'
import Palm from './Palm'
import PalmRooks from './PalmRooks'
import ChessPieces from './ChessPieces'
import ChessBackground from './ChessBackground'


function Animation() {
    return (
        <div className="container">
            <div className="sky"></div>
            <div className="earth">
                <QueenAlice />
            </div>
            <Palm />
            <PalmRooks />
            <ChessPieces />
            <ChessBackground />
        </div>
    )
}

export default Animation
