import CommentWriteForm from '../CommentWriteForm';

const CommentComponent = props => {
    const { isReply, writer, content, timestamp, vote } = props;

    const displayVoteCount = vote === 0 ? 'none' : '';
    const commentType = isReply ? 'child' : 'parent';

    // 글 작성자인지를 체크하는 변수
    const isWriter = false;

    const writerComment = isWriter ? 'medium writer' : 'medium';
    const writerName = isWriter ? `${writer}(글쓴이)` : writer;

    // 대댓글 작성모드인 경우 아래 false를 true로
    const replyWriteMode = false && isReply;

    // 로그인이 없다면, 글쓴이인지 확인하는 과정은?
    // 삭제 로직은?
    // 공감 업데이트는? 신고수는?

    return (
        <>
            <article class={commentType}>
                <img src='https://cf-fpi.everytime.kr/0.png' class='picture medium' />
                <h3 class={writerComment}>{writerName}</h3>
                <ul class='status'>
                    {!isReply && <li class='childcomment'>대댓글</li>}
                    <li class='commentvote'>공감</li>
                    <li class='abuse'>신고</li>
                    <li class='delete'>삭제</li>
                </ul>
                <hr />
                <p class='large'>{content}</p>
                <time class='medium'>{timestamp}</time>
                <ul class='status commentvotestatus'>
                    <li class='vote commentvote' style={{ display: displayVoteCount }}>
                        {vote}
                    </li>
                </ul>
            </article>

            {replyWriteMode && <CommentWriteForm isChildReply={isReply} />}
        </>
    );
};

export default CommentComponent;
