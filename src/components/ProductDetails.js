import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

import Product from '../components/Product';
const ProductDetails = () => {
    const apiurl = "http://fakestoreapi.com/products";
    const params = useParams(); 
    const [product, setProduct] = useState({});
    useEffect( ()=> {
        fetch (`${apiurl}/${params.ProductId}`)
        .then((res)=> res.json())
        .then ((product)=> setProduct(product));
    },[params.ProductId]);
    return (
        <>
        <Product product={product} showButton={false}/>
        </>
    );
}

export default ProductDetails;