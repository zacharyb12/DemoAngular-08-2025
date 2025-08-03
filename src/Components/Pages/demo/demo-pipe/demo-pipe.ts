import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmojiFormatPipe } from "../../../shared/pipes/emoji/emoji-format-pipe";
import { TofahrenheitPipe } from "../../../shared/pipes/temp/tofahrenheit-pipe";
import { TocelciusPipe } from '../../../shared/pipes/temp/tocelcius-pipe';

@Component({
  selector: 'app-demo-pipe',
  imports: [
    FormsModule,
    CommonModule,
    EmojiFormatPipe,
    TofahrenheitPipe,
    TocelciusPipe
],
  templateUrl: './demo-pipe.html',
  styleUrl: './demo-pipe.css'
})
export class DemoPipe {

  bonjour : string = "hello world !";

  prix : number = 12.6548576;

  ajd : Date = new Date();


  personne : any = {
    prenom : 'John',
    nom : 'Doe',
    dateNaissance : new Date('1980-01-20')
  }

  //Pour les pipe personnalisé
  pipePerso : string = '';

  tempToFahrenheit : number = 0;
  tempToCelsius : number = 0;
}
