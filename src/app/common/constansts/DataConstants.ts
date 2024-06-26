export class DataConstants{
    public static projectDetails = [
        {
          company: 'Tata Consultency Services | TCS',
          designation: 'System Engineer',
          role: 'Frontend developer (Angular & React)',
          technology: 'Angular',
          fromToDates: '2021 - Present',
          projects: [
            {
              title: 'API Developer Portal and Admin Portal.',
              responsibilities: [
                'Have developed clean, responsive and user friendly user interfaces.',
                "Integrated multiple API's with frontend.",
                'Implemented the state management using NgRx throught out the applications.',
                'Worked with angular material for admin portal.',
                'Have worked and developed the Jasmine unit test cases.',
                'Handled Error Scenerios all well with appropreiate messages on UI',
              ],
              keywords: [
                'Angular',
                'NgRx',
                'RxJs',
                'Rest API',
                'Postman',
                'Authentication',
                'State Management',
                'Unit testing',
                'Jasmine',
                'NginX',
              ],
            },
            {
              title:'Admin Portal for Taxi-Services',
              responsibilities:[
                "It is an admin portal, where users can register by themselves and configure metadata for taxi services.",
                "It will help admins & users to have payout reports and schedule/utilize the products and services.",
                "Designed clean, interactive UI and integrated complex RestFull Apis."
              ],
              keywords: [
                'Angular',
                'RxJs',
                'Rest API',
                'Postman',
                'Unit testing',
                'Jasmine',
                'NginX',
              ],
            },
            {
              title: 'Proxy Generated Tool.',
              responsibilities: [
                'Have developed clean, responsive, and conditional rendering user interfaces.',
                "Integrated MultiPart API's with frontend.",
                "Have handled free data from users for Rest API's.",
              ],
              keywords: [
                'Angular',
                'RxJs',
                'Rest API',
                'Postman',
                'Unit testing',
                'Jasmine',
                'NginX',
              ],
            },
          ],
        },
        // {
        //   company: 'Personal',
        //   designation: 'Java & SpringBoot',
        //   role: 'Backend developer',
        //   technology: 'Java',
        //   fromToDates: '2021 - Present',
        //   projects: [
        //     {
        //       title: 'Moview Review and Notes Full stack Web applications ',
        //       responsibilities: [
        //         'Have developed REST full APIs for Microservices Architecture based application.',
        //         'Integrated Spring Cloud Gateway and Spring Security.',
        //         'Documented with swagger API.',
        //         'Worked with JWT Tokens for AUthentication and Authorization.',
        //         'Have worked and developed with Mongo DB and MySQL Databases for Data handling.',
        //         'Developed API for all User scenarios - Register,Login,Forgot Password, Account Verification Link and Reset Password',
        //         'Handled Error Scenerios all well with appropreiate responses.',
        //       ],
        //       keywords: [
        //         'Java',
        //         'Spring Framework',
        //         'Spring Boot',
        //         'Spring Security',
        //         'API Gateway',
        //         'Discovery Service',
        //         'Microservices',
        //         'Postman',
        //         'JWT Token',
        //       ],
        //     },
            
        //   ],
        // },
      ];

    public static personalProjects =[
      {
        title:'Movie Review Application',
        cardTitle:'Angular + Java Fullstack Application',
        poster:'./assets/projects/my-reviews-page.png',
        info:[
          'It is moview web application, where can upload a movie poster and write reviews and perform CRUD Operations',
          "End to End Authenticated"
        ],
        techs:[
          'Angular','NgRx','Java','SpringBoot', 'Spring Security','Mongo DB' ,'RESTful APIs'
        ]
        
        
      },
      {
        title:'Notes Application',
        cardTitle:'React + Java Fullstack Application',
        poster:'./assets/projects/notes-app/home-dark-theme.png',
        info:[
          'It is Notes taking web application, where user can take a notes and perform CRUD Operation',
          "End to End Authenticated"
        ],
        techs:[
          'React','Redux','Java','SpringBoot', 'Spring Security','Mongo DB','RESTful APIs'
        ]
        
        
      }
    ]
}