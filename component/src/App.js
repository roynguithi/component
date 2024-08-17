import React from 'react';

// Define the ParentComponent function
function ParentComponent() {
  
  // Declare a variable 'data' and assign it the string "Hello from Parent"
  const data = "Hello from Parent";
  
  // Return the JSX that defines the UI for this component
  return (
    // A <div> element that will wrap the content of the ParentComponent
    <div>
      {/* A heading element displaying "I am the Parent" */}
      <h1>I am the Parent</h1>
      
      {/* Render the ChildComponent and pass the 'data' as a prop named 'message' */}
      <ChildComponent message={data} />
    </div>
  );
}

// Define the ChildComponent function
function ChildComponent(props) {
  
  // Return a paragraph element that displays the 'message' prop passed from the parent
  return <p>{props.message}</p>;
}

export default ParentComponent; // Ensure that ParentComponent is exported so it can be used in other files