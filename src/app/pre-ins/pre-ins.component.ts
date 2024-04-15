import { Component } from '@angular/core';
import { SousNavbarComponent } from '../sous-navbar/sous-navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemObsRecComponent } from '../dem-obs-rec/dem-obs-rec.component';


@Component({
  selector: 'app-pre-ins',
  standalone: true,
  imports: [SousNavbarComponent,CommonModule,RouterModule,DemObsRecComponent],
  templateUrl: './pre-ins.component.html',
  styleUrl: './pre-ins.component.css'
})
export class PreInsComponent {

groupes:any[]=[
  {classe:'1 LTIC 1',email:'ahmedfourati@ieee.org'},
  {classe:'1 LTIC 2',email:'ahmedfourati@ieee.org'},
  {classe:'2 Telecom',email:'ahmedfourati@ieee.org'},
  {classe:'2 IOT',email:'ahmedfourati@ieee.org'},
  {classe:'3 Telecom',email:'ahmedfourati@ieee.org'},
  {classe:'3 IOT',email:'ahmedfourati@ieee.org'},
  {classe:'1 Mastére SE',email:'ahmedfourati@ieee.org'},
  {classe:'1 Mastére',email:'ahmedfourati@ieee.org'},
  {classe:'2 Mastére SE',email:'ahmedfourati@ieee.org'},
  {classe:'2 Mastére',email:'ahmedfourati@ieee.org'},
  {classe:'1 GEC 1',email:'ahmedfourati@ieee.org'},
  {classe:'1 GEC 2',email:'ahmedfourati@ieee.org'},
  {classe:'1 GEC 3',email:'ahmedfourati@ieee.org'},
  {classe:'2 GEC 1',email:'ahmedfourati@ieee.org'},
  {classe:'2 GEC 2',email:'1gec220222023@gmail.com'},
  {classe:'2 GEC 3',email:'ahmedfourati@ieee.org'},
  {classe:'3 GEC SE',email:'ahmedfourati@ieee.org'},
  {classe:'3 GEC SEI',email:'ahmedfourati@ieee.org'},
  {classe:'3 GEC SC',email:'ahmedfourati@ieee.org'}
];



}
