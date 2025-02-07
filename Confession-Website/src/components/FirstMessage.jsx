import './FirstMessage.css'
import snoopy from '../assets/giggle-snoopy.gif'

export default function FirstMessage({ onContinue }) {
    return (
        <div className="First-Card-Container">
            <img className="Giggling-Snoopy" src={ snoopy }></img>
            <div className='question'>
                <h1 className="First-Question">Hey! I have a question to ask...</h1>
                <button className="Continue-Button" onClick={onContinue}>
                    Continue
                </button>
            </div>
        </div>
    );
}