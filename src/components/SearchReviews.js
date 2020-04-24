import React from 'react'

const SearchReviews = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} type="text" value={props.query}/>
            <input type="submit" value="Search Reviews"/>
        </form>
    )
}

export default SearchReviews