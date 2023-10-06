import React from 'react'
import axios from 'axios'

const fetchData = async ()=>{
    try {
        const res = await axios('https://fakestoreapi.com/products')
        const data = res.data
        return data
    } catch (error) {
        console.log(error);
    }
}

const page = async () => {
    await fetchData()
  return (
    <div>page</div>
  )
}

export default page