import React, { useEffect, useState } from 'react';
import './product.css'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        try {
            getProducts();
        } catch (error) {
            console.error(error);
        }
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://127.0.0.1:8000/api/products');
        result = await result.json();
        setProducts(result);
    }
    console.log(products)

    const deleteProduct = async (id) => {
        let result = await fetch(`http://127.0.0.1:8000/api/product/${id}`, {
            method: 'Delete'
        });
        result = await result.json()
        if(result){
            alert('deleted')
        }
    }
    // const updateProduct = async (id) => {
    //     let result = await fetch(`http://127.0.0.1:8000/api/product/${id}`, {
    //         method: 'Update'
    //     });
    //     result = await result.json()
    //     if(result){
    //         console.log('Data Updated')
    //     }
    // }

    return (
        <div className="product-list">
            <h3>Product List</h3>
            <div className='products'>
                <ul>
                    <li>S. No.</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Category</li>
                    <li>Delete</li>
                    <li>Update</li>
                </ul>
                
                {products.map((item,index) => (
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li><button onClick={() => {deleteProduct(item._id)}}>Delete</button></li>
                        <li><Link to={`/update/${item._id}`}>Update</Link></li>
                    </ul>
                ))
                }
            </div>
        </div>
    )
}

export default ProductList;