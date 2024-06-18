import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent, HomeComponent, PortfolioComponent, ResumeComponent, ContactComponent, ProjectCardComponent, ProjectModalComponent],
  imports: [CarouselModule.forRoot(),BrowserModule, AppRoutingModule,FormsModule,PaginationModule,ModalModule.forRoot(),CollapseModule.forRoot()],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
