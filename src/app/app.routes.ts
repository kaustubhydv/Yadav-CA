import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { EventGallery } from './pages/event-gallery/event-gallery';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: AboutUs },
  { path: 'event-gallery', component: EventGallery },
  { path: '**', redirectTo: '' },
];
