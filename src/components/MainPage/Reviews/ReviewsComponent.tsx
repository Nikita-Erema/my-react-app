import { PeopleReview } from "./PeopleReview";
import "./ReviewsStyle.css";

export function ReviewsComponent() {
	const mockReviews = [
		{
			name: "Екатерина Вальнова",
			imgSrc: "/b9b8b89d2fec5f0f798b8787930c80dd5d6472af.png",
			text: "Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить билет онлайн даже если вы заказываете впервые.",
		},
		{
			name: "Евгений Стрыкало",
			imgSrc: "/9a94671aadb42ec0d354460adb5d422bc34dc958.png",
			text: "СМС-сопровождение до посадки. Сразу после оплаты и за 3 часа до отправления приходят СМС-напоминания о поездке.",
		},
	];

	return (
		<div className="review-box">
			<div>
				<h1 className="review-title" id="reviews">
					отзывы
				</h1>
			</div>

			<div className="people-list">
				{mockReviews.map((r) => (
					<PeopleReview
						key={r.name}
						name={r.name}
						imgSrc={r.imgSrc}
						text={r.text}
					/>
				))}
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
	);
}
