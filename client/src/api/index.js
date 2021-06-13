import axios from 'axios';

const URL = "http://localhost:5000/menu";

export const getProducts = () => axios.get(URL);

export const getProduct = (id) => axios.get(`${URL}/${id}`)

export const addToCart = (id, qty) => axios.get(`${URL}/${id}`)

export const login = (email, password, config) => axios.post('http://localhost:5000/users/login',{ email, password }, config)

export const register = (name, email, password, config) => axios.post('http://localhost:5000/users',{name, email, password }, config)

export const getUserDetails = (id, config) => axios.get(`http://localhost:5000/users/${id}`, config)

export const updateUserProfile = (user, config) => axios.put(`http://localhost:5000/users/profile`, user, config)

export const createOrder = (order, config) => axios.post(`http://localhost:5000/orders`, order, config)

export const getOrderDetails = (orderId, config) => axios.get(`http://localhost:5000/orders/${orderId}`, config)

export const payOrder = (orderId, paymentResult, config) => axios.put(`http://localhost:5000/orders/${orderId}/pay`, paymentResult, config)

export const getClientId = () => axios.get("http://localhost:5000/config/paypal")

export const myAllOrders = (config) => axios.get("http://localhost:5000/orders/myorders", config)