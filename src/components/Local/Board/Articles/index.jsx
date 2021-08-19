import { useEffect, useState } from 'react';
import ArticleWriteForm from './ArticleWriteForm';
import ArticleWritePlaceHolder from './ArticleWritePlaceHolder';
import ArticleList from './ArticleList';
import Pagenation from './Pagenation';
import { store } from 'src/store';
import { getBoardName } from '@Functions/';

const Articles = ({ match }) => {
    const [writeMode, setWriteMode] = useState(false);

    const { bID = 0, page = 1 } = match.params;

    const isAll = bID === 0;

    useEffect(() => {
        store.setBoardID(bID);
        store.setBoardName(getBoardName(bID));
    }, [bID]);

    return (
        <div className='wrap articles'>
            {!isAll &&
                (writeMode ? (
                    <ArticleWriteForm boardID={bID} />
                ) : (
                    <ArticleWritePlaceHolder setWriteMode={setWriteMode} />
                ))}

            <ArticleList isAll={isAll} boardID={bID} pageNum={page} />
            <div className='clearBothOnly'></div>

            {/* <Pagenation bid={bID} pageNum={page} /> */}
        </div>
    );
};

export default Articles;
