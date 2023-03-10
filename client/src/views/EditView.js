import Welcome from "./Welcome";
import { useParams } from "react-router-dom";
import { getOne } from "../models/ProductModel";
import { useState, useEffect } from "react";
import EditProduct from "../components/EditProduct";

function EditView() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState({});
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    getOne(productId).then((product) => setProduct(product));
    setRerender(false);
  }, [productId, rerender]);

  return (
    <>
      <EditProduct product={product} setRerender={setRerender} />
    </>
  );
}

export default EditView;
