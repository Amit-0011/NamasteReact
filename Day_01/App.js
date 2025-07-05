// First React Code Inside JavaScript File
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// ); // object

const { Children } = require("react");

// console.log(heading); // this is return a object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


{
  // create this in React
  /* <div id="parent">
    <div id="child">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h1 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h1 tag</h2>
    </div>
</div> 
ReactElement(Object) => HTML (Browser Understands)
*/
}

// here are the created element
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// const header = ReactDOM.createRoot(document.getElementById("header"));

// const parent = React.createElement("tag name", { id: "attribute" }, Children)
