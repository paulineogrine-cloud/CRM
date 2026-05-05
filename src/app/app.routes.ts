import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ContactList } from './components/contacts/contact-list/contact-list';
import { ContactDetail } from './components/contacts/contact-detail/contact-detail';
import { Favorites } from './components/favorites/favorites';
import { ContactForm } from './components/contacts/contact-form/contact-form';


export const routes: Routes = [
    {path: '', component: Home},
    {path: 'contacts', component: ContactList},
    {path: 'contacts/:id', component: ContactDetail},
    {path:'form', component: ContactForm},
    {path: 'favorites', component: Favorites},
    {path: '**', redirectTo: ''}
];
