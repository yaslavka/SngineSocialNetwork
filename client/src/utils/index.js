export const getAccessToken = () => {
    try {
        const accessToken = localStorage.getItem('access_token')
        if (accessToken === null) {
            return undefined
        }
        return accessToken
    } catch (error) {
        return undefined
    }
}

export const setAccessToken = (accessToken) => {
    localStorage.setItem('access_token', accessToken)
}
