// React under the hood.
// React.createElement() -> returns a react element object, this is not a DOM node
// the h1 tag changes as follows
{
  /* <h1>hello world</h1> -> ReadableByteStreamController.createElement('h1', null, 'hello world') */
}
// this becomes an object
// react element = {
//     $$typeof: Symbol.for('react.element'),
//     key: null,
//     props: {children: "Hello World"},
//     ref: null,
//     type: 'h1'
// }
// this object is used to create react dom
// ReactDOM.render(
//   {
//     $$typeof: Symbol.for("react-element"),
//     key: null,
//     props: { children: "Hello world" },
//     ref: null,
//     type: "h1",
//   },
//   document.getElementById("root")
// );
// ReactDOM traverses the react Element object (tree like structure) and creates DOM nodes

// Virtual DOM
// Tree like data structure create by nesting react elements
// Much faster than the real DOM

// Reconciliation
// React calculates the diff of the the cirtual DOM after updates
// 1. if root nodes are of different types, delete tree and rebuild
// 2. If attributes changes, update existing nodes
// 3. Recurse on all children.
// after diffing, the list of changes are sent to a rendering function, then the changes are made to the dom based on them.
// react fibre -> changes to react reconciliation, by introducing increamental rendering

// Keys:
// When recursing on children, react assumes elements are in the same order,
// Kyes allow you to tell react how the order changed
