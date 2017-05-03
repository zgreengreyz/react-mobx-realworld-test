import { observable } from 'mobx-react'
class ArticleStore {
	@observable const articles = []

	addArticle(title){
		this.articles.push({
			title: title,
			body: 'body',
			date: Date()
		});
	}

}

export default ArticleStore