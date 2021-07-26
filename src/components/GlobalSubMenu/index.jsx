const GlobalSubMenu = () => {
    return (
        <div className='wrap'>
            <BoardGroup />
            <BoardGroup />
            <BoardGroup />
            <BoardGroup />
            <BoardGroup />
        </div>
    );
};

const BoardGroup = () => {
    return (
        <>
            <div className='divider' />
            <div className='group'>
                <BoardList groupNo='1' />
            </div>
        </>
    );
};

const BoardList = () => {
    const item = [
        {
            href: '/',
            boardID: 1,
            isNew: true,
            title: '자유게시판',
        },
        {
            href: '/',
            boardID: 2,
            isNew: false,
            title: '비밀게시판',
        },
        {
            href: '/',
            boardID: 3,
            isNew: true,
            title: '자료게시판',
        },
        {
            href: '/',
            boardID: 4,
            isNew: true,
            title: '트랙 별 게시판',
        },
    ];

    const boardItems = item.map(elem => {
        const { href: link, boardID, title, isNew } = elem;

        return (
            <ul>
                <li>
                    {' '}
                    <a href={link} data-id={boardID} className={isNew ? 'new' : ''}>
                        {title}
                    </a>
                </li>
            </ul>
        );
    });

    return <>{boardItems}</>;
};

export default GlobalSubMenu;
