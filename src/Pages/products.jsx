import { useState, useEffect } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { getCategories, getProducts, getProductsByCategory } from "../services/product.services";
import  useLogin from "../hooks/useLogin";
import { FaShoppingCart } from "react-icons/fa";
import banner from "../../public/images/banner.png"
import { data } from "autoprefixer";
import Footer from "./footer";
import { Link } from "react-router-dom";


const ProductPage = () => {
    // UseState
    const [cart, setCard] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [keranjang, setKeranjang] = useState(false);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState([]);
    const [filter, setFilter] = useState([]);
    const username = useLogin();


    useEffect (() => {
        setCard(JSON.parse(localStorage.getItem('cart')) || []);
    },[]);

    // Untuk Mengambil data dari  API dan diset ke card 
    useEffect (() => {
        getProducts(data => setProducts(data));
    },[]);

    useEffect (() => {
        getCategories(data => setCategory(data));
    },[]);

    useEffect (() => {
        getProductsByCategory(category, data => setFilter(data));
    },[]);



    // Untuk Membuat Total Price dan disimpan didalam Locale Storage
    useEffect (() => {
        if(products.length > 0 && cart.length > 0){
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0)
            setTotalPrice(sum)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart])


    // Untuk Menghapus data didalam Local Storage dan Keluar daari halaman Product/Logout
    const handleLogout = () =>{
        localStorage.removeItem('token')
        window.location.href = "/login"
    }

    const sethandleCard = (id) => {
        if(cart.find(item => item.id === id)){
            setCard(cart.map(item => item.id === id ? {...item, qty :item.qty + 1} : item))
        }else {
            setCard([...cart,{id,qty: 1}])
        }
    }

    // buat Search produk
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    //  untuk keranjang 
    const totalItemsInCart = cart.reduce((acc, item) => acc + item.qty, 0);

    


    return (
        <>
        {/* Navbar */}
        <nav className="w-full fixed top-0">
            <div className="w-[80%] mx-auto p-5 rounded-b-lg bg-[#5B289A] flex justify-between items-center text-white font-bold  ">
                <span className="font-bold uppercase">Aybwarehouse</span>
                <div className="flex items-center gap-3">
                <div className="relative">
                {/* Shopping Cart Icon */}
                <FaShoppingCart 
                    size={25}  
                    onClick={() => setKeranjang(!keranjang)}
                />
                {/* Badge showing the number of items in the cart */}
                <div className="absolute top-[-10px] left-[15px] h-6 w-6 flex items-center justify-center bg-red-700 border border-white rounded-full"> 
                    <p className="text-xs">{totalItemsInCart}</p>
                </div>
            </div>
                {username}
                <Button classname = "bg-black text-white" onClick={handleLogout}>Logout</Button>
                </div>
            </div>
        </nav>
        {/* Akhir Navbar */}
        <img 
        className="w-[80%] mt-[100px] mx-auto rounded-lg"
        src={banner} alt="banner" />
        
        
        {/* All Product */}
        <div className="w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center my-8 ">
    <h1 className="text-3xl font-primary font-bold mb-5 lg:mb-0">All Products</h1>
    {category.length > 0 && (
                    <div className="flex gap-3">
                        {category.map((item, index) => (
                            <button onClick={() => filterByCategory(item)} key={index} className="bg-[#5B289A] py-2 px-4 rounded-lg text-white">{item}</button>
                        ))}
                    </div>
                )}
    <input
        className="w-full lg:w-[250px] py-2 rounded-lg px-3 border border-black "
        type="text"
        placeholder="Enter your items..."
        onChange={(e) => setSearch(e.target.value)}
    />
</div>


        <div className="w-[80%] mx-auto flex gap-3 justify-center">
            <div className=" grid lg:grid-cols-4 grid-cols-2 lg:gap-3 gap-1">
                {/* Contoh Rendering List */}
                {filteredProducts.length > 0  && filteredProducts.map(product => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} id={product.id} />
                            <CardProduct.Body name={product.title.substring(0, 20)} price={product.price} category={product.category}>
                            </CardProduct.Body>
                            <CardProduct.Footer id={product.id}   handleaddToCard={sethandleCard} />
                        </CardProduct>
                    ))}
            </div>
            {/* Keranjang */}
           {keranjang && <div className="fixed bg-white shadow-2xl h-[100vh] p-5  top-0 right-0">
                <table className="text-left table-fixed border-separate border-spacing-x-1 ">
                    <thead>
                        <tr > 
                            <th></th>
                            <th >Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs">
                        {products.length > 0 && cart.map((item) => {
                            const product = products.find((product) => product.id === item.id);
                                return (
                                    <tr className="mb-5" key={item.id}>
                                        <td className=""><img className="w-5" src={product.image} alt="" /></td>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td className="text-center">{item.qty}</td>
                                        <td>{(item.qty * product.price)}</td>
                                    </tr>
                                    
                                )
                            })
                        }
                        {/* <tr className="font-bold text-xs">
                            <td colSpan={4}>Total Price</td>
                            <td>{totalPrice.toLocaleString("id-ID", { style : "currency", currency : "IDR"})}</td>
                        </tr> */}
                    </tbody>
                </table>
            </div> }
        </div>
        <Footer/>
        </>
    )
}


export default ProductPage;