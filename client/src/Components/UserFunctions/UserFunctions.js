import axios from 'axios';

export const register = newUser => {
    return axios
        .post('users/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            user_name: newUser.user_name,
            user_password: newUser.user_password
        })
        .then(res => {
            console.log("Registered")
        })
}

export const login = user => {
    return axios
        .post('http://localhost:4000/users/login', {
            user_name: user.user_name,
            user_password: user.user_password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}
