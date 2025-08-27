import { Component, inject, Inject } from '@angular/core';
import { Article } from '../../../../shared/Models/article.model';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleService } from '../service/article-service';
import { ArticleServiceModel } from '../../../../shared/Models/article-service.model';

@Component({
  selector: 'app-input-article-service',
  imports: [
    FormsModule,
    NgStyle
  ],
  templateUrl: './input-article-service.html',
  styleUrl: './input-article-service.css'
})
export class InputArticleService {

  private readonly articleService = inject(ArticleService);

article : ArticleServiceModel = { id: 0, title: '', price: 0, description: '' ,quantity:0};
errorMessage: string = '';

onSubmit() {
  if(this.isCorrect()){
    this.articleService.addArticle(this.article);
    this.article = { id: 0, title: '', price: 0, description: '' ,quantity:0};
  }
  else{
    this.errorMessage = 'Veuillez remplir tous les champs correctement.';
  }
}


isCorrect(): boolean {
  return this.article.title.trim() !== '' && this.article.price > 0 && this.article.description.trim() !== '';
}
}
