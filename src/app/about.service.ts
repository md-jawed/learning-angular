import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  getAboutInfo(){
    return 'This About Information came from a Service.';
  }
}
