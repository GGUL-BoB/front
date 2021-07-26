const OneArticle = () => {
    return (
        <div className='wrap articles'>
            <article>
                <a class='article'>
                    <img src='https://cf-fpi.everytime.kr/0.png' class='picture large' />
                    <div class='profile'>
                        <h3 class='large'>익명</h3>
                        <time class='large'>14분 전</time>
                    </div>
                    <ul class='status'>
                        <li class='messagesend' data-modal='messageSend' data-article-id='201157140' data-is-anonym='1'>
                            쪽지
                        </li>
                        <li class='abuse'>신고</li>
                    </ul>
                    <hr />
                    <h2 class='large'>건강한 음식 많이 먹고 운동해서</h2>
                    <p class='large'>300살까지 살아야지~</p>
                    <ul class='status left'>
                        <li title='공감' class='vote'>
                            0
                        </li>
                        <li title='댓글' class='comment'>
                            2
                        </li>
                    </ul>
                    <hr />
                    <div class='buttons'>
                        <span class='posvote'>공감</span>
                    </div>
                    <input type='hidden' name='201157140_comment_anonym' value='0' />
                </a>
                <div class='comments' style={{ display: 'block' }}>
                    {/* <article class='parent'>
                        <img src='https://cf-fpi.everytime.kr/0.png' class='picture medium' />
                        <h3 class='medium'>익명1</h3>
                        <ul class='status'>
                            <li class='childcomment'>대댓글</li>
                            <li class='commentvote'>공감</li>
                            <li
                                class='messagesend'
                                data-modal='messageSend'
                                data-comment-id='956755462'
                                data-is-anonym='1'
                            >
                                쪽지
                            </li>
                            <li class='abuse'>신고</li>
                        </ul>
                        <hr />
                        <p class='large'>갈라파고스 거북이야?</p>
                        <time class='medium'>11분 전</time>
                        <ul class='status commentvotestatus'>
                            <li class='vote commentvote' style={{ display: 'none' }}>
                                0
                            </li>
                        </ul>
                    </article>
                    <article class='child'>
                        <img src='https://cf-fpi.everytime.kr/0.png' class='picture medium' />
                        <h3 class='medium writer'>익명(글쓴이)</h3>
                        <ul class='status'>
                            <li class='commentvote'>공감</li>
                            <li
                                class='messagesend'
                                data-modal='messageSend'
                                data-comment-id='956756014'
                                data-is-anonym='1'
                            >
                                쪽지
                            </li>
                            <li class='abuse'>신고</li>
                        </ul>
                        <hr />
                        <p class='large'>ㅋㅋㅋㅋㅋㅋ</p>
                        <time class='medium'>10분 전</time>
                        <ul class='status commentvotestatus'>
                            <li class='vote commentvote' style={{ display: 'none' }}>
                                0
                            </li>
                        </ul>
                    </article> */}
                    <form class='writecomment'>
                        <input
                            type='text'
                            name='text'
                            maxlength='300'
                            autocomplete='off'
                            placeholder='댓글을 입력하세요.'
                            class='text'
                        />
                        <ul class='option'>
                            <li title='익명' class='anonym'></li>
                            <li title='완료' class='submit'></li>
                        </ul>
                        <div class='clearBothOnly'></div>
                    </form>
                </div>
            </article>
        </div>
    );
};

export default OneArticle;
