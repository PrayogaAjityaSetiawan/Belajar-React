import { useEffect, useState } from "react";
import useLogin from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = ({ keranjang, setKeranjang }) => {
  const cart = useSelector((state) => state.cart.data);
  const [totalCart, setTotalCart] = useState(0);
  const username = useLogin();

  // Untuk Menghapus data didalam Local Storage dan Keluar daari halaman Product/Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // Menambah Jumlah Barang Pada Keranjang
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  return (
    <div>
      {/* Navbar */}
      <nav className="w-full fixed top-0 z-[10]">
        <div className="w-full p-5 bg-white border-b shadow-sm border-black flex justify-between items-center font-bold  ">
          <span className="font-bold uppercase">Aybwarehose</span>
            <div className="relative">
              {/* Shopping Cart Icon */}
              <div className="flex items-center gap-3">
                <FaShoppingCart size={25} onClick={() => setKeranjang(!keranjang)} />
                <div>
                  {/* Badge showing the number of items in the cart */}
                  <div className="absolute top-[-10px] left-[15px] h-6 w-6 flex items-center justify-center bg-red-700 border border-white rounded-full">
                    <p className="text-xs text-white">{totalCart}</p>
                  </div>
                </div>
                <button></button>
                <div className="hidden md:block">
                <span>{username}</span>
                <Button classname="bg-black text-white" onClick={handleLogout}>
                  Logout
                </Button>
          </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Akhir Navbar */}
    </div>
  );
};

export default Navbar;
