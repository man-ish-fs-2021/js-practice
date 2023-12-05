// refs can be treated as a syntactic sugar of passing an object into state and calling them ans setting them without causing rerender.

// Ref attribute
// we can use a ref to get the attribute values out of jsx
// It doesnt get set on the initial render, only after the initial render, after the input component is rendered, it gets set.

// functions components cannot be given ref
// forward ref takes in a component, and returns a the same component but with the ability to pass ref
//

// const MyInput = forwardRef(function (props, ref) {
//   return <input ref={ref} {...props} />;
// });

// When we set the values of a component with a ref, it becomes an uncontrolled compononent.
//
