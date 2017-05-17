import React from 'react'
import {Link} from 'react-router'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'

import agent from '../../agent'

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

@observer
class ArticlesList extends React.Component {

    render(){
        const {articles} = this.props;
        const favoriteButtonClass = articles.favorited ? FAVORITED_CLASS : NOT_FAVORITED_CLASS;
        
        return(
            <div className="article-preview">
                <div className="article-meta">

                    <Link to={`@${this.props.articles.author.username}`}>
                        <img src={this.props.articles.author.image} role="presentation" />
                    </Link>

                    <div className="info">
                        <Link className="author" to={`@${this.props.articles.author.username}`}>
                          {this.props.articles.author.username}
                        </Link>
                        <span className="date">
                            {new Date(this.props.articles.createdAt).toDateString()}
                        </span>
                    </div>

                    <div className="pull-xs-right">
                        <button className={favoriteButtonClass} onClick={this.handleClickFavorite}>
                            <i className="ion-heart" /> {this.props.articles.favoritesCount}
                        </button>
                    </div>
                </div>

                <Link to={`article/${this.props.articles.slug}`} className="preview-link">
                  <h1>{this.props.articles.title}</h1>
                  <p>{this.props.articles.description}</p>
                  <span>Read more...</span>
                  
                </Link>
                
            </div>

        )
    }
}

@inject('articlesStore')
@observer
class Preview extends React.Component{

    componentWillMount() {
        this.props.articlesStore.downloadAll();
   
    }

    @action newArticle = () => {
        this.props.articles.addArticle();
    };

    render(){
        const {articles} = this.props;

        if(articles.length == 0){

            return(
                <div>No Articles Yet
                    <button onClick={this.newArticle}>Add</button>
                </div>

            )
        }
        return (
            <div>
                {
                    articles.articles.map((values)=>{
                        return(
                            <ArticlesList articles={values} key={values.slug} />
                        )}
                    )
                }
            </div>
        );
    }
}

export default Preview;