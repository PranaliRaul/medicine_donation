// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL:'http://localhost:8081/',
  ADMIN_NAVIGATION :[
    {
      path :'/homepage',
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
      path :'/homepage',
      text:'Home',
      exact_match: true
    },
    {
      path :'/ngo/Add-executor',
      text:'Add Executive',
      exact_match: true
    },
    {
      path :'/ngo/medicine-donation',
      text:'Donations',
      exact_match: true
    },
    {
      path :'/ngo/medicine-request',
      text:'Requests',
      exact_match: true
    },
    {
      path :'/ngo/ngo-executive-list',
      text:'Executive',
      exact_match: true
    }
  ],
  
  
  DONATOR_NAVIGATION :[
    {
      path :'/homepage',
      text:'Home',
      exact_match: true
    },
    {
      path :'/donator/donation',
      text:'Donate',
      exact_match: false
    },
    {
      path :'/donator/my-donation',
      text:'My Donations',
      exact_match: false 
    }
  ],


  RECEPIENT_NAVIGATION :[
    {
      path :'/homepage',
      text:'Home',
      exact_match: true
    },
    {
      path :'/Recepient/medicine-request',
      text:'Request',
      exact_match: true
    },
    {
      path :'/Recepient/my-request',
      text:'My Requests',
      exact_match: true
    },
    {
      path :'/Recepient/ngo-medicine-request',
      text:'NGO',
      exact_match: true
    }
  ],


  EXECUTOR_NAVIGATION :[
    {
      path :'/homepage',
      text:'Home',
      exact_match: true
    },
    {
      path :'/executor/assign-donation',
      text:'Assign Donations',
      exact_match: true
    },
    {
      path :'/executor/assign-request',
      text:'Assign Requests',
      exact_match: true
    },
    {
      path :'/executor/transaction',
      text:'Transaction',
      exact_match: true
    },
    {
      path :'/executor/request-transation',
      text:'Request Transaction',
      exact_match: true
    }
  ],


  LOGIN_NAVIGATION :[
    {
      path :'/homepage',
      text:'Home',
      exact_match: true
    },
    {
      path :'/about-us',
      text:'About Us',
      exact_match: true
    },
    {
      path :'/login',
      text:'Login',
      exact_match: true
    },
    {
      path :'/register',
      text:'Register',
      exact_match: true
    }

  ],






};


