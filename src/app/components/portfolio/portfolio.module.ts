import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [PortfolioComponent, ProjectCardComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FormsModule,
    PaginationModule,
  ],
})
export class PortfolioModule {}
