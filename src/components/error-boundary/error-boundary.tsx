import { Component, type ReactNode, type ErrorInfo } from 'react';
import { ErrorMessage } from '../error-message/error-message';

interface Props {
  children: ReactNode;
}
interface State {
  error: Error | null;
}
export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    error: null,
  };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Caught error:', error.message, errorInfo.componentStack);
  }

  render(): ReactNode {
    if (this.state.error) {
      return <ErrorMessage error={this.state.error} />;
    }
    return this.props.children;
  }
}
