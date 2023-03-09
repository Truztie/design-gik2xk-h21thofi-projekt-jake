import { Box, Card, Typography, CardHeader, CardMedia, CardActions, Button, Rating } from '@mui/material';
import { borderRadius } from '@mui/system';
import { Link } from 'react-router-dom';


function ProductItemSmall({ product }) {
  return (
    <Card elevation={10} sx={{height: 350, marginTop: "1rem", marginX: "1rem"}}>
        <Link to={`/products/${product.id}`}>
            <CardHeader 
                title={
                    <Typography variant="h5" component="h3" sx={{
                        fontFamily: "Happy Monkey, cursive",
                        fontWeight: "bold"
                    }}>
                    {product.title}
                    </Typography>
                }
                />
            <CardMedia
                component="img"
                image={product.imageUrl || `${process.env.PUBLIC_URL}/images/placeholder.png`} 
                alt={`bild till ${product.title}`}
                height="200"
            >
            </CardMedia>
        </Link>
        <CardActions sx={{display: 'flex', alignItems: 'center'}} >
                <Button
                variant="contained"
                size="small"
                sx={{
                    fontFamily: "Happy Monkey, cursive",
                    fontWeight: "bold",
                    background: "#efb8eb",
                    ":hover": {
                    background: "#d66dee",
                    },
                }}
                >Add to cart
                </Button>
                <Rating name="read-only" value={product.ratings} readOnly />

        </CardActions>
    </Card>
  );
}

export default ProductItemSmall;