
import ProductList from "../components/ProductList";
import { useLocation } from "react-router-dom";
import { Box, Grid, Paper, Typography} from "@mui/material";

function Products() {
  const location = useLocation();
  
  return (
  <ProductList pathname={location.pathname}/>
  );
}
export default Products;
