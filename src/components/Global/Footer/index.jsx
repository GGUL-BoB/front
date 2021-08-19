/* eslint-disable jsx-a11y/anchor-is-valid */
const GlobalFooter = () => {
    const handleClick = e => {
        e.preventDefault();
        let msg = '';
        switch (e.target.name) {
            case '문의':
                msg = 'KAKAO ID : dksu40 \n10기 보안제품개발 표지원';
                break;
            case '규칙':
                msg =
                    '간단한 에브리타임 클론 게시판이니 잘 써주세요 😁\n\n2021년 7월 18일 ~ 8월 22일간 진행된 \n김종민 멘토님 프로젝트을 위해 개발된 페이지입니다.';
                break;
            case '로고':
                msg = '코로나 끝나서 빨리 여러분을 뵙고싶네요 😭😭\n\n확진자 떨어지길 기원 🙏🙏🙏';
                break;
            case '공지':
                msg = '구현 안된 기능이 많습니다.(스크랩... 공감... )\n\n급하게 만들어진거니까 귀엽게 봐주세요.';
                break;
            default:
                break;
        }
        alert(msg);
    };

    return (
        <div id='bottom'>
            <ul class='links'>
                <li>
                    <a name='약관'>이용약관</a>
                </li>
                <li class='privacy'>
                    <a name='방침'>개인정보처리방침</a>
                </li>
                <li>
                    <a name='규칙' onClick={handleClick}>
                        커뮤니티이용규칙
                    </a>
                </li>
                <li>
                    <a name='공지' onClick={handleClick}>
                        공지사항
                    </a>
                </li>
                <li>
                    <a name='문의' onClick={handleClick}>
                        문의하기
                    </a>
                </li>
                <li class='copyright'>
                    <a name='로고' onClick={handleClick}>
                        © 밥브리타임
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default GlobalFooter;
