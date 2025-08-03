import { Component, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObservableService } from '../../../services/observable/observable-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http/http-service';

@Component({
  selector: 'app-demo-http-client',
  imports: [
        CommonModule,
    FormsModule,
  ],
  templateUrl: './demo-http-client.html',
  styleUrl: './demo-http-client.css'
})
export class DemoHttpClient {
// Observable Simulé avec behaviorSubject

  list : string[] = [];

  mySubscripition! : Subscription;

  constructor(
    private service : ObservableService,
    private dogService: HttpService,
  ) { 
    this.loadBreeds();
  }

    unsubscribe(){
    this.mySubscripition.unsubscribe();
  }



  //##############################################################################################################

  // HttpClient

  dogString = signal<string>('');
  


  getDog() {
    let responseValue = '';
    this.dogService.getDog().subscribe({
      next: (response) => {
response.message ? this.dogString.set(response.message) : this.dogString.set('No dog image found');
        console.log('Dog image URL:', response.message);
        responseValue = response.status;
      },
      error: (error) => {
       console.error('Error fetching dog image:', error);
       console.error('Error status:', error.status);
      },
      complete: () => {
       console.log('Dog image fetch complete');
       console.log('Response status:', responseValue);
      }
    });
  }

  dog = signal<string>('');  // pour getDog
  breedDog = signal<string>(''); // pour getDogByBreed
  breeds = signal<string[]>([]); // pour getAllBreeds
  breedImages = signal<string[]>([]); // pour getBreedImages
  selectedBreed = ''; // modèle lié au select
  dogToPost = ''; // input pour post
  postStatus = signal<boolean | null>(null); // retour du post



  loadRandomDog() {
    this.dogService.getDog().subscribe({
      next: res => {
        if (res.status === 'success') this.dog.set(res.message);
      },
      error: err => console.error('Erreur getDog:', err)
    });
  }

  loadDogByBreed() {
    if (!this.selectedBreed) return;
    this.dogService.getDogByBreed(this.selectedBreed).subscribe({
      next: res => {
        if (res.status === 'success') this.breedDog.set(res.message);
      },
      error: err => console.error('Erreur getDogByBreed:', err)
    });
  }

  loadBreeds() {
    this.dogService.getAllBreeds()
    .pipe((data) => {
      console.log('getAllBreeds data:', data);
      return data;
    })
    .subscribe({
      next: res => {
        if (res.status === 'success') {
          // res.message est un objet clé => tableau
          this.breeds.set(Object.keys(res.message));
        }
      },
      error: err => console.error('Erreur getAllBreeds:', err)
    });
  }

  loadBreedImages() {
    if (!this.selectedBreed) return;
    this.dogService.getBreedImages(this.selectedBreed)
    .subscribe({
      next: res => {
        if (res.status === 'success') this.breedImages.set(res.message);
      },
      error: err => console.error('Erreur getBreedImages:', err)
    });
  }

  postDog() {
    if (!this.dogToPost.trim()) return;
    this.dogService.postDog(this.dogToPost).subscribe({
      next: res => this.postStatus.set(Boolean(res.valueOf())),
      error: err => {
        console.error('Erreur postDog:', err);
        this.postStatus.set(false);
      }
    });
  }
}
