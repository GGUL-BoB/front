import { store } from '@Store/';
import { observer } from 'mobx-react';

const BoardTitle = observer(props => {
    const { boardName, boardID } = store;

    const link = boardID !== 0 ? `/board/${boardID}` : '/board';

    return (
        <div className='wrap title'>
            <h1>
                <a href={link}>{boardName}</a>
            </h1>
            <hr />
        </div>
    );
});

export default BoardTitle;
