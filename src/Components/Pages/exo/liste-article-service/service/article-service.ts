import { Injectable } from '@angular/core';
import { Article } from '../../../../shared/Models/article.model';
import { ArticleServiceModel } from '../../../../shared/Models/article-service.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  listArticle : ArticleServiceModel[] = [];

  getArticles(): ArticleServiceModel[] {
    return this.listArticle;
  }

  addArticle(article: ArticleServiceModel) {
    article.id = this.listArticle.length + 1;
    this.listArticle.push(article);
  }

  deleteArticle(id: number) {
    this.listArticle = this.listArticle.filter(article => article.id !== id);
  }

  addQuantity(id: number) {
    const article = this.listArticle.find(article => article.id === id);
    if (article) {
      article.quantity += 1;
    }
  }

    removeQuantity(id: number) {
    const article = this.listArticle.find(article => article.id === id);
    if (article) {
      article.quantity -= 1;
    }
  }

}
