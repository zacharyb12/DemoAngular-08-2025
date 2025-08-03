import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Loginservice {
  
  constructor(
    private httpClient: HttpClient,
  ) { }


  login(username: string, password: string): boolean {
    console.log('hello service')

    // return this.httpClient.get(`https://dog.ceo/api/breeds/image/random`);
   
    // .subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     console.error('Erreur lors de la requête :', err);
    //     // this.userRole.set(localStorage.getItem('role') || '');
    //     // this.isLogged.set(true);
    //     // this.isOpen = false;
    //   },
    //     complete: () => {
    //       console.log('Request completed');
    // }})
    
        if (username === 'admin' && password === 'admin') {
          localStorage.setItem('role', 'admin');
          return true;
        }
      
        if (username === 'user' && password === 'user') {
          localStorage.setItem('role', 'user');
          return true;
        }
      return false;
}
  

  logout(): void {
    localStorage.clear();
  }
  
}
