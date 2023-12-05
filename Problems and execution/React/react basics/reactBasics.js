// React.createElement(type, [props], ...children)

// ReactDOM.render(element, DOMcontainer)
// we are appending this element inside of this dom container

// React events are synthetic, they are a superset of the native events
// sythetic events vs native events

// State
// state is local to a single instance of a component
// it has a setter function
// When that setter function is called, the instance of the component will render again based
// on the new state.
//

// Controller component
// A controlled component is one which has data and setter function from the parent
// ex: inputs

// useReducer -> works well with objects
//
// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + action.num };
//     case "decrement":
//       return { count: state.count - action.num };
//     default:
//       throw new Error("unknown action type");
//   }
// }
// const [state, dispatch] = useReducer(reducer, {
//   count: 0,
// });
// // dispatch will take in an object.
// // That object will represent the action, which will inturn call the reducer function
// // with that particular action
// <Counter
//   value={state.count}
//   onClick={() => dispatch({
//     type: "increment",
//     num: 1,
//   })}
// />;
// <Counter
//   value={state.count}
//   onClick={() => dispatch({
//     type: "decrement",
//     num: 1,
//   })}
// />;
