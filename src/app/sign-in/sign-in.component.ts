import { Component } from '@angular/core';
import { PreInsComponent } from '../pre-ins/pre-ins.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [PreInsComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(private router: Router) {}

  verifier(event: Event): void {
    const aemail = (document.getElementById('aemail') as HTMLInputElement).value;
    const mdpValue = (document.getElementById('password') as HTMLInputElement).value;
    if ( ! mdpValue.toString() && ! aemail.toString() ) {
      alert('Veuillez saisir votre E-mail et votre mot de passe');

    }
    else if (! aemail.toString()) {
      alert('Veuillez saisir votre E-mail');
    } 
    else if ( ! mdpValue.toString()) {
      alert('Veuillez saisir votre mot de passe');
    }
    else if(mdpValue.toString()=="ahmed" && aemail.toString()=="ahmedfourati@ieee.org"){
      this.router.navigate(['/pre-ins']);
    }
    else {
      alert('Identifiants incorrects');
    }
  }

}
