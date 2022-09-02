import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { JsonFormField } from '../create-json-form/create-json-form.component';
import * as jsonForm from '../../assets/form-fields.json' ; 
@Component({
  selector: 'app-jsonform',
  templateUrl: './jsonform.component.html',
  styleUrls: ['./jsonform.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JSONFormComponent implements OnInit {
  public available: boolean = false;
  public formData!: JsonFormField;
  constructor(private http: HttpClient) {
    

  }
  ngOnInit() {
    // this.http
    //   .get('../../assets/form-fields.json')

    //   .subscribe((form: any) => {
    //     this.formData = form;
    //     console.log(this.formData);
    //     this.available=true;
    //     console.log(this.available);
    //   });
    // console.log(jsonForm);
    this.formData = jsonForm;
    this.available = true;
    // console.log(this.formData);
  }
  
}
