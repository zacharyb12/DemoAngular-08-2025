import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from '../../../../shared/Models/article.model';
import { CommonModule, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [
    CommonModule,
    FormsModule,
    NgStyle
  ],
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class Input {

@Output() sendValue = new EventEmitter<Article>();

article : Article = { id: 0, title: '', price: 0, description: '' };
errorMessage: string = '';

onSubmit() {
  if(this.isCorrect()){
    this.sendValue.emit(this.article);
    this.article = { id: 0, title: '', price: 0, description: '' };
  }
  else{
    this.errorMessage = 'Veuillez remplir tous les champs correctement.';
  }
}


isCorrect(): boolean {
  return this.article.title.trim() !== '' && this.article.price > 0 && this.article.description.trim() !== '';
}

}
