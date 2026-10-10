import { Component, type ReactNode, type ErrorInfo } from 'react';
import { ErrorPage } from './ErrorPage';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: (error: Error, reset: () => void) => ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('[Celestarc ErrorBoundary] Caught runtime exception:', error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback && this.state.error) {
        return this.props.fallback(this.state.error, this.handleReset);
      }

      return (
        <ErrorPage
          code="500"
          title="Unexpected Runtime Error"
          message="A critical client-side exception occurred during execution. Studio subsystems have paused execution to prevent state corruption."
          details={this.state.error ? `${this.state.error.name}: ${this.state.error.message}\n${this.state.error.stack || ''}` : undefined}
          onReset={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}
