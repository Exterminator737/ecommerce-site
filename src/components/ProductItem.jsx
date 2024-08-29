/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id, images, name, price}) => {

    const {currency} = useContext(StoreContext)


  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={images} alt="head" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem