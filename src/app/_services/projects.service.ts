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
      desc: 'FrontEnd web application developed using React',
      gitHubLink: 'https://github.com/MhdRabeai/React-Todo-List',
      projectLink: 'https://react-todo-list-mu-two.vercel.app/',
      pictures: ['../../../assets/todo1.webp', '../../../assets/todo2.webp'],
      tags: [Tag.REACT, Tag.JAVASCRIPT],
      description:
        'It is a simple and effective web application that helps users organize their daily tasks. Allows users to add, edit, and delete tasks, as well as mark completed and incomplete tasks.Technologies used:Core framework: React .Programming language: JavaScript (ES6+) State management: React Hooks(useState, useEffect) . Interface design: CSS Modules or Styled Components .Application structure: The application consists of one main component: Todo Component: Displays a list of tasks, through which a task can be added, deleted, and determined if it has been completed. Data flow and state management: Status Management: useState is used to manage task status, such as current task list and task status (completed or incomplete).LocalStorage: useEffect is used with LocalStorage to save tasks so that they remain saved even after the page is reloaded.Mobility:The application is a single page application, and does not require a complex navigation system.Safety:Since the app is simple and does not require login or sensitive data, there are no major security needs.Performance and improvements:Lazy loading: Not required due to the simplicity of the application.Improved Performance: Using React efficiently ensures fast and smooth performance.((Conclusion)):To Do List app provides a simple and easy-to-use user interface to manage daily tasks, helping users organize their lives effectively.',
    },
    {
      id: 1,
      name: 'React-LandingPage',
      desc: 'FrontEnd web application developed using React',
      gitHubLink: 'https://github.com/MhdRabeai/React-LandingPage',
      projectLink: 'https://react-landing-page-sage.vercel.app/',
      pictures: [
        '../../../assets/react-landing1.webp',
        '../../../assets/react-landing2.webp',
        '../../../assets/react-landing3.webp',
      ],
      tags: [Tag.REACT, Tag.JAVASCRIPT],
      description:
        'It is a simple project to provide information about a specific product or service. This application aims to attract visitors interest and motivate them to take action, such as registering for a newsletter you want or requesting to read information.Core framework: React .Programming language: JavaScript (ES6+). Case management: Reaction hooks. Interface design: CSS modules or designed components Application Application: The application consists of several main components distributed in a reusable and organized manner.Main. components: Header,Hero Section.((Conclusion)):The “Landing Page” application provides a simple and attractive interface that helps in marketing products or services, and works efficiently to attract visitors’ interest and motivate them to take the required actions.',
    },
    {
      id: 2,
      name: 'React-Poster',
      desc: 'FrontEnd web application developed using React and React-Router',
      gitHubLink: 'https://github.com/MhdRabeai/React-First',
      projectLink: 'https://react-first-lake.vercel.app/',
      pictures: [
        '../../../assets/poster1.webp',
        '../../../assets/poster2.webp',
      ],
      tags: [Tag.REACT, Tag.JAVASCRIPT],
      description:
        '“Poster” application is a web platform that enables users to easily create and add text posters. Technologies used: Core framework: React .Programming language: JavaScript (ES6+) .Interface design: CSS Modules or Styled Components .Routing: React Router .Data connection: LocalStorage.Application structure:An application consists of several components and services distributed in a way that promotes reuse and organization.Main components:Header: contains the site logo and a new postModal: contains the form containing the input fields.Post: includes the structure of the post and the name of its writer PostsList: To display all saved posts.Mobility:Page navigation is done using React Router.Routing System: Routes are defined using BrowserRouter and Route from React Router. For example:/: Homepage./create-post: Page for adding a new post.“Poster” application provides an innovative and easy-to-use platform for creating and sharing text notes, enabling users to express their ideas',
    },

    {
      id: 3,
      name: 'React-NewsMag',
      desc: 'FrontEnd web application developed using React and Bootstrap',
      gitHubLink: 'https://github.com/MhdRabeai/React-NewsMag',
      projectLink: 'https://react-news-mag.vercel.app/',
      pictures: ['../../../assets/newsMag.webp'],
      tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.BOOTSTRAP],
      description:
        'The "News App" project is an interactive web application that aims to display news from different sources in an organized and attractive way. Users can browse news by different categories such as politics, sports, technology, and health. The project relies on React to build the interactive user interface and Bootstrap to design the interface in an elegant and responsive way. Technologies used:React: To build the user interface in a componential and interactive manner.Bootstrap: To format and design the interface and make it responsive and elegant.News API: To fetch news from trusted sources and display it in the application. Interactions and dynamics:Fetch News: Use React hooks like useEffect to fetch news from API on page load.Search and Filter: Use JavaScript to enable instant search and filter news based on keywords or categories.View Details: Enable users to click on any story to view its full details on a separate page or pop-up window. Responsiveness and compatibility:Bootstrap: Using Bootstrap to ensure a responsive design that fits different screen sizes and devices.Media Queries: Use additional CSS to ensure improved user experience on small and large screens. ((Conclusion)):The “News App” project is an interactive web application that provides a distinctive user experience for reading news from multiple sources. The app is built using React and Bootstrap to ensure highly interactivity and responsiveness, making it an effective tool to stay updated with the latest news and developments.',
    },
    {
      id: 4,
      name: 'Todo-App',
      desc: 'FrontEnd web application developed using Angular and Bootstrab',
      gitHubLink: 'https://github.com/MhdRabeai/To-Do-App',
      projectLink: 'https://todoapp-v6o9.onrender.com',
      pictures: ['../../../assets/TodoApp.webp'],
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT],
      description:
        'It is a web application that helps users organize their daily tasks. Allows users to add, edit, delete tasks, and mark their status as complete or incomplete. The application is built using Angular to provide a robust and easy-to-scalable architecture, and Bootstrap to design an attractive and responsive user interface.Technologies used:Core framework: Angular .Programming language: TypeScript .Interface design: Bootstrap .Application structure:The application consists of several main components:App Component: The main component that displays a list of tasks with options to edit and delete. Contains a form for adding a new task ,data flow:Local Storage: LocalStorage is used to save tasks so that they remain saved even after the page is reloaded.Mobility:The application is a single page application, and does not require a complex navigation system, as navigation occurs between components within the same page.Safety:Since the app is simple and does not require login or sensitive data, there are no major security needs.Performance and improvements:Lazy Loading: Not required due to the simplicity of the application.Improved performance: Using Angular efficiently ensures fast and smooth performance, and Bootstrap also contributes to improving the responsiveness of the interface. ((Conclusion)):The To Do List application provides a simple and easy-to-use user interface for managing daily tasks, helping users organize their lives effectively. It is characterized by its responsiveness and attractive design thanks to the use of Bootstrap. ',
    },
    {
      id: 5,
      name: 'Auth & verification',
      desc: 'Web application developed using Angular and Bootstrab with Firebase ',
      gitHubLink: 'https://github.com/MhdRabeai/Firebase-Auth-ForgotPass',
      projectLink: 'https://myfirebase-b6bc9.web.app/',
      pictures: ['../../../assets/auth1.webp', '../../../assets/auth2.webp'],
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT],
      description:
        'It is a web platform that aims to provide a login and identity verification system for users. The application relies on Angular to provide a robust and easy-to-scalable architecture, Bootstrap to design an attractive and responsive user interface, and Firebase to provide documentation and storage services.Technologies used:Core framework: Angular .Programming language: TypeScriptInterface design: Bootstrap .Cloud services: Firebase Authentication, Firebase Firestore .Application structure:The application consists of several main components:App Component: The main component that brings together all the other components.Login Component: Displays the login form.Register Component: Displays the registration form for new users.VerifyEmail Component: Displays email verification instructions.ForgotPass Component: Shows a sample of ways to recover a forgotten password.Home Component: Displays user information after successful login. Data flow and state management:State Management: User state is managed using Angular Services to interact with Firebase Authentication and Firestore.Firebase Authentication: Used to verify users identity, login, and registration.Firestore: Used to store user data and verify email.Mobility:Page navigation is done using Angular Router.Routing System: Routes are defined using RouterModule and Routes in Angular. For example:/login: Login page./register: Registration page./verify-email: Email verification page.Forget-pass: Password recovery page./home: Control panel for registered users.Safety:Authentication: Firebase uses Authentication to verify the identity of users.Authorization: Access permissions are controlled using Route Guards in Angular.Performance and improvements:Improved performance: Using Angular and Firebase efficiently ensures fast and smooth performance, and Bootstrap also contributes to improving the responsiveness of the interface.Deployment and maintenance:Deployment: The application can be easily deployed using Firebase Hosting.Maintenance: Application maintenance requires monitoring updates for Angular, Bootstrap, Firebase, and any other dependencies.((Conclusion)): Auth & Verification provides a secure and easy-to-use authentication system that helps protect user data and provides a great user experience using Angular, Bootstrap, and Firebase services.',
    },
    {
      id: 6,
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
      description:
        'It is a contact management system that allows users to add, edit, delete, and view their contacts. The application relies on Angular to provide a robust and easy-to-scalable architecture, Bootstrap to design an attractive and responsive UI, and JSON-Server to provide a mock API for testing and developing the application. Technologies used:Core framework: AngularProgramming language: TypeScriptInterface design: BootstrapDummy database: JSON-ServerApplication structure:Data flow and state management:State Management: Contact state is managed using Angular Services and RxJS to provide synchronous data flow and immediate response to data changes.API Communication: HttpClientModule is used to communicate with JSON-Server to provide CRUD (Create, Read, Update, Delete) operations to contacts.Mobility:Page navigation is done using Angular Router.Routing System: Routes are defined using RouterModule and Routes in Angular. For example:/contacts: Contact list page./contacts/add: Page for adding a new contact./contacts/:id: Details page for a specific contact./contacts/edit/:id: Edit page for an existing contact.Safety:Since the application uses JSON-Server as a mock database for development, security is not the primary focus. Additional security features can be added in later stages if moving to a real database and production environment.Performance and improvements:Improved performance: Using Angular and JSON-Server efficiently ensures fast and smooth performance, and Bootstrap also contributes to improving the responsiveness of the interface.((Conclusion)):"Contact Management" application provides a simple and easy-to-use userinterface for managing contacts, which helps users organize their contact data effectively, and is distinguished by its fast response and attractive design thanks to the use of Bootstrap.',
    },
    {
      id: 7,
      name: 'News-App',
      desc: 'FrontEnd web app developed using Angular and Angular-Material with fake Api',
      gitHubLink: 'https://github.com/MhdRabeai/NewsApp',
      projectLink: 'https://github.com/MhdRabeai/NewsApp',
      pictures: ['../../../assets/newsApp.webp'],
      tags: [Tag.ANGULAR, Tag.ANGULARMATERIAL, Tag.TYPESCRIPT],
      description:
        'It is a web platform that displays news from multiple sources in an organized and attractive manner. It allows users to browse news by categories (e.g. sports, politics, technology, etc.), view news details, as well as search for specific news. The application relies on Angular to provide a robust and easy-to-scalable architecture, Angular Material to design an attractive and responsive UI, and Fake API to provide news data for development purposes.Technologies used:Core framework: Angular . Programming language: TypeScript . Interface design: Angular Material . Fake database: Fake API . Application structure:Data flow and state management:State Management: The state of news and categories is managed using Angular Services and RxJS to provide synchronous data flow and immediate response to data changes.API Communication: HttpClientModule is used to communicate with Fake API to fetch news data.Mobility:Page navigation is done using Angular Router.Routing System: Routes are defined using RouterModule and Routes in Angular. For example:/news: News list page./news/:id: Details page for a specific news item./category/:category: News list page by category./search: Search results page.Safety:Since the app uses Fake API for development purposes, security is not the primary focus. Additional security features can be added in later stages if moving to a real API and production environment.Performance and improvements:Improved Performance: Efficient use of Angular and Angular Material ensures fast and smooth performance, and Material Design contributes to improving user experience.((Conclusion)):“News-App” provides an attractive and easy-to-use user interface to browse and read news from multiple sources, helping users stay updated with the latest news in a convenient and quick way.',
    },
    {
      id: 8,
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
      description:
        'It is a web platform that displays live currency rates and updates related to monetary transfers between different currencies. The application relies on Angular to provide a robust and easy-to-scalable architecture, Angular Material to design an attractive and easy-to-use UI, and Fake API to provide currency data for development purposes.Technologies used:Core framework: Angular .Programming language: TypeScript .Interface design: Angular Material .Fake database: Fake API Data flow and state management:State Management: The state of currencies and conversions is managed using Angular Services and RxJS to provide synchronous data flow and immediate response to data changes.API Communication: HttpClientModule is used to communicate with Fake API to fetch exchange rate data and updates.Mobility:Page navigation is done using Angular Router.Routing System: Routes are defined using RouterModule and Routes in Angular. Safety:Since the app uses Fake API for development purposes, security is not the primary focus. Additional security features can be added in later stages if moving to a real API and production environment.Performance and improvements:Improved Performance: Efficient use of Angular and Angular Material ensures fast and smooth performance, and Material Design contributes to improving user experience.((Conclusion)):The Currency-rate app provides an attractive and easy-to-use user interface to track currency rates and cash transfers, helping users make informed financial decisions based on up-to-date and accurate information.',
    },
    {
      id: 9,
      name: 'Gym-Regitration.',
      desc: 'FrontEnd web app developed using Angular and Angular-Material with Json-server',
      gitHubLink: 'https://github.com/MhdRabeai/Gym-Regitration',
      projectLink: 'https://gym-regitration.onrender.com/',
      pictures: ['../../../assets/gym1.webp', '../../../assets/gym2.webp'],
      tags: [Tag.ANGULAR, Tag.ANGULARMATERIAL, Tag.TYPESCRIPT],
      description:
        'It is a gym member registration system that allows users to register, update personal information, and view their data. Angular is used as the underlying framework to provide robust architecture and easy scalability, Angular Material to provide attractive and responsive UI design, and JSON-Server as a virtual database to store and manage member data and registrations.Technologies used:Core framework: Angular .Programming language: TypeScript . Interface design: Angular Material .Dummy database: JSON-Server . Application structure: The application consists of several basic components and services:App Component: The main component that brings together all components and services.Registration Form Component: Allows users to register at the gym by entering personal information.Member Profile Component: Displays member information including personal details and current subscriptions.Service: Manages CRUD operations for members using HttpClientModule to communicate with JSON-Server.Data flow and state management:State Management: Member state and registrations are managed using Angular Services and RxJS to provide efficient data flow.API Call: The application uses HttpClientModule to interact with JSON-Server to get and update data. Mobility:Page navigation is done using Angular Router:Routing System: Routes are defined in RouterModule and Routes in Angular to specify how to navigate between pages such as registration page, member profile view page, etc.Safety:Since JSON-Server is used as a virtual database, security is not the primary focus. Security features may be added if a real database is used in the future.Performance and improvements:Performance Optimization: Application performance can be effectively improved using Angular Material to improve the final user experience.((Conclusion)):“Gym-Registration” app provides an intuitive and responsive user interface to manage gym member registration, which helps in organizing members personal information and managing subscriptions efficiently.',
    },
    {
      id: 10,
      name: 'Market',
      desc: 'Web application developed using Angular and Bootstrab with Firebase',
      gitHubLink: 'https://github.com/MhdRabeai/Market',
      projectLink: 'https://market-fc77e.web.app',
      pictures: [
        '../../../assets/market1.webp',
        '../../../assets/market2.webp',
      ],
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT],
      description:
        'It is an online commerce platform that allows users to view and purchase products. The application relies on Angular to build the core part of the interface and manage the state, Bootstrap to design and coordinate the interface elements, and Firebase to manage the database and provide hosting and authentication services.Technologies used:Core framework: Angular . Interface design: BootstrapDatabase and hosting: Firebase . Application structure:The application features several main components:App Component: The main component that brings together all the other components.Product List Component: Displays the list of products available for purchase.Product Detail Component: Displays details of a specific product.Cart Component: Manages your shopping cart and purchases.Authentication Service: Manages login and registration processes using Firebase Authentication.Database Service: Interacts with Firebase Realtime Database to manage products and orders. Data flow and state management:State Management: The application and data state is managed using Angular Services and RxJS to ensure smooth data flow.Interfacing with Firebase: The app uses Firebase SDK and Angular Firebase Module to interact with Firebase Realtime Database to get real-time data.Mobility:Page navigation is done using Angular Router:Routing System: Routes are defined in RouterModule and Routes in Angular to specify how to navigate between pages such as product listing page, product detail page, and cart page.Safety:Firebase Authentication: Firebase Authentication is used to ensure the security of logins and registration.Data Security: Firebase Realtime Database ensures that data is transmitted securely over the Internet. ((Conclusion)):The “Market” project is a web application that combines ease of use and attractive design to facilitate online buying and selling, providing a fun and efficient shopping experience for users.',
    },
    {
      id: 11,
      name: 'Employees-Manag',
      desc: 'Web application developed using Angular and Angular-Material with Json-Server',
      gitHubLink: 'https://github.com/MhdRabeai/empProject',
      projectLink: 'https://empproject-0vbj.onrender.com/',
      pictures: ['../../../assets/emp1.webp', '../../../assets/emp2.webp'],
      tags: [Tag.ANGULAR, Tag.ANGULARMATERIAL, Tag.TYPESCRIPT],
      description:
        'It is a management system for managing employee data in companies, where administrators can add, update, and delete employee information conveniently and efficiently. The application is built using Angular to provide a robust and scalable structure, Angular Material to provide an attractive and easy-to-use UI design, and JSON-Server as a mock database to store and manage employee data.Technologies used:Core framework: Angular . Interface design: Angular Material . Dummy database: JSON-Server . Application structure:The application includes several basic components:App Component: The main component that brings together all components and manages users navigation.Employee List Component: Displays a list of all registered employees, with options for editing and deleting.Employee Details Component: Displays specific details for a specific employee including personal information, skills, and experience.Employee Form Component: Allows administrators to add or edit employee information.Employee Service: Manages CRUD (Create, Read, Update, Delete) operations using HttpClientModule to interact with JSON-Server.Data flow and state management:State Management: The application and data state is managed using Angular Services and RxJS to make it easier to control and respond to data changes.Communicating with JSON-Server: The application uses HttpClient to interact with JSON-Server to retrieve and update employee data in an efficient manner. Mobility:Page navigation is done using Angular Router:Routing System: Routes are defined in RouterModule and Routes in Angular to specify how to navigate between pages such as employee list page, employee details page, and employee add/edit form page.Safety:Data Security: The security of employee data is ensured by using JSON-Server as a virtual database, with the possibility of adding additional security features if a real database is used.((Conclusion)):The “Employees-Management” project facilitates effective and user-friendly employee data management, which helps in organizing companies and improving human resource management.',
    },
    {
      id: 12,
      name: 'Jon-Portfolio',
      desc: 'A responsive template that include some animations created using HTML, CSS, BootStrap ,JavaScript and Jquery',
      gitHubLink: 'https://github.com/MhdRabeai/Jon-Portfolio',
      projectLink: 'https://mhdrabeai.github.io/Jon-Portfolio/',
      pictures: [
        '../../../assets/Portfolio1.webp',
        '../../../assets/Portfolio2.webp',
      ],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT, Tag.JQUERY],
      description:
        "It is a personal website that displays information about a person, his work, and his skills. The site is designed using HTML and CSS for basic structure and formatting, Bootstrap to enhance the design and make it responsive, JavaScript to add dynamism and interactivity, and jQuery libraries to add fun effects and animations.Technologies used:HTML: To structure pages and format content.CSS: To format and design elements and beautify the site.Bootstrap: To provide a flexible grid system and ready-made components to speed up the design process.JavaScript: To add interactions and dynamic behaviors to pages.jQuery: To facilitate selection and manipulation of elements and add advanced visual effects. Animation and effects:jQuery Animations: Use jQuery libraries to add effects such as animations and visual effects to make the site more attractive and interactive.Scrolling Effects: Use soft scrolling effects to enhance the user experience when navigating pages.Appear and disappear effects: Use effects to show and hide elements in a smooth and attractive way.Design and responsiveness:Bootstrap Grid System: Use Bootstrap grid system to achieve a responsive design that adapts to various screen sizes.Customize style: Use CSS to customize Bootstrap design and add personal touches.((Conclusion)):The 'Portfolio' project serves as a display of the user work and skills in an attractive and professional way, making it easier for visitors to understand the users capabilities and experiences in an easy and visual way.",
    },
    {
      id: 13,
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
      description:
        'It is a simple website used to attract visitors and motivate them to take a specific action, such as registering, subscribing, or purchasing a specific product. The site is built using HTML and CSS for basic design, Bootstrap to improve layout and responsiveness, and JavaScript to add interactivity and dynamism.Technologies used:HTML: To build the structure of pages and arrange elements.CSS: To format and design elements and make the site elegant and attractive.Bootstrap: To use a flexible grid system and pre-designed components to speed up the design process.JavaScript: To add dynamic interactions such as hover effects, validate entries, and interact with visitors.Interactions and dynamics:Hover Effects: Use JavaScript to add smooth hover effects to improve user experience.Improve interactivity: Add interactive buttons and effects to enhance the user experience and increase the conversion rate. Responsiveness and compatibility:Bootstrap Grid System: Use Bootstrap grid system to ensure the site is compatible with different screen sizes and devices.CSS Media Queries: Use CSS code to improve the user experience on mobile and tablet devices.Deployment and maintenance:Deployment: The project can be published on any hosting service such as GitHub Pages or Netlify for quick access and easy updating.Maintenance: Regular maintenance is required to ensure the site works properly on all devices, browsers, and security updates.((Conclusion)):The "Landing Page" project is an essential element of the online marketing strategy, as it aims to attract visitors and motivate them to interact with the offers and services provided in a direct and effective way.',
    },
    {
      id: 14,
      name: 'Upwork',
      desc: 'A responsive template that include some animations created using HTML, CSS, BootStrap ,JavaScript and Jquery',
      gitHubLink: 'https://github.com/MhdRabeai/Upwork',
      projectLink: 'https://mhdrabeai.github.io/Upwork/',
      pictures: [
        '../../../assets/upwork1.webp',
        '../../../assets/upwork2.webp',
      ],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT, Tag.JQUERY],
      description:
        'It is a personal website that displays information about a person, his work, and his skills. The site is designed using HTML and CSS for basic structure and formatting, Bootstrap to enhance the design and make it responsive, JavaScript to add dynamism and interactivity, and jQuery libraries to add fun effects and animations.Technologies used:HTML: To structure pages and format content.CSS: To format and design elements and beautify the site.Bootstrap: To provide a flexible grid system and ready-made components to speed up the design process.JavaScript: To add interactions and dynamic behaviors to pages.jQuery: To facilitate selection and manipulation of elements and add advanced visual effects. Animation and effects:jQuery Animations: Use jQuery libraries to add effects such as animations and visual effects to make the site more attractive and interactive.Scrolling Effects: Use soft scrolling effects to enhance the user experience when navigating pages.Appear and disappear effects: Use effects to show and hide elements in a smooth and attractive way.Design and responsiveness:Bootstrap Grid System: Use Bootstrap grid system to achieve a responsive design that adapts to various screen sizes.Customize style: Use CSS to customize Bootstrap design and add personal touches.((Conclusion)):The "Upwork" project serves as a display of the user work and skills in an attractive and professional way, making it easier for visitors to understand the users capabilities and experiences in an easy and visual way.',
    },
    {
      id: 15,
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
      description:
        'The “Special-Design” project is a simple and attractive website that aims to attract visitors and motivate them to take a specific action such as registering, subscribing, or purchasing a product. The site relies on HTML to build the structure, CSS to format and design elements, and JavaScript to add interactions and an animated background.Technologies used:HTML: To build the basic structure of pages and define elements.CSS: To format and design elements and make the site elegant and attractive.JavaScript: To add dynamic interactions and animated background. Components of the project:Header Section: includes the site logo and navigation menu.Hero Section: A prominent area displaying a key message and call to action with an animated background to attract attention.Features Section: Displays the benefits of the product or service offered.Contact Us Section: Urges visitors to take the required step such as signing up or registering.Testimonials Section: Displays testimonials or reviews from previous customers.Footer Section: Includes website links and contact information.Interactions and dynamics:Hover Effects: Use JavaScript to add smooth hover effects to improve user experience.Registration forms: Use JavaScript to validate entries and provide a seamless user experience.Animated Background: Using JavaScript to create animated background effects that add an attractive visual touch to the website. Responsiveness and compatibility:CSS Media Queries: Use CSS code to ensure the site is compatible with different screen sizes and devices.JavaScript: To provide dynamic interactions and animated background without affecting the site performance on different devices.((Conclusion)):The "Special-Design" project is an effective tool to attract visitors and motivate them to interact with the offers and services provided in a direct and visual way, while using the animated background to enhance visual appeal and improve the user experience.',
    },
    {
      id: 16,
      name: 'Prixima',
      desc: 'A responsive template that include some animations created using HTML, CSS, BootStrap ,JavaScript and Jquery',
      gitHubLink: 'https://github.com/MhdRabeai/Prixima',
      projectLink: 'https://mhdrabeai.github.io/Prixima/',
      pictures: [
        '../../../assets/prixima1.webp',
        '../../../assets/prixima2.webp',
        '../../../assets/prixima3.webp',
      ],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT, Tag.JQUERY],
      description:
        'The Prixima project is a simple and attractive website that aims to attract visitors and motivate them to take a specific action such as registering, subscribing, or purchasing a product. The site relies on HTML to build structure, CSS to format and design elements, JavaScript to add interactions, and the Owl Carousel library to create interactive and engaging slideshows.Technologies used:HTML: To build the basic structure of pages and define elements.CSS: To format and design elements and make the site elegant and attractive.JavaScript: To add dynamic interactions and improve user experience.Owl Carousel: To create responsive and easy-to-use slideshows. Interactions and dynamics:Hover Effects: Use JavaScript to add smooth hover effects to improve user experience.Registration forms: Use JavaScript to validate entries and provide a seamless user experience.Owl Carousel: Use the Owl Carousel library to create engaging and interactive slideshows.Responsiveness and compatibility:CSS Media Queries: Use CSS code to ensure the site is compatible with different screen sizes and devices.Owl Carousel: Makes the site more interactive and attractive, with a smooth user experience on different devices.Deployment and maintenance:((Conclusion)):The “Prixima” project is an effective tool to attract visitors and motivate them to interact with the offers and services provided in a direct and visual way, while using the Owl Carousel to enhance visual appeal and improve the user experience.',
    },
    {
      id: 17,
      name: 'Ethan-Hunt',
      desc: 'A responsive template that include some animations created using HTML, CSS, BootStrap and Jquery',
      gitHubLink: 'https://github.com/MhdRabeai/Hunt',
      projectLink: 'https://mhdrabeai.github.io/Hunt/',
      pictures: [
        '../../../assets/ethan1.webp',
        '../../../assets/ethan2.webp',
        '../../../assets/ethan3.webp',
      ],
      tags: [Tag.WEPDESIGN, Tag.JQUERY],
      description:
        'It is a personal website that displays information about a person, his work, and his skills. The site is designed using HTML and CSS for basic structure and formatting, Bootstrap to enhance the design and make it responsive, JavaScript to add dynamism and interactivity, and jQuery libraries to add fun effects and animations.Technologies used:HTML: To structure pages and format content.CSS: To format and design elements and beautify the site.Bootstrap: To provide a flexible grid system and ready-made components to speed up the design process.JavaScript: To add interactions and dynamic behaviors to pages.jQuery: To facilitate selection and manipulation of elements and add advanced visual effects. Animation and effects:jQuery Animations: Use jQuery libraries to add effects such as animations and visual effects to make the site more attractive and interactive.Scrolling Effects: Use soft scrolling effects to enhance the user experience when navigating pages.Appear and disappear effects: Use effects to show and hide elements in a smooth and attractive way.Design and responsiveness:Bootstrap Grid System: Use Bootstrap grid system to achieve a responsive design that adapts to various screen sizes.Customize style: Use CSS to customize Bootstrap design and add personal touches.((Conclusion)):The "Ethan-Hunt" project serves as a display of the user work and skills in an attractive and professional way, making it easier for visitors to understand the users capabilities and experiences in an easy and visual way.',
    },
    {
      id: 18,
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
      tags: [Tag.WEPDESIGN, Tag.JQUERY],
      description:
        'It is a personal website that displays information about a person, his work, and his skills. The site is designed using HTML and CSS for basic structure and formatting, Bootstrap to enhance the design and make it responsive, JavaScript to add dynamism and interactivity, and jQuery libraries to add fun effects and animations.Technologies used:HTML: To structure pages and format content.CSS: To format and design elements and beautify the site.Bootstrap: To provide a flexible grid system and ready-made components to speed up the design process.JavaScript: To add interactions and dynamic behaviors to pages.jQuery: To facilitate selection and manipulation of elements and add advanced visual effects. Animation and effects:jQuery Animations: Use jQuery libraries to add effects such as animations and visual effects to make the site more attractive and interactive.Scrolling Effects: Use soft scrolling effects to enhance the user experience when navigating pages.Appear and disappear effects: Use effects to show and hide elements in a smooth and attractive way.Design and responsiveness:Bootstrap Grid System: Use Bootstrap grid system to achieve a responsive design that adapts to various screen sizes.Customize style: Use CSS to customize Bootstrap design and add personal touches.((Conclusion)):The "Elixir" project serves as a display of the user work and skills in an attractive and professional way, making it easier for visitors to understand the users capabilities and experiences in an easy and visual way.',
    },
    {
      id: 19,
      name: 'EGATOR-DashBord',
      desc: 'A responsive template created using only HTML,CSS,and JavaScript',
      gitHubLink: 'https://github.com/MhdRabeai/EGATOR-DashBord',
      projectLink: 'https://mhdrabeai.github.io/EGATOR-DashBord/',
      pictures: ['../../../assets/egator-dash.webp'],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
      description:
        'The "Egetor-Dashboard" project is an interactive web interface designed to display data and information in an organized and easy-to-understand manner. It is typically used to manage and monitor user or system information. The project relies on HTML to build structure, CSS to format and design elements, and JavaScript to add dynamic interactions.Technologies used:HTML: To build the basic structure of pages and define elements such as tables, charts, and forms.CSS: To format and design elements and make the site elegant and attractive, while using techniques such as Flexbox and Grid to ensure responsive design.JavaScript: To add dynamic interactions such as updating data, interactive charts, and navigating between sections. Responsiveness and compatibility:Flexbox and Grid: Use CSS techniques like Flexbox and Grid to ensure the panel is responsive and compatible with different screen sizes and devices.Media Queries: Use CSS code to ensure custom design for small and large screens.((Conclusion)):Project Egetor-Dashboard is a powerful tool for managing and monitoring data and information in an organized and visual way, using HTML, CSS, and JavaScript to ensure interactivity and responsiveness across all devices.',
    },
    {
      id: 20,
      name: 'EGATOR',
      desc: 'A responsive template created using only HTML,CSS,and JavaScript',
      gitHubLink: 'https://github.com/MhdRabeai/EGATOR',
      projectLink: 'https://mhdrabeai.github.io/EGATOR/',
      pictures: [
        '../../../assets/egator1.webp',
        '../../../assets/egator2.webp',
      ],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
      description:
        'The “EGATOR” project is a simple and attractive website that aims to attract visitors and motivate them to take a specific action such as registering, subscribing, or purchasing a product. The site relies on HTML to build the structure, CSS to format and design elements, and JavaScript to add interactions and an animated background.Technologies used:HTML: To build the basic structure of pages and define elements.CSS: To format and design elements and make the site elegant and attractive.JavaScript: To add dynamic interactions and animated background. Components of the project:Header Section: includes the site logo and navigation menu.Hero Section: A prominent area displaying a key message and call to action with an animated background to attract attention.Features Section: Displays the benefits of the product or service offered.Contact Us Section: Urges visitors to take the required step such as signing up or registering.Testimonials Section: Displays testimonials or reviews from previous customers.Footer Section: Includes website links and contact information.Interactions and dynamics:Hover Effects: Use JavaScript to add smooth hover effects to improve user experience.Registration forms: Use JavaScript to validate entries and provide a seamless user experience.Animated Background: Using JavaScript to create animated background effects that add an attractive visual touch to the website. Responsiveness and compatibility:CSS Media Queries: Use CSS code to ensure the site is compatible with different screen sizes and devices.JavaScript: To provide dynamic interactions and animated background without affecting the site performance on different devices.((Conclusion)):The "EGATOR" project is an effective tool to attract visitors and motivate them to interact with the offers and services provided in a direct and visual way, while using the animated background to enhance visual appeal and improve the user experience.',
    },
    {
      id: 21,
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
      description:
        'The "Elzero-Dashboard" project is an interactive web interface designed to display data and information in an organized and easy-to-understand manner. It is typically used to manage and monitor user or system information. The project relies on HTML to build structure, CSS to format and design elements, and JavaScript to add dynamic interactions.Technologies used:HTML: To build the basic structure of pages and define elements such as tables, charts, and forms.CSS: To format and design elements and make the site elegant and attractive, while using techniques such as Flexbox and Grid to ensure responsive design.JavaScript: To add dynamic interactions such as updating data, interactive charts, and navigating between sections. Responsiveness and compatibility:Flexbox and Grid: Use CSS techniques like Flexbox and Grid to ensure the panel is responsive and compatible with different screen sizes and devices.Media Queries: Use CSS code to ensure custom design for small and large screens.((Conclusion)):Project Elzero-Dashboard is a powerful tool for managing and monitoring data and information in an organized and visual way, using HTML, CSS, and JavaScript to ensure interactivity and responsiveness across all devices.',
    },
    {
      id: 22,
      name: 'NokoSocial',
      desc: 'A responsive SocialMedia template created using only HTML,CSS,and JavaScript',
      gitHubLink: 'https://github.com/MhdRabeai/NokoSocial',
      projectLink: 'https://noko-social-three.vercel.app/',
      pictures: ['../../../assets/noko1.webp', '../../../assets/noko2.webp'],
      tags: [Tag.WEPDESIGN, Tag.JAVASCRIPT],
      description:
        'The “NokoSocialMedia” project is an interactive website that aims to provide a platform for users to socialize, share content, and interact with others. The project relies on HTML to build the basic structure, CSS to format and design elements, and JavaScript to add dynamic interactions and improve the user experience.Technologies used:HTML: To build the basic structure of pages and define elements such as posts, comments, and buttons.CSS: To format and style elements, ensuring a responsive and elegant user experience using Flexbox and Grid.JavaScript: To add dynamic interactions and improve user experience. Responsiveness and compatibility:Flexbox and Grid: Use CSS techniques like Flexbox and Grid to ensure the page is responsive and compatible with different screen sizes and devices.Media Queries: Use CSS code to ensure custom design for small and large screens.((Conclusion)):The “NokoSocialMedia” project is an interactive social media platform, designed using HTML, CSS, and JavaScript to ensure interactivity and responsiveness across all devices, while providing a smooth and engaging user experience.',
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
      if (foundAll) {
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
