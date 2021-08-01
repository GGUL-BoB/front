const CardRightItemArticle = props => {
    const {
        href,
        title,
        timestamp,
        content,
        boardNm = '자유게시판',
        comment = 0,
        vote = 0,
        isMainCard = false,
    } = props;

    const newLineFormattedString = content.split('\\n').map(line => (
        <>
            {line}
            <br />
        </>
    ));
    // TODO :: 이거 function 디렉토리 하위에 종합해두기. (newLineFormatter)

    const showStatus = props.comment !== undefined && props.vote !== undefined;

    // TODO :: timestamp formatter 적용해야함. (ex. 하루 전)

    return (
        <a class='article' href={href}>
            {isMainCard ? (
                <>
                    <p>{newLineFormattedString}</p>
                    <time>{timestamp}</time>
                </>
            ) : (
                <>
                    <p class='title'>{title}</p>
                    <p class='small'>{content}</p>
                    <h4>{boardNm}</h4>
                </>
            )}

            {showStatus && (
                <ul class='status'>
                    <li class='vote active'>{vote}</li>
                    <li class='comment active'>{comment}</li>
                </ul>
            )}
            <hr />
        </a>
    );
};

const CardRightItemList = props => {
    const { link, timestamp, content } = props;

    // TODO :: timestamp formatter 필요

    return (
        <a class='list' href={link}>
            <time>{timestamp}</time>
            <p>{content}</p>
            <hr />
        </a>
    );
};

export { CardRightItemArticle, CardRightItemList };
