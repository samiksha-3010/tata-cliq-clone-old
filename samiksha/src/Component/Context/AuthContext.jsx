
// import { createContext, useEffect, useReducer } from "react";

// export const AuthContext = createContext();

// const initalState = { user: null, product: [], studentList: {} };


// const reducer = (state, action) => {
//     console.log(action, "- action here")

  

//     switch (action.type) {
//         case "LOGIN":
//             return { user: action.payload } // re assigning
//         case "LOGOUT":
//             return { user: null } // re assign
//         default:
//             return state;
//     }

// }
// // Higher Order Component 
// export const AuthProvider = ({ children }) => {

//     const [state, dispatch] = useReducer(reducer, initalState);

//     function Login(userData) {
//         dispatch({
//             type: "LOGIN",
//             payload: userData
//         })
//     }
//     function Logout() {
//         localStorage.removeItem("Currrent-user")
//         dispatch({
//             type: "LOGOUT"
//         })
//     }
//     useEffect(() => {
//         const userData = JSON.parse(localStorage.getItem("Currrent-user"))
//         // console.log(userData, "userData")
//         if (userData) {
//             dispatch({
//                 type: "LOGIN",
//                 payload: userData
//             })
//         }
//     }, [])
//     return (
//         <AuthContext.Provider value={{ state, Login, Logout }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

const initialState = { user: null };

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }
        default:
            return state
    }
}


  export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        async function getCurrentUserData() {
            var token = JSON.parse(localStorage.getItem("token"));
            const response = await axios.post("http://localhost:8000/get-current-user", { token });
            if (response.data.success) {
                dispatch({
                    type: "LOGIN",
                    payload: response.data.user
                })
            } else {
                dispatch({
                    type: "LOGOUT"
                });
            }
        }
        getCurrentUserData();
    }, [])

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthContext;

