import '@Styles/register.scss';

const RegisterPage = () => {
    return (
        <form id='container' method='post' action='/register/agreement'>
            <h2>밥브리타임 회원가입</h2>
            <p class='description'>
                밥브리타임 계정으로
                <strong> 다양한 BoB 관련 정보</strong>를 <br />
                모두 이용하실 수 있습니다.
            </p>
            <div class='input'>
                <div class='label'>
                    <label>트랙</label>
                </div>
                <select name='enter_year'>
                    <option disabled='' selected=''>
                        트랙 선택
                    </option>
                    <option value='2021'>2021학번</option>
                    <option value='2020'>2020학번</option>
                    <option value='2019'>2019학번</option>
                    <option value='2018'>2018학번</option>
                </select>
            </div>

            <div class='input'>
                <div class='label'>
                    <label>아이디</label>
                </div>
                <input type='text' name='id' maxlength='20' placeholder='아이디를 입력하세요.' autocomplete='off' />
            </div>
            <div class='input'>
                <div class='label'>
                    <label>비밀번호</label>
                </div>
                <input
                    type='password'
                    name='password'
                    maxlength='20'
                    placeholder='비밀번호를 입력하세요.'
                    autocomplete='off'
                />
            </div>
            <div class='input'>
                <div class='label'>
                    <label>비밀번호 확인</label>
                </div>
                <input
                    type='password'
                    name='password'
                    maxlength='20'
                    placeholder='비밀번호를 다시 입력하세요.'
                    autocomplete='off'
                />
            </div>
            <input type='submit' value='제출' />
        </form>
    );
};

export default RegisterPage;
