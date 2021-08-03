import { useState } from 'react';
import ArticleWriteForm from './ArticleWriteForm';
import ArticleWritePlaceHolder from './ArticleWritePlaceHolder';
import ArticleList from './ArticleList';
import Pagenation from './Pagenation';

const Articles = ({ setViewMode }) => {
    const [writeMode, setWriteMode] = useState(false);

    return (
        <div className='wrap articles'>
            {writeMode ? <ArticleWriteForm /> : <ArticleWritePlaceHolder setWriteMode={setWriteMode} />}

            <ArticleList setViewMode={setViewMode} />
            <div className='clearBothOnly'></div>

            <Pagenation />
        </div>
    );
};

export default Articles;
