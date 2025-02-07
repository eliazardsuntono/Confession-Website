import './ThirdMessage.css'
import snoopy from '../assets/snoopy-happy-dance.gif'

export default function ThirdMessage() {
    return (
        <div className="Third-Card-Container">
            <img className="Happy-Snoopy" src={ snoopy }></img>
            <h1 className="Third-Message">YAYYYYYYYYYYYYY, you're stuck with me for a veryyyyyy long time now ~0-0~</h1>
        </div>
    )
}