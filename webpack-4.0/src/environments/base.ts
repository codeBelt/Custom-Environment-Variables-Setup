/*
 * Base is the default environment for production.
 * Add everything here and override value in other files if needed.
 */

export default function (baseApi: string) {
  return {
    intervals: {
      logout: 60000,
    },
    api: {
      dashboard: `${baseApi}/api/v1/dashboards`,
      schedule: `${baseApi}/api/v1/schedule`,
    },
    token: {
      auth: process.env.REACT_APP_AUTH_TOKEN,
    },
    isProduction: true,
    isDevelopment: false,
  };
}
