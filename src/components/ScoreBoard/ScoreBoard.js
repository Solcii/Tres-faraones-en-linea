import Beetle from "../Beetle/Beetle";
import './ScoreBoard.css'

const ScoreBoard = ({ scoreX, scoreO }) => {
    const scoreUserX = Array(scoreX).fill(null)
    const scoreUserO = Array(scoreO).fill(null)
    return (
        < div className='score-board' >
            <div className='score-line score-X'>
                {scoreUserX.map((_, i) => <Beetle key={i}/>)}
            </div>
            <div className='score-line score-O'>
                {scoreUserO.map((_, i) => <Beetle key={i}/>)}
            </div>
        </div >
    )
}

export default ScoreBoard;