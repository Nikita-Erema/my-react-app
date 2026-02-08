import './Reviews.css';

export function ReviewsComponent() {

    return ( 
        <div className="review-box">
            <h1 className="review-title">отзывы</h1>
            <div className="people-review">
                <img src='' alt='people'></img>
                <div className="text-people-review">
                    <h2 className="name-people-review">Иван Иванов</h2>
                    <p className="job-people-review">Менеджер по продажам</p>
                    <p className="main-text-people-review">
                        Заказывал билеты через этот сайт, все прошло быстро и удобно. 
                        Цены ниже чем в кассах на вокзале, что приятно удивило. 
                        Рекомендую всем пользоваться этим сервисом!
                    </p>
                </div>
            </div>
            <div className="change-people-review">
                <ul className="circle-change-review">
                    <li className="circle-review active-circle-review"></li>
                    <li className="circle-review"></li>
                    <li className="circle-review"></li>
                    <li className="circle-review"></li>
                    <li className="circle-review"></li>
                </ul>
            </div>
        </div>
    )
}