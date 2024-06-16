import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'portfolio',component:PortfolioComponent,children:[{path:'project-card:id',component:ProjectCardComponent}]},
  {path:'resume',component:ResumeComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',redirectTo:'/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
