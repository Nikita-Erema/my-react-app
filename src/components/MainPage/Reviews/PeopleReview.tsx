type PeopleReviewProps = {
	name: string;
	imgSrc: string;
	text: string;
};

export const PeopleReview: React.FC<PeopleReviewProps> = ({
	name,
	imgSrc,
	text,
}) => {
	return (
		<div className="people-review">
			<img src={imgSrc} alt={name} />
			<div className="text-people-review">
				<h2 className="name-people-review">{name}</h2>
				<p className="main-text-people-review">{text}</p>
			</div>
		</div>
	);
};
