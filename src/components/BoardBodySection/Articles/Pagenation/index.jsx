const Pagenation = () => {
    return (
        <div className='pagination'>
            <form id='searchArticleForm' className='search'>
                <select name='search_type'>
                    <option value='4'>전체</option>
                    <option value='3'>해시태그</option>
                    <option value='2'>글 제목</option>
                    <option value='1'>글 내용</option>
                </select>
                <input name='keyword' placeholder='검색어를 입력하세요.' className='text' />
            </form>
            <a href='/370440/p/2' className='next'>
                다음
            </a>
        </div>
    );
};

export default Pagenation;
