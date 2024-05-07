import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearBasket } from '../../redux/productsSlice'
import './style.scss'

function CartComponent() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    function handleClick() {
        dispatch(clearBasket())
        navigate("/products")
    }
    return (
        <section className='cartSection'>
            <div className='cartSectionMain'>
                {cart.products.map((product, index) => (
                    <div key={index} className='Cart'>
                        <img src={product.img1} alt='foto' />
                        <div className='cartItemTexts'>
                            <h2 id='cartItemH2'>{product.productname}</h2>
                            <p id='cartItemP'>{product.tags}</p>
                            <p id='cartItemP'>AZN {product.price}</p>
                        </div>
                        <div>
                            <div id='cartItemCount'>
                                <h4>{product.quantity}x</h4>
                            </div>
                            <h3 id='cartItemH3'>AZN {(product.price * product.quantity).toFixed(2)}</h3>
                        </div>
                    </div>
                ))
                }
                <h2 id='cartTotalPrice'>Total: AZN {(cart.total).toFixed(2)}</h2>
                <button onClick={handleClick} style={{ cursor: "pointer", background: "none", border: "2px solid gold", width: "150px", height: "40px", borderRadius: "10px", fontSize: "20px" }}>Approve</button>
            </div>
        </section>
    )
}

export default CartComponent