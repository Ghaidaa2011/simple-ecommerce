import {Link} from 'react-router-dom';

const Product = (props) => {
    const {product, showButton} = props;
    return (
        <>
        <div className="card my-3">
            <img src={product.image} className="card-img-top rounded mx-auto cardy p-3" alt={product.title}/>
            <div className="card-body text-center">
                <h4 className="card-title">{product.title}</h4>
                <div className="talk overflow-hidden">
                <p className="card-text overflow-hidden">{product.description}</p>
                </div>
                <p>Price : $ {product.price}</p>
                {showButton && <Link to={`/product/${product.id}`} className="btn btn-primary pinky bottom">Detials</Link>}
            </div>
        </div>
        </>
    );
}

export default Product;