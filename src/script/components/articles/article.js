import React from 'react'
import {Link} from 'react-router'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import { withRouter } from 'react-router';
import marked from 'marked'

@observer
class ArticlePage extends React.Component {
    render(){
        const article = this.props.article;

        const markup = { __html: marked(article.body, { sanitize: true }) };
        return(
            <div className="article-page">
                <div className="banner">
                    <div className="container">
                        <h1>{article.title}</h1>
                        <div className="article-meta">

                            <Link to={`@${article.author.username}`}>
                                <img src={article.author.image} role="presentation" />
                            </Link>

                            <div className="info">
                                <Link className="author" to={`@${article.author.username}`}>
                                    {article.author.username}
                                </Link>
                        <span className="date">
                            {new Date(article.createdAt).toDateString()}
                        </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container page">
                    <div className="row article-content">
                        <div className="col-xs-12">
                            {<div dangerouslySetInnerHTML={markup} />}
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}

@inject('articlesStore')
@observer
class Article extends React.Component {

    componentWillMount() {
        const slug = this.props.params.id;
        this.props.articlesStore.downloadArticle(slug);

    }

    render() {
        const article = this.props.articlesStore.articles;

        return (
            <div>
                {
                    article.map(value=>{
                        return(
                            <ArticlePage article={value.article} key={value.article.slug} />
                        )})
                }
            </div>
        );
    }
}

export default Article;