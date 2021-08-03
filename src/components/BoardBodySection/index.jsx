import { useState } from 'react';
import Articles from './Articles';
import BoardTitle from './BoardTitle';
import OneArticle from './OneArticle';
import '@Styles/container/article.scss';
import { Route } from 'react-router-dom';

const BoardBodySection = ({ match }) => {
    // TODO : switch to Router form
    // TODO : 게시판 이름 매개변수

    const boardTitle = '자유게시판';

    return (
        <>
            <BoardTitle title={boardTitle} link='/board/free' />
            <Route exact path='/board/:bID/p/:page' component={Articles} />
            <Route exact path='/board/:bID/' component={Articles} />
            <Route exact path='/board/:bID/v/:articleID' component={OneArticle} />
        </>
    );
};

export default BoardBodySection;
