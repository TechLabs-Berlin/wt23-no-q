import { createContext, useState } from "react";
// wtih Context component in React we can pass data through the component 
// tree without having to pass props down manually at every level
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;