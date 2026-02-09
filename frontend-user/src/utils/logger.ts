type LogLevel = 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: unknown;
}

const LOG_KEY = 'gamehelper_logs';
const MAX_LOGS = 200;

function getTimestamp(): string {
  return new Date().toISOString();
}

function persist(entry: LogEntry) {
  try {
    const raw = localStorage.getItem(LOG_KEY);
    const logs: LogEntry[] = raw ? JSON.parse(raw) : [];
    logs.push(entry);
    if (logs.length > MAX_LOGS) logs.splice(0, logs.length - MAX_LOGS);
    localStorage.setItem(LOG_KEY, JSON.stringify(logs));
  } catch {
    // storage full or unavailable — silently ignore
  }
}

const logger = {
  info(message: string, data?: unknown) {
    const entry: LogEntry = { level: 'info', message, timestamp: getTimestamp(), data };
    console.log(`[INFO] ${entry.timestamp} ${message}`, data ?? '');
    persist(entry);
  },

  warn(message: string, data?: unknown) {
    const entry: LogEntry = { level: 'warn', message, timestamp: getTimestamp(), data };
    console.warn(`[WARN] ${entry.timestamp} ${message}`, data ?? '');
    persist(entry);
  },

  error(message: string, data?: unknown) {
    const entry: LogEntry = { level: 'error', message, timestamp: getTimestamp(), data };
    console.error(`[ERROR] ${entry.timestamp} ${message}`, data ?? '');
    persist(entry);
  },

  getLogs(): LogEntry[] {
    try {
      const raw = localStorage.getItem(LOG_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  clear() {
    localStorage.removeItem(LOG_KEY);
  },
};

export { logger };
export default logger;
export type { LogEntry };
