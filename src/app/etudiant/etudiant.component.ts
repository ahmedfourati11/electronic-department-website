import { Component } from '@angular/core';
import { EmailService } from '../email.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ReactiveFormsModule],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {

  form: FormGroup =this.fb.group({
    nom_prenom:'',
    classe:'',
    add_mail:'',
    message:''
  });

  constructor(private fb:FormBuilder) { };

  async send(){
    emailjs.init('U7pkhEw1bXY7Svd_h');
   let response = await emailjs.send("service_hpiodtv","template_1tb51ub",{
      nom_prenom: this.form.value.nom_prenom,
      classe: this.form.value.classe,
      add_mail: this.form.value.add_mail,
      message: this.form.value.message,
      });
      alert('Votre réponse a été envoyée avec succès. Mrs/Mme Chef du Département Électronique vous répondra très prochainement.');
      this.form.reset();
  }


}
