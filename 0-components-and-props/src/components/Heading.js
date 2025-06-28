// Another Header component
// This component accepts two properties and renders content using them
// Also props are immutable, a function component cannot modify the props it receives.
// A React component must return a single JSX element.
// This function contains JSX code
function Heading(props) {
    // props.title='something'; This is invalid, props is immutable.
  return (
    <h1>
      <p>{props.title}</p> 
      <p>{props.subtitle}</p>
    </h1>
  )
}

export default Heading;