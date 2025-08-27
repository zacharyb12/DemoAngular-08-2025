import { Component } from '@angular/core';
import { Input } from "../input/input";
import { Article } from '../../../../shared/Models/article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-article',
  imports: [
    Input,
    CommonModule
  ],
  templateUrl: './liste-article.html',
  styleUrl: './liste-article.css'
})
export class ListeArticle {

listArticle : Article[] = [];

onArticleAdded(article: Article) {
  article.id = this.listArticle.length + 1;
  this.listArticle.push(article);
}

removeArticle(id: number) {
  this.listArticle = this.listArticle.filter(article => article.id !== id);
}


}
