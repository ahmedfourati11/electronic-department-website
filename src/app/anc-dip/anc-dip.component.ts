import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-anc-dip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anc-dip.component.html',
  styleUrl: './anc-dip.component.css'
})
export class AncDipComponent {

  showDescriptions: boolean[] = [];
  rotatedStates: boolean[] = [];

  toggleDescription(index: number) {
    this.showDescriptions[index] = !this.showDescriptions[index];
  }

  rotateImage(index: number) {
    this.rotatedStates[index] = !this.rotatedStates[index];
  }

  anc_dip:any[]=[
    {nom_prenom:'Ahmed Fourati',ann_obt_dip:'2025',soc_trav_act:'SOFRECOM',poste_occupee:'Génie logiciel',add_mail:'ahmed.fourati@enetcom.u-sfax.tn',linkedin:'https://www.linkedin.com/in/ahmed-fourati-a4488a252/',description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam, vitae consequuntur recusandae quia sapiente deserunt quis atque a quo quibusdam repellat placeat quisquam incidunt possimus molestias harum earum similique.Quas, doloribus? Eius corporis, et corrupti atque qui sapiente quas provident, necessitatibus dolores delectus aperiam placeat. Voluptatibus, odit excepturi nam pariatur obcaecati dolorem corrupti reiciendis similique, soluta autem assumenda beatae."]},

    {nom_prenom:'Ahmed Fourati',ann_obt_dip:'2025',soc_trav_act:'SOFRECOM',poste_occupee:'Génie logiciel',add_mail:'ahmed.fourati@enetcom.u-sfax.tn',linkedin:'https://www.linkedin.com/in/ahmed-fourati-a4488a252/',description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam, vitae consequuntur recusandae quia sapiente deserunt quis atque a quo quibusdam repellat placeat quisquam incidunt possimus molestias harum earum similique.Quas, doloribus? Eius corporis, et corrupti atque qui sapiente quas provident, necessitatibus dolores delectus aperiam placeat. Voluptatibus, odit excepturi nam pariatur obcaecati dolorem corrupti reiciendis similique, soluta autem assumenda beatae."]},

    {nom_prenom:'Ahmed Fourati',ann_obt_dip:'2025',soc_trav_act:'SOFRECOM',poste_occupee:'Génie logiciel',add_mail:'ahmed.fourati@enetcom.u-sfax.tn',linkedin:'https://www.linkedin.com/in/ahmed-fourati-a4488a252/',description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam, vitae consequuntur recusandae quia sapiente deserunt quis atque a quo quibusdam repellat placeat quisquam incidunt possimus molestias harum earum similique.Quas, doloribus? Eius corporis, et corrupti atque qui sapiente quas provident, necessitatibus dolores delectus aperiam placeat. Voluptatibus, odit excepturi nam pariatur obcaecati dolorem corrupti reiciendis similique, soluta autem assumenda beatae."]},
    
    {nom_prenom:'Ahmed Fourati',ann_obt_dip:'2025',soc_trav_act:'SOFRECOM',poste_occupee:'Génie logiciel',add_mail:'ahmed.fourati@enetcom.u-sfax.tn',linkedin:'https://www.linkedin.com/in/ahmed-fourati-a4488a252/',description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam, vitae consequuntur recusandae quia sapiente deserunt quis atque a quo quibusdam repellat placeat quisquam incidunt possimus molestias harum earum similique.Quas, doloribus? Eius corporis, et corrupti atque qui sapiente quas provident, necessitatibus dolores delectus aperiam placeat. Voluptatibus, odit excepturi nam pariatur obcaecati dolorem corrupti reiciendis similique, soluta autem assumenda beatae."]},
  ];

}
