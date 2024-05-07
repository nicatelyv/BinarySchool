import React from 'react'
import { useGetAllProductsQuery } from "../../redux/productsApi"
import { Link } from 'react-router-dom'
import "./style.scss"

function Products() {
    const { data, isLoading, isError } = useGetAllProductsQuery()

    return (
        <div className='products'>
            <div className="productsMain">
                {isLoading && <h2>Loading ...</h2>}
                {isError && <h2>Error 404</h2>}
                {data?.map((product, index) => (
                    <div className="card" key={index}>
                        <img src={product.img1} alt="" />
                        <p>{product.price}</p>
                        <Link to={'/products/' + product._id + '/details'}><button>Details</button></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products