import { Link } from "react-router-dom";

export function Home () {
    return(
        <div className="home">
            <h1>홈</h1>
            <div>
                <Link to={'/signup'}>회원가입</Link>
            </div>
            <div>
                <Link to={'/cart'}>카트</Link>
            </div>
            <div>
                <Link to={'/checkout'}>결제</Link>
            </div>
        </div>
    )
}