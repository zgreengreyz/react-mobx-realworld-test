import { observable } from 'mobx-react'
class ArticleStore {
	@observable article = [];

	addArticle(){
		this.article.push({
			title: title,
			body: body,
			date: Date()
		})
	}
}

export default ArticleStore