export const getUser = () => {
    const user = localStorage.getItem('user');
    const parsedUser = JSON.parse(user)
    return parsedUser
}

export const setUser = (user) => {
   return localStorage.setItem("user", JSON.stringify(user))
}

export const removeUser = () => {
    return localStorage.removeItem("user")
}