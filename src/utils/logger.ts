type LogLevel = 'info' | 'warn' | 'error' | 'debug';

const log = (level: LogLevel, message: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    // Log only in development mode
    if (data) {
      console[level](`[${level.toUpperCase()}] ${message}`, data);
    } else {
      console[level](`[${level.toUpperCase()}] ${message}`);
    }
  }
};

export const logger = {
  info: (message: string, data?: any) => log('info', message, data),
  warn: (message: string, data?: any) => log('warn', message, data),
  error: (message: string, data?: any) => log('error', message, data),
  debug: (message: string, data?: any) => log('debug', message, data)
};
