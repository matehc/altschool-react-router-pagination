import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { errorInfo: false, error: null };
    }

   componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
   }

   render() {
    if (this.state.error) {
        return (
          <div>
          <h1>Something Unexpected happened.</h1>
          <div>
          <h2>An Error Has Occurred</h2>
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
        </div>
        )
    }
    return this.props.children;
   }
  }

  export default ErrorBoundary;




