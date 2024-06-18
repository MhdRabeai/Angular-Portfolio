import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Todo-App',
      desc: 'FrontEnd web application developed using Angular and Bootstrab',
      gitHubLink: 'https://github.com/MhdRabeai/To-Do-App',
      projectLink: 'https://todoapp-v6o9.onrender.com',
      pictures: ['../../../assets/TodoApp.webp'],
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT],
    },
    {
      id: 1,
      name: 'Auth & verification',
      desc: 'Web application developed using Angular and Bootstrab with Firebase ',
      gitHubLink: 'https://github.com/MhdRabeai/Firebase-Auth-ForgotPass',
      projectLink: 'https://myfirebase-b6bc9.web.app/',
      pictures: ['../../../assets/auth1.webp', '../../../assets/auth2.webp'],
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT],
    },
    {
      id: 2,
      name: 'Contact-Management',
      desc: 'Web application developed using Angular and Bootstrab with Json-Server',
      gitHubLink: 'https://github.com/MhdRabeai/contact-management',
      projectLink: 'https://contact-management-xlwm.onrender.com/',
      pictures: [
        '../../../assets/contact-managment5.webp',
        '../../../assets/contact-managment1.webp',
        '../../../assets/contact-managment2.webp',
        '../../../assets/contact-managment3.webp',
        '../../../assets/contact-managment4.webp',
      ],
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT],
    },
    {
      id: 3,
      name: 'News-App',
      desc: 'FrontEnd web app developed using Angular and Angular-Material with fake Api',
      gitHubLink: 'https://github.com/MhdRabeai/NewsApp',
      projectLink: 'https://github.com/MhdRabeai/NewsApp',
      pictures: ['../../../assets/newsApp.webp'],
      tags: [Tag.ANGULAR, Tag.ANGULARMATERIAL, Tag.TYPESCRIPT],
    },
    {
      id: 4,
      name: 'Currency-rate',
      desc: 'FrontEnd web app developed using Angular and Angular-Material with fake Api',
      gitHubLink: 'https://github.com/MhdRabeai/Cryptocurrency-price',
      projectLink: 'https://angular-deploy-app-zjic.onrender.com/',
      pictures: [
        '../../../assets/coin1.webp',
        '../../../assets/coin2.webp',
        '../../../assets/coin3.webp',
      ],
      tags: [Tag.ANGULAR, Tag.ANGULARMATERIAL, Tag.TYPESCRIPT],
    },
    {
      id: 5,
      name: 'Gym-Regitration.',
      desc: 'FrontEnd web app developed using Angular and Angular-Material with Json-server',
      gitHubLink: 'https://github.com/MhdRabeai/Gym-Regitration',
      projectLink: 'https://gym-regitration.onrender.com/',
      pictures: ['../../../assets/gym1.webp', '../../../assets/gym2.webp'],
      tags: [Tag.ANGULAR, Tag.ANGULARMATERIAL, Tag.TYPESCRIPT],
    },
    {
      id: 6,
      name: 'Market',
      desc: 'Web application developed using Angular and Bootstrab with Firebase',
      gitHubLink: 'https://github.com/MhdRabeai/Market',
      projectLink: 'https://market-fc77e.web.app',
      pictures: [
        '../../../assets/market1.webp',
        '../../../assets/market2.webp',
      ],
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT],
    },
    {
      id: 7,
      name: 'Employees-Manag',
      desc: 'Web application developed using Angular and Angular-Material with Json-Server',
      gitHubLink: 'https://github.com/MhdRabeai/empProject',
      projectLink: 'https://empproject-0vbj.onrender.com/',
      pictures: ['../../../assets/emp1.webp', '../../../assets/emp2.webp'],
      tags: [Tag.ANGULAR, Tag.ANGULARMATERIAL, Tag.TYPESCRIPT],
    },
    {
      id: 8,
      name: 'Jon-Portfolio',
      desc: 'A responsive template that include some animations created using HTML, CSS, BootStrap ,JavaScript and Jquery',
      gitHubLink: 'https://github.com/MhdRabeai/Jon-Portfolio',
      projectLink: 'https://mhdrabeai.github.io/Jon-Portfolio/',
      pictures: [
        '../../../assets/Portfolio1.webp',
        '../../../assets/Portfolio2.webp',
      ],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 9,
      name: 'Elzero',
      desc: 'A responsive template created using only HTML,CSS,and JavaScript ',
      gitHubLink: 'https://github.com/MhdRabeai/Elzero-',
      projectLink: 'https://mhdrabeai.github.io/Elzero-/',
      pictures: [
        '../../../assets/elzero-1.webp',
        '../../../assets/elzero-2.webp',
        '../../../assets/elzero-3.webp',
      ],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 10,
      name: 'Upwork',
      desc: 'A responsive template that include some animations created using HTML, CSS, BootStrap ,JavaScript and Jquery',
      gitHubLink: 'https://github.com/MhdRabeai/Upwork',
      projectLink: 'https://mhdrabeai.github.io/Upwork/',
      pictures: [
        '../../../assets/upwork1.webp',
        '../../../assets/upwork2.webp',
      ],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 11,
      name: 'Spicial-Design',
      desc: 'A responsive template created using only HTML,CSS,and JavaScript ',
      gitHubLink: 'https://github.com/MhdRabeai/Spicial-Design',
      projectLink: 'https://mhdrabeai.github.io/Spicial-Design/',
      pictures: [
        '../../../assets/spicial1.webp',
        '../../../assets/spicial2.webp',
        '../../../assets/spicial3.webp',
        '../../../assets/spicial4.webp',
      ],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 12,
      name: 'Prixima',
      desc: 'A responsive template that include some animations created using HTML, CSS, BootStrap ,JavaScript and Jquery',
      gitHubLink: 'https://github.com/MhdRabeai/Prixima',
      projectLink: 'https://mhdrabeai.github.io/Prixima/',
      pictures: [
        '../../../assets/prixima1.webp',
        '../../../assets/prixima2.webp',
        '../../../assets/prixima3.webp',
      ],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 13,
      name: 'Ethan-Hunt',
      desc: 'A responsive template that include some animations created using HTML, CSS, BootStrap and Jquery',
      gitHubLink: 'https://github.com/MhdRabeai/Hunt',
      projectLink: 'https://mhdrabeai.github.io/Hunt/',
      pictures: [
        '../../../assets/ethan1.webp',
        '../../../assets/ethan2.webp',
        '../../../assets/ethan3.webp',
      ],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 14,
      name: 'Elixir',
      desc: 'A responsive template that include some animations created using HTML, CSS, BootStrap and Jquery',
      gitHubLink: 'https://github.com/MhdRabeai/Elixir',
      projectLink: 'https://mhdrabeai.github.io/Elixir/',
      pictures: [
        '../../../assets/elixire1.webp',
        '../../../assets/elixire2.webp',
        '../../../assets/elixire3.webp',
        '../../../assets/elixire4.webp',
      ],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 15,
      name: 'EGATOR-DashBord',
      desc: 'A responsive template created using only HTML,CSS,and JavaScript',
      gitHubLink: 'https://github.com/MhdRabeai/EGATOR-DashBord',
      projectLink: 'https://mhdrabeai.github.io/EGATOR-DashBord/',
      pictures: ['../../../assets/egator-dash.webp'],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 16,
      name: 'EGATOR',
      desc: 'A responsive template created using only HTML,CSS,and JavaScript',
      gitHubLink: 'https://github.com/MhdRabeai/EGATOR',
      projectLink: 'https://mhdrabeai.github.io/EGATOR/',
      pictures: [
        '../../../assets/egator1.webp',
        '../../../assets/egator2.webp',
      ],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 17,
      name: 'Elzero-Dashboard',
      desc: 'A responsive template created using only HTML,CSS,and JavaScript',
      gitHubLink: 'https://github.com/MhdRabeai/Elzero-Dashboard',
      projectLink: 'https://mhdrabeai.github.io/Elzero-Dashboard/',
      pictures: [
        '../../../assets/elzero-dash1.webp',
        '../../../assets/elzero-dash2.webp',
        '../../../assets/elzero-dash3.webp',
      ],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
  ];
  constructor() {}
  getProjects() {
    return this.projects;
  }
  getProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);
    if (project === undefined) {
      throw new TypeError('There is no project that matches the id:' + id);
    }
    return project;
  }

  getProjectByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];
    this.projects.forEach((project) => {
      let foundAll = true;
      filterTags.forEach((filterTag) => {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });
      if(foundAll){
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
