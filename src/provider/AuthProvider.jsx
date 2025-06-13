import { createContext, useEffect, useState } from "react";


export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
   

  
    const authInfo={
     
        user,
      
    }
    
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;