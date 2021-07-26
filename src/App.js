import './App.scss';
// import './register.scss';
import GlobalHeader from './components/nav';
import GlobalSubMenu from './components/GlobalSubMenu';
import GlobalFooter from './components/GlobalFooter';
import RightSection from './components/RightSection';
import AsideComponent from './components/AsideComponent';
import DummyArticles from './dummy/ArticleDummy.jsx';
import BoardBodySection from './components/BoardBodySection';
import MainBodySection from './components/MainBodySection';
import { useState } from 'react';

const App = () => {
    return (
        <>
            <nav>
                <GlobalHeader />
            </nav>

            <div id='submenu'>
                <GlobalSubMenu />
            </div>

            <div id='container' className='community'>
                <RightSection />
                <AsideComponent />
                <MainBodySection />
                <hr />
            </div>

            {/* <div id='container' className='article'>
                <RightSection />
                <AsideComponent />
                <BoardBodySection />
                <hr />
            </div> */}

            <GlobalFooter />
            {/* 여기부터 로그인 */}

            {/* <div id='container' class='login'>
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
            </address> */}

            {/* 여기서부터 회원가입 */}

            {/* <Register /> */}
        </>
    );
};

export default App;

const Register = () => {
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
