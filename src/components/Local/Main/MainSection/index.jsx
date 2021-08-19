import { useEffect, useState } from 'react';
import { CardRightItemArticle, CardRightItemList } from '../RightSection/CardRighItemComponent';
import CardRightComponent from '../RightSection/CardRightComponent';

// Dummy
// 유형이 다 다르기 때문에, 별도로 불러온 모습
import { fetchData } from '@Hooks/';
import { BOARD_ENDPOINT } from '@Functions/';

const MainSection = () => {
    const [articleList, setList] = useState({
        _1: [],
        _2: [],
        _3: [],
        _4: [],
    });

    const getMainArticles = async boardID => {
        let item = [];

        const temp = await fetchData('get', `${BOARD_ENDPOINT}/${boardID}/`);

        switch (boardID) {
            case 1: // 자유게시판
            case 2: // 비밀게시판
            case 4: // 트랙 별 게시판
                item = temp.slice(0, 2).map(elem => <CardRightItemArticle {...elem} isMainCard />);
                break;
            case 3: // 자료게시판
                item = temp.slice(0, 2).map(elem => <CardRightItemList {...elem} />);
                break;
            default:
                break;
        }

        return item;
    };

    useEffect(() => {
        // 여기는 게시판 개수가 고정되어있기 때문에, 만약 게시판을 추가하거나 삭제하면 수정해야함.
        (async () => {
            const _1 = await getMainArticles(1);
            const _2 = await getMainArticles(2);
            const _3 = await getMainArticles(3);
            const _4 = await getMainArticles(4);

            setList({
                _1,
                _2,
                _3,
                _4,
            });
        })();
    }, []);

    return (
        <div class='main'>
            <CardRightComponent title='자유게시판'>{articleList._1}</CardRightComponent>

            <CardRightComponent title='비밀게시판'>{articleList._2}</CardRightComponent>

            <CardRightComponent title='자료게시판'>{articleList._3}</CardRightComponent>

            <CardRightComponent title='트랙별게시판'>{articleList._4}</CardRightComponent>
        </div>
    );
};

export default MainSection;
