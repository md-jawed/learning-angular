import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-email-us',
  templateUrl: './email-us.component.html',
  styleUrls: ['../contact-us.component.css']
})
export class EmailUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reasons = ['General Query','Complain','To Buy'];
  model = new Contact('','',0,'');
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

}
