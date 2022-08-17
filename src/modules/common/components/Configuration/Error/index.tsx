import { ErrorProps, ErrorState } from '@modules/common/types/interfaces'
import { Component, ErrorInfo } from 'react'
import { StyledH1 } from './style'

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  public state: ErrorState = { hasError: false }

  public static getDerivedStateFromError(_: Error): ErrorState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('Uncaught error: [notificação]', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <StyledH1>Something went wrong.</StyledH1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
