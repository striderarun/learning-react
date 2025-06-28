import logo from './logo.svg';
import './App.css';

// import the Heading component which was exported from Heading.js
import Heading from './components/Heading';

// Header component
// Defined in same file as App.js, doesn't need to be exported
// This function contains JSX code
function Header1() {
  return (
    <h1>Hello World</h1>
  )
}

// For a component to render something on the page, it needs to return one or more JSX elements.
// This is the root component, called from index.js
// The App component returns a Header JSX element
function App() {
  // Render the Header component to the root component
  // return <Header1/>;

  // A React component must return a single JSX element.
  // Render the Heading component by passing two properties
  return (
    <div className='App'>
      Hello first imported component!
      <Heading title="Hello there World" subtitle="By Arun Mohan"></Heading>
    </div>
  )
}

// export the component to make it available
export default App;
