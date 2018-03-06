const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

//================================signup===========================
export const signup = (payload) =>
    fetch(`${api}/users/signup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
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

