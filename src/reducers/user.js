import { USER_SIGNIN,USER_SIGNUP} from "../actions/useractions";

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
                            "signupmsg":"Sign Up sucessful. Please Login."   
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
                  if(action.user) {
                    console.log("action--->reducer",action.user)
                    return {
                       ...state,
                       "user":{
                                "basic": "harsha",
                                "pinfo" : action.user,
                                "eduinfo" : "harsha",
                                "loggedin" : true,
                                "starred" : "harsha",
                                "activity" : "harsha",
                                "signinmsg":action.msg                                
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

        default :
            return state;

    }
};

export default user;