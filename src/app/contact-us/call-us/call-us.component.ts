import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,  } from '@angular/forms';
@Component({
  selector: 'app-call-us',
  templateUrl: './call-us.component.html',
  styleUrls: ['../contact-us.component.css']
})
export class CallUsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  callUsForm = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(4)]],
    phone: ['',[Validators.required, Validators.pattern("[9][0-9]{9}")]],
    reason: ['',[Validators.required]]
  });
  submitted = false;
  reasons = ['General Query','Complain','To Buy'];
  onSubmit(){
    this.submitted = true;
  }
  get name() { return this.callUsForm.get('name'); }

  get phone() { return this.callUsForm.get('phone'); }

  get reason() { return this.callUsForm.get('reason'); }

}
