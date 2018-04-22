import {ACTIONBAL,GET_PROJECTS,HIRE,PROJECT_PROPOSAL, USER_SIGNIN,USER_SIGNUP,PROJECT_DESC,USER_SIGNOUT,PROJECT_BID,MY_PROJECT_DESC,MY_PROJECT_ITEM_DESC} from "../actions/useractions";

const initialState = {
       
        "user":{
            "signupmsg": "",
            "signinmsg" :"",
            "basic":"harsha"
        }
};

const user = (state = initialState, action) => {


    switch (action.type) {
        case USER_SIGNUP :
        console.log("action",action)
        console.log("state---signup-->",state)
        if(action.user) {
                return {
                   ...state,
                   "user":{
                            // "signupmsg" : "Sign Up sucessful. Please Login.",
                            // "signup":true,
                            "basic": "harsha",
                            "pinfo" : action.user,
                            "eduinfo" : "harsha",
                            "signupafter" : true,
                            "starred" : "harsha",
                            "activity" : "harsha",
                            "signupmsg":action.user.message  
                        }
                };

            }
            else {

                return {
                   ...state,
                   "user":{                            
                            "signupmsg" : action.msg,
                            "signup":false
                        }
                };

            }

           break;   

         case USER_SIGNIN :
         console.log("action--->reducerascas")
                  if(action.username) {
                    console.log("action--->reducer",action)
                    console.log("state----->",state)
                    return {
                       ...state,
                       "user":{
                                "basic": "harsha",
                                "username" : action.username,
                                "email" : action.email,
                                "userid":action.id,
                                "loggedin" : true,
                                "starred" : "harsha",
                                "activity" : "harsha",
                                "signinmsg":action.msg,
                                "projectList":action.projectList,
                                "profile": action.profile,
                                "bidlist": action.bids                              
                            }
                    };

                }
                else {
                    console.log(action.msg);
                    return {
                       ...state,
                       "user":{                            
                                "loggedin" : false,
                                "signinmsg" : action.msg
                            }
                    };

                }

                break;   

     //=========================PROJECT_DESC           
                case PROJECT_DESC :
                console.log("reducer-->action--->PROJECT_DESC")
                         if(action.status) {
                           console.log("reducer-->action--->PROJECT_DESC 2",action.data)
                           console.log("state---project-->",state)
                           return {
                              ...state,
                              "userindiv":{
                                        "projectIndividualDesc": action.data,
                                        "projectIndividualStatus": action.status,
                                      //  "state": state,
                                        "useridindi": state.user.userid
                                   }
                           };
       
                       }
                       else {
                           console.log(action.msg);
                           return {
                              ...state,
                              "user":{                            
                                       "loggedin" : false,
                                       "signinmsg" : action.msg
                                   }
                           };
       
                       }
       
                       break;        
                       
                       PROJECT_PROPOSAL

     //=========================PROJECT_PROPOSAL           
     case PROJECT_PROPOSAL :
     
              if(action.status) {
                console.log("reducer-->action--->PROJECT_DESC 2",action.data)
               
                return {
                   ...state,
                   "projectpost":{
                             "projectpostmessage": action.data.message,
   
                        }
                };

            }
            else {
                console.log(action.msg);
                return {
                   ...state,

                };

            }

            break;  

     //=========================PROJECT_BID===============================================          
     case PROJECT_BID :
     
              if(action.status) {
                console.log("reducer-->action--->PROJECT_DESC 2",action.data)
               
                return {
                   ...state,
                   "projectbid":{
                             "projectbidmessage": action.data.message,
   
                        }
                };

            }
            else {
                console.log(action.msg);
                return {
                   ...state,

                };

            }

            break;  


            
     //=========================GET_PROJECTS===============================================          
     case GET_PROJECTS :
     
              if(action.status) {
                console.log("reducer-->action--->PROJECT_DESC 2",action.data)
               
                return {
                   ...state,
                   "profile":{
                             "profile": action.data.profile,
                        }
                };

            }
            else {
                console.log(action.msg);
                return {
                   ...state,
                };

            }

            break;  
















     //===================================signout========================
     case USER_SIGNOUT :
     console.log("reducer-->action--->PROJECT_DESC")
              if(action.status) {
                console.log("reducer-->action--->PROJECT_DESC 2",action.data)
                console.log("state---project-->",state)
                return {
                   ...state,
                   "user":{
                         "loggedin" : false
                        }
                };

            }
            else {
                console.log(action.msg);
                return {
                   ...state,
                   "user":{                            
                            "loggedin" : false,
                            "signinmsg" : action.msg
                        }
                };

            }

            break;     


//===================================ACTIONBAL========================
     case ACTIONBAL :
              if(action) {
                console.log("reducer-->action--->ACTIONBAL",action.data)
                console.log("state---project-->",state)
                return {
                   ...state,
                   "withdraw":{                            
                    "amount" : action.data,
       
                }
                };

            }
            else {
                console.log(action.msg);
                return {
                   ...state,

                };

            }

            break;     

    //=========================PROJECT_DESC           
    case MY_PROJECT_DESC :
    console.log("reducer-->action--->PROJECT_DESC")
             if(action.status) {
               console.log("reducer-->action--->PROJECT_DESC 2",action.data)
               console.log("state---project-->",state)
               return {
                  ...state,
                  "myuserindiv":{
                            "myprojectIndividualDesc": action.data,
                            "myprojectIndividualStatus": action.status,
                            // "state": state
                       }
               };

           }
           else {
               console.log(action.msg);
               return {
                  ...state,
                  "user":{                            
                           "loggedin" : false,
                           "signinmsg" : action.msg
                       }
               };

           }

           break;     
 
    //=========================HIRE==============================================          
    case HIRE :
             if(action.hirestatus) {
               console.log("store--->HIRE action.data",action.data)
               console.log("state---HIRE state-->",state)
               return {
                  ...state,
                  "projectstatus":{
                            "status": action.hirestatus,
                       }
               };

           }
           else {
               console.log(action.msg);
               return {
                  ...state
               };

           }

           break;               


        default :
            return state;

    }
};

export default user;