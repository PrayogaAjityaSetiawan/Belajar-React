import { useState, useEffect } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getCategories, getProducts } from "../services/product.services";
import useLogin from "../hooks/useLogin";
import hero from "../assets/bg-1.jpg"
import Footer from "./footer";
import Cart from "../components/Fragments/Cart";
import Navbar from "../components/Layouts/Navbar";
import SkeletonCard from "../components/Fragments/SkeletonCard";
import animate from "../assets/empty.gif"
import { CiSearch } from "react-icons/ci";

const ProductPage = () => {
    // UseState 
    const [keranjang, setKeranjang] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState("");
    const [filterCategory, setFilterCategory] = useState([]);
    const [search, setSearch] = useState("");
    const [openSearch, setOpenSearch] = useState(false);
    useLogin();


    // Untuk Mengambil data produk dari API dan diset ke card 
    useEffect(() => {
        getProducts(data => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    // Untuk Mengambil data Cate dari API dan diset ke card 
    useEffect(() => {
        getCategories(data => {
            setFilterCategory(data);
            setLoading(false);
        });
    }, []);
    

    // search dan filter produk
    const filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(search.toLowerCase()) &&
        (category ? product.category === category : true);
    })
    
    return (
        <div className="font-primary">
            <Navbar keranjang={keranjang} setKeranjang={setKeranjang} />
            <img
                className="w-full mt-[100px] h-[500px] bg-cover object-cover bg-center mx-auto "
                src={hero} alt="banner"
            />

            {/* Search */}
            <div className="block md:hidden relative">
                <div onClick={() => setOpenSearch(!openSearch)} className="bg-black inline-block fixed top-[90px] left-0 p-2 rounded-tr-lg rounded-br-lg">
                    <CiSearch size={30} className="text-white" />
                </div>
            </div>
            {/* Akhir Search */}
            {/* Card Product */}
            {openSearch && (
                    <div className=" fixed top-[140px] left-0 w-[60%] z-50 ">
                    <div className="bg-white border rounded-tr-lg rounded-br-lg p-5 shadow-lg">
                        <h1 className="font-bold">Filter Product</h1>
                        <input
                            className="w-full py-2 rounded-lg px-3 border border-black"
                            type="text"
                            placeholder="Enter your items..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div className="flex flex-col gap-2 mt-2">
                        {filterCategory.map((category, index) => (
                                <label key={index}>
                                    <input
                                        type="checkbox"
                                        className="accent-pink-500 mr-2"
                                        name="category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    /> {category}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            ) }
            <div className=" flex gap-5 lg:mx-10 mt-5" >
                <div className="w-[20%] hidden lg:block">
                    <div className="bg-white border border-gray-300 rounded-lg p-5">
                        <h1 className="font-bold">Filter Product</h1>
                        <input
                            className="w-full py-2 rounded-lg px-3 border border-black"
                            type="text"
                            placeholder="Enter your items..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div className="flex flex-col gap-2 mt-2">
                        {filterCategory.map((category, index) => (
                                <label key={index}>
                                    <input
                                        type="checkbox"
                                        className="accent-pink-500 mr-2"
                                        name="category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    /> {category}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mx-auto md:w-[80%]">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
                        {loading ? (
                            Array.from({ length: 8 }).map((_, index) => (
                                <SkeletonCard key={index} />
                            ))
                        ) : (
                            filteredProducts.length > 0 ? filteredProducts.map(product => (
                                <CardProduct key={product.id}>
                                    <CardProduct.Header image={product.image} id={product.id} />
                                    <CardProduct.Body name={product.title.substring(0, 20)} price={product.price} category={product.category} rating={product.rating.rate} count={product.rating.count} />
                                    <CardProduct.Footer id={product.id} />
                                </CardProduct>
                            )) : <div className="  mx-auto bg-gray-900 flex items-center justify-center">
                                    <img className="text-" src={animate} alt="" />
                                </div>
                        )}
                    </div>
                    {/* Keranjang */}
                    {keranjang && (
                        <div className="fixed z-[999] bg-white shadow-2xl h-[100vh] md:w-[50%] p-5 top-0 right-0">
                            <Cart products={products} setKeranjang={setKeranjang} />
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ProductPage;
