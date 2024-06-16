import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../_models/project';
import { ProjectsService } from '../../_services/projects.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
projects = {} as Project[];
returnedArray!: any[];
showBoundaryLinks: boolean = true;
showDirectionLinks: boolean = true;
  constructor(private titleService: Title,private projectService:ProjectsService ){
    this.titleService.setTitle("Mhd - Portfolio")
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    // this.returnedArray = this.contentArray.slice(startItem, endItem);
    this.returnedArray = this.projects.slice(startItem, endItem);
 }
  ngOnInit():void{
    this.projects=this.projectService.getProjects();
   this.returnedArray = this.projects.slice(0, 6);
  //  this.returnedArray1 = this.contentArray.slice(0, 5);
  
  }


}
