import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=12396e2d4a6749398a2cf1753c421f66" ;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles})
    }

  render() {
    return (
      <div className='container my-3'>
          <h2>NewsKing - Top Headlines</h2>
          <div className="row my-3">
              {this.state.articles.map((element)=>{
                  return <div className="col-md-4 my-3"  key={element.url}>
                         <NewsItem title ={element.title?element.title.slice(0,40):""} description = {element.description?element.description.slice(0,80):""} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
                         </div>
              })}
              
          </div>
          

      </div>
    )
  }
}
