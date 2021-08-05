import CardRightComponent from './CardRightComponent';
import { CardRightItemArticle, CardRightItemList } from './CardRighItemComponent';

const RightSection = () => {
    // TODO :: Dummy Data 분리

    return (
        <div class='rightside'>
            {/* <form class='search'>
                <input type='text' name='keyword' placeholder='전체 게시판의 글을 검색하세요!' class='text' />
            </form> */}

            <CardRightComponent title='실시간 인기 글'>
                <CardRightItemArticle
                    title='조성재 멘토님...'
                    content='우분투 터져서 죽는줄 알앗더요...'
                    boardNm='자유게시판'
                    boardID={1}
                    articleID={1}
                    vote={32}
                    comment={29}
                />
                <CardRightItemArticle
                    title='BoB 공식 홈피를 확인해봤습니다'
                    content='정말 대단하신 멘토분들이 보안 전문가 양성을 위해 힘써주고 계십니다'
                    boardNm='자유게시판'
                    boardID={1}
                    articleID={1}
                    vote={31}
                    comment={17}
                />
            </CardRightComponent>

            <CardRightComponent title='최근 게시물' more='/board'>
                <CardRightItemList
                    path='/board'
                    boardID={1}
                    articleID={1}
                    timestamp='07/25 23:36'
                    content='다음주 과제 미리 확인하는법'
                />
                <CardRightItemList
                    path='/board'
                    boardID={1}
                    articleID={1}
                    timestamp='07/25 21:48'
                    content='필기내용 같이 공유하실 분'
                />
                <CardRightItemList
                    path='/board'
                    boardID={1}
                    articleID={1}
                    timestamp='07/25 15:28'
                    content='반가워 얘들아'
                />
                <CardRightItemList
                    path='/board'
                    boardID={1}
                    articleID={1}
                    timestamp='07/25 10:27'
                    content='계산기 너무 어렵지 않냐?'
                />
            </CardRightComponent>

            <CardRightComponent title='BEST 게시판' more='/board/1' />
        </div>
    );
};

export default RightSection;
