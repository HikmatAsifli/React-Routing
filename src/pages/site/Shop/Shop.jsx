import React, { useContext, useEffect } from 'react'
import MainContext from '../../../context/context'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Shop() {
  const { data, setData } = useContext(MainContext)
  useEffect(() => {
    axios.get("http://localhost:3000/products/").then(res => {
      setData([...res.data])
    })
  }, [])
  return (
    <div className='container mt-5'>
      <h1 className='mb-5'>Shop</h1>
      <div className='row'>
        {data.map(item => (<div className='col-3' key={item.id}>
          <div className='card mb-5'>
            <img src={item.image} className='card-img-top' width="300px" height="300px" alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>{item.name}</h5>
              <p className='card-text'>
                {item.price}
              </p>
              <Link to='#' className='btn btn-primary'>Go Detail</Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Shop