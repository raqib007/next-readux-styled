const login = () => {
    return {
        type: 'LOGIN'
    }
}

const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

module.exports = {
    login:login,
    logout:logout
}
