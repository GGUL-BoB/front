import { useState } from 'react';
import Articles from './Articles';
import BoardTitle from './BoardTitle';
import OneArticle from './OneArticle';
import '@Styles/container/article.scss';

const BoardBodySection = () => {
    const [viewAll, setViewMode] = useState(false);
    // TODO : switch to Router form
    // TODO : 게시판 이름 매개변수

    const boardTitle = '자유게시판';

    return (
        <>
            <BoardTitle title={boardTitle} link='/board' />

            {viewAll ? <Articles setViewMode={setViewMode} /> : <OneArticle />}
        </>
    );
};

export default BoardBodySection;
