import React from 'react'
import ProductList from './ProductList'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    section: {
      margin: '100px 20px 0 20px'
    }
  })

export default function Shop() {

    const classes = useStyles();

    return (
        <div id = "shop" className = {classes.section}>
            <ProductList />
        </div>
    )
}
