import { useState } from "react";
import "../styles/components/Cart.css";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

export function Cart() {
    const [count, setCount] = useState(1);
    const product = useSelector((state)=>state.product.product);
    const navigate = useNavigate();
    const cartList = [{"cid":"testCid", "image":"/productImages/productImage5.png", "qty":"1", "size":"XL", "name":"testName", "price":15000, }];
    // const cartList = useSelector((state) => state.cart.cartList);

    
    // 구매 수량 감소 버튼 클릭 이벤트
    const handleDecrease = () => {
        if (count !== 1) {
            setCount(count - 1);
        }
    };

    // 구매 수량 증가 버튼 클릭 이벤트
    const handleIncrease = () => {
        setCount(count + 1);
    };

    // 구매 수량 직접 입력시 이벤트
    const handleChange = (e) => {
        let value = e.target.value;

        // 숫자만 입력
        if (/^\d+$/.test(value)) {
            // 숫자로 value값 설정
            value = Number(value);

            // 1미만을 입력할 경우 1설정
            if (value < 1) {
            value = 1;
            }
            // 최대 갯수를 초과할 경우 최대치 설정
            else if (value > product.count) {
            value = product.count;
            }

            setCount(value);
        }
    };

    return (
        <div className='cart-container'>
            <h2 className='cart-header'>장바구니</h2>
            <div className="cart-body">
                <div className="cart-left">
                    {
                        cartList && cartList.map(item => 
                            <div>
                                <div className='cart-item'>
                                    {item.cid}
                                    <img src={`/images/${item.image}`} alt='product img' />
                                    <div className='cart-item-details'>
                                        <p className='cart-item-title'>{item.name}</p>
                                        <p className='cart-item-title'>{item.size}</p>
                                        <p className='cart-item-title'>{parseInt(item.price).toLocaleString()}원</p>
                                    </div>
                                    <div className='cart-quantity'>
                                        <button type='button' onClick={handleDecrease}>-</button>
                                        <input type="text" value={count} readOnly/>
                                        <button type='button' onClick={handleIncrease}>+</button>
                                    </div>
                                    <button className='cart-remove'>제거</button>
                                </div>

                            </div>
                        )
                    }
                </div>
                <div className="cart-right">
                    {/* 주문 버튼 출력 */}
                    {cartList && cartList.length > 0 ? 
                        <>
                            <div className='cart-summary'>
                                <h3>주문 예상 금액</h3>
                                <div className='cart-summary-sub'>
                                    <p className='cart-total'>
                                        <label>총 상품 가격 : </label>
                                        <span>토탈프라이스 원</span>
                                    </p>
                                    <p className='cart-total'>
                                        <label>총 할인 가격 : </label>
                                        <span>0원</span>
                                    </p>
                                    <p className='cart-total'>
                                        <label>총 배송비 : </label>
                                        <span>0원</span>
                                    </p>
                                </div>
                                <p className='cart-total2'>
                                    <label>총 금액 : </label>
                                    <span>토탈프라이스 원</span>
                                </p>
                            </div>
                            <div className='cart-actions'>
                                <button type='button' onClick={()=>{navigate("/checkout")}}>주문하기</button>
                            </div>
                        </>
                    : <div>
                        <p> 장바구니에 담은 상품이 없습니다. &nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                        <img style={{width:"50%", marginTop:"20px"}} src="/images/cart.jpg" />
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}
