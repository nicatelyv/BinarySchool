import React from 'react'
import { useGetAllProductsQuery } from "../../redux/productsApi"
import "./style.scss"

function Products() {
    const { data, isLoading, isError } = useGetAllProductsQuery

    return (
        <div className='products'>
            <div className="productsMain">
                {isLoading && <p>Loading ...</p>}
                {isError && <p>Error 404</p>}
                {data?.map((product, index) => (
                    <div className="card" key={index}>
                        <img src={product.img1} alt="" />
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products