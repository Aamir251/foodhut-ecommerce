import axios from 'axios';

const URL = "http://localhost:5000/menu";

export const getProducts = () => axios.get(URL);

export const getProduct = (id) => axios.get(`${URL}/${id}`)