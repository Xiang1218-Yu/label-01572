import { Component } from 'react';
import type { ReactNode, ErrorInfo } from 'react';
import logger from '../utils/logger';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    logger.error('React render error', {
      message: error.message,
      stack: error.stack,
      componentStack: info.componentStack,
    });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', minHeight: '60vh', padding: '24px',
          color: '#a09bb0', textAlign: 'center',
        }}>
          <span style={{ fontSize: 48, marginBottom: 16 }}>⚠️</span>
          <h2 style={{ color: '#fff', fontSize: 20, marginBottom: 8 }}>页面出现异常</h2>
          <p style={{ fontSize: 14, marginBottom: 20 }}>
            {this.state.error?.message || '未知错误'}
          </p>
          <button
            onClick={() => { this.setState({ hasError: false, error: null }); }}
            style={{
              padding: '8px 24px', borderRadius: 6, background: '#00e5a0',
              color: '#1a1525', fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer',
            }}
          >
            重试
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
