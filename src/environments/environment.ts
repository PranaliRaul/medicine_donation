// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL:'http://localhost:8081/',
  ADMIN_NAVIGATION :[
    {
      path :'/home',
      text:'Home',
      exact_match: true
    },
    {
      path :'/home/addngo',
      text:'Add NGO',
      exact_match: false
    },
    {
      path :'/home/ngo-request',
      text:'NGO Requests',
      exact_match: false
    },
    {
      path :'/home/ngo',
      text:'View NGO\'s Detail',
      exact_match: false
    },
    {
      path :'/home/donor',
      text:'View Donator\'s Detail',
      exact_match: false
    },
    {
      path :'/home/recepient',
      text:'View Recepient\'s Detail',
      exact_match: false
    }
  ],
  NGO_NAVIGATION :[
    {
      path :'',
      text:'',
      exact_match: true
    }
  ],
  
  DONATOR_NAVIGATION :[
    {
      path :'',
      text:'',
      exact_match: true
    }
  ],
  RECEPIENT_NAVIGATION :[
    {
      path :'',
      text:'',
      exact_match: true
    }
  ],
  EXECUTOR_NAVIGATION :[
    {
      path :'',
      text:'',
      exact_match: true
    }
  ],
  LOGIN_NAVIGATION :[
    {
      path :'',
      text:'',
      exact_match: true
    }
  ],






};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
