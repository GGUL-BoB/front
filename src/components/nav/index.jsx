const GlobalHeader = () => {
    return (
        <div className='wrap'>
            <div id='logo'>
                <a href='/'>
                    <img
                        src='https://media.discordapp.net/attachments/802076592825827332/869027652672049162/tempBoBAI.png'
                        alt=''
                    />
                </a>
                <p>
                    <span className='name multiple'>밥브리타임</span>
                    <span className='subname'>보안제품개발 트랙</span>
                </p>
            </div>
            <div id='account'>
                <NavAccountItem title='쪽지함' name='icon message' href='/m' />
                <NavAccountItem title='내 정보' name='icon my' href='/' />
            </div>
            <ul id='menu'>
                <MenuListItem name='게시판' href='/' />
                <MenuListItem name='자료실' href='/' />
                <MenuListItem name='BoB페이지' href='/' />
                <MenuListItem name='BoB Wiki' href='/' />
            </ul>
        </div>
    );
};

const NavAccountItem = props => {
    const { name: className, title, href } = props;

    const iconProps = {
        className,
        title,
        href,
    };

    return <a {...iconProps}>{title}</a>;
};

const MenuListItem = props => {
    const { name: menuName, href } = props;
    const isNowTab = menuName === '게시판';

    return (
        <li className={isNowTab ? 'active' : ''}>
            <a href={href}>{menuName}</a>
        </li>
    );
};

export default GlobalHeader;
