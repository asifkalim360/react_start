// import React, {useEffect, useState} from 'react'
import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../redux/CartSlice' 
import { fetchProducts, STATUSES } from '../redux/store/ProductSlice'

const Home = () => {
    // const [products, setProducts] = useState([])
    const {data:products, status} = useSelector((state)=>state.Product)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    // without using Redux Thunk
    // useEffect(()=>{
    //     const fetchProducts = async() => {           // function declare and defining.
    //         const response = await fetch("https://fakestoreapi.com/products")
    //         const data = await response.json();
    //         setProducts(data)
    //     }
    //     fetchProducts();        // function callling
    // },[])

    const handleAdd = (prod) => {
        dispatch(add(prod))
    }

    if(status === STATUSES.Loading)
    {
        return <h2 style={{fontWeight:"bolder"}}>Loading...</h2>
    }

    return (
    <div className='productsWrapper'>
        {
            products.map((prod) => (
                <div className='card' key={prod.id}>
                    <img src={prod.image} alt='img'/>
                    <h4>{prod.title}</h4>
                    <h5>{prod.price}</h5>
                    <button className='btn' onClick={()=> handleAdd(prod)}>Add to cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Home