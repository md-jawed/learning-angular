import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface formControl {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: string;
  validators: JsonValidators;
}
export interface JsonValidators {
  min?: number;
  max?: number;
  required?: boolean;
}
export interface JsonFormField {
  controls: formControl[];
}

@Component({
  selector: 'app-create-json-form',
  templateUrl: './create-json-form.component.html',
  styleUrls: ['./create-json-form.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateJsonFormComponent implements OnChanges,OnInit {
  public submitted = false;
  @Input() formFields!: JsonFormField;
  public jsonForm: FormGroup = this.fb.group({});
  constructor( private fb: FormBuilder) {}

  ngOnInit(){
    this.createForm(this.formFields.controls);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['formFields'].firstChange) {
    //   this.createForm(this.formFields.controls);
    //   // console.log("Change:",this.formFields.controls);
    // }
    // console.log(this.formFields);
  }
  createForm(controls: formControl[]){
    for (const control of controls){
      const jsonvalid = []
      for(const [key, value] of Object.entries(control.validators)){
        switch(key){
          case 'min':
            jsonvalid.push(Validators.min(value));
            break;
          case 'max':
            jsonvalid.push(Validators.max(value));
            break;
          case 'required':
            jsonvalid.push(Validators.required);
            break;
        }
      }
      this.jsonForm.addControl(
        control.name,
        this.fb.control(control.value,jsonvalid)
      );
      // console.log("Create Form");
    }
    // console.log(this.formFields);
  }
  onSubmit(){
    console.log("Form Submitted");
    this.submitted = true;
  }

}
