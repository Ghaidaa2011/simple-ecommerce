import Product from "./Product";
import {useState, useEffect} from "react";

const ProductList = () => {
    const api_url = "http://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const getProducts = ()=> {
        fetch(api_url) 
        .then( (res)=> res.json())
        .then( (data)=> setProducts(data));
    };
    const getCategories = ()=> {
        fetch(`${api_url}/categories`) 
        .then( (res)=> res.json())
        .then( (data)=> setCategories(data));
    };
    const getProductInCategory = (categoryName)=> {
        fetch(`${api_url}/category/${categoryName}`)
        .then( (res)=> res.json())
        .then( (data)=> setProducts(data));
    };
    useEffect ( () => {
        getProducts();
        getCategories();
    },[]);
    return (
        <>
            
            <div className="container">
                <h1 className="fw-bold text-center py-5">Our Products</h1>
                <div className="buttons d-flex justify-content-center pb-5">
                <button className="btn btn-info pinky text-white m-1"
                onClick ={ ()=> {
                    getProducts();
                }}>
                    All
                </button>
                {categories.map( (categories)=> {
                    return <button key={categories} 
                    className="btn btn-info pinky text-white m-1" 
                    onClick = { ()=> {getProductInCategory(categories);}}>
                        {categories}</button>
                })}
                </div>
                <div className="row">
                    {products.map( (product) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                                <Product product={product} showButton= {true} />
                            </div>);
                    })}
                </div>
            </div>
        </>
    );
}

export default ProductList;