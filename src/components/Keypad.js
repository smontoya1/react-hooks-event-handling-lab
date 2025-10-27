import React from "react";

// Mr. Burns has requested us to build a new keypad component for the nuclear plant, 
// since the last one was way too complicated for his employees to use. 
// We'll keep things super simple instead, and use an <input type="password" /> field to capture input. 
// Here's how to complete the exercise:

// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the change event.
// When that event fires, use console.log to print out the text 'Entering password...'.

function Keypad() {
    function handleChange() {
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" onChange={handleChange}/>
        </div>
    );
}

export default Keypad;