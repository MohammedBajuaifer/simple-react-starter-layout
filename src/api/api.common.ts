import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken')
    const configReq = config
    if (configReq.headers) {
        configReq.headers.Authorization = token ? `Bearer ${token}` : ''
        return configReq
    }
    return configReq
})

// All request will wait 2 seconds before timeout
api.defaults.timeout = 100000

api.interceptors.response.use(
    function success(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return {
            ...response,
        }
    },
    function fail(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        return Promise.reject(error)
    }
)

export default api

export const getRequest = async (URL: string) => {
    const response = await api.get(`${URL}`)
    return response
}

export const deleteRequest = async (URL: string, id: number | string) => {
    const response = await api.delete(
        `${URL}`.concat(id.toString().concat('/'))
    )
    return response
}

export const postRequest = async <T>(
    URL: string,
    data: T,
    config?: AxiosRequestConfig<T> | undefined
) => {
    const response = await api.post(`${URL}`, data, config)
    return response
}

export const putRequest = async <T>(URL: string, data: T) => {
    const response = await api.put(`${URL}`, data)
    return response
}
