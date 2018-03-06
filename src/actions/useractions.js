import * as API from '../api/UserApi';
import history from '../components/History';

export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNIN = 'USER_SIGNIN';
export const PROJECT_PROPOSAL = 'PROJECT_PROPOSAL';
// export const USER_SIGNOUT = 'USER_SIGNOUT';
// export const USER_PINFO = 'USER_PINFO';
// export const USER_EDUINFO = 'USER_EDUINFO';
// export const USER_INTINFO = 'USER_INTINFO';
// export const USER_STAR_ACT = 'USER_STAR_ACT';



// export function userSignup(userDeails) {
   
//    let msg = isValidInput(userDeails);

//    if(msg === 'OK') {
// 	   	return function(dispatch) {
// 			return  API.signup(userDeails)
// 				    	.then((resData) => {
// 					        dispatch(updateUserData(resData, userDeails));				          
// 		      		});
// 		  	};
//    }
//    else {
//    	return {
// 			type: USER_SIGNUP,
// 			msg: msg
// 		}
//    }

// }

//===================Signin====================start
export function userSignin(userDeails) {
		console.log("in signup");
		return function(dispatch){
			try {
			API.login(userDeails)
			.then((response) => {
				try {
					console.log("in signup");
					dispatch(signin(response))			
			}
			catch(error){
console.log(error)
			}
			});
    } catch (error) {
        console.log(error)
    }
		}

};

export function signin(resData) {
console.log("hiiiiiiiiii",resData)
	return {
		type: USER_SIGNIN,
		msg:resData.message,
		username: resData.username,
		email: resData.email
	}
	
}
//===================Signin====================end

//===================Signup==================start
export function userSignup(userDeails) {
	console.log("in signup");
	return function(dispatch){
		try {
		API.signup(userDeails)
		.then((response) => {
			try {
				console.log("in signup");
				dispatch(signup(response))			
		}
		catch(error){
console.log(error)
		}
		});
} catch (error) {
	console.log(error)
}
	}

};


export function signup(resData) {
	
	console.log("hiiiiiiiiii",resData)
		return {
			type: USER_SIGNUP,
			msg:"Harsha",
			user:resData
		}
		
	}

//===================Signup====================end


//==================ProjectProposal==============start
export function projectProposal(userDeails) {
	console.log("in project proposal");
	return function(dispatch){
		try {
		API.projectProposal(userDeails)
		.then((response) => {
			try {
				console.log("in project proposal 2");
				dispatch(projectProposal2(response))			
		}
		catch(error){
console.log(error)
		}
		});
} catch (error) {
	console.log(error)
}
	}

};


export function projectProposal2(resData) {
	
	console.log("hiiiiiiiiii",resData)
		return {
			type: PROJECT_PROPOSAL,
			msg:"Project",
			user:resData
		}
		
	}
//=================ProjectProposal================end