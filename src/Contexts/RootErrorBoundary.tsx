import React, {Component, ErrorInfo, ReactNode} from 'react';
import RootError from '~Screens/RootError';
import * as Sentry from '@sentry/react-native';
type propsType = {};
type stateType = {
  hasError: boolean;
};

class RootErrorBoundary extends Component<propsType, stateType> {
  public state: stateType = {
    hasError: false,
  };
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);

    Sentry.captureException(errorInfo);
  }
  static getDerivedStateFromError(_: Error): stateType {
    return {hasError: true};
  }
  // public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  //   console.error('Uncaught error:', error, errorInfo);
  // }
  render(): ReactNode {
    const {children} = this.props;
    const {hasError} = this.state;
    if (hasError) {
      return <RootError />;
    }

    return children;
  }
}

export default RootErrorBoundary;
