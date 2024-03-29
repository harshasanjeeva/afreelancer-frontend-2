import * as API from '../api/UserApi';
import history from '../components/History';


export const ACTIONBAL = 'ACTIONBAL';
export const ACTIONWITHDRAW = 'ACTIONWITHDRAW';
export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNIN = 'USER_SIGNIN';
export const PROJECT_PROPOSAL = 'PROJECT_PROPOSAL';
export const PROJECT_DESC = 'PROJECT_DESC';
export const PROJECT_BID = 'PROJECT_BID';
export const USER_SIGNOUT = 'USER_SIGNOUT';
export const MY_PROJECT_DESC = 'MY_PROJECT_DESC';
export const MY_PROJECT_ITEM_DESC = 'MY_PROJECT_ITEM_DESC';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const UPLOAD_PIC = 'UPLOAD_PIC';
export const HIRE = 'HIRE';
export const PAYMENT = 'PAYMENT'; 
export const GET_PROJECTS = 'GET_PROJECTS';
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
		email: resData.email,
		id: resData.id,
		projectList: resData.projectList,
		profile: resData.profile,
		bids: resData.bids
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
			data:resData,
			status:true,
		}
		
	}
//=================ProjectProposal================end




//==================ProjectDesc==============start
export function projectDesc(userDeails) {
	console.log("in projectDesc",userDeails);
	return function(dispatch){
	//	try {

		dispatch(projectDesc2(userDeails))
			// return{
			// 	type: PROJECT_DESC,
			// 	status:true,
			// 	data: userDeails
			// } 
	
// } catch (error) {
// 	console.log(error)
// }
	}

};


export function projectDesc2(resData) {
	
	console.log("PROJECT_DESC 2-->actions",resData)
		return {
			type: PROJECT_DESC,
			msg:"ProjectDesc",
			status:true,
			data:resData
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
			type: PROJECT_BID,
			msg:resData.message,
			data:resData,
			status:true,
		}
		
	}
//=================ProjectBid================end


//=====================signout=========================start
export function signout() {
	console.log("in signout");
	return function(dispatch){
		try {
		API.signout()
		.then((response) => {
			try {
				console.log("in projectDesc 2");
				dispatch(signout2(response))			
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


export function signout2(resData) {
	
	console.log("USER_SIGNOUT 2-->actions",resData)
		return {
			type: USER_SIGNOUT,
			msg:resData.message,
			status: true
		}
		
	}

//=====================signout=========================end



//==================MyyyyyyyProjectDesc==============start
export function myprojectDesc(userDeails) {
	console.log("in myprojectDesc-->",userDeails);
	return function(dispatch){
		try {
		API.myprojectDesc(userDeails)
		.then((response) => {
			try {
				console.log("in myprojectDesc 2");
				dispatch(myprojectDesc2(response));
				dispatch(myprojectDescItem2(response));		
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


export function myprojectDesc2(resData) {
	
	console.log("PROJECT_DESC 2-->actions",resData)
		return {
			type: MY_PROJECT_DESC,
			msg:"ProjectDesc",
			status:true,
			data:resData
		}
		
	}

//=================MyyyyyyyProjectDesc================end



//==================MyyyyyyyProjectDescItemmmmmm==============start
export function myprojectDescItem2(resData) {
	
	console.log("PROJECT_DESC 2-->actions",resData)
		return {
			type: MY_PROJECT_ITEM_DESC,
			msg:"ProjectDesc",
			status:true,
			data:resData
		}
		
	}

//==================MyyyyyyyProjectDescItem==============end
	

	//==================MyyyyyyyProjectDesc==============start
export function editProfile(userDeails) {
	console.log("in myprojectDesc-->",userDeails);
	return function(dispatch){
		try {
		API.editProfile(userDeails)
		.then((response) => {
			try {
				console.log("in myprojectDesc 2");
				dispatch(editProfile2(response));
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


export function editProfile2(resData) {
	
	console.log("PROJECT_DESC 2-->actions",resData)
		return {
			type: EDIT_PROFILE,
			msg:"Project edit",
			status:true,
			data:resData
		}
		
	}



//==============================================================


//==================MyyyyyyyProjectDesc==============start
export function fileUpload(userDeails) {
	console.log("in myprojectDesc-->",userDeails);
	return function(dispatch){
		try {
		API.fileUpload(userDeails)
		.then((response) => {
			try {
				console.log("in myprojectDesc 2");
				dispatch(fileUpload2(response));
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


export function fileUpload2(resData) {
	
	console.log("PROJECT_DESC 2-->actions",resData)
		return {
			type: UPLOAD_PIC,
			msg:"Project edit",
			status:true,
			data:resData
		}
		
}

//==================================end=========================


//==================Hire==============================start
export function hire(userDeails) {
	console.log("in projectDesc",userDeails);
	return function(dispatch){
		try {
		API.hire(userDeails)
		.then((response) => {
			try {
				console.log("in projectDesc 2");
				dispatch(hire2(response))			
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


export function hire2(resData) {
	
	console.log("Hire in actions2->",resData)
		return {
			type: HIRE,
			msg: resData.message,
			hirestatus: resData.projectstatus
		}
		
	}
//=================ProjectBid================end









//==================payment==============================start
export function payment(userDeails) {
	console.log("in projectDesc",userDeails);
	return function(dispatch){
		try {
		API.payment(userDeails)
		.then((response) => {
			try {
				console.log("in projectDesc 2");
				dispatch(payment2(response))			
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


export function payment2(resData) {
	
	console.log("Hire in actions2->",resData)
		return {
			type: PAYMENT,

		}
		
	}
//==================Payment==============================start








//==================Hire==============================start
export function actionbal(userDeails) {
	console.log("in projectDesc",userDeails);
	return function(dispatch){
		try {
		API.actionbal(userDeails)
		.then((response) => {
			try {
				console.log("in projectDesc 2");
				dispatch(actionbal2(response))			
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


export function actionbal2(resData) {
	
	console.log("Hire in actions2->",resData)
		return {
			type: ACTIONBAL,
			data: resData.amount

		}
		
	}
//=================ProjectBid================end




//==================actionwithdraw==============================start
export function actionwithdraw(userDeails) {
	console.log("in projectDesc",userDeails);
	return function(dispatch){
		try {
		API.actionwithdraw(userDeails)
		.then((response) => {
			try {
				console.log("in projectDesc 2");
				dispatch(actionwithdraw2(response))			
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


export function actionwithdraw2(resData) {
	
	console.log("Hire in actions2->",resData)
		return {
			type: HIRE,

		}
		
	}
//=================ProjectBid================end




//==================get - projects==============================start
export function getProfile(userDeails) {

	return function(dispatch){
		try {
		API.getProfile(userDeails)
		.then((response) => {
			try {
				console.log("in the get projects");
				dispatch(getProfile2(response))			
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


export function getProfile2(resData) {
	
	console.log("Hire in actions2->",resData)
		return {
			type: GET_PROJECTS,
			data:resData,
			status: true,

		}
		
	}
//=================get - projects================end