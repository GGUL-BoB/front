import GlobalHeader from '@Components/nav';
import GlobalSubMenu from '@Components/GlobalSubMenu';
import GlobalFooter from '@Components/GlobalFooter';
import RightSection from '@Components/RightSection';
import AsideComponent from '@Components/AsideComponent';
import MainBodySection from '@Components/MainBodySection';
import BoardBodySection from '@Components/BoardBodySection';

import '@Styles/common/partial.scss';
import '@Styles/container/community.scss';

const MainPage = ({ location }) => {
    const isBoard = location.pathname === '/board';

    const containerClassName = isBoard ? 'article' : 'community';

    return (
        <>
            <nav>
                <GlobalHeader />
            </nav>

            <div id='submenu'>
                <GlobalSubMenu />
            </div>

            <div id='container' className={containerClassName}>
                <RightSection />
                <AsideComponent />
                {isBoard ? <BoardBodySection /> : <MainBodySection />}
                <hr />
            </div>

            <GlobalFooter />
        </>
    );
};

export default MainPage;
