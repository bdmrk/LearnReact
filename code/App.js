import React from "react";
import ReactDOM from "react-dom/client";

// React createElement = it's an object, it's not html element => Object
// When we render react Element to dom then it becomes HTML Elements

// JSX => java script syntax which is easier to create javascript element

// JSX is not part of reactJS. They're totally different

/* 
!  JSX is not HTML in java script but look like html syntax
! Transpiler -> convert one language to another or one version to another
! Compiler -> convert to to bites or machine language or lower number
! Transpilation done by Parcel
! Parcel is like house of minister
! babel is a Transpiler-> babel is open source compiler. 
! babel -> is a js library. takes some pieces of code and transpile it to another language
! es -> ecma script or valina js
*/

const headings = React.createElement(
  "div",
  { id: "heading" },
  "Hello React as react element"
);

// console.log("headings", headings);

/**
 * ! if multiple line JSX need round bracket()
 * ! a function return jsx is functional component
 * ! a function that return react element, is functional element
 */

/**
 * ! React Component -> Everything is a component in React (Button, card, footer, header, title,input box, search bar, list of card all these are component)
* ! Two type of component -> 
* ! i-> class based component -> old way of writing component
* !  ii->functional component -> new -> normal java script function -> return jsx / or some pieces of react elements
* ! naming convention -> Start with capital letter 

*/

// Component Composition
const HeadingComponent = () => {
  return (
    <div id="container">
      {headings}
      <h1 className="heading">Functional Heading Component JSX</h1>
    </div>
  );
};

const JS = () => <h1> At the end of the day, everything is js</h1>;

const elem = <span>React Element Inside </span>;

const Title = () => (
  <>
    <h1> {elem} ReactJs Title Component.</h1>
    <HeadingComponent />
  </>
);

// React Fragment
const HeadingComponent2 = () => (
  <>
    <div id="container2">
      <span>1st Container</span>

      <Title />
      <hr />
      <span>Component Call as Function</span>
      {Title()}

      <hr />
      <Title></Title>
      <h1 className="heading">Functional Component 2</h1>
    </div>
    <div id="container2">
      <hr />
      <h1>2nd Container</h1>
    </div>
  </>
);

const jsxHeading = <div id="heading">React jsx</div>;
// console.log("jsxHeading", jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<headings>);
// root.render(jsxHeading);

/**
 * ! functional component vs react element
 */

root.render(
  <>
    <JS></JS>
    <HeadingComponent />
    <HeadingComponent2 />
  </>
);
