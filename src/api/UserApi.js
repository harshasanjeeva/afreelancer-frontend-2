const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'
// const api = 'http://ec2-18-188-210-86.us-east-2.compute.amazonaws.com:3001'

const headers = {
    'Accept': 'application/json',

};

//================================signup===========================
export const signup = (payload) =>
    fetch(`${api}/users/signup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {

            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

//=====================================login=======================
export const login = (payload) =>
    fetch(`${api}/users/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("payload");
            console.log(response.username+" "+response.password);
            
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

//=====================================signout=======================
export const signout = (payload) =>
    fetch(`${api}/users/signout`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("payload");
           // console.log(response.username+" "+response.password);
            
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });



//============================projectProsposal=====================
       
export const projectProposal = (payload) =>
    fetch(`${api}/projects/proposal`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("here in api project proposal"); 
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

//============================projectProsposal=====================
       
export const projectDesc = (payload) =>
    fetch(`${api}/projects/desc`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("here in api project proposal"); 
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

//============================projectBID=====================
       
export const projectBid = (payload) =>
    fetch(`${api}/projects/bid`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("here in api project proposal"); 
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });
        


//============================myprojectDesc=====================
       
export const myprojectDesc = (payload) =>
    fetch(`${api}/projects/myprojectDesc`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("here in api myprojectDesc proposal"); 
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

        
//============================editProfile=====================
       
export const editProfile = (payload) =>
    fetch(`${api}/users/editprofile`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("here in api myprojectDesc proposal"); 
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


        

//============================fileUpload=====================
       
export const fileUpload = (payload) =>
    fetch(`${api}/users/fileUpload`, {
        method: 'POST',
        credentials:'include',
        body: payload
    }).then(response => response.json())
        .then(response => {
            console.log("here in api myprojectDesc proposal"); 
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });




//=====================================Hire=======================
export const hire = (payload) =>
    fetch(`${api}/users/hire`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("payload",response);
          //  console.log(response.username+" "+response.password);
            
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });




//=====================================Hire=======================
export const payment = (payload) =>
    fetch(`${api}/users/pay`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("payload",response);
          //  console.log(response.username+" "+response.password);
            
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


//=====================================actionbal=======================
export const actionbal = (payload) =>
    fetch(`${api}/users/freebal`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("payload",response);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });



//=====================================actionwithdraw=======================
export const actionwithdraw = (payload) =>
    fetch(`${api}/users/withdraw`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("payload",response);            
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });




//=====================================get projects=======================
export const getProfile = (payload) =>
    fetch(`${api}/users/getprofile`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("payload",response);            
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });