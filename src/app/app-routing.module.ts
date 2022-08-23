import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CallUsComponent } from './call-us/call-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmailUsComponent } from './email-us/email-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path: 'contact-us', title: 'Contact Us', component: ContactUsComponent,children: [
    {
      path: 'email-us', // child route path
      title: 'Email Us',
      component: EmailUsComponent, // child route component that the router renders
    },
    {
      path: 'call-us',
      title: 'Call Us',
      component: CallUsComponent, // another child route component that the router renders
    },
  ]},
  { path: 'about-us', title:'About Us', component: AboutUsComponent},
  { path: '',   redirectTo: '/about-us', pathMatch: 'full' }, // redirect to `about-us`
  { path: '**',title:'Error', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
