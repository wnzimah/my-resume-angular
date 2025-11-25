import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'contact', component: ContactComponent },
];
