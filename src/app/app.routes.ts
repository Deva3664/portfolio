import { Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { Contact } from './contact/contact';
import { Blog } from './blog/blog';
import { Resume } from './resume/resume';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'skills', component: Skills },
  { path: 'contact', component: Contact },
  { path: 'blog', component: Blog },
  { path: 'resume', component: Resume },
  { path: '**', component: NotFound },
];