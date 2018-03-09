import * as API from '../api/UserApi';
import history from '../components/History';

export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNIN = 'USER_SIGNIN';
export const PROJECT_PROPOSAL = 'PROJECT_PROPOSAL';
export const PROJECT_DESC = 'PROJECT_DESC';
export const PROJECT_BID = 'PROJECT_BID';
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




//==================ProjectDesc==============start
export function projectDesc(userDeails) {
	console.log("in projectDesc");
	return function(dispatch){
		try {
		API.projectDesc(userDeails)
		.then((response) => {
			try {
				console.log("in projectDesc 2");
				dispatch(projectDesc2(response))			
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


export function projectDesc2(resData) {
	
	console.log("PROJECT_DESC 2-->actions",resData)
		return {
			type: PROJECT_DESC,
			msg:"ProjectDesc",
			status:true,
			data:resData.projectDesc[0]
		}
		
	}
//=================ProjectDesc================end



//==================ProjectBid==============start
export function projectBid(userDeails) {
	console.log("in projectDesc",userDeails);
	return function(dispatch){
		try {
		API.projectBid(userDeails)
		.then((response) => {
			try {
				console.log("in projectDesc 2");
				dispatch(ProjectBid2(response))			
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


export function ProjectBid2(resData) {
	
	console.log("PROJECT_DESC 2-->actions",resData)
		return {
			type: PROJECT_DESC,
			msg:"ProjectBid",
		}
		
	}
//=================ProjectBid================end