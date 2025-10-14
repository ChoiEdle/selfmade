export function BuyerCheck () {
    const yaks = [{"title":"서비스 이용약관", "detail":""},{"title":"서비스 이용약관", "detail":""},{"title":"서비스 이용약관", "detail":""},{"title":"서비스 이용약관", "detail":""},{"title":"서비스 이용약관", "detail":""}];
    // console.log(yaks);
    
    return (
        <>
            <h1>구매자 회원가입</h1>
            <ul>
                <li><p>01 이용약관</p></li>
                <li><p>02 기본정보 입력</p></li>
                <li><p>03 가입완료</p></li>
            </ul>
            <p>이용약관을 반드시 읽어보시고,</p>
            <p>약관에 동의하시면 예를 선택해 주십시오.</p>
            <p>회원가입을 하려면 반드시 동의 하셔야 합니다. 약관동의 후 가입여부 확인을 해 주시기 바랍니다.</p>
            <ul>
                <li>
                    <input type="checkBox"></input>
                </li>
                <li>
                    <p>농수산물 온라인도매시장의 모든 약관을 확인하고 전체 동의합니다.</p>
                </li>
            </ul>
            {
                // console.log(test)
                yaks.map(yak => 
                    <ul>
                        <p>{yak.title}</p>
                        <p>{yak.detail}</p>
                    </ul>
                )
            }
        </>
    );
}