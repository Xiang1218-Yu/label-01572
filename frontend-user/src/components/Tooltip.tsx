import { useState } from 'react';
import styles from './Tooltip.module.css';

interface TooltipProps {
  content: string | { name: string; description: string };
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export default function Tooltip({ content, children, position = 'top' }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  const getPositionStyles = () => {
    switch (position) {
      case 'bottom':
        return {
          top: 'calc(100% + 8px)',
          bottom: 'auto',
        };
      case 'left':
        return {
          right: 'calc(100% + 8px)',
          left: 'auto',
          top: '50%',
          transform: 'translateY(-50%)',
        };
      case 'right':
        return {
          left: 'calc(100% + 8px)',
          right: 'auto',
          top: '50%',
          transform: 'translateY(-50%)',
        };
      default:
        return {};
    }
  };

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className={styles.tooltip} role="tooltip" style={getPositionStyles()}>
          {typeof content === 'string' ? (
            <span className={styles.simpleText}>{content}</span>
          ) : (
            <>
              <span className={styles.name}>{content.name}</span>
              <span className={styles.description}>{content.description}</span>
            </>
          )}
        </span>
      )}
    </span>
  );
}
