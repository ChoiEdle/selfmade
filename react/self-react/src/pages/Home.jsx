import { Link } from "react-router-dom";

export function Home () {
    return(
        <div className="home">
         <h1>홈</h1>
         <Link to={'/signup'}>회원가입</Link>
        </div>
    )
}