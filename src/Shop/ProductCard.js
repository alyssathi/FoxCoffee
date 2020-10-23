import React from 'react';
import { Button, Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core'

export default function ProductCard({ productName, price, img}) {
    return (
        <Card variant = "outlined">
            <CardMedia 
            component='img'
            height= 'auto'
            image= {img}
            title= {productName} />
            <CardContent item>
                <Typography>
                    {productName}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography>
                    {price}
                </Typography>
            </CardContent>
            <Grid item container>
                <Grid item>
                    <Button>View Product</Button>
                </Grid>
                <Grid item>
                    <Button>Add to Cart</Button>
                </Grid>
            </Grid>
        </Card>
    )
}
