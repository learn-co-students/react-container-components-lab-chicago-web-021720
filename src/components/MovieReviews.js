import React from 'react'
import MovieReview from './MovieReview'

const MovieReviews = props => {
    const renderReview = review => {
        return (
            <div className="review">
                <img src={review.multimedia.src} />
                <h2>{review.headline}</h2>
                <h3>By {review.byline}</h3>
                <p>{review.summary_short}</p>
                <a href={review.link.url}>{review.link.suggested_link_text}</a>
                <h4>{review.display_title}</h4>
                <p>Rated {review.mpaa_rating}</p>
                <p>Opens {review.opening_date}</p>
            </div>
        )
    }

    return (
        <div className="review-list">
            {props.reviews.map(review => renderReview(review))}
        </div>
    )
}

export default MovieReviews