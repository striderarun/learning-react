// The goal of this component is to toggle between dark and light mode based on click of a button
// We need to use React state variables and Hooks to achieve this. Check out WrongModeToggler.js to find out why using regular variables don't work.

// https://react.dev/learn/state-a-components-memory
// https://react.dev/learn/render-and-commit
// Hooks are special functions that are only available while React is rendering. They let you “hook into” different React features.

// To update a component with new data, two things need to happen:
// 1. Retain the data between renders.
// 2. Trigger React to render the component with new data (re-rendering).

// The useState Hook provides those two things:
// 1. A state variable to retain the data between renders.
// 2. A state setter function to update the variable and trigger React to render the component again.

// Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks. 
// You can’t call Hooks inside conditions, loops, or other nested functions. 
// You can only call hooks from React functions, and not regular JavaScript functions. 
// Hooks are functions, but it’s helpful to think of them as unconditional declarations about your component’s needs. 
// You “use” React features at the top of your component similar to how you “import” modules at the top of your file.

// To add a state variable, import useState from React at the top of the file:
import { useState } from 'react';

const ModeToggler = () => {
    // Array destructuring
    // When you call useState, you are telling React that you want this component to remember something: the value of darkModeOn.
    // Every time your component renders, useState gives you an array containing two values: 
    // 1. The state variable (darkModeOn) with the value you stored.
    // 2. The state setter function (setDarkModeOn) which can update the state variable and trigger React to render the component again.

    // Here’s how that happens in action:
    // 1. Your component renders the first time. Because you passed false to useState as the initial value for darkModeOn, it will return [false, setDarkModeOn]. React remembers 'false' is the latest state value.
    // 2. You update the state. When a user clicks the button, it calls setDarkModeOn(!darkModeOn), setting it to true. React detects that there has been a change in the value for darkModeOn from false to true and triggers another render. React also remembers 'true' is the latest state value now. 
    // 3. The component is now re-rendered.
    const [darkModeOn, setDarkModeOn] = useState(true);

    const darkMode = <h1>Dark Mode is On!</h1>
    const lightMode = <h1>Light Mode is On!</h1>

    // Use the setDarkModeOn method to update the state
    const handleClick = () => {
        setDarkModeOn(!darkModeOn);
    }

    return (
        <div>
            {darkModeOn ? darkMode: lightMode}
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default ModeToggler;

// Other notes about State
// State is isolated and private 
// State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! 
// Changing one of them will not affect the other.

// See example below.
// import Gallery from './Gallery.js';
// export default function Page() {
//   return (
//     <div className="Page">
//       <Gallery />
//       <Gallery />
//     </div>
//   );
// }

// If user changes the state of the first Gallery section of the page, it doesn't affect the second Gallery section.
// Each Gallery has it's own completely isolated and independent state.

// This is what makes state different from regular variables that you might declare at the top of your module. 
// State is not tied to a particular function call or a place in the code, but it’s “local” to the specific place on the screen. 
// You rendered two <Gallery /> components, so their state is stored separately.