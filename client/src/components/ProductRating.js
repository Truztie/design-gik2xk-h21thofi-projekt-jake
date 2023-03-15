import { Rating } from "@mui/material";
function ProductRating({ratings}) {
    console.log(ratings)

    return (
        <Rating name="read-only" value={ratings} readOnly />
    );
}

export default ProductRating;