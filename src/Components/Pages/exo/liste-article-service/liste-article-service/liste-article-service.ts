import { Component, inject, Inject, OnInit } from '@angular/core';
import { Article } from '../../../../shared/Models/article.model';
import { ArticleService } from '../service/article-service';
import { InputArticleService } from "../input-article-service/input-article-service";
import { ArticleServiceModel } from '../../../../shared/Models/article-service.model';

@Component({
  selector: 'app-liste-article-service',
  imports: [
    InputArticleService
  ],
  templateUrl: './liste-article-service.html',
  styleUrl: './liste-article-service.css'
})
export class ListeArticleService implements OnInit{

private readonly articleService = inject(ArticleService)

listArticle : ArticleServiceModel[] = [];

ngOnInit() {
  this.getArticles();
}

removeArticle(id: number) {
  this.articleService.deleteArticle(id);
  this.getArticles();
}

getArticles(){
  this.listArticle = this.articleService.getArticles();
}

updateQuantity(id: number) {
  this.articleService.addQuantity(id);
  this.getArticles();
}

removeQuantity(id: number) {
  this.articleService.removeQuantity(id);
  this.getArticles();
}

}
