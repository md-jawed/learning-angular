import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { JsonFormField } from '../create-json-form/create-json-form.component';

@Component({
  selector: 'app-jsonform',
  templateUrl: './jsonform.component.html',
  styleUrls: ['./jsonform.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JSONFormComponent implements OnInit {

  public formData!: JsonFormField;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('../../assets/form-fields.json')

      .subscribe((form: any) => {
        this.formData = form;
        // console.log(this.formData);
      });
  }
}
