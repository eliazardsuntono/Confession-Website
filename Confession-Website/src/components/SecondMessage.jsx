import './SecondMessage.css';
import snoopy from '../assets/shy-snoopy.gif';

export default function SecondMessage({ onContinue }) {
    const movePos = () => {
        const button = document.querySelector('#Moving-Button');
        const x = Math.floor(Math.random() * (window.innerWidth - 100));
        const y = Math.floor(Math.random() * (window.innerHeight - 50)); 
        button.style.position = 'absolute';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    };

    return (
        <div className="Second-Card-Container">
            <img className="Shy-Snoopy" src={snoopy} alt="Shy Snoopy" />
            <h1 className="Second-Question">
                Do you wanna... Do you wanna date 4 reelsies? :3
            </h1>
            <div className="Button-Container">
                <button className="Yes-Button" onClick={onContinue}>
                    Yes
                </button>
                <button
                    className="No-Button"
                    id="Moving-Button"
                    onMouseOver={movePos}
                >
                    No
                </button>
            </div>
        </div>
    );
}