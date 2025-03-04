import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { ForfarmersComponent } from './components/forfarmers/forfarmers.component';
import { ForbusinessesComponent } from './components/forbusinesses/forbusinesses.component';
import { FarmersurveyComponent } from './components/farmersurvey/farmersurvey.component';
import { BusinessQuestionnaireComponent } from './components/business-questionnaire/business-questionnaire.component';
import { FarmerRegistrationComponent } from './components/farmer-registration/farmer-registration.component';
import { BusinessRegistrationComponent } from './components/business-registration/business-registration.component';
import { ChickenFarmingComponent } from './components/chicken-farming/chicken-farming.component';
import { ChickenDetailComponent } from './components/chicken-detail/chicken-detail.component';
import { RetailSurveyComponent } from './components/retail-survey/retail-survey.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'forbusinesses', component: ForbusinessesComponent },
    { path: 'forfarmers', component: ForfarmersComponent },
    { path: 'farmersurvey', component: FarmersurveyComponent },
    { path: 'businesssurvey', component: BusinessQuestionnaireComponent },
    { path: 'farmerregistration', component: FarmerRegistrationComponent },
    { path: 'businessregistration', component: BusinessRegistrationComponent },
    { path: 'chickenfarming', component: ChickenFarmingComponent },
    { path: 'chicken/:id', component: ChickenDetailComponent },
    { path: '', redirectTo: '/chicken/12345678-1234-1234-1234-123456789abc', pathMatch: 'full' }, // default sample route
    { path: 'retailsurvey', component: RetailSurveyComponent },
];