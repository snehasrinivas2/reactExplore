import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => Object => render on root => then it forms html element

//const heading = React.createElement("h1", {id:"header"}, "I am the first header");

// JSX 
// JSX is not react element, its HTML like syntax in JS not HTML in syntax.

const jsxheading = (<h1>I am 
    the first jsx header</h1>);

// ***** Functional Component *****
// Nothing but a js function which returns JSX.

// const heading = () =>{
// return <h1> I am react functional component heading </h1>    }

const Title = () => 
    ( <h2> I am new heading</h2>)

    

const HeadComponent = () => {
    return (
        <div>
        <h1> I am head component with title</h1>
        <Title/>
        <Title></Title>
        {Title()}
    </div>
    )
 }


// const heading = () => <h1> I am react header </h1>
// Both code are same, no return if no curly brackets

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);
//root.render(jsxheading);
root.render(<HeadComponent/>);
