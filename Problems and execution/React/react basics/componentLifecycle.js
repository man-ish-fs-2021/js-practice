// 1. mount - initial render
// 2. updates - re-render, not going to mount the component
// 3. unmount - When the component leaves the screen. Component ends

// useEffect

// useEffect(() => {
// callback as a parameter,
// dependency array.
// }, []);

// cleanup function
// when the dependecy array is empty, the cleanup function runs whenever the component is unmounted.
// When there are items in the dependency array, the cleanup function runs everytime before
// running the effect again.
//

// useLayout effect
// useEffect is going to run asynchronouly after the render and paint
// useLayoutEffect is going to run synchrounously, and runs before the component is able to
// paint to the screen.
// useLayoutEffect synchronous nature can cause things to run slowly
