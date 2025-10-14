import { Link } from "react-router-dom";

export function BuyerSignup () {
    return (
        <>
            <h2>구매자 회원가입</h2>
            <p>대상</p>
            <p>- 중도매인</p>
            <p>- 직접구매자(유통업체, 식자재업체, 가공업체 등)</p>
            <ul>
                <li><button type="button">가입안내</button></li>
                <li><Link to={'/buyerCheck'}><button type="button">회원가입</button></Link></li>
            </ul>
        </>
    );
}