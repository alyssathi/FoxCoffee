import React from 'react'
import { Grid } from '@material-ui/core'
import ProductArr from './ProductArr'
import ProductCard from './ProductCard'

export default function ProductList() {
    return (
        <Grid container spacing={2}>
            {ProductArr.map((x) => {
                return <Grid item xs ={12} md= {3} >
                    <ProductCard {...x} />
                </Grid>
            })}
        </Grid>
    )
}
