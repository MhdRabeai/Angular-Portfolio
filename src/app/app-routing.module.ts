import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectServicesComponent } from './components/project-services/project-services.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'home' } },

  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animation: 'portfolio' },

    children: [
      {
        path: 'project-card',
        component: ProjectCardComponent,
        data: { animation: 'project-card' },
      },
    ],
  },
  { path: 'resume', component: ResumeComponent, data: { animation: 'resume' } },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact' },
  },
  {
    path: 'services',
    component: ProjectServicesComponent,
    data: { animation: 'services' },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
    data: { animation: 'home' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
