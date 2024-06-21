import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../_models/project';
import { ProjectsService } from '../../_services/projects.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Tag } from '../../_models/tag';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];
  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  angularmaterial: boolean = false;
  react: boolean = false;
  bootstrap: boolean = false;
  javascript: boolean = false;
  webdesign: boolean = false;
  jquery: boolean = false;
  filtering: boolean = false;
  returnedArray!: any[];
  currentPage: number = 1;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.titleService.setTitle('Mhd - Portfolio');
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.projects.slice(startItem, endItem);
    this.router.navigate([], {
      queryParams: { page: event.page },
    });
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.returnedArray = this.projects.slice(0, 9);
    this.router.navigate([], {
      queryParams: { page: this.currentPage },
    });
  }

  filter() {
    let filterTags: Tag[] = [];
    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.angularmaterial) {
      filterTags.push(Tag.ANGULARMATERIAL);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    if (this.bootstrap) {
      filterTags.push(Tag.BOOTSTRAP);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.webdesign) {
      filterTags.push(Tag.WEPDESIGN);
    }
    if (this.jquery) {
      filterTags.push(Tag.JQUERY);
    }
    if (
      this.typescript ||
      this.angular ||
      this.angularmaterial ||
      this.react ||
      this.bootstrap ||
      this.javascript ||
      this.webdesign ||
      this.jquery
    ) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }
    this.projects = this.projectService.getProjectByFilter(filterTags);
    this.returnedArray = this.projects.slice(0, 6);
  }
  resetFilters() {
    this.angular = false;
    this.angularmaterial = false;
    this.react = false;
    this.bootstrap = false;
    this.javascript = false;
    this.webdesign = false;
    this.typescript = false;
    this.jquery = false;
    this.filtering = false;
    this.projects = this.projectService.getProjects();
    this.returnedArray = this.projects.slice(0, 6);
  }
}
