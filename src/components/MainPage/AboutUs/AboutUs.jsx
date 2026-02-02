import './AboutUs.css';

export function AboutUsComponent() { 
    return (
        <div className='about-us-box'>
            <h2 className='about-us-title' id='about-us'>О нас</h2>
            <div className='about-us-text-box'>
                <p className='about-us-text'>
                    Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем 
                    все больше людей заказывают жд билеты через интернет.
                </p>
                <p className='about-us-text'>
                    Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? 
                    Мы расскажем о преимуществах заказа через интернет.
                </p>
                <p className='about-us-text-bolder'>
                    Покупать жд билеты дешево можно за 90 суток до отправления поезда. 
                    Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
                </p>
            </div>
        </div>
    );
}