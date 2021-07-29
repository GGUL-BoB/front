import '@Styles/main/common.scss';
import '@Styles/main/login.scss';

import LoginFooterComponent from '@Components/Login/LoginFooterComponent';
import OtherButtonComponent from '@Components/Login/OtherButtonComponent';
import LoginFormComponent from '@Components/Login/LoginFormComponent';

const LoginPage = () => {
    const handleSubmission = e => {
        e.preventDefault();

        console.log({
            id: e.target.userid.value,
            password: e.target.password.value,
        });
        // TODO :: Hook 연결 + FORM 제출 + 인증
    };

    return (
        <>
            <div id='container' class='login'>
                <h1 class='logo'>
                    <a href='/main'>밥브리타임</a>
                </h1>
                <form onSubmit={handleSubmission}>
                    <LoginFormComponent />

                    <OtherButtonComponent />
                </form>
            </div>

            <LoginFooterComponent />
        </>
    );
};

export default LoginPage;
