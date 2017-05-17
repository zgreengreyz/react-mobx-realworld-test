import { observable, action } from 'mobx'
import agent from '../agent'

class ArticleStore {
    @observable articles = observable([]);

    @action addArticle(){
        return agent.Articles.all(0, 10)
            .then(action(( articles => {
                this.articles = articles;
            })));
    }

    getArticles(){
    	return this.articles
    }

    @action clear(){
    	this.articles = []
    }

    @action downloadArticle(slug){
        return agent.Articles.get(slug)
	      	.then(action( articles => {
	      		this.clear();
	      		this.articles.replace([articles]);
	      		
	    }))
    }

    @action downloadAll(){
        return agent.Articles.all(0, 10)
        	.then(action(articles => {
        		this.clear();
        		this.articles = articles
        }))
    }
}


var store = window.store = new ArticleStore()
export default store;