import environment, { Environment } from './base';

const baseApi = '';
const env = environment(baseApi);

const testEnv: Environment = {
  ...env,
  // override anything that gets added from base.
  isProduction: false,
  isDevelopment: true,
  isTesting: true,
};

export default testEnv;
