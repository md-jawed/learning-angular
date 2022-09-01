import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface formControl {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: string;
}
export interface JsonFormField {
  controls: formControl[];
}

@Component({
  selector: 'app-create-json-form',
  templateUrl: './create-json-form.component.html',
  styleUrls: ['./create-json-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateJsonFormComponent implements OnChanges {

  @Input() formFields!: JsonFormField;
  public jsonForm: FormGroup = this.fb.group({});
  constructor( private fb: FormBuilder) {}

  
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['formFields'].firstChange) {
      this.createForm(this.formFields.controls);
      console.log("Change:",this.formFields);
    }
    // console.log(this.formFields);
  }
  createForm(controls: formControl[]){
    for (const control of controls){
      this.jsonForm.addControl(
        control.name,
        this.fb.control('')
      );
      console.log("Create form called.")
    }
    console.log(this.formFields);
  }
  onSubmit(){
    console.log("Form Submitted");
  }

}
