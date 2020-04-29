import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleInput(e){
        this.setState({
            searchTerm: e.target.value
        })

    }
    handleSubmit(e){
        e.preventDefault()
        fetch(URL + '&query=' + this.state.searchTerm)
        .then(r=>r.json())
        .then(reviews => {
            this.setState({
                reviews: reviews.results
            })
        })
    }

    render(){
        return<div className="searchable-movie-reviews">
            <form onSubmit={e => this.handleSubmit(e)}>
                <input onChange={this.handleInput.bind(this)} type="text" placeholder="search reviews" value={this.state.searchTerm}/>
                <input type="submit" />
            </form>
            {this.state.reviews.length > 0 ?
                <MovieReviews reviews={this.state.reviews}/>
                :
                <h5>No Results</h5>
            }
        </div>

    }
}