    import React from 'react'
    import './Products.css'
    import Footer from '../footer-component/Footer'
    import { products } from '../common/common'
    import { Link } from 'react-router-dom'

    function Products() {
        return (
            <>
                <div className='product-container'>
                    <h1>We have wide variety of Products to get you going</h1>
                    <h2>Please choose from below items</h2>
                    <div className='product-list'>
                        {products.map((product) => {
            const isOutOfStock = product.maxStock <= 0;
            return isOutOfStock ? (
                <div className='product-item disabled' key={product.pid}>
                    <figure className='product__item__pic-wrap' data-category={product.pid}>
                        <img className='product-item img' src={product.imgUrl} alt={product.product} />
                        <h3>{product.productCost}</h3>
                        <p>Out of Stock</p>
                    </figure>
                </div>
            ) : (
                <Link to={`product/${product.pid}`} className='product-item' key={product.pid}>
                    <figure className='product__item__pic-wrap' data-category={product.pid}>
                        <img className='product-item img' src={product.imgUrl} alt={product.product} />
                        <h3>{product.productCost}</h3>
                        <p>
                            {product.maxStock <= 50
                                ? `Only ${product.maxStock} left`
                                : `Available ${product.maxStock} items`
                            }
                        </p>
                    </figure>
                </Link>
            );
                        })};
                    </div>
                </div>
                <Footer
                    description={'We are here to help you with your adventure needs. Contact us for more information. 000-888-666-444'}
                />
            </>
        )
    }

    export default Products
