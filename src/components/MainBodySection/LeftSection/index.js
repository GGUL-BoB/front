const LeftSection = () => {
    return (
        <div class='leftside'>
            <div class='card pconly'>
                <form class='logged'>
                    <img src='https://cf-fpi.everytime.kr/0.png' class='picture' />
                    <p class='nickname'>김득수</p>
                    <p class='school'>BoB 멘티</p>
                    <ul class='buttons'>
                        <li>
                            <a href='/my'>내 정보</a>
                        </li>
                        <li>
                            <a href='/user/logout'>로그아웃</a>
                        </li>
                    </ul>
                    <hr />
                </form>
            </div>
            <div class='card'>
                <div class='menus'>
                    <a href='/myarticle' class='myarticle'>
                        내가 쓴 글
                    </a>
                    <a href='/mycommentarticle' class='mycommentarticle'>
                        댓글 단 글
                    </a>
                    <a href='/myscrap' class='myscrap'>
                        내 스크랩
                    </a>
                    <hr />
                </div>
            </div>
            <div class='card'>
                <div class='banner'>
                    <a href='https://ad.everytime.kr/adClick?adToken=d2zAZV8vTEQ0p6Jp%2BmlFZ2lO7E7uJ%2FKYwFOVrvGgZv%2BTEn94JaIj0gekQKKDD7vs2LiTQejhYUo3gZQfkqdBRG%2BjOu2pgTwsYPMU8dAerMG79xcVL1QLzDGexaJmlB%2F4HSrn9lqzJ%2BlRJvEoLGNQ773XZOFxh3%2BimTHTP2L3L6MFrv3opFlqkawLdLRoCPPb%2FzmbSwEkpINM9l%2F6dhBKab6Io6bKpFW%2Fchb8XEg2HhC%2FMXev5tFBBi6hQucXI8vO'>
                        <img src='https://cf-eba.everytime.kr/20210726_Netflix_Olympics_AM_card.jpg' />
                    </a>
                </div>
            </div>
            <div class='card'>
                <div class='banner'>
                    <a href='https://ad.everytime.kr/adClick?adToken=d2zAZV8vTEQ0p6Jp%2BmlFZ2lO7E7uJ%2FKYwFOVrvGgZv%2BTEn94JaIj0gekQKKDD7vs2LiTQejhYUo3gZQfkqdBRG%2BjOu2pgTwsYPMU8dAerMG79xcVL1QLzDGexaJmlB%2F4HSrn9lqzJ%2BlRJvEoLGNQ773XZOFxh3%2BimTHTP2L3L6MFrv3opFlqkawLdLRoCPPb%2FzmbSwEkpINM9l%2F6dhBKaaRPH4GBUIllxFVfduhHQtOdTjOYGTkOqQjUkuNQOQG5'>
                        <img src='https://cf-eba.everytime.kr/20210726_KSA_NIPA_card.jpg' />
                    </a>
                </div>
            </div>
            <div class='card'>
                <div class='banner'>
                    <a href='https://ad.everytime.kr/adClick?adToken=d2zAZV8vTEQ0p6Jp%2BmlFZ2lO7E7uJ%2FKYwFOVrvGgZv%2BTEn94JaIj0gekQKKDD7vs2LiTQejhYUo3gZQfkqdBRG%2BjOu2pgTwsYPMU8dAerMG79xcVL1QLzDGexaJmlB%2F4HSrn9lqzJ%2BlRJvEoLGNQ773XZOFxh3%2BimTHTP2L3L6Op6ncS2svSZhicPPikF%2FT93%2B88N%2FWZGiTzWV9qYBZ%2BpuaAi3IalhA7vIs429hrrC8acy0FtR1X5%2BSWzHVQrkZz'>
                        <img src='https://cf-eba.everytime.kr/20210720_applewatch_card.jpg' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LeftSection;
