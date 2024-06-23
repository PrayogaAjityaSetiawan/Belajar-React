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
    axios.get("https://fakestoreapi.com/products/categories")
    .then(res =>{callback(res.data)})
    .catch(err => {console.log(err)})
}


// const BASE_URL = "https://fakestoreapi.com/products";

// export const getProducts = async (callback) => {
//     try {
//         const res = await axios.get(BASE_URL);
//         callback(res.data);
//     } catch (err) {
//         console.error("Error fetching products:", err);
//     }
// }

// export const getDetilProduct = async (id, callback) => {
//     try {
//         const res = await axios.get(`${BASE_URL}/${id}`);
//         callback(res.data);
//     } catch (err) {
//         console.error(`Error fetching product with ID ${id}:`, err);
//     }
// }

