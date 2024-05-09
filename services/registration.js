const { default: axios } = require('axios');
const { jwtDecode } = require('jwt-decode');

const registration = async (name, email, password) => {
    const {data} = await axios.post('https://api.flowers-pro-vp.ru/api/user/registration', {name, email, password, role: 'USER'})
    return jwtDecode(data.token)
}

const login = async (email, password) => {
    const {data} = await axios.post('https://api.flowers-pro-vp.ru/api/user/login', {email, password})
    return jwtDecode(data.token)
}

const fetchOrdersPersonal = async (userId) => {
    const {data} = await axios.get('https://api.flowers-pro-vp.ru/api/order/personal',{params: {
        'userId': userId
    }})
    return data
}
module.exports = {
    registration,
    login, 
    fetchOrdersPersonal
}