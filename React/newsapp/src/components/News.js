import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

    static defaultProps={
        country: "in",
        pageSize: 9,
        category: "general"
    }

    static propTypes = {
        country : PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page : 1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=12396e2d4a6749398a2cf1753c421f66&page=1&pageSize=${this.props.pageSize}` ;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles})
        this.setState({articles:parsedData.articles, 
                       totalResults: parsedData.totalResults,
                       loading: false})
    }

    handlePrevious = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=12396e2d4a6749398a2cf1753c421f66&page=${this.state.page-1}&pageSize=${this.props.pageSize}` ;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles})
        this.setState({
            page: this.state.page - 1,
            loading: false
        })
    }

    handleNext = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=12396e2d4a6749398a2cf1753c421f66&page=${this.state.page+1}&pageSize=${this.props.pageSize}` ;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles})
        this.setState({
            page: this.state.page + 1,
            loading: false
        })
    }

  render() {
    return (
      <div className='container my-3'>
          <h2 className='text-center'>NewsKing - Top Headlines</h2>
          {this.state.loading && <Spinner/>}
          <div className="row my-3">
              {!this.state.loading && this.state.articles.map((element)=>{
                  return <div className="col-md-4 my-3"  key={element.url}>
                         <NewsItem title ={element.title?element.title.slice(0,40):""} description = {element.description?element.description.slice(0,80):""} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
                         </div>
              })}
              
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
          <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
          </div>

      </div>
    )
  }
}
