const BoardArticleComponent = props => {
    const {
        title,
        content,
        timestamp,
        isAnony = false,
        writerNm = 'user',
        vote,
        comment,
        articleID = 0,
        boardID,
    } = props;

    const href = false ? `/board/${boardID}` : `/board/${boardID}/v/${articleID}`;
    const writer = isAnony ? '익명' : writerNm;

    return (
        <article>
            <a className='article' href={href}>
                <h2 className='medium'>{title}</h2>
                <p className='small'>{content}</p>
                <time className='small'>{timestamp}</time>
                <h3 className='small'>{writer}</h3>
                <ul className='status'>
                    <li title='공감' className='vote'>
                        {vote}
                    </li>
                    <li title='댓글' className='comment'>
                        {comment}
                    </li>
                </ul>
                <hr />
                <input type='hidden' name='201147507_comment_anonym' value='0' />
            </a>
            <div className='comments'></div>
        </article>
    );
};

export default BoardArticleComponent;
