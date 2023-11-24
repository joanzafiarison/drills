import React , { useState, createContext }  from "react";


type Auth = {
  token : String
  pseudo : String
  email : String
  weight : Number
  height : Number
  sports : String
}

const authContextInit = {
    token : null,
    pseudo : null,
    email : null,
    weight : null,
    height : null,
    sports : null
  }

export const AuthContext = createContext<Auth>(authContextInit);

export const AuthProvider = ( { children } ) => {
    const [auth, setAuth] = useState<Auth>(authContextInit);
    return(
        <AuthContext.Provider value={{...auth, ...setAuth}}>
          {children}
        </AuthContext.Provider>
    )
}