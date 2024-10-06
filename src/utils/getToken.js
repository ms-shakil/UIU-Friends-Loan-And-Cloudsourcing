export const getToken = () => {
    const token = localStorage.getItem('authToken');
    return token
}

export const setToken = (token) => {
   return localStorage.setItem("authToken", token)
}

export const removeToken = () => {
    return localStorage.removeItem("authToken")
}