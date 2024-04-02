import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  envoyerEmail(nom: string, prenom: string, classe: string, message: string) {
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('prenom', prenom);
    formData.append('classe', classe);
    formData.append('message', message);

    return this.http.post<any>('http://localhost:3000/envoyer-email', formData);
  }
}
