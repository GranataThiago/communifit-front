import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const isProd = publicRuntimeConfig.PRODUCTION;
let apiUrl = publicRuntimeConfig.API_URL_DEV;
let appDomain = publicRuntimeConfig.DOMAIN_DEVELOPMENT;

if (isProd) {
    apiUrl = publicRuntimeConfig.API_URL_PROD;
    appDomain = publicRuntimeConfig.DOMAIN_PRODUCTION;
  } else {
    apiUrl = publicRuntimeConfig.API_URL_LOCAL;
    appDomain = publicRuntimeConfig.DOMAIN_LOCAL;
}

export const IS_PRODUCTION = isProd;
export const API_URL = apiUrl;
export const APP_DOMAIN = appDomain;

export const API_KEY = publicRuntimeConfig.API_KEY;

export const APP_NAME = publicRuntimeConfig.APP_NAME;