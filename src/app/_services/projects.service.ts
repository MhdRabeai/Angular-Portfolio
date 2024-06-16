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
      pictures: [],
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT],
    },
    {
      id: 1,
      name: 'Auth & verification',
      desc: 'Web application developed using Angular and Bootstrab with Firebase ',
      gitHubLink: 'https://github.com/MhdRabeai/Firebase-Auth-ForgotPass',
      projectLink: 'https://myfirebase-b6bc9.web.app/',
      pictures: [],
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT],
    },
    {
      id: 2,
      name: 'Contact-Management',
      desc: 'Web application developed using Angular and Bootstrab with Json-Server',
      gitHubLink: 'https://github.com/MhdRabeai/contact-management',
      projectLink: 'https://contact-management-xlwm.onrender.com/',
      pictures: [],
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT],
    },
    {
      id: 3,
      name: 'News-App',
      desc: 'FrontEnd web app developed using Angular and Angular-Material with fake Api',
      gitHubLink: 'https://github.com/MhdRabeai/NewsApp',
      projectLink: 'https://github.com/MhdRabeai/NewsApp',
      pictures: [],
      tags: [Tag.ANGULAR, Tag.ANGULARMATERIAL, Tag.TYPESCRIPT],
    },
    {
      id: 4,
      name: 'Currency-rate',
      desc: 'FrontEnd web app developed using Angular and Angular-Material with fake Api',
      gitHubLink: 'https://github.com/MhdRabeai/Cryptocurrency-price',
      projectLink: 'https://angular-deploy-app-zjic.onrender.com/',
      pictures: [],
      tags: [Tag.ANGULAR, Tag.ANGULARMATERIAL, Tag.TYPESCRIPT],
    },
    {
      id: 5,
      name: 'Gym-Regitration.',
      desc: 'FrontEnd web app developed using Angular and Angular-Material with Json-server',
      gitHubLink: 'https://github.com/MhdRabeai/Gym-Regitration',
      projectLink: 'https://gym-regitration.onrender.com/',
      pictures: [],
      tags: [Tag.ANGULAR, Tag.ANGULARMATERIAL, Tag.TYPESCRIPT],
    },
    {
      id: 6,
      name: 'Market',
      desc: 'Web application developed using Angular and Bootstrab with Firebase',
      gitHubLink: 'https://github.com/MhdRabeai/Market',
      projectLink: 'https://market-fc77e.web.app',
      pictures: [],
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT],
    },
    {
      id: 7,
      name: 'Employees-Manag',
      desc: 'Web application developed using Angular and Angular-Material with Json-Server',
      gitHubLink: 'https://github.com/MhdRabeai/empProject',
      projectLink: 'https://empproject-0vbj.onrender.com/',
      pictures: [],
      tags: [Tag.ANGULAR, Tag.ANGULARMATERIAL, Tag.TYPESCRIPT],
    },
    {
      id: 8,
      name: 'Jon-Portfolio',
      desc: 'A responsive template that include some animations created using HTML, CSS, BootStrap ,JavaScript and Jquery.',
      gitHubLink: 'https://github.com/MhdRabeai/Jon-Portfolio',
      projectLink: 'https://mhdrabeai.github.io/Jon-Portfolio/',
      pictures: [],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 9,
      name: 'Elzero',
      desc: 'A responsive template created using only HTML,CSS,and JavaScript ',
      gitHubLink: 'https://github.com/MhdRabeai/Elzero-',
      projectLink: 'https://mhdrabeai.github.io/Elzero-/',
      pictures: [],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 10,
      name: 'Upwork',
      desc: 'A responsive template that include some animations created using HTML, CSS, BootStrap ,JavaScript and Jquery',
      gitHubLink: 'https://github.com/MhdRabeai/Upwork',
      projectLink: 'https://mhdrabeai.github.io/Upwork/',
      pictures: [],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 11,
      name: 'Spicial-Design',
      desc: 'A responsive template created using only HTML,CSS,and JavaScript .',
      gitHubLink: 'https://github.com/MhdRabeai/Spicial-Design',
      projectLink: 'https://mhdrabeai.github.io/Spicial-Design/',
      pictures: [],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 12,
      name: 'Prixima',
      desc: 'A responsive template that include some animations created using HTML, CSS, BootStrap ,JavaScript and Jquery.',
      gitHubLink: 'https://github.com/MhdRabeai/Prixima',
      projectLink: 'https://mhdrabeai.github.io/Prixima/',
      pictures: [],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 13,
      name: 'Ethan-Hunt',
      desc: 'A responsive template that include some animations created using HTML, CSS, BootStrap and Jquery.',
      gitHubLink: 'https://github.com/MhdRabeai/Hunt',
      projectLink: 'https://mhdrabeai.github.io/Hunt/',
      pictures: [],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 14,
      name: 'Elixir',
      desc: 'A responsive template that include some animations created using HTML, CSS, BootStrap and Jquery.',
      gitHubLink: 'https://github.com/MhdRabeai/Elixir',
      projectLink: 'https://mhdrabeai.github.io/Elixir/',
      pictures: [],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 15,
      name: 'EGATOR-DashBord',
      desc: 'A responsive template created using only HTML,CSS,and JavaScript',
      gitHubLink: 'https://github.com/MhdRabeai/EGATOR-DashBord',
      projectLink: 'https://mhdrabeai.github.io/EGATOR-DashBord/',
      pictures: [],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 16,
      name: 'EGATOR',
      desc: 'A responsive template created using only HTML,CSS,and JavaScript',
      gitHubLink: 'https://github.com/MhdRabeai/EGATOR',
      projectLink: 'https://mhdrabeai.github.io/EGATOR/',
      pictures: [],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
    },
    {
      id: 17,
      name: 'Elzero-Dashboard',
      desc: 'A responsive template created using only HTML,CSS,and JavaScript',
      gitHubLink: 'https://github.com/MhdRabeai/Elzero-Dashboard',
      projectLink: 'https://mhdrabeai.github.io/Elzero-Dashboard/',
      pictures: [],
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
}
