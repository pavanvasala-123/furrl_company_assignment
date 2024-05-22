// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ProductCard.css';

// const ProductCard = ({ product }) => {
//     // console.log(product)
    
//     const navigate = useNavigate();

//     const handleClick = () => {
//         navigate(`/product/${product.id}`);
//     };

//     return (
//         <div className="product-card" onClick={handleClick}>
//             <img src={product.images[0].src} alt={product.title} />
//             <h3>{product.title.slice(0,20)}</h3>
//             <span>
//                 <p>Rs.{product.price.value}</p> 
//                 <p>Rs.{product.price.value}</p> 
//             </span>
            
//         </div>
//     );
// };

// export default ProductCard;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.id}`);
    };

    // Assuming price might be an object like { value: 109.95, currency: 'USD' }
    // const price = typeof product.price === 'object' ? product.price.value : product.price;

    return (
        <div className="product-card" onClick={handleClick}>
                <img src={product.images[0].src} alt={product.title} />
                <h3>{product.title.slice(0,20)}</h3>
                <span>
                    <p>Rs.{product.price.value}</p> 
                    <p>Rs.{product.price.value}</p> 
                </span>
        </div>
    );
};

export default ProductCard;
