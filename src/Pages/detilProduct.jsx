import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetilProduct } from "../services/product.services";

const DetilProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetilProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <>
      <div className="w-full bg-slate-500">
        <h1>Detil Product</h1>
      </div>
<div className="h-[100vh] w-full items-center">
  {Object.keys(product).length > 0 && (
    <div className="flex items-center">
      <div className="w-1/2">
        <img className=" bg-center h-[500px]  mx-auto bg-cover" src={product.image} alt="" />
      </div>
      <div className="w-1/2">
          <div>
            <div>
              <h1>{product.title}</h1>
            </div>
            <div>
              <p>{product.description}</p>
            </div>
            <div>
              <p>{product.price}</p>
            </div>
          </div>
      </div>
    </div>
  )}
</div>
    </>
  );
};

export default DetilProductPage;
