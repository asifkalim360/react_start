import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

export const STATUSES = Object.freeze(
    {
        Success:'SUCCESS',
        Error:'ERROR',
        Loading:'LOADING'
    }
)

export const ProductSlice = createSlice({
  name: 'Product',
  initialState:{
    data:[],
    status:STATUSES.Success,
  },
  reducers: {
    setProducts: (state,action) => {
      state.data = action.payload
    },

    setStatus: (state, action) => {
      state.status = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { setProducts, setStatus } = ProductSlice.actions

export default ProductSlice.reducer


//Middleware -> calling Api with help of middleware.

export function fetchProducts()
{
    return async function fetchProductsThunk(dispatch, get)
    { 
        dispatch(setStatus(STATUSES.Loading));      // status load before the calling Api.
        
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json();
            dispatch(setProducts(data))
            dispatch(setStatus(STATUSES.Success))
        } catch (error) {
            console.log(error);
            
            dispatch(setStatus(STATUSES.Error))
        }
    }
}