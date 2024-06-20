import axios from "axios";

export const getProducts = (callback) => {
    axios.get("https://fakestoreapi.com/products")
    .then(res =>{callback(res.data)})
    .catch(err => {console.log(err)})
}
export const getDetilProduct = (id, callback) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res =>{callback(res.data)})
    .catch(err => {console.log(err)})
}

export const getCategories = (callback) => {
    axios.get('https://fakestoreapi.com/products/categories')
    .then(res => callback(res.data))
    .catch(err => {console.log(err)})
}

export const getProductsByCategory = (category, callback) => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then(res =>{callback(res.data)})
    .catch(err => {console.log(err)})
}