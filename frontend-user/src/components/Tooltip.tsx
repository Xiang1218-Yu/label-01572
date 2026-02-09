import { useState } from 'react';
import styles from './Tooltip.module.css';

interface TooltipProps {
  content: { name: string; description: string };
  children: React.ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className={styles.tooltip} role="tooltip">
          <span className={styles.name}>{content.name}</span>
          <span className={styles.description}>{content.description}</span>
        </span>
      )}
    </span>
  );
}
