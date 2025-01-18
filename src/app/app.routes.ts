import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { ForfarmersComponent } from './components/forfarmers/forfarmers.component';
import { ForbusinessesComponent } from './components/forbusinesses/forbusinesses.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'forbusinesses', component: ForbusinessesComponent },
    { path: 'forfarmers', component: ForfarmersComponent },
];