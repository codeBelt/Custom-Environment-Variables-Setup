declare module '*.svg';

declare module 'environment' {
  const value: {
    intervals: {
      dashboard: number;
    },
    api: {
      dashboard: string;
      schedule: string;
      // Development specific
      error200?: string;
      error500?: string;
    },
    token: {
      auth: string;
    },
    isDevelopment: boolean,
    isProduction: boolean,
    isTesting?: boolean,
  };

  export default value;
}
