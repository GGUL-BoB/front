import BoardArticleComponent from './BoardArticleComponent';

const ArticleList = props => {
    const { bid } = props;

    return (
        <>
            <BoardArticleComponent
                title='봉사활동'
                content='봉사활동 하고싶은데 ㅇㄷ신청해야 할까?'
                timestamp='4분 전'
                isAnony
                vote={0}
                comment={0}
                boardID={bid}
                articleID={1}
            />
            <BoardArticleComponent
                title='다전 복전 부전공'
                content='셋에 대한 정보를 홈페이지 들어가도 자세히 안나와있어 여쭤봅니다 1. 신청 시 누적학점을 보는지
            특정 학기의 학점만 보는지? 2. 고학년이고 학'
                timestamp='8분 전'
                isAnony
                vote={0}
                comment={0}
                boardID={bid}
                articleID={2}
            />
            <BoardArticleComponent
                title='제목은 모르겠는데'
                content='글 내용은 최대 80자까지만 가져와서 렌더링 하면 된답니다.'
                timestamp='10분 전'
                isAnony
                vote={0}
                comment={0}
                boardID={bid}
                articleID={3}
            />
            <BoardArticleComponent
                title='댓글'
                content='많이 달리는지도 한번 체크해야함'
                timestamp='10분 전'
                isAnony
                vote={0}
                comment={0}
                boardID={bid}
                articleID={4}
            />
        </>
    );
};

export default ArticleList;
