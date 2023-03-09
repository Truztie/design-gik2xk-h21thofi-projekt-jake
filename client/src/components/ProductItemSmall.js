import { Box, Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';


function ProductItemSmall({ product }) {
  return (

    <Box sx={{marginBottom: "1rem"}}>
      <Card elevation={0}>
        <CardHeader 
          title={
            <Typography variant="h5" component="h3">
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </Typography>
          }
          subheader={`Skrivet: ${product.createdAt}`} 
          />
        <CardMedia
          component="img"
          image={product.imageUrl || `${process.env.PUBLIC_URL}/images/placeholder.png`} 
          alt={`bild till ${product.title}`}
          sx={{width: 200}}>
          
        </CardMedia>
      </Card>
    </Box>
  );
}

export default ProductItemSmall;