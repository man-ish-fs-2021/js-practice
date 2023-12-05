// Error Boundary
// Error boundaries must be class based components,
// static getDerivedStateFromError(error) -> called during the render phase and updates the current state of the component
// componentDidCatch(error, errorInfo) -> called during the commit phase for the purpose of side-effects related caught error
//
// class ErrorBoundary extends Component {
// state = { hasError: false };
// static getDerivedstateFronError (error) {
// return { hasError: true };
// }
// componentDidCatch (error, errorInfo) {
// logErrorToServer (error, errorInfo);
// }
// render ( ) {
// if (this.state hasError) {
// return this.props. fallback;
// }
// return this.props.children
// }
// }

//
