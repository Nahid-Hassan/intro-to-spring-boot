export default function EventHandler() {
    function handleClick() {
        alert('Button clicked');
    }

    return (
        <div>
            <h2>Event Handling</h2>
            <button onClick={handleClick}>This is button</button>
        </div>
    );
};