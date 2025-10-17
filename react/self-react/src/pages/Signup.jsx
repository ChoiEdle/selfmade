import '../styles/Signup.css';

export function Signup () {
    return (
        <>
            <h2>회원가입</h2>
            <div><span>*</span>필수입력사항</div>
            <ul>
                <li>
                    <ul className='part'>
                        <li className='left'><span>아이디</span></li>
                        <li><input type="text" /></li>
                    </ul>
                </li>
                <li>
                    <ul className='part'>
                        <li className='left'><span>비밀번호</span></li>
                        <li className='middle'><input type="password" /></li>
                    </ul>
                </li>
                <li>
                    <ul className='part'>
                        <li className='left'><span>비밀번호확인</span></li>
                        <li className='middle'><input type="password" /></li>
                    </ul>
                </li>
                <li>
                    <ul className='part'>
                        <li className='left'><span>이름</span></li>
                        <li className='middle'><input type="text" /></li>
                    </ul>
                </li>
                <li>
                    <ul className='part'>
                        <li className='left'><span>이메일</span></li>
                        <li className='middle'>
                            <input type="text" />
                            <span>@</span>
                            <select>
                                <option value="default">선택하기</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="hanmail.net">hanmail.net</option>
                                <option value="kakao.com">kakao.com</option>
                                <option value="daum.net">daum.net</option>
                                <option value="hotmail.com">hotmail.com</option>
                                <option value="yahoo.co.kr">yahoo.co.kr</option>
                                <option value="">직접 입력</option>
                            </select>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className='part'>
                        <li className='left'><span>휴대폰</span></li>
                        <li className='middle'>
                            <input type="text" />
                        </li>
                        <li>
                            <button type="button">인증번호 받기</button>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className='part'>
                        <li className='left'><span>주소</span></li>
                        <li className='middle'>
                            <div><button type="button">주소 검색</button></div>
                            <span>배송지에 따라 상품 정보가 달라질 수 있습니다.</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className='part'>
                        <li className='left'>
                            <span>성별</span>
                        </li>
                        <li className='middle'>
                            <div>
                                <input type="radio" name="gender"/><span>남자</span>
                            </div>
                            <div>
                                <input type="radio" name="gender"/><span>여자</span>
                            </div>
                            <div>
                                <input type="radio" name="gender"/><span>선택안함</span>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className='part'>
                        <li className='left'><span>생년월일</span></li>
                        <li className='middle'>
                            <input type="text" />
                            <span>/</span>
                            <input type="text" />
                            <span>/</span>
                            <input type="text" />
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className='part'>
                        <li><span className='left'>추가입력 사항</span></li>
                        <li className='middle'>
                            <input type="radio" />
                            <span>친구초대 추천인 아이디</span>
                            <div>
                                <input type="text" />
                                <button type="button">아이디 확인</button>
                                <li><span>가입 후 7일 이내 첫 주문 배송완료 시, 친구초대 적립금이 지급됩니다.</span></li>
                                <li><span>ID 입력시, 대소문자 및 띄어쓰기에 유의 부탁드립니다.</span></li>
                                <li><span>가입 이후는 수정이 불가능합니다.</span></li>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className='part'>
                        <li className='left'>
                            <span>이용약관동의</span>
                        </li>
                        <li>
                            <div>
                                <input type="checkbox" />
                                <span>전체 동의합니다.</span>
                                <span>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</span>
                            </div>
                            <div>
                                <div>
                                    <input type="checkbox" />
                                    <span>이용약관 동의</span>
                                    <span>(필수)</span>
                                </div>
                                <div>
                                    <span>약관보기</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input type="checkbox" />
                                    <span>개인정보 수집 이용 동의 동의</span>
                                    <span>(필수)</span>
                                </div>
                                <div>
                                    <span>약관보기</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input type="checkbox" />
                                    <span>마케팅 광고 활용을 위한 수집 및 이용 동의</span>
                                    <span>(선택)</span>
                                </div>
                                <div>
                                    <span>약관보기</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input type="checkbox" />
                                    <span>무료배송, 할인쿠폰 등 해택/정보 수신 동의</span>
                                    <span>(선택)</span>
                                    <div>
                                        <input type="checkbox" />
                                        <span>SMS</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        <span>이메일</span>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input type="checkbox" />
                                    <span>본인은 만 14세 이상입니다.</span>
                                    <span>(필수)</span>
                                </div>
                                <div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li><button type="button">가입하기</button></li>
            </ul>
        </>
    );
}