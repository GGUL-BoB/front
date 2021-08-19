import Articles from './Articles';
import BoardTitle from './BoardTitle';
import OneArticle from './OneArticle';
import { Route } from 'react-router-dom';
import { SWRConfig } from 'swr';
// Styles
import '@Styles/container/article.css';

const BoardBodySection = ({ match }) => {
    return (
        <>
            <SWRConfig value={{ fetcher: url => fetch(url).then(_ => _.json()) }}>
                <BoardTitle />
                <Route exact path='/board/' component={Articles} />
                <Route exact path='/board/:bID/' component={Articles} />
                <Route exact path='/board/:bID/p/:page' component={Articles} />
                <Route exact path='/board/:bID/v/:articleID' component={OneArticle} />
            </SWRConfig>
        </>
    );
};

export default BoardBodySection;
