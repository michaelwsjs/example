const config = {
  VITE_APP_TITLE: import.meta.env.VITE_APP_TITLE,
  VITE_APP_ENV: import.meta.env.VITE_APP_ENV,
  VITE_APP_PORT: import.meta.env.VITE_APP_PORT,
  VITE_APP_PATH_URL: import.meta.env.VITE_APP_PATH_URL,
  VITE_APP_BASE_API_URL: import.meta.env.VITE_APP_BASE_API_URL,
  VITE_APP_BASE_API_PROXY_NAME: import.meta.env.VITE_APP_BASE_API_PROXY_NAME
};

export const IS_DEV = config.VITE_APP_ENV === "development";
export const IS_TEST = config.VITE_APP_ENV === "test";
export const IS_QA = config.VITE_APP_ENV === "qa";
export const IS_PRE = config.VITE_APP_ENV === "preview";
export const IS_PROD = config.VITE_APP_ENV === "production";

export default config;
