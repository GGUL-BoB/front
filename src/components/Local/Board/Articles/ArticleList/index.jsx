import useSWR from 'swr';
import BoardArticleComponent from './BoardArticleComponent';

import { getFormattedTime, BOARD_ENDPOINT } from '@Functions/';
import { ARTICLE_ENDPOINT } from '@Functions/';

const ArticleList = props => {
    const { boardID, isAll } = props;

    const ENDPOINT = isAll ? `${ARTICLE_ENDPOINT}` : `${BOARD_ENDPOINT}/${boardID}/`;

    const { data: articleList } = useSWR(ENDPOINT);

    const handleArticleList = () => {
        if (!articleList) return [];

        const returnList = articleList.map(data => {
            return {
                articleid: data.articleid,
                title: data.title,
                content: data.content,
                timestamp: getFormattedTime(data.timestamp),
                vote: data.vote,
                unlike: data.unlike,
                comment: data.commentcount,
                writer: data.isanony ? '익명' : data.writer,
                boardid: data.boardid,
                fileCount: data.filecount,
                imageCount: data.imagecount,
                thumbnail: data.thumbnail,
                articleType: isAll ? 2 : 1,
            };
        });

        return returnList;
    };

    const boardArticleList = handleArticleList().map(elem => <BoardArticleComponent {...elem} />);

    return <>{boardArticleList}</>;
};

export default ArticleList;
