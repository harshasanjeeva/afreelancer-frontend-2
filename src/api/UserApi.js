const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const signup = (payload) =>
    fetch(`${api}/operations/signup`, {
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


// export const signup = (payload) =>  
//     fetch(`${api}/signup`, {
//         method: 'POST',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         credentials:'include',
//         body: JSON.stringify(payload)
//     }).then((response) => response.json())

//     .then((responseJson) => {
//         return responseJson;
//     })
//         .catch(error => {
//             console.log("Sign up Falied with error : "+error);
//             return error;
// });


// export const signin = (payload) =>  
//     fetch(`${api}/signin`, {
//         method: 'POST',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         credentials:'include',
//         body: JSON.stringify(payload)
//     }).then((response) => response.json())

//     .then((responseJson) => {
//         return responseJson;
//     })
//         .catch(error => {
//             console.log("Sign in Falied with error : "+error);
//             return error;
// });

