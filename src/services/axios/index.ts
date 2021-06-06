import { ContextNookiesFunctions, handleAxiosRequest } from './configuration'

const backendBaseURL = process.env.BASE_URL_SERVER
const frontendBaseURL = process.env.BASE_URL_API_ROUTES

const backendAxios = (ctx?: ContextNookiesFunctions) => handleAxiosRequest(ctx, backendBaseURL)
const frontendAxios = () => handleAxiosRequest(undefined, frontendBaseURL)

export { backendAxios, frontendAxios }
