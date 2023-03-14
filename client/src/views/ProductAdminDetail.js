import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getOne } from "../models/ProductModel";
import ProductItemLargeAdmin from "../components/ProductItemLargeAdmin";

function ProductAdminDetail() {
  //Ta emot ett id för att hämta ett inlägg Products/:id

  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState({});

  useEffect(() => {
    getOne(productId).then((product) => setProduct(product));
  }, [productId]);

  return (
    <>
      <ProductItemLargeAdmin product={product} />
    </>
  );
}

export default ProductAdminDetail;