import axios from 'axios';

const URL = "http://localhost:5000/menu";

export const getProducts = () => axios.get(URL);

export const getProduct = (id) => axios.get(`${URL}/${id}`)

export const addToCart = (id, qty) => axios.get(`${URL}/${id}`)

export const login = (email, password, config) => axios.post('http://localhost:5000/users/login',{ email, password }, config)