import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DogResponse } from '../../shared/Models/dog.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(
    private http: HttpClient
  ) { }

getDog(): Observable<{ message: string, status: string }> {
  return this.http.get<DogResponse>('https://dog.ceo/api/breeds/image/random');
}

postDog(dog : string) : Observable<Boolean>{
  return this.http.post<Boolean>('https://dog.ceo/api/breeds/image/random', { message: dog });
}

  getDogByBreed(breed: string): Observable<{ message: string, status: string }> {
    return this.http.get<DogResponse>(`https://dog.ceo/api/breed/${breed}/images/random`);
  }

  getAllBreeds(): Observable<{ message: string[], status: string }> {
    return this.http.get<{ message: string[], status: string }>('https://dog.ceo/api/breeds/list/all');
  }

  getBreedImages(breed: string): Observable<{ message: string[], status: string }> {
    return this.http.get<{ message: string[], status: string }>(`https://dog.ceo/api/breed/${breed}/images`);
  }
}
