import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://api.furrl.in/api/v2/listing/getListingProducts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    input: {
                        page: 1,
                        pageSize: 10,
                        filters: [],
                        id: id,
                        entity: "vibe"
                    }
                })
            });

            const data = await response.json();
            const products = data.data.getListingProducts.products
            setProduct(products.find(p => p.id === id));
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-details">
            <img src={product.image} alt={product.title} />
            <div className="details">
                <h2>{product.title}</h2>
                <p>Rs. {product.price}</p>
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;
