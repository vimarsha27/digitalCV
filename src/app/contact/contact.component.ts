import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

 
  onClick() {
    alert("Message Sent")
  }


  myForm: FormGroup | any;
  name:FormControl | any;
  email:FormControl | any;
  subject: FormControl | any;
  message: FormControl | any;
  
  
  ngOnInit() {
    this.name = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.email = new FormControl('', [Validators.required, Validators.pattern('[0-9a-zA-Z@.]*')]);
    this.subject = new FormControl('', [Validators.required]);
    this.message = new FormControl('', [Validators.required]);
    

    this.myForm = new FormGroup({
      'name':this.name,
      'email':this.email,
      'subject': this.subject,
      'message': this.message
      
      
    });
  }

}
