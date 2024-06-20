import Button from "../Elements/Button";
import {Link} from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
const CardProduct = (props) => {
    const {children} = props
    return (
        <div className="flex flex-col justify-between font-primary  w-[250px] border rounded-xl">
            {children}
        </div>
    )
}


const Header = (props) => {
    const { image, id } = props;
    return (
        <Link to = {`/products/${id}`}>
            <img src= {image} alt="product" className=" bg-center h-[200px]  mx-auto bg-cover " />
        </Link>
    )
}


const Body = (props) => {
    const {price,name,category} = props;
    return (
        <div className="px-5 pb-5">
            <a href="" className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-semibold tracking-tight">{category}</span>
                <span>${price}</span>
            </a>
            <p className="text-s font-semibold tracking-tight text-black">{name}</p>
        </div>
    )
}


const Footer = (props) => {
    const {handleaddToCard,id} = props;
    return (
        <div className="flex flex-col items-center px-5 pb-5">
        <Button classname="flex items-center justify-between bg-[#321C77] text-sm w-full" onClick={() => handleaddToCard(id)}>
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