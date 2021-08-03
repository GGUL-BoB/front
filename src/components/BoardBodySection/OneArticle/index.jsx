import ArticleComponent from './ArticleComponent';
import CommentComponent from './CommentComponent';
import CommentWriteForm from './CommentWriteForm';

const OneArticle = () => {
    return (
        <div className='wrap articles'>
            <article>
                <ArticleComponent
                    writer='익명'
                    timestamp='14분 전'
                    title='건강한 음식 많이 먹고 운동해서'
                    content='300살까지 살아야지~'
                    vote={0}
                    comment={2}
                />
                <div class='comments' style={{ display: 'block' }}>
                    <CommentComponent writer='익명' content='갈라파고스 거북이야?' timestamp='11분 전' vote={0} />
                    <CommentComponent writer='익명' content='ㅋㅋㅋㅋㅋㅋ' timestamp='10분 전' vote={2} isReply />

                    <CommentWriteForm />
                </div>
            </article>
            <div class='pagination'>
                <a id='goListButton' class='list' href='/board'>
                    글 목록
                </a>
            </div>
        </div>
    );
};

export default OneArticle;
