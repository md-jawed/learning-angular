import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  public about!: string;
  constructor(private _aboutService: AboutService) { }

  ngOnInit(): void {
    this.about = this._aboutService.getAboutInfo();
  }

}
