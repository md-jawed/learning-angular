import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './app.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmailUsComponent } from './contact-us/email-us/email-us.component';
import { CallUsComponent } from './contact-us/call-us/call-us.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParagraphComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    EmailUsComponent,
    CallUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
