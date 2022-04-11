import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div class="card">
                    <img src={imageUrl?imageUrl:"https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?k=20&m=1290904409&s=170667a&w=0&h=6t4FlTWN524XdT4cQ-NiAV0t6BDxGVJZfFHbLwSrVJY="} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}...</h5>
                        <p class="card-text">{description}...</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" class="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem