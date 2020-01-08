/*
 * Base is the default environment for production.
 * Add everything here and override value in other files if needed.
 * https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
 */
export default function baseEnv(baseApi: string) {
  return {
    intervals: {
      logout: 60000,
    },
    api: {
      dashboard: `${baseApi}/api/v1/dashboards`,
      schedule: `${baseApi}/api/v1/schedule`,
      error200: ``, // only used in development for this example code
      error500: ``, // only used in development for this example code
    },
    token: {
      auth: process.env.REACT_APP_AUTH_TOKEN,
    },
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
}

export type Environment = ReturnType<typeof baseEnv>;
