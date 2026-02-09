import { useState, useCallback } from 'react';
import styles from './Toast.module.css';

export function useToast() {
  const [message, setMessage] = useState<string | null>(null);
  const [key, setKey] = useState(0);

  const show = useCallback((msg: string) => {
    setKey((k) => k + 1);
    setMessage(msg);
    setTimeout(() => setMessage(null), 2000);
  }, []);

  return { message, key, show };
}

export default function Toast({ message, id }: { message: string; id: number }) {
  return (
    <div className={styles.toast} key={id}>
      {message}
    </div>
  );
}
