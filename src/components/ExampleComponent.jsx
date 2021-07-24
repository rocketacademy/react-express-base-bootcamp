import React from 'react';
// build your component here
// Component Nameing convention: UpperCamelCase

export default function ExampleComponent() {
  const myVariable = 'This is awesome!';
  return (
    // wrap all the elements inside a div or a fragment ( <> put elements inside</> )
    <div>
      <p> Hey! this is custom component.</p>
      {/* wrap the variable inside {} when using it inside the html */}
      <p>{myVariable}</p>
      <p>
        I want to calculate sum:
        {2 + 3 }
      </p>
    </div>
  );
}
