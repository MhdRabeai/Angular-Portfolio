import { Component, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements AfterContentChecked {
  page!: number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngAfterContentChecked() {}
  // navigate() {
  //   this.router.navigateByUrl(`/prtfolio/${this.page}`);
  // }
}
