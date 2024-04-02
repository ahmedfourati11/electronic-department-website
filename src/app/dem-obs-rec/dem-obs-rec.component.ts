import { Component } from '@angular/core';
import { SousNavbarComponent } from '../sous-navbar/sous-navbar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormGroup,FormBuilder } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-dem-obs-rec',
  standalone: true,
  imports: [SousNavbarComponent,ReactiveFormsModule],
  templateUrl: './dem-obs-rec.component.html',
  styleUrl: './dem-obs-rec.component.css'
})
export class DemObsRecComponent {


  form: FormGroup =this.fb.group({
    nom_prenom:'',
    sujet:'',
    add_mail:'',
    message:''
  });

  constructor(private fb:FormBuilder) { };

  async send(){
    emailjs.init('U7pkhEw1bXY7Svd_h');
   let response = await emailjs.send("service_hpiodtv","template_r380nhi",{
      nom_prenom: this.form.value.nom_prenom,
      add_mail: this.form.value.add_mail,
      sujet: this.form.value.sujet,
      message: this.form.value.message,
      });
      alert('Votre réponse a été envoyée avec succès. Mrs/Mme Chef du Département Électronique vous répondra très prochainement.');
      this.form.reset();
  }

}
