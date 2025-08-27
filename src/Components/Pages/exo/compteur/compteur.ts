import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  imports: [],
  templateUrl: './compteur.html',
  styleUrl: './compteur.css'
})
export class Compteur {

    chronoSecondes: number = 55;
    chronoMinutes: number = 59;
    chronoHeures: number = 0;
  intervale: any | null;
  enCours: boolean = false;


  play(): void{
    this.intervale = setInterval(
      ()=> {
        this.chronoSecondes++;
        if (this.chronoSecondes === 60) {
          this.chronoSecondes = 0;
          this.chronoMinutes++;
          if (this.chronoMinutes === 60) {
            this.chronoMinutes = 0;
            this.chronoHeures++;
          }
        }
      },
      1000
    );
    this.enCours = true;
  }
  
  pause(): void{
    clearInterval(this.intervale);
    this.enCours = false;
  }
  
  reset(): void{
    this.pause();
    this.chronoSecondes = 0;
    this.chronoMinutes = 0;
    this.chronoHeures = 0;
  }

}
