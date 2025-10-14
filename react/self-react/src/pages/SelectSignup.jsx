import { SellerSignup } from "./SellerSignup.jsx";
import { BuyerSignup } from "./BuyerSignup.jsx";

export function SelectSignup () {
    return(
        <div>
            <h1>농수산물 온라인도매시장 회원가입</h1>
            <ul>
                <li>
                    <SellerSignup />
                </li>
                <li>
                    <BuyerSignup />
                </li>
            </ul>
        </div>
    )
}