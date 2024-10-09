
import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux'
import './App.css'
import conf from './conf/conf';
import authService from "./appwrite/auth"
import {} from "./store/authSlice"


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=> {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch()
      }
    })
    .finally()
  }, [])
  
  return (
    <>
      <h1>Asif</h1>
    </>
  )
}

export default App
