import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    // const [error,setError] = React.useState(false);

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getProductDetails()
    }, [])

    const getProductDetails = async () => {
        let result = await fetch(`http://127.0.0.1:8000/api/product/${params.id}` )
        result = await result.json()
        console.log(result)
        setName(result.name);
        setPrice(result.price);
        setCompany(result.company);
        setCategory(result.category);
        // console.warn(params)
    }
    

    const updateProduct = async () => {

        // const userID = JSON.parse(localStorage.getItem('user')).user._id;
        // console.warn(userID)
        let result = await fetch(`http://127.0.0.1:8000/api/product/${params.id}`, {
            method: "put",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        // console.log(result)
        if(result) {
            console.log(name, price, category, company)
            navigate('/')
        }
    }

    return (
        <div className='product'>
            <h1>Update Product</h1>
            <input type="text" placeholder='Enter product name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }}
            />
            {/* {error && !name && <span className='invalid-input'>Enter valid name</span>} */}

            <input type="text" placeholder='Enter product price' className='inputBox'
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />
            {/* {error && !price && <span className='invalid-input'>Enter valid price</span>} */}

            <input type="text" placeholder='Enter product category' className='inputBox'
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />
            {/* {error && !category && <span className='invalid-input'>Enter valid category</span>}  */}

            <input type="text" placeholder='Enter product company' className='inputBox'
                value={company} onChange={(e) => { setCompany(e.target.value) }}
            />
            {/* {error && !company && <span className='invalid-input'>Enter valid company</span>} */}


            <button className='appButton' onClick={()=>{updateProduct()}}>Update Product</button>
        </div>
    )
}

export default UpdateProduct;