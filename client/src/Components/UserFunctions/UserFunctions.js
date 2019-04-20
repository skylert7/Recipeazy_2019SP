import axios from 'axios';

export const register = newUser => {
    return axios
        .post('http://ec2-18-222-255-36.us-east-2.compute.amazonaws.com:4000/users/register', {
            user_id: newUser.user_id,
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            user_name: newUser.user_name,
            user_password: newUser.user_password
        })
        .then(res => {
            console.log(res)
        })
}

export const login = user => {
    return axios
        .post('http://ec2-18-222-255-36.us-east-2.compute.amazonaws.com:4000/users/login', {
            user_name: user.user_name,
            user_password: user.user_password
        })
        .then(res => {
            localStorage.setItem('userToken', res.data)
            return res.data
        })
        .catch(err => {
          if(err.response.status === 400){
            console.log('User or Password is not valid.')
          } else {
            console.log(err)
          }
        })
}
