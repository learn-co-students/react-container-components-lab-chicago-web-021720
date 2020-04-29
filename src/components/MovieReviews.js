// Code MovieReviews Here
import React, {Fragment} from 'react'

const MovieReviews = (props) => {
    console.log(props.reviews)
    const renderReviews = (props) => {
        if (props.reviews.length === 0){
            return "LOADING..."
        } else {
            return props.reviews.map(review => {
                return <div className="review" key={review.display_title}>{review.display_title}</div>
            })
        }

    }

    return (
        <div className="review-list" >
            <div> {renderReviews(props)} </div>
        </div>
    )
}

export default MovieReviews