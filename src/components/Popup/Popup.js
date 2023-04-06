import './Popup.css';

function Popup({ text }) {
    return (
        <div className="popup">
            <p className="popup-text">{text}</p>
        </div>
    )
}

export default Popup