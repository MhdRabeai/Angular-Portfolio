import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  isWorkExperienceOpened:boolean=false;
  isEducationOpened:boolean=false;
  isCertificationsOpened:boolean=false;
  isSkillsOpened:boolean=false;
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Mhd - Resume');
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/CV-M.pdf');
    link.setAttribute('download', 'CV-M.pdf');
    link.click();
    link.remove();
  }
}
