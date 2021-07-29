import '@Styles/main/common.scss';
import '@Styles/main/login.scss';

const LoginPage = () => {
    return (
        <>
            <div id='container' class='login'>
                <h1 class='logo'>
                    <a href='/'>밥브리타임</a>
                </h1>
                <form action='/user/login' method='post'>
                    <p class='input'>
                        <input type='text' name='userid' maxlength='20' class='text' placeholder='아이디' />
                    </p>
                    <p class='input'>
                        <input type='password' name='password' maxlength='20' class='text' placeholder='비밀번호' />
                    </p>
                    <input type='hidden' name='redirect' value='/' />
                    <p class='submit'>
                        <input type='submit' value='로그인' class='text' />
                    </p>
                    <label class='autologin'>
                        <input type='checkbox' name='autologin' value='1' />
                        로그인 유지
                    </label>
                    <p class='find'>
                        <a href='/forgot'>아이디/비밀번호 찾기</a>
                    </p>
                    <p class='register'>
                        <span>밥브리타임에 처음이신가요?</span>
                        <a href='/register'>회원가입</a>
                    </p>
                </form>
            </div>

            <address>
                <ul class='links'>
                    <li>
                        <a href='/page/serviceagreement'>이용약관</a>
                    </li>
                    <li class='privacy'>
                        <a href='/page/privacy'>개인정보처리방침</a>
                    </li>
                    <li>
                        <a href='/page/faq'>문의하기</a>
                    </li>
                    <li class='copyright'>
                        <a href='/'>© 밥브리타임</a>
                    </li>
                </ul>
            </address>
        </>
    );
};

export default LoginPage;
