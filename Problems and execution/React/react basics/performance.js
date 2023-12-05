// Performance
// how to make the renders more efficient
// how to make sure to have less number of renders and renders take less time

// Minimize the time render takes
// useMemo -> so that the complex functions do not take too much time while we are running some other function

// React.Memo
// Minize how often the components are rendering
// if a component is taking too much time to render, we do not need to change it until the props change
// React memo do not re-render a component until the Props do not change in the particular component.

// useCallback
// In react at every render the functions within that component are also reRendered
// useCallback memoizes the entire function. So the function is reRendered only on change of the dependency array
//

// To avoid loading the component on the first render, we can use react lazy and conditionally render

// Suspense
// react lazy needs suspense as a fallback
// while a component is suspending, i.e loading, we render another component in its place
