import { useState } from 'react';
import Articles from './Articles';
import OneArticle from './OneArticle';
import '@Styles/container/article.scss';

const BoardBodySection = () => {
    const [viewAll, setViewMode] = useState(true);
    // TODO : switch to Router form
    // TODO : 게시판 이름 매개변수
    return (
        <>
            <div className='wrap title'>
                <h1>
                    <a href='/'>자유게시판</a>
                </h1>
                <hr />
            </div>

            {viewAll ? <Articles setViewMode={setViewMode} /> : <OneArticle />}
        </>
    );
};

export default BoardBodySection;
