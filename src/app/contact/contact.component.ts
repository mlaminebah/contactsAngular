import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition,animate} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('contactsAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(-100px)', opacity: '0'}),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  contacts = [{"first_name":"Tatum","last_name":"Vernon","email":"tvernon0@lycos.com","gender":"Female","company":"Youopia"},
  {"first_name":"Addison","last_name":"Lawther","email":"alawther3@walmart.com","gender":"Male","company":"Yoveo"},
  {"first_name":"Anya","last_name":"Franzman","email":"afranzman4@bravesites.com","gender":"Female","company":"Twitterbeat"}];
  state = 'active';
  input = {
    'width': '360px',
    'background':'#fff',
    'box-shadow':'0 6px 10px 0 rgba(0,0,0,.1)',
    'border':'0',
    'outline':'0',
    'padding': '22px 18px'
  };

  nom = '';
  prenom = '';
  mail = '';
  genre = '';
  compagnie = '';

  ajouterContact (value: any) {
    this.contacts.unshift ({
      first_name: value.prenom,
      last_name: value.nom,
      email: value.mail,
      gender: value.genre,
      company: value.compagnie
    });
    this.nom = '';
    this.prenom = '';
    this.mail = '';
    this.genre = '';
    this.compagnie = '';
    this.state = 'active';

  }
  constructor() { }

  ngOnInit(): void {
  }

}
