// import React, { useState, useEffect, useRef, useCallback } from "react";
// import ProductCard from "../ProductCard/ProductCard";
// import "./ProductGrid.css";

// const ProductGrid = () => {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const observer = useRef();

//   const fetchProducts = useCallback(async () => {
//     setLoading(true);
//     const response = await fetch(
//       "https://api.furrl.in/api/v2/listing/getListingProducts",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           input: {
//             page: page,
//             pageSize: 10,
//             filters: [],
//             id: "#HomeHunts",
//             entity: "vibe",
//           },
//         }),
//       }
//     );

//     const data = await response.json();
//     const products = data.data.getListingProducts.products;
//     // console.log(products);
//     setProducts((prevProducts) => [...prevProducts, ...products]);
//     setLoading(false);
//   }, [page]);

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   const lastProductElementRef = useCallback(
//     (node) => {
//       if (loading) return;
//       if (observer.current) observer.current.disconnect();
//       observer.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting) {
//           setPage((prevPage) => prevPage + 1);
//         }
//       });
//       if (node) observer.current.observe(node);
//     },
//     [loading]
//   );

//   return (
//     <div className="product-grid">
//       {products.map((product, index) => {
//         if (index === products.length - 1) {
//           return (
//             <div ref={lastProductElementRef} key={product.id}>
//               <ProductCard product={product} />
//             </div>
//           );
//         } else {
//           return <ProductCard key={product.id} product={product} />;
//         }
//       })}
//       {loading && <div className="loading">Loading...</div>}
//     </div>
//   );
// };

// export default ProductGrid;
import React, { useState, useEffect, useRef, useCallback } from 'react';
import ProductCard from "../ProductCard/ProductCard";
import './ProductGrid.css';

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const observer = useRef();

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        const response = await fetch('https://api.furrl.in/api/v2/listing/getListingProducts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                input: {
                    page: page,
                    pageSize: 10,
                    filters: [],
                    id: "#HomeHunts",
                    entity: "vibe"
                }
            })
        });

        const data = await response.json();
        const products = data.data.getListingProducts.products;
        setProducts(prevProducts => [...prevProducts, ...products]);
        setLoading(false);
    }, [page]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const lastProductElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPage(prevPage => prevPage + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [loading]);

    return (
        <div className="product-grid">
            {products.map((product, index) => {
                const productKey = product.id || `${product.id}-${index}`;
                if (index === products.length - 1) {
                    return <div ref={lastProductElementRef} key={productKey} className="product-grid-item"><ProductCard product={product} /></div>;
                } else {
                    return <div key={productKey} className="product-grid-item"><ProductCard product={product} /></div>;
                }
            })}
            {loading && <div className="loading">Loading...</div>}
        </div>
    );
};

export default ProductGrid;
