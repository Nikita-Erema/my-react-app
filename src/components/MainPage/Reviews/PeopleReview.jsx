
export function PeopleReview({ text, imgSrc, name}) {
    return (
        <div className="people-review">
            <img src={imgSrc} alt='people'></img>
            <div className="text-people-review">
                <h2 className="name-people-review">{name}</h2>
                <p className="main-text-people-review">
                    {text}
                </p>
            </div>
        </div>
    )
}