// The goal of this component is to toggle between dark and light mode based on click of a button
// Observations:
// Each time button is clicked, the click handler gets called and the value of the darkModeOn variable does indeed get toggled,
// The console log statments show the variable value getting toggled with button clicks
// However, the heading rendered on browser never changes, it always shows "Dark Mode is On!" even when the darkModeOn variable is set to false in the click handler.
// IMPORTANT: The JSX expression does not listen to changes in the local variable darkModeOn. The JSX expression is evaluated only once the first time the component is rendered.
// How do we get the display to dynamically refresh based on the toggled state?
// This is where React State and Hooks come into play!
// Check ModeToggler.js for the correct way to use state Hooks.
// ES6 Arrow function syntax

// In depth explanation for why this doesn't work, from
// https://react.dev/learn/state-a-components-memory
// The handleClick event handler is updating a regular local variable, darkModeOn. But two things prevent that change from being visible:
// 1. Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
// 2. Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.

// To update a component with new data, two things need to happen:
// 1. Retain the data between renders.
// 2. Trigger React to render the component with new data (re-rendering).

// The useState Hook provides those two things:
// 1. A state variable to retain the data between renders.
// 2. A state setter function to update the variable and trigger React to render the component again.

const WrongModeToggler = () => {
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode is On!</h1>
    const lightMode = <h1>Light Mode is On!</h1>

    // ES6 arrow function
    const handleClick = () => {
        darkModeOn = !darkModeOn;
        if (darkModeOn) {
            console.log("Dark Mode is On");
        } else {
            console.log("Light Mode is On");
        }
    }

    return (
        <div>
            {darkModeOn ? darkMode: lightMode}
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default WrongModeToggler;