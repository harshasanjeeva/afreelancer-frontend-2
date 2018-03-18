import { USER_SIGNIN,USER_SIGNUP,PROJECT_DESC,USER_SIGNOUT,PROJECT_BID,MY_PROJECT_DESC,MY_PROJECT_ITEM_DESC} from "../actions/useractions";

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
                                "profile": action.profile                              
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
                              "user":{
                                        "projectIndividualDesc": action.data,
                                        "projectIndividualStatus": action.status,
                                        "state": state,
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


//===================================PROJECT_BID========================
    //  case PROJECT_BID :
    //  console.log("reducer-->action--->PROJECT_BID")
    //           if(action.status) {
    //             console.log("reducer-->action--->PROJECT_BID 2",action.data)
    //             console.log("state---project-->",state)
    //             return {
    //                ...state,
    //                "user":{
    //                      "loggedin" : false
    //                     }
    //             };

    //         }
    //         else {
    //             console.log(action.msg);
    //             return {
    //                ...state,
    //                "user":{                            
    //                         "loggedin" : false,
    //                         "signinmsg" : action.msg
    //                     }
    //             };

    //         }

    //         break;     

    //=========================PROJECT_DESC           
    case MY_PROJECT_DESC :
    console.log("reducer-->action--->PROJECT_DESC")
             if(action.status) {
               console.log("reducer-->action--->PROJECT_DESC 2",action.data)
               console.log("state---project-->",state)
               return {
                  ...state,
                  "user":{
                            "myprojectIndividualDesc": action.data,
                            "myprojectIndividualStatus": action.status,
                            "state": state
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
    // case MY_PROJECT_ITEM_DESC :
    // console.log("reducer-->action--->PROJECT_DESC")
    //          if(action.status) {
    //            console.log("reducer-->action--->PROJECT_DESC 2",action.data)
    //            console.log("state---project-->",state)
    //            return {
    //               ...state,
    //               "user":{
    //                         "myprojectIndividualDescItem": action.data,
    //                         "myprojectIndividualStatusItem": true,
    //                    }
    //            };

    //        }
    //        else {
    //            console.log(action.msg);
    //            return {
    //               ...state,
    //               "user":{                            
    //                        "loggedin" : false,
    //                        "signinmsg" : action.msg
    //                    }
    //            };

    //        }

    //        break;               


        default :
            return state;

    }
};

export default user;