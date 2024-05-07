import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addProduct } from '../../redux/productsSlice';


function DetailProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();
    const [detailImg, setDetailImg] = useState(product.img1)

    const handleQuantity = (type) => {
        if (type === 'dec') {
            quantity > 1 && setQuantity(quantity - 1)
            quantity < 2 && alert("Minimum 1!")

        } else {
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, }))
    }


    const getData = async () => {
        const response = await axios.get(`https://electronics-store-api.vercel.app/api/products/find/${id}`);
        setProduct(response.data);
        setDetailImg(response.data.img1)
    };
    useEffect(() => {
        getData();
    }, [id])


    return (
        <section className='detailPage'>
            <div className='detailpageMain'>

                <div className='detailImgs'>
                    <div id='imgmsItem'>
                        {product.img1 ? <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img1} alt='foto' /> : <></>}
                        {product.img2 ? <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img2} alt='foto' /> : <></>}
                        {product.img3 ? <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img3} alt='foto' /> : <></>}
                        {product.img4 ? <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img4} alt='foto' /> : <></>}
                    </div>
                    <img src={detailImg} alt='foto' />
                </div>

                <div className='detailsItemTexts'>
                    <h1 id='detailsH2'>{product.productname}</h1>
                    <h5 id='detailsH5'>{product.price}</h5>
                    <p id='detailsP'>{product.desc}</p>
                    <div id='addbasketDiv' style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <button onClick={() => handleQuantity("dec")} style={{ width: "30px", height: "30px", borderRadius: "100%", cursor: "pointer", background: "none", border: "1px solid gray" }}>-</button>
                        <p style={{ margin: "0", fontSize: "18px" }}>{quantity}</p>
                        <button onClick={() => handleQuantity("inc")} style={{ width: "30px", height: "30px", borderRadius: "100%", cursor: "pointer", background: "none", border: "1px solid gray" }}>+</button>
                        <button style={{ cursor: "pointer" }} onClick={handleClick} id='addtobasket'>Add to basket</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailProduct