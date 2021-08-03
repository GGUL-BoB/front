const CommentWriteForm = props => {
    const { isChildReply } = props;

    const commentMode = isChildReply ? 'writecomment child' : 'writecomment';
    const placeholder = isChildReply ? '대댓글을 입력하세요.' : '댓글을 입력하세요.';
    const isAnony = false;

    // TODO :: Submit Action에 대해 다뤄야함.
    // 글 내용, id, ip, timestamp, 대댓글인지 아닌지, 공감수, 신고수 저장

    return (
        <form class={commentMode}>
            <input type='text' name='text' maxlength='300' autocomplete='off' placeholder={placeholder} class='text' />
            <ul class='option'>
                <li title='익명' class='anonym'></li>
                <li title='완료' class='submit'></li>
            </ul>
            {isAnony && (
                <>
                    <div
                        style={{
                            borderTop: '1px solid #e3e3e3',
                            backgroundColor: 'white',
                        }}
                    />
                    <input
                        type='password'
                        name='password'
                        maxlength='20'
                        autocomplete='off'
                        placeholder='비밀번호를 설정하세요 (최대 20자)'
                        class='text'
                    />
                </>
            )}
            <div class='clearBothOnly'></div>
        </form>
    );
};

export default CommentWriteForm;
