import Button from "../Elements/Button";
import {Link} from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";
import { FaStar } from "react-icons/fa";

const CardProduct = (props) => {
    const {children} = props
    return (
        <div className="flex flex-col justify-between font-primary w-[180px] md:w-[230px] border border-black rounded-xl">
            {children}
        </div>
    )
}

const Header = (props) => {
    const { image, id,} = props;
    return (
        <Link to = {`/products/${id}`}>
            <img src= {image } alt="product" className=" bg-center h-[200px]  mx-auto bg-cover p-2" />
        </Link>
    )
}


const Body = (props) => {
    const {price,name,category,rating,count} = props;
    return (
        <div className="px-5 pb-5">
            <a href="" className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-semibold tracking-tight">{category}</span>
                <span>${price}</span>
            </a>
            <p className="text-s font-semibold tracking-tight text-black">{name}</p>
            <span className="text-xs flex items-center gap-2">
                <FaStar size={15} color="#f59e0b" />
                {rating} / {count}</span>
        </div>
    )
}


const Footer = (props) => {
    const {id} = props;
    const dispatch = useDispatch()
    return (
        <div className="flex flex-col items-center px-5 pb-5">
        <Button classname="flex items-center justify-between bg-black text-sm w-full" onClick={() =>    dispatch(addToCart({id,qty:1}))}>
            <CiShoppingCart size={20} />
            Add to card
        </Button>
    </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;