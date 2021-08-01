import { CardRightItemArticle, CardRightItemList } from '@Components/RightSection/CardRighItemComponent';
import CardRightComponent from '@Components/RightSection/CardRightComponent';

const MainSection = () => {
    return (
        <div class='main'>
            <CardRightComponent title='자유게시판'>
                <CardRightItemArticle
                    content='2학기 다니면 시간표 이렇게는 안되겠죠..?'
                    timestamp='07/26 01:45'
                    vote={0}
                    comment={4}
                    isMainCard
                />
                <CardRightItemArticle
                    content='자유 게시판은 제품개발이 접수한다.'
                    timestamp='07/25 21:04'
                    vote={20}
                    comment={4}
                    isMainCard
                />
            </CardRightComponent>

            <CardRightComponent title='비밀게시판'>
                <CardRightItemArticle
                    content='과제 때문에 잠을 못자... \n계산기 멈춰 ✋✋'
                    timestamp='3분 전'
                    vote={0}
                    comment={4}
                    isMainCard
                />
                <CardRightItemArticle
                    content='이거 하나만큼은 확실하다 \n모든 글은 더미데이터임'
                    timestamp='13분 전'
                    vote={20}
                    comment={4}
                    isMainCard
                />
            </CardRightComponent>

            <CardRightComponent title='자료게시판'>
                <CardRightItemList timestamp='1시간 전' content='7/25 이상섭 멘토님 강의자료 + 기타자료' />
                <CardRightItemList timestamp='하루 전' content='7/24 조성재 멘토님 강의 필기' />
                <CardRightItemList timestamp='하루 전' content='flex & bison으로 Calculator 만드는 방법' />
                <CardRightItemList timestamp='2일 전' content='블록체인 추천 논문들 + 요약집' />
            </CardRightComponent>

            <CardRightComponent title='트랙 별 게시판'>
                <CardRightItemArticle
                    content='히히 아침수업 힘들당'
                    timestamp='8분 전'
                    vote={20}
                    comment={12}
                    isMainCard
                />
                <CardRightItemArticle
                    content='이상한 친구들 제발 따로 게시판 만들어라 엉?? ^^;;;'
                    timestamp='22분 전'
                    vote={5}
                    comment={36}
                    isMainCard
                />
            </CardRightComponent>
        </div>
    );
};

export default MainSection;
