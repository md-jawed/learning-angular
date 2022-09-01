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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AboutService } from './about.service';
import { NumberFormatDirective } from './registration-form/number-format.directive';
import { JSONFormComponent } from './jsonform/jsonform.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateJsonFormComponent } from './create-json-form/create-json-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParagraphComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    EmailUsComponent,
    CallUsComponent,
    RegistrationFormComponent,
    NumberFormatDirective,
    JSONFormComponent,
    CreateJsonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
